import {
  XmlReceptor,
  XmlReceptorAttribute,
  XmlReceptorDomicilio,
  XmlDomiciolioAttributes,
} from '../types';

/**
 *
 */
export class Receptor {
  public receptor: XmlReceptor = {} as XmlReceptor;

  /**
   *constructor
   *
   * @param receptor
   * XmlReceptorAttribute
   */
  constructor(receptor: XmlReceptorAttribute) {
    this.receptor._attributes = receptor;
  }

  /**
   *addDomicilio
   *
   * @param domicilio
   * XmlDomiciolioAttributes
   */
  public addDomicilio(domicilio: XmlDomiciolioAttributes): Receptor {
    this.receptor['cfdi:Domicilio'] = {
      _attributes: domicilio,
    } as XmlReceptorDomicilio;
    return this;
  }
}
