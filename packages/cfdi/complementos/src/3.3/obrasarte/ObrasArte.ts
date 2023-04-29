import {
  XmlObrasarte,
  XmlObrasarteAttributes,
} from '../../types/complements/obrasarte/obrasarte.com';

import { ComplementsReturn } from '../../types';

/**
 *
 */
export class ObrasArte {
  private obra: XmlObrasarte = {} as XmlObrasarte;

  private xmlns = 'http://www.sat.gob.mx/arteantiguedades';

  private xmlnskey = 'obrasarte';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/arteantiguedades',
    'http://www.sat.gob.mx/sitio_internet/cfd/arteantiguedades/obrasarteantiguedades.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlObrasarteAttributes
   */
  constructor(data: XmlObrasarteAttributes) {
    this.obra = {
      _attributes: data,
    };
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.obra,
      key: 'obrasarte:obrasarteantiguedades',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
