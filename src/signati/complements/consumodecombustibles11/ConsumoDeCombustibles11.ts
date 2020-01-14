import {
    XmlCondCom11ConcepConsumoDeCombustibles,
    XmlCondCom11Conceptos, XmlCondCom11Determinado,
    XmlCondComAttributes, XmlCondComConcepConsumDeCombusAttributes, XmlCondComDeterminadoAttributes,
    XmlConsumodecombustibles,
} from '../../Interface/Complements/consumodecombustibles.interface';
import {ComplementsReturn} from '../../Interface';

/*
*https://www.sat.gob.mx/consulta/41426/genera-facturas-electronicas-con-informacion-del-consumo-de-combustible-con-monedero-electronico
*/
export class ConsumoDeCombustibles11 {
    private CondCom: XmlConsumodecombustibles = {} as XmlConsumodecombustibles;
    private xmlns: string = 'http://www.sat.gob.mx/ConsumoDeCombustibles11';
    private xmlnskey: string = 'consumodecombustibles11';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/ConsumoDeCombustibles11',
        'http://www.sat.gob.mx/sitio_internet/cfd/ConsumoDeCombustibles/consumodeCombustibles11.xsd',
    ];


    constructor(attributes: XmlCondComAttributes) {
        this.CondCom._attributes = attributes;
    }

    Concepto(concepto: XmlCondComConcepConsumDeCombusAttributes, determinados?: XmlCondComDeterminadoAttributes[]) {
        if (!this.CondCom['consumodecombustibles11:Conceptos']) {
            this.CondCom['consumodecombustibles11:Conceptos'] = {
                'consumodecombustibles11:ConceptoConsumoDeCombustibles': [],
            } as XmlCondCom11Conceptos;
        }
        const concept: XmlCondCom11ConcepConsumoDeCombustibles = {
            _attributes: concepto,
        };
        if (determinados && determinados.length > 0) {
            if (!concept['consumodecombustibles11:Determinados']) {
                concept['consumodecombustibles11:Determinados'] = {
                    'consumodecombustibles11:Determinado': [],
                };
            }
            for (const deter of determinados) {
                concept['consumodecombustibles11:Determinados']['consumodecombustibles11:Determinado'].push({_attributes: deter});
            }
        }
        this.CondCom['consumodecombustibles11:Conceptos']['consumodecombustibles11:ConceptoConsumoDeCombustibles'].push(concept);
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'consumodecombustibles11:ConsumoDeCombustibles',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.CondCom,
        };
    }
}
