import {
    XmlSerparAttributes,
    XmlSerparInAttributes,
    XmlServicioparcial
} from '../../types/Complements/servicioparcial/servicioparcial.com';
import { ComplementsReturn } from '../../types';

export class ServicioParcial {
    private servicio: XmlServicioparcial = {} as XmlServicioparcial
    private xmlns: string = 'http://www.sat.gob.mx/servicioparcialconstruccion';
    private xmlnskey: string = 'servicioparcial';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/servicioparcialconstruccion',
        'http://www.sat.gob.mx/sitio_internet/cfd/servicioparcialconstruccion/servicioparcialconstruccion.xsd'
    ];

    constructor(data: XmlSerparAttributes) {
        this.servicio._attributes = data
    }

    inmueble(data: XmlSerparInAttributes) {
        this.servicio['servicioparcial:Inmueble'] = {
            _attributes: data
        }
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'servicioparcial:parcialesconstruccion',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.servicio,
        };
    }
}
