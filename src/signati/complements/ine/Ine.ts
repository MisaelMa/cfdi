import {
    XmlIne,
    XmlIneAttribute, XmlIneContabilidadAttribute,
    XmlIneEntidad,
    XmlIneEntidadAttribute,
} from '../../Interface/Complements/ine.interface';

export default class Ine {
    public ine: XmlIne = {} as XmlIne;

    constructor(attributes: XmlIneAttribute) {
        this.ine._attributes = attributes;
    }

    async Entidad(attributes: XmlIneEntidadAttribute) {
        if (!this.ine['ine:Entidad']) {
            this.ine['ine:Entidad'] = {} as XmlIneEntidad;
        }
        this.ine['ine:Entidad']._attributes = attributes;
    }

    async Contabilidad(attributes: XmlIneContabilidadAttribute) {
        if (this.ine['ine:Entidad']) {
            this.ine['ine:Entidad']['ine:Contabilidad'] = {
                _attributes: attributes,
            };
        } else {
            throw new Error('agrega entidad primero');
        }
    }

    public async getComplement(): Promise<{ key: string, complment: XmlIne }> {
        return {
            key: 'ine:INE',
            complment: this.ine,
        };
    }
}
