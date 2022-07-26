import { ComplementsReturn } from '../../types';
import { XmlTfd, XmlTfdAttributes } from '../../types/complements/tfd/tfd.com';

/**
 *
 */
export class Tfd {
  private tfd: XmlTfd = {} as XmlTfd;

  private xmlns = 'http://www.sat.gob.mx/TimbreFiscalDigital';

  private xmlnskey = 'tfd';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/TimbreFiscalDigital',
    'http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlTfdAttributes
   */
  constructor(data: XmlTfdAttributes) {
    this.tfd = {
      _attributes: data,
    };
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.tfd,
      key: 'tfd:TimbreFiscalDigital',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
