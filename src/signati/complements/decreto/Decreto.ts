import {
    XmlDecreto,
    XmlDecretoAttributes, XmlRenovVehicular,
    XmlVehicularAttributes,
} from '../../Interface/Complements/decreto.interface';
import {RenovVehicular} from './RenovVehicular';
import {SustitVehicular} from './SustitVehicular';

export  class Decreto {
    private decreto: XmlDecreto = {} as XmlDecreto;

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

    public async getComplement(): Promise<{ key: string, complment: XmlDecreto }> {
        return {
            key: 'decreto:renovacionysustitucionvehiculos',
            complment: this.decreto,
        };
    }
}
