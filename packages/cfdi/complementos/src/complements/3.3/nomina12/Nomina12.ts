import { XmlIne, XmlIneAttribute } from '../../../types';

/**
 *
 */
export default class Nomina12 {
  private nomina: XmlIne = {} as XmlIne;

  // private xmlns = 'http://www.sat.gob.mx/nomina12';

  // private xmlnskey = 'nomina12';

  // private schemaLocation: string[] = [
  //   'http://www.sat.gob.mx/nomina12',
  //   'http://www.sat.gob.mx/nomina12 http://www.sat.gob.mx/sitio_internet/cfd/nomina/nomina12.xsd',
  // ];

  /**
   *constructor
   *
   * @param attributes
   * XmlIneAttribute
   */
  constructor(attributes: XmlIneAttribute) {
    this.nomina._attributes = attributes;
  }
}
