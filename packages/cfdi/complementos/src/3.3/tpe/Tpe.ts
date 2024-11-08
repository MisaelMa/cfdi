import {
  XmlTpe,
  XmlTpeAttributes,
  XmlTpeDTransAttributes,
} from '../../types/complements/turistaPasajeroExtranjero/tpe.com';

import { ComplementsReturn } from '../../types';

/**
 *
 */
export default class Tpe {
  private tpe: XmlTpe = {} as XmlTpe;

  private xmlns = 'http://www.sat.gob.mx/TuristaPasajeroExtranjero';

  private xmlnskey = 'tpe';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/TuristaPasajeroExtranjero',
    'http://www.sat.gob.mx/sitio_internet/cfd/TuristaPasajeroExtranjero/TuristaPasajeroExtranjero.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlTpeAttributes
   */
  constructor(data: XmlTpeAttributes) {
    this.tpe = {
      _attributes: data,
    } as XmlTpe;
  }

  /**
   *datosTransito
   *
   * @param data
   * XmlTpeDTransAttributes
   */
  datosTransito(data: XmlTpeDTransAttributes): void {
    this.tpe['tpe:datosTransito'] = {
      _attributes: data,
    };
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.tpe,
      key: 'tpe:TuristaPasajeroExtranjero',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
