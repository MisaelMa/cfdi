import { ComplementsReturn } from '../../types';
import { XmlDonat, XmlDonatAttributes } from '../../types/complements';

/**
 *
 */
export class Donat {
  private donat: XmlDonat = {} as XmlDonat;

  private xmlns = 'http://www.sat.gob.mx/donat';

  private xmlnskey = 'donat';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/donat',
    'http://www.sat.gob.mx/sitio_internet/cfd/donat/donat11.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   */
  constructor(data: XmlDonatAttributes) {
    this.donat = {
      _attributes: data,
    };
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.donat,
      key: 'donat:Donatarias',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
