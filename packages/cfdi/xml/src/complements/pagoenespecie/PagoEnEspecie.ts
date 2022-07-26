import {
  XmlPagoenespecie,
  XmlPagoenespecieAttributes,
} from '@cfdi/xml/src/types/Complements/pagoenespecie/pagoenespecie.com';
import { ComplementsReturn } from '@cfdi/xml/src/types';

/**
 *
 */
export class PagoEnEspecie {
  private specie: XmlPagoenespecie = {} as XmlPagoenespecie;

  private xmlns = 'http://www.sat.gob.mx/pagoenespecie';

  private xmlnskey = 'pagoenespecie';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/pagoenespecie',
    'http://www.sat.gob.mx/sitio_internet/cfd/pagoenespecie/pagoenespecie.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlPagoenespecieAttributes
   */
  constructor(data: XmlPagoenespecieAttributes) {
    this.specie = {
      _attributes: data,
    };
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.specie,
      key: 'pagoenespecie:PagoEnEspecie',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
