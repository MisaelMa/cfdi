import {
    XmlAerolineas,
    XmlAerolineasAttributes, XmlAerolineasCargoAttributes, XmlAerolineasOtrosCargos,
    XmlAerolineasOtrosCargosAttributes,
} from '../../types/Complements/aerolineas.interface';
import {ComplementsReturn} from '../../types';

/*
  * https://www.sat.gob.mx/consulta/99314/genera-facturas-electronicas-para-el-manejo-de-datos-de-aerolineas-de-pasajeros
*/
export class Aerolineas {
    private aerolineas: XmlAerolineas = {} as XmlAerolineas;
    private xmlns: string = 'http://www.sat.gob.mx/aerolineas';
    private xmlnskey: string = 'aerolineas';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/aerolineas',
        'http://www.sat.gob.mx/sitio_internet/cfd/aerolineas/aerolineas.xsd'
    ];

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

    public getComplement(): ComplementsReturn {
        return {
            key: 'aerolineas:Aerolineas',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.aerolineas,
        };
    }
}
