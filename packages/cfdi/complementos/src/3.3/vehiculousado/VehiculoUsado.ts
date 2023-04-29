import {
  XmlVIAduaneraAttributes,
  XmlVehiculousado,
  XmlVehiculousadoAttributes,
} from '../../types/complements/vehiculousado/vehiculousado.com';

import { ComplementsReturn } from '../../types';

/**
 *
 */
export class VehiculoUsado {
  private vehiculo: XmlVehiculousado = {} as XmlVehiculousado;

  private xmlns = 'http://www.sat.gob.mx/vehiculousado';

  private xmlnskey = 'vehiculousado';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/vehiculousado',
    'http://www.sat.gob.mx/sitio_internet/cfd/vehiculousado/vehiculousado.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlVehiculousadoAttributes
   */
  constructor(data: XmlVehiculousadoAttributes) {
    this.vehiculo._attributes = data;
  }

  /**
   *informacionAduanera
   *
   * @param data
   * XmlVIAduaneraAttributes
   */
  public informacionAduanera(data: XmlVIAduaneraAttributes): void {
    this.vehiculo['vehiculousado:InformacionAduanera'] = {
      _attributes: data,
    };
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.vehiculo,
      key: 'vehiculousado:VehiculoUsado',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
