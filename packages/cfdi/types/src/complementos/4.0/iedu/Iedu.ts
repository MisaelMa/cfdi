import { XmlIedu, XmlIeduAttribute } from './type/iedu.xslt';

import { Complemento } from '../../Complemento';

/**
 *
 */
const xmlns = 'http://www.sat.gob.mx/iedu';
const xsd = 'http://www.sat.gob.mx/sitio_internet/cfd/iedu/iedu.xsd';
export class Iedu extends Complemento<XmlIedu> {
  public complemento: XmlIedu = {} as XmlIedu;
  /**
   *constructor
   *
   * @param attributes
   * XmlIeduAttribute
   */
  constructor(attributes: XmlIeduAttribute) {
    super({ key: 'iedu:instEducativas', xmlns, xsd });
    this.complemento = {
      _attributes: attributes,
    } as XmlIedu;
  }
}
