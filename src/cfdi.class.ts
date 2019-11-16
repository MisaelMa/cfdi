import { Comprobante } from './Tags/Comprobante';
import { Concepts } from './Tags/Concepts';
import { Impuestos } from './Tags/Impuestos';
import { ComprobanteInterface } from './Interface/Tags/Comprobante.interface';
import { XmlCdfiInterface, XmlVersion } from './Interface/Tags/XmlCdfi.interface';
import { XmlEmisorAttribute } from './Interface/Tags/Emisor.inteface';
import { XmlReceptorAttribute } from './Interface/Tags/Receptor.inteface';
import { XmlConcepto } from './Interface/Tags/Concepts.interface';
import {Record} from "immutable";

type EmisorProps = { rfc: string; nombre: string; regimenFiscal: string; };
type Receptor = { rfc: string; nombre: string; usoCFDI: string; };
const defaultValues: EmisorProps = { rfc: '', nombre: '', regimenFiscal: '' };
const EmisorRecord = Record<EmisorProps>(defaultValues);

export class Emisor extends EmisorRecord {
    setRFC() {
        return this.set('rfc', 'assass')
    }
}
const emisorse = new Emisor();

const newEmisorse = emisorse.setRFC();


export class CFDI {
    private emisor = Record<Emisor>({ nombre: '', regimenFiscal: '', rfc: '' });
    private receptor = Record<Receptor>({ nombre: '', rfc: '', usoCFDI: '' });
    private conceptos = Record<>();

    private xmlNew: any = {
        '_declaration': {
            _attributes: {},
        },
        'cfdi:Comprobante': {
            '_attributes': {},
            'cfdi:Emisor': {},
            'cfdi:Receptor': {},
            'cfdi:Conceptos': <XmlConcepto> {
                'cfdi:Concepto': [],
            },
        },
    };
    public xml: XmlCdfiInterface;

    constructor() {

        const con = new Array();
        this.xml = {
            '_declaration': {
                _attributes: {},
            },
            'cfdi:Comprobante': {
                '_attributes': {},
                'cfdi:Emisor': {},
                'cfdi:Receptor': {},
                'cfdi:Conceptos': <XmlConcepto> {
                    'cfdi:Concepto': con,
                },
            },
        };
    }

    public async setAttributesXml(attribute: XmlVersion) {
        this.xml._declaration._attributes = attribute;
    }

    public async cfdiRelacionados() {
    }

    public async setAttributesComprobantes(attribute: ComprobanteInterface) {
        const comprobante = new Comprobante(attribute);
        this.xml['cfdi:Comprobante']._attributes = await comprobante.getComprobante();
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
    async addComplemento(){
        // this.xml['cfdi:Comprobante'] = complemento;
    }

    public restartcfdi() {
        const con = new Array();
        this.xml = {
            '_declaration': {
                _attributes: {},
            },
            'cfdi:Comprobante': {
                '_attributes': {},
                'cfdi:Emisor': {},
                'cfdi:Receptor': {},
                'cfdi:Conceptos': <XmlConcepto> {
                    'cfdi:Concepto': con,
                },
            },
        };
    }

    // async
    public async certificar(cer: any) {

    }

    // async
    public async xmlSellado(key: any, pass: any) {

    }

    public async getXmlCdfi() {
        return this.xml;
    }
}
