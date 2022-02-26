import * as crypto from 'crypto';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { Concepts } from './tags/Concepts';
import { Emisor } from './tags/Emisor';
import { Impuestos } from './tags/Impuestos';
import { Receptor } from './tags/Receptor';
import { FileSystem } from './utils/FileSystem';

import { cer, key } from '@signati/openssl';
import { saxon, Transform } from '@signati/saxon';
import { js2xml } from 'xml-js';
import { Relacionado } from './tags/Relacionado';
import { ComlementType, XmlComplements } from './types/Tags/complements.interface';
import { Comprobante, XmlComprobante, XmlComprobanteAttributes, XmlnsLinks } from './types/Tags/comprobante.interface';
import { XmlConcepto } from './types/Tags/concepts.interface';
import { XmlCdfi, XmlVersion } from './types/Tags/xmlCdfi.interface';
import { Structure } from './utils/structure';
import { schema } from './utils/XmlHelp';
import { TagComprobante } from "./types";
import { Options } from './types/types';
export class CFDI {
    private xml: XmlCdfi = {} as XmlCdfi;
    private debug: boolean = false;
    private dev: boolean = false;
    private version: string = '4.0';
    private tags: Structure;
    private tc: TagComprobante = 'cfdi:Comprobante';
    private XMLSchema = 'http://www.w3.org/2001/XMLSchema-instance';
    private cfd = 'http://www.sat.gob.mx/cfd/4';
    private locations = [
        'http://www.sat.gob.mx/cfd/4',
        'http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd',
    ];
    private xslt: string | null = null;
    constructor(attribute: Comprobante, options: Options = { debug: false }) {
        const { debug = false, compact = false, xslt, customTags = {} } = options
        xslt && (this.xslt = xslt);
        this.tags = new Structure(customTags)
        this.tc = this.tags.tagXml<TagComprobante>('cfdi:Comprobante')
        this.debug = debug
        this.restartCfdi();
        this.xmlns(attribute.xmlns || { xsi: this.XMLSchema, cfdi: this.cfd })
        this.addSchemaLocation(attribute.schemaLocation || this.locations);
        attribute.xmlns && delete attribute.xmlns
        attribute.schemaLocation && delete attribute.schemaLocation
        this.xml[this.tc]._attributes = {
            ...this.xml[this.tc]._attributes,
            ...{ Version: this.version },
            ...attribute
        };
    }

    private xmlns(xmlns: XmlnsLinks) {
        if (!xmlns.xsi) {
            this.addXmlns('xsi', this.XMLSchema)
        }
        if (!xmlns.cfdi) {
            this.addXmlns('cfdi', this.cfd)
        }

        for (const xmln in xmlns) {
            this.addXmlns(xmln, xmlns[xmln])
        }
    }
    private addXmlns(xmlnsKey: string, xmlns: string) {
        this.xml[this.tc]._attributes['xmlns:' + xmlnsKey] = xmlns;
    }

    private addSchemaLocation(locations: string[]) {

        if (!this.xml[this.tc]._attributes['xsi:schemaLocation']) {
            this.xml[this.tc]._attributes['xsi:schemaLocation'] = '';
        }
        const schemaLocation = schema(locations);
        this.xml[this.tc]._attributes['xsi:schemaLocation'] += ' ' + schemaLocation;
    }

    public async setAttributesXml(attribute: XmlVersion = { version: '1.0', encoding: 'utf-8' }) {
        this.xml._declaration._attributes = attribute;
    }

    /**@Deprecated**/
    public setAttributesComprobantes(attribute: Comprobante) {
        this.xml[this.tc]._attributes = {
            ...this.xml[this.tc]._attributes,
            ...{ Version: this.version },
            ...attribute
        };

    }

    public async informacionGlobal(payload: { Periodicidad: string, Meses: string, Año: string }) {
        this.xml[this.tc] = Object.assign({
            ['cfdi:InformacionGlobal']: {
                _attributes: payload
            }
        }, this.xml[this.tc]);
    }


    public async relacionados(relationCfdi: Relacionado) {
        this.xml[this.tc] = Object.assign({ ['cfdi:CfdiRelacionados']: relationCfdi.getRelation() }, this.xml[this.tc]);
    }

    public async emisor(emisor: Emisor) {
        this.xml[this.tc]['cfdi:Emisor'] = emisor.emisor;
    }

    public async receptor(receptor: Receptor) {
        this.xml[this.tc]['cfdi:Receptor'] = receptor.receptor;
    }

    public async concepto(concept: Concepts) {
        if (concept.isComplement()) {
            const properties = concept.getComplementProperties();
            this.addXmlns(properties.xmlnskey, properties.xmlns);
            this.addSchemaLocation(properties.schemaLocation)
        }
        if (this.tags.isActive) {
            // @ts-ignore
            if (!this.xml[this.tc]['cfdi:Conceptos']) {
                // @ts-ignore
                this.xml[this.tc]['cfdi:Conceptos'] = {
                    ['cfdi:Concepto']: []
                }
            }
            // @ts-ignore
            this.xml[this.tc]['cfdi:Conceptos']['cfdi:Concepto'].push(concept.getConcept());
        } else {
            this.xml[this.tc]['cfdi:Conceptos']['cfdi:Concepto'].push(concept.getConcept());
        }
    }

