import {
  XmlRegistrofiscal,
  XmlRegistrofiscalAttributes,
} from '@cfdi/xml/src/types/Complements/registrofiscal.interface';
import { ComplementsReturn } from '@cfdi/xml/src/types';

/**
 *
 */
export default class RegistroFiscal {
  private registrofiscal: XmlRegistrofiscal = {} as XmlRegistrofiscal;

  private xmlns = 'http://www.sat.gob.mx/registrofiscal';

  private xmlnskey = 'registrofiscal';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/registrofiscal',
    'http://www.sat.gob.mx/sitio_internet/cfd/cfdiregistrofiscal/cfdiregistrofiscal.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlRegistrofiscalAttributes
   */
  constructor(
    data: XmlRegistrofiscalAttributes = { Folio: '', Version: '1.0' }
  ) {
    if (data.Folio.length !== 0 || !/^\s+$/.test(data.Folio)) {
      this.registrofiscal = {
        _attributes: data,
      };
    }
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.registrofiscal,
      key: 'registrofiscal:CFDIRegistroFiscal',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
