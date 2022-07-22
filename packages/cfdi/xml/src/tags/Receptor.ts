import {
  XmlReceptor,
  XmlReceptorAttribute,
  XmlReceptorDomicilio,
} from '../types/Tags/receptor.inteface';
import { XmlDomiciolioAttributes } from '../types/Tags/domiciolio.interface';

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
