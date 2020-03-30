import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import * as crypto from 'crypto';

import {Comprobante} from './tags/Comprobante';
import {Emisor} from './tags/Emisor';
import {Receptor} from './tags/Receptor';
import {Concepts} from './tags/Concepts';
import {Impuestos} from './tags/Impuestos';
import {FileSystem} from './utils/FileSystem';

import {ComprobanteInterface} from './types/Tags/comprobante.interface';
import {XmlCdfi, XmlVersion} from './types/Tags/xmlCdfi.interface';
import {XmlConcepto} from './types/Tags/concepts.interface';
import {ComlementType, XmlComplements} from './types/Tags/complements.interface';
import {Relacionado} from './tags/Relacionado';
import {schema} from './utils/XmlHelp';
import {js2xml} from 'xml-js';
import {cer, key} from '@signati/openssl';
import {saxon} from '@signati/saxon';

export class CFDI {
    private xml: XmlCdfi = {} as XmlCdfi;
    private debug: boolean = false;
    private deve: boolean = false;

    constructor() {
        this.restartCfdi();
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
                '_attributes': {},
                'cfdi:Emisor': {},
                'cfdi:Receptor': {},
                'cfdi:Conceptos': {
                    'cfdi:Concepto': [],
                } as XmlConcepto,
            },
        };
    }

    public async setAttributesXml(attribute: XmlVersion = {version: '1.0', encoding: 'utf-8'}) {
        this.xml._declaration._attributes = attribute;
    }

    public async setAttributesComprobantes(attribute: ComprobanteInterface) {
        const comprobante = new Comprobante(attribute);
        this.xml['cfdi:Comprobante']._attributes = await comprobante.getComprobante();
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

    public async complemento(complements: ComlementType) {
        if (!this.xml['cfdi:Comprobante']['cfdi:Complemento']) {
            this.xml['cfdi:Comprobante']['cfdi:Complemento'] = {} as XmlComplements;
        }
        const complement = await complements.getComplement();
        this.addXmlns(complement.xmlnskey, complement.xmlns);
        this.addSchemaLocation(complement.schemaLocation);
        this.xml['cfdi:Comprobante']['cfdi:Complemento'][complement.key] = complement.complement;
    }


    /**
     * @param {String} cerpath
     */
    public async certificar(cerpath: string) {
        try {
            const certi = cer.getCer(cerpath) //. await certificate.getCer(cerpath);
            this.xml['cfdi:Comprobante']._attributes.NoCertificado = certi.nocer;
            this.xml['cfdi:Comprobante']._attributes.Certificado = certi.cer;
            return this;
        } catch (e) {
            return e.message
        }
    }

    /**
     * @param {String} keyfile
     * @param {String} password
     */
    public async sellar(keyfile: string, password: string) {
        try {
            const cadena = await this.getCadenaOriginal();
            const sello = await this.getSello(cadena, keyfile, password);
            this.xml['cfdi:Comprobante']._attributes.Sello = sello;
        } catch (e) {
            return e.messageundefined
        }
    }

    private async getCadenaOriginal(): Promise<string> {
        return new Promise(async (resolve, reject) => {
            try {
                const fullPath = path.join(os.tmpdir(), `${FileSystem.generateNameTemp()}.xml`);
                const options = {compact: true, ignoreComment: true, spaces: 4};
                const result = js2xml(this.xml, options);
                fs.writeFileSync(fullPath, result, 'utf8');
                const stylesheetDir = path.join(path.resolve(__dirname, '../signati'), 'resources/xslt33/', 'cadenaoriginal_3_3.xslt');
                // console.log(stylesheetDir);
                const cadena =  saxon(stylesheetDir, fullPath);
                console.log(cadena)
                fs.unlinkSync(fullPath);
                resolve(cadena);

            } catch (e) {
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
                reject({message: e});
            }
        });
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
}