    public async impuesto(impuesto: Impuestos) {
        this.xml[this.tc]['cfdi:Impuestos'] = impuesto.impuesto;
    }

    public async complemento(complements: ComlementType) {
        if (!this.xml[this.tc]['cfdi:Complemento']) {
            this.xml[this.tc]['cfdi:Complemento'] = {} as XmlComplements;
        }
        const complement = await complements.getComplement();
        this.addXmlns(complement.xmlnskey, complement.xmlns);
        this.addSchemaLocation(complement.schemaLocation);
        // @ts-ignore
        this.xml[this.tc]!['cfdi:Complemento'][complement.key] = complement.complement;
    }


    /**
     * @param {String} cerpath
     */
    public async certificar(cerpath: string) {
        try {
            const certi = cer.getCer(cerpath) // . await certificate.getCer(cerpath);
            this.xml[this.tc]._attributes.NoCertificado = certi.nocer;
            this.xml[this.tc]._attributes.Certificado = certi.cer;
            return this;
        } catch (e) {
            if (this.debug) {
                console.log({
                    method: 'certificar',
                    error: e
                })
            }
            return e
        }
    }

    /**
     * @param {String} keyfile
     * @param {String} password
     */
    public async sellar(keyfile: string, password: string) {
        const cadena = await this.getCadenaOriginal();
        const sello = await this.getSello(cadena, keyfile, password);
        this.xml[this.tc]._attributes.Sello = sello;

    }

    public async getJsonCdfi(): Promise<XmlCdfi> {
        return await new Promise(async (resolve, reject) => {
            try {
                resolve(this.xml);
            } catch (e) {
                reject({ message: e });
            }
        });

    }

    public async getXmlCdfi(): Promise<string> {
        return await new Promise(async (resolve, reject) => {
            try {
                const options = { compact: true, ignoreComment: true, spaces: 4 };
                const cfdi = await js2xml({ ...this.xml }, options);
                this.restartCfdi();
                resolve(cfdi);
            } catch (e) {
                reject({ message: e });
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
        } as XmlCdfi;
        this.xml[this.tc] = {
            '_attributes': {} as XmlComprobanteAttributes,
            'cfdi:Emisor': {},
            'cfdi:Receptor': {},
        } as XmlComprobante;

        if (this.tags.isActive) {
            // @ts-ignore
            this.xml[this.tc]['cfdi:Concepto'] = [];
        } else {
            this.xml[this.tc]['cfdi:Conceptos'] = {
                'cfdi:Concepto': [],
            } as XmlConcepto
        }

    }

    private async getCadenaOriginal(): Promise<string> {
        if (!this.xslt) {
            throw new Error('¡Ups! Direcction Not Found Extensible Stylesheet Language Transformation')
        }
        return new Promise(async (resolve, reject) => {
            try {
                const fullPath = path.join(os.tmpdir(), `${FileSystem.generateNameTemp()}.xml`);
                const options = { compact: true, ignoreComment: true, spaces: 4 };
                const result = js2xml(this.xml, options);
                fs.writeFileSync(fullPath, result, 'utf8');
                const transform = new Transform();
                const cadena = transform.s(fullPath).xsl(String(this.xslt)).warnings('silent').run();

                if (this.debug) {
                    /*
                    * ||3.3|E|ACACUN-27|2014-07-08T12:16:50|Pago en una sola exhibición|20001000000300022815|16148.04|645.92|MXN|17207.35|I|En efectivo|México|01|asdasd-3234-asdasd-2332-asdas|asdasd-3234-asdasd-2332-asdas|TCM970625MB1|FACTURACION MODERNA SA DE CV|601|XAXX010101000|PUBLICO EN GENERAL|G01|001|1212|2|pieza|Pieza|audifonos|1000|2000|00.0|369.83|002|Tasa|0.16|59.17|369.8aaaa3|002|Tasa|0.16|59.17|369.83|002|Tasa|0.16|59.17|002|59.17|1000|002|Tasa|0.16|59.17||
                    * */
                    console.log(this.xslt);
                    console.log('cadena original =>', cadena)
                }
                fs.unlinkSync(fullPath);
                resolve(cadena);

            } catch (e) {
                console.log({
                    method: 'getCadenaOriginal',
                    error: e
                })
                reject({ method: 'getCadenaOriginal', message: e });
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
                return resolve(sign.sign(keyPem.privateKeyPem, 'base64'));
            } catch (e) {
                if (this.debug) {
                    console.log({
                        method: 'getSello',
                        error: e
                    })
                }
                reject({ message: e });
            }
        });
    }

}
