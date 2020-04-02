import { ComplementsReturn } from '../../types';
import {
    XmlVehiculousado,
    XmlVehiculousadoAttributes,
    XmlVIAduaneraAttributes
} from '../../types/Complements/vehiculousado/vehiculousado.com';

export class VehiculoUsado {
    private vehiculo: XmlVehiculousado = {} as XmlVehiculousado;
    private xmlns: string = 'http://www.sat.gob.mx/vehiculousado';
    private xmlnskey: string = 'vehiculousado';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/vehiculousado',
        'http://www.sat.gob.mx/sitio_internet/cfd/vehiculousado/vehiculousado.xsd',
    ];

    constructor(data: XmlVehiculousadoAttributes) {
        this.vehiculo._attributes = data
    }

    public informacionAduanera(data: XmlVIAduaneraAttributes) {
        this.vehiculo['vehiculousado:InformacionAduanera'] = {
            _attributes: data
        }
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'vehiculousado:VehiculoUsado',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.vehiculo,
        };
    }
}
