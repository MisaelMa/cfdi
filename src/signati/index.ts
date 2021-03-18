import * as crypto from 'crypto';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import {Concepts} from './tags/Concepts';
import {Emisor} from './tags/Emisor';
import {Impuestos} from './tags/Impuestos';
import {Receptor} from './tags/Receptor';
import {FileSystem} from './utils/FileSystem';

import {cer, key} from '@signati/openssl';
import {saxon, Transform} from '@signati/saxon';
import {js2xml} from 'xml-js';
import {Relacionado} from './tags/Relacionado';
import {ComlementType, XmlComplements} from './types/Tags/complements.interface';
import {Comprobante, XmlComprobanteAttributes} from './types/Tags/comprobante.interface';
import {XmlConcepto} from './types/Tags/concepts.interface';
import {XmlCdfi, XmlVersion} from './types/Tags/xmlCdfi.interface';
import {schema} from './utils/XmlHelp';

export class CFDI {
    private xml: XmlCdfi = {} as XmlCdfi;
    private debug: boolean = false;
    private dev: boolean = false;
    private version: string = '3.3';

    constructor(attribute: Comprobante, options = {debug: false}) {
        this.debug = options.debug
        this.restartCfdi();

        this.addXmlns('xsi', 'http://www.w3.org/2001/XMLSchema-instance')
        this.addXmlns('cfdi', 'http://www.sat.gob.mx/cfd/3')

        this.addSchemaLocation([
            'http://www.sat.gob.mx/cfd/3',
            'http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd',
        ])

        this.xml['cfdi:Comprobante']._attributes = {
            ...this.xml['cfdi:Comprobante']._attributes,
            ...{Version: this.version},
            ...attribute
        };
    }

    public async setAttributesXml(attribute: XmlVersion = {version: '1.0', encoding: 'utf-8'}) {
        this.xml._declaration._attributes = attribute;
    }

    /**@Deprecated**/
    public setAttributesComprobantes(attribute: Comprobante) {
        this.xml['cfdi:Comprobante']._attributes = {
            ...this.xml['cfdi:Comprobante']._attributes,
            ...{Version: this.version},
            ...attribute
        };

    }

    public async relacionados(relationCfdi: Relacionado) {
        this.xml['cfdi:Comprobante'] = Object.assign({['cfdi:CfdiRelacionados']: relationCfdi.getRelation()}, this.xml['cfdi:Comprobante']);
    }

    public async emisor(emisor: Emisor) {
        this.xml['cfdi:Comprobante']['cfdi:Emisor'] = emisor.emisor;
    }

    public async receptor(receptor: Receptor) {
        this.xml['cfdi:Comprobante']['cfdi:Receptor'] = receptor.receptor;
    }

    public async concepto(concept: Concepts) {
        if (concept.isComplement()) {
            const properties = concept.getComplementProperties();
            this.addXmlns(properties.xmlnskey, properties.xmlns);
            this.addSchemaLocation(properties.schemaLocation)
        }
        this.xml['cfdi:Comprobante']['cfdi:Conceptos']['cfdi:Concepto'].push(concept.getConcept());
    }

    public async impuesto(impuesto: Impuestos) {
        this.xml['cfdi:Comprobante']['cfdi:Impuestos'] = impuesto.impuesto;
    }

    public async complemento(complements: ComlementType) {
        if (!this.xml['cfdi:Comprobante']['cfdi:Complemento']) {
            this.xml['cfdi:Comprobante']['cfdi:Complemento'] = {} as XmlComplements;
        }
        const complement = await complements.getComplement();
        this.addXmlns(complement.xmlnskey, complement.xmlns);
        this.addSchemaLocation(complement.schemaLocation);
        this.xml['cfdi:Comprobante']!['cfdi:Complemento'][complement.key] = complement.complement;
    }


    /**
     * @param {String} cerpath
     */
    public async certificar(cerpath: string) {
        try {
            const certi = cer.getCer(cerpath) // . await certificate.getCer(cerpath);
            this.xml['cfdi:Comprobante']._attributes.NoCertificado = certi.nocer;
            this.xml['cfdi:Comprobante']._attributes.Certificado = certi.cer;
            return this;
        } catch (e) {
            if (this.debug) {
                console.log({
                    method: 'certificar',
                    error: e
                })
            }
            return e.message
        }
    }

    /**
     * @param {String} keyfile
     * @param {String} password
     */
    public async sellar(keyfile: string, password: string) {
        try {
            // console.log('sellar')
            const cadena = await this.getCadenaOriginal();
            // console.log('caenda', cadena)
            const sello = await this.getSello(cadena, keyfile, password);
            // console.log('sello', sello)
            this.xml['cfdi:Comprobante']._attributes.Sello = sello;
        } catch (e) {
            if (this.debug) {
                console.log({
                    method: 'getCadenaOriginal',
                    error: e
                })
            }
            return e.messageundefined
        }
    }

