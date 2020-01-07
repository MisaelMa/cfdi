import { XmlReceptor, XmlReceptorAttribute, XmlReceptorDomicilio } from '../Interface/Tags/receptor.inteface';
import { XmlEmisorAttribute } from '../Interface/Tags/emisor.inteface';
import { XmlDomiciolioAttributes } from '../Interface/Tags/domiciolio.interface';

export class Receptor {
  public receptor: XmlReceptor =  {} as XmlReceptor;

  constructor(receptor: XmlReceptorAttribute) {
    this.receptor._attributes = receptor;
  }

  public async addDomicilio(domicilio: XmlDomiciolioAttributes) {
    this.receptor['cfdi:Domicilio'] =  {
      _attributes: domicilio,
    } as XmlReceptorDomicilio
    return this;
  }
}
