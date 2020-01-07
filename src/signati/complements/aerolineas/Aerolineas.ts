import {
    XmlAerolineas,
    XmlAerolineasAttributes, XmlAerolineasCargoAttributes, XmlAerolineasOtrosCargos,
    XmlAerolineasOtrosCargosAttributes,
} from '../../Interface/Complements/aerolineas.interface';

export class Aerolineas {
    private aerolineas: XmlAerolineas = {} as XmlAerolineas;

    constructor(attributes: XmlAerolineasAttributes) {
        this.aerolineas._attributes = attributes;
    }

    OtrosCargos(attributes: XmlAerolineasOtrosCargosAttributes) {
        if (!this.aerolineas['aerolineas:OtrosCargos']) {
            this.aerolineas['aerolineas:OtrosCargos'] = {} as XmlAerolineasOtrosCargos;
        }
        this.aerolineas['aerolineas:OtrosCargos']._attributes = attributes;
    }

    Cargo(attributes: XmlAerolineasCargoAttributes) {
        if (this.aerolineas['aerolineas:OtrosCargos']) {
            if (!this.aerolineas['aerolineas:OtrosCargos']['aerolineas:Cargo']) {
                this.aerolineas['aerolineas:OtrosCargos']['aerolineas:Cargo'] = [];
            }
            this.aerolineas['aerolineas:OtrosCargos']['aerolineas:Cargo'].push({
                _attributes: attributes,
            });
        } else {
            throw new Error('agrega OtrosCargos primero');
        }
    }

    public async getComplement(): Promise<{ key: string, complment: XmlAerolineas }> {
        return {
            key: 'aerolineas:Aerolineas',
            complment: this.aerolineas,
        };
    }
}
