import {
  XmlDivisas,
  XmlDivisasAttributes,
} from '@cfdi/xml/src/types/Complements/divisas/divisas.com';
import { ComplementsReturn } from '@cfdi/xml/src/types';

/**
 *
 */
export class Divisas {
  private divisa: XmlDivisas = {} as XmlDivisas;

  private xmlns = 'http://www.sat.gob.mx/divisas';

  private xmlnskey = 'divisas';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/divisas',
    'http://www.sat.gob.mx/sitio_internet/cfd/divisas/divisas.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   */
  constructor(data: XmlDivisasAttributes) {
    this.divisa = {
      _attributes: data,
    };
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.divisa,
      key: 'divisas:Divisas',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
