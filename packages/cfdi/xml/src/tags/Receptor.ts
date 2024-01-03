import {
  XmlDomiciolioAttributes,
  XmlReceptor,
  XmlReceptorAttribute,
  XmlReceptorDomicilio,
} from '../types';

import { Schema } from '@cfdi/xsd';

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
    Schema.of().cfdi.receptor.validate(receptor);
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
