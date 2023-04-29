import {
  XmlPfic,
  XmlPficAttributes,
} from '../../../types/complements/pfic/pfic.com';

import { ComplementsReturn } from '../../../types';

/**
 *
 */
export class Pfic {
  private pfic: XmlPfic = {} as XmlPfic;

  private xmlns = 'http://www.sat.gob.mx/pfic';

  private xmlnskey = 'pfic';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/pfic',
    'http://www.sat.gob.mx/sitio_internet/cfd/pfic/pfic.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlPficAttributes
   */
  constructor(data: XmlPficAttributes) {
    this.pfic = {
      _attributes: data,
    };
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.pfic,
      key: 'pfic:PFintegranteCoordinado',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
