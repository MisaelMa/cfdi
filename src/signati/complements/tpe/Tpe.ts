import {
    XmlTpe,
    XmlTpeAttributes,
    XmlTpeDTransAttributes
} from '../../types/Complements/turistaPasajeroExtranjero/tpe.com';
import { ComplementsReturn } from '../../types';

export default class Tpe {
    private tpe: XmlTpe = {} as XmlTpe
    private xmlns: string = 'http://www.sat.gob.mx/TuristaPasajeroExtranjero';
    private xmlnskey: string = 'tpe';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/TuristaPasajeroExtranjero',
        'http://www.sat.gob.mx/sitio_internet/cfd/TuristaPasajeroExtranjero/TuristaPasajeroExtranjero.xsd'
    ];

    constructor(data: XmlTpeAttributes) {
        this.tpe = {
            _attributes: data
        } as XmlTpe
    }

    datosTransito(data: XmlTpeDTransAttributes) {
        this.tpe['tpe:datosTransito'] = {
            _attributes: data
        }
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'tpe:TuristaPasajeroExtranjero',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.tpe,
        };
    }
}