    public async getJsonCdfi(): Promise<XmlCdfi> {
        return await new Promise(async (resolve, reject) => {
            try {
                resolve(this.xml);
            } catch (e) {
                reject({message: e});
            }
        });

    }

    public async getXmlCdfi(): Promise<string> {
        return await new Promise(async (resolve, reject) => {
            try {
                const options = {compact: true, ignoreComment: true, spaces: 4};
                const cfdi = await js2xml({...this.xml}, options);
                this.restartCfdi();
                resolve(cfdi);
            } catch (e) {
                reject({message: e});
            }
        });

    }

    public async saveFile(file: string, pathSave: string, name: string): Promise<boolean> {
        try {
            const fullPath = `${pathSave}${name}.xml`;
            fs.writeFileSync(fullPath, new Buffer(file, 'base64'), 'utf8');
            return true;
        } catch (e) {
            return false;
        }
    }

    private restartCfdi() {
        this.xml = {
            '_declaration': {
                _attributes: {
                    version: '1.0',
                    encoding: 'utf-8'
                }
            },
            'cfdi:Comprobante': {
                '_attributes': {} as XmlComprobanteAttributes,
                'cfdi:Emisor': {},
                'cfdi:Receptor': {},
                'cfdi:Conceptos': {
                    'cfdi:Concepto': [],
                } as XmlConcepto,
            },
        };

    }

    private async addXmlns(xmlnsKey: string, xmlns: string) {
        this.xml['cfdi:Comprobante']._attributes['xmlns:' + xmlnsKey] = xmlns;
    }

    private async addSchemaLocation(locations: string[]) {

        if (!this.xml['cfdi:Comprobante']._attributes['xsi:schemaLocation']) {
            this.xml['cfdi:Comprobante']._attributes['xsi:schemaLocation'] = '';
        }
        const schemaLocation = schema(locations);
        this.xml['cfdi:Comprobante']._attributes['xsi:schemaLocation'] += ' ' + schemaLocation;
    }

    private async getCadenaOriginal(): Promise<string> {
        return new Promise(async (resolve, reject) => {
            try {
                const fullPath = path.join(os.tmpdir(), `${FileSystem.generateNameTemp()}.xml`);
                const options = {compact: true, ignoreComment: true, spaces: 4};
                const result = js2xml(this.xml, options);
                fs.writeFileSync(fullPath, result, 'utf8');
                const stylesheetDir = path.join(path.resolve(__dirname, '../signati'), 'resources/xslt33/', 'cadenaoriginal_3_3.xslt');
                if (this.debug) {
                    console.log(stylesheetDir);
                }
                const transform = new Transform();
                const cadena  = transform.s(fullPath).xsl(stylesheetDir).warnings('silent').run();
                // const cadena = saxon(stylesheetDir, fullPath);

                if (this.debug) {
                    /*
                    * ||3.3|E|ACACUN-27|2014-07-08T12:16:50|Pago en una sola exhibición|20001000000300022815|16148.04|645.92|MXN|17207.35|I|En efectivo|México|01|asdasd-3234-asdasd-2332-asdas|asdasd-3234-asdasd-2332-asdas|TCM970625MB1|FACTURACION MODERNA SA DE CV|601|XAXX010101000|PUBLICO EN GENERAL|G01|001|1212|2|pieza|Pieza|audifonos|1000|2000|00.0|369.83|002|Tasa|0.16|59.17|369.8aaaa3|002|Tasa|0.16|59.17|369.83|002|Tasa|0.16|59.17|002|59.17|1000|002|Tasa|0.16|59.17||
                    * */
                    console.log('cadena original =>', cadena)
                }
                fs.unlinkSync(fullPath);
                resolve(cadena);

            } catch (e) {
                if (this.debug) {
                    console.log({
                        method: 'getCadenaOriginal',
                        error: e
                    })
                }
                reject({message: e});
            }
        });

    }

    private getSello(cadenaOriginal: string, keyfile: string, password: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                // const key = pem.toString('utf8');
                const keyPem = await key.getKey(keyfile, password);
                // console.log(key);
                const sign = await crypto.createSign('RSA-SHA256');
                await sign.update(cadenaOriginal);
                return resolve(sign.sign(keyPem, 'base64'));
            } catch (e) {
                if (this.debug) {
                    console.log({
                        method: 'getSello',
                        error: e
                    })
                }
                reject({message: e});
            }
        });
    }

}
