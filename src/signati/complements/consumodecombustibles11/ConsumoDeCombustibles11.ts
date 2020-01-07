import {
    XmlCondCom11ConcepConsumoDeCombustibles,
    XmlCondCom11Conceptos, XmlCondCom11Determinado,
    XmlCondComAttributes, XmlCondComConcepConsumDeCombusAttributes, XmlCondComDeterminadoAttributes,
    XmlConsumodecombustibles,
} from '../../Interface/Complements/consumodecombustibles.interface';

export  class ConsumoDeCombustibles11 {
    private CondCom: XmlConsumodecombustibles = {} as XmlConsumodecombustibles;

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

    public async getComplement(): Promise<{ key: string, complment: XmlConsumodecombustibles }> {
        return {
            key: 'consumodecombustibles11:ConsumoDeCombustibles',
            complment: this.CondCom,
        };
    }
}
