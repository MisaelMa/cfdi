import {
  XmlIedu,
  XmlIeduAttribute,
} from '@cfdi/xml/src/types/Complements/iedu.interface';
import { ComplementsReturn } from '@cfdi/xml/src/types/Tags/complements.interface';

/**
 *
 */
export class Iedu {
  private iued: XmlIedu = {} as XmlIedu;

  private xmlns = 'http://www.sat.gob.mx/iedu';

  private xmlnskey = 'iedu';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/iedu',
    'http://www.sat.gob.mx/sitio_internet/cfd/iedu/iedu.xsd',
  ];

  /**
   *constructor
   *
   * @param attributes
   * XmlIeduAttribute
   */
  constructor(attributes: XmlIeduAttribute) {
    this.iued = {
      _attributes: attributes,
    } as XmlIedu;
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.iued,
      key: 'iedu:instEducativas',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
