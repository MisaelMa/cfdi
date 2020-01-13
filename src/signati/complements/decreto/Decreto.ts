import {
    XmlDecreto,
    XmlDecretoAttributes, XmlRenovVehicular,
    XmlVehicularAttributes,
} from '../../Interface/Complements/decreto.interface';
import {RenovVehicular} from './RenovVehicular';
import {SustitVehicular} from './SustitVehicular';
import {ComplementsReturn} from '../../Interface';

export class Decreto {
    private decreto: XmlDecreto = {} as XmlDecreto;
    private xmlns: string = 'http://www.sat.gob.mx/renovacionysustitucionvehiculos';
    private xmlnskey: string = 'decreto';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/renovacionysustitucionvehiculos',
        'http://www.sat.gob.mx/sitio_internet/cfd/renovacionysustitucionvehiculos/renovacionysustitucionvehiculos.xsd',
    ];

    constructor(attributes: XmlDecretoAttributes) {
        this.decreto._attributes = attributes;
    }

    async RenovVehicular(renovVehicular: RenovVehicular) {
        if (!this.decreto['decreto:DecretoRenovVehicular']) {
            this.decreto['decreto:DecretoRenovVehicular'] = renovVehicular.getRenoVehicular();
        }
    }

    async SustitVehicular(sustitVehicular: SustitVehicular) {
        if (!this.decreto['decreto:DecretoSustitVehicular']) {
            this.decreto['decreto:DecretoSustitVehicular'] = sustitVehicular.getSustitVehicular();
        }
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'decreto:renovacionysustitucionvehiculos',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.decreto,
        };
    }
}
