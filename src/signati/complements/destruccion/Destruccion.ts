import {
    XmlDestruccion,
    XmlDestruccionAttributes, XmlInfoAduAttributes,
    XmlVehiculoDestruidoAttributes,
} from '../../Interface/Complements/destruccion.interface';

export default class Destruccion {
    private destruccion: XmlDestruccion = {} as XmlDestruccion;

    constructor(attributes: XmlDestruccionAttributes) {
        this.destruccion._attributes = attributes;
    }

    InformacionAduanera(attributes: XmlInfoAduAttributes) {
        if (!this.destruccion['destruccion:InformacionAduanera']) {
            this.destruccion['destruccion:InformacionAduanera'] = {
                _attributes: attributes,
            };
        }
    }

    VehiculoDestruido(attributes: XmlVehiculoDestruidoAttributes) {
        if (!this.destruccion['destruccion:VehiculoDestruido']) {
            this.destruccion['destruccion:VehiculoDestruido'] = {
                _attributes: attributes,
            };
        }
    }

    public async getComplement(): Promise<{ key: string, complment: XmlDestruccion }> {
        return {
            key: 'destruccion:certificadodedestruccion',
            complment: this.destruccion,
        };
    }
}
