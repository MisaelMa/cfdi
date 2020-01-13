import {Comprobante} from './tags/Comprobante';
import {Emisor} from './tags/Emisor';
import {Receptor} from './tags/Receptor';
import {Concepts} from './tags/Concepts';
import {Impuestos} from './tags/Impuestos';
import {FileSystem} from './utils/FileSystem';

import {ComprobanteInterface} from './Interface/Tags/comprobante.interface';
import {XmlCdfiInterface, XmlVersion} from './Interface/Tags/xmlCdfi.interface';
import {XmlConcepto} from './Interface/Tags/concepts.interface';

import {js2xml} from 'xml-js';

import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import * as crypto from 'crypto';
import {certificate} from './utils/Certificate';
import {ComlementType, XmlComplements} from './Interface/Tags/complements.interface';
import {SaxonProc} from './utils/Saxon';
import {Relacionado} from './tags/Relacionado';

export class CFDI {
    public xml: XmlCdfiInterface;

    constructor() {

        const con = new Array();
        this.xml = {
            '_declaration': {
                _attributes: {} as XmlVersion,
            },
            'cfdi:Comprobante': {
                '_attributes': {},
                'cfdi:Emisor': {},
                'cfdi:Receptor': {},
                'cfdi:Conceptos': {
                    'cfdi:Concepto': con,
                } as XmlConcepto,
            },
        };
    }

    public async setAttributesXml(attribute: XmlVersion) {
        this.xml._declaration._attributes = attribute;
    }

    public async setAttributesComprobantes(attribute: ComprobanteInterface) {
        const comprobante = new Comprobante(attribute);
        this.xml['cfdi:Comprobante']._attributes = await comprobante.getComprobante();
    }

    public async cfdiRelacionados(relationCfdi: Relacionado) {
        // this.xml['cfdi:Comprobante']['cfdi:CfdiRelacionados'] = relationCfdi.getRelation();
        this.xml['cfdi:Comprobante'] = Object.assign({['cfdi:CfdiRelacionados']: relationCfdi.getRelation()}, this.xml['cfdi:Comprobante']);
    }

    public async Emisor(emisor: Emisor) {
        this.xml['cfdi:Comprobante']['cfdi:Emisor'] = emisor.emisor;
    }

    public async addReceptor(receptor: Receptor) {
        this.xml['cfdi:Comprobante']['cfdi:Receptor'] = receptor.receptor;
    }

    public async addConcept(concept: Concepts) {
        this.xml['cfdi:Comprobante']['cfdi:Conceptos']['cfdi:Concepto'].push(concept.getConcept());
    }

    public async addImpuestos(impuesto: Impuestos) {
        this.xml['cfdi:Comprobante']['cfdi:Impuestos'] = impuesto.impuesto;
    }

    async addComplemento(complements: ComlementType) {
        if (!this.xml['cfdi:Comprobante']['cfdi:Complemento']) {
            this.xml['cfdi:Comprobante']['cfdi:Complemento'] = {} as XmlComplements;
        }
        const complement = await complements.getComplement();
        this.xml['cfdi:Comprobante']['cfdi:Complemento'][complement.key] = complement.complement;
    }

    public restartcfdi() {
        const con = new Array();
        this.xml = {
            '_declaration': {
                _attributes: {
                    version: '',
                    encoding: '',
                },
            },
            'cfdi:Comprobante': {
                '_attributes': {},
                'cfdi:Emisor': {},
                'cfdi:Receptor': {},
                'cfdi:Conceptos': {
                    'cfdi:Concepto': con,
                } as XmlConcepto,
            },
        };
    }

    public async getCadenaOriginal(): Promise<string> {
        return new Promise(async (resolve, reject) => {

            try {
                const fullPath = path.join(os.tmpdir(), `${FileSystem.generateNameTemp()}.xml`);
                const options = {compact: true, ignoreComment: true, spaces: 4};
                const result = js2xml(this.xml, options);
                fs.writeFileSync(fullPath, result, 'utf8');
                const stylesheetDir = path.join(path.resolve(__dirname, '../signati'), 'resources/xslt33/', 'cadenaoriginal_3_3.xslt');
                // console.log(stylesheetDir);
                const cadena = await SaxonProc(stylesheetDir, fullPath);
                fs.unlinkSync(fullPath);
                resolve(cadena.toString('utf8'));

            } catch (e) {
                reject({message: e});
            }
        });

    }

    /**
     * @param {String} certificado
     */
    async certificar(cerpath: string) {
        const cer = await certificate.getCer(cerpath);
        this.xml['cfdi:Comprobante']._attributes.NoCertificado = cer.nocer;
        this.xml['cfdi:Comprobante']._attributes.Certificado = cer.cer;
    }

    getSello(cadenaOriginal: string, keyfile: string, password: string): Promise<any> {
        // console.log('amir');
        return new Promise(async (resolve, reject) => {
            try {
                // const pem = await fs.readFileSync('/home/amir/Documentos/misproyectos/signati/signati/certificados/LAN7008173R5.key.pem');
                // const key = pem.toString('utf8');
                const key = await certificate.getKey(keyfile, password);
                // console.log(key);
                const sign = await crypto.createSign('RSA-SHA256');
                await sign.update(cadenaOriginal);
                return resolve(sign.sign(key, 'base64'));
            } catch (err) {
                return reject(err);
            }
        });
    }

    public async getXmlCdfi(keyfile: string, password: string) {
        return await new Promise(async (resolve, reject) => {
            try {

                const cadena = await this.getCadenaOriginal();
                // console.log('cadena: ' + cadena);
                const sello = await this.getSello(cadena, keyfile, password);
                // console.log(sello);
                this.xml['cfdi:Comprobante']._attributes.Sello = sello;
                resolve(this.xml);
            } catch (e) {
                reject(e);
            }

        });

    }
}
