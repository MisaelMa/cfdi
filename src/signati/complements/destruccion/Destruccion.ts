import {
    XmlDestruccion,
    XmlDestruccionAttributes, XmlInfoAduAttributes,
    XmlVehiculoDestruidoAttributes,
} from '../../Interface/Complements/destruccion.interface';
import {ComplementsReturn} from '../../Interface';

export class Destruccion {
    private destruccion: XmlDestruccion = {} as XmlDestruccion;
    private xmlns: string = 'http://www.sat.gob.mx/certificadodestruccion';
    private xmlnskey: string = 'destruccion';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/certificadodestruccion',
        'http://www.sat.gob.mx/sitio_internet/cfd/certificadodestruccion/certificadodedestruccion.xsd',
    ];

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

    public getComplement(): ComplementsReturn {
        return {
            key: 'destruccion:certificadodedestruccion',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.destruccion,
        };
    }
}
