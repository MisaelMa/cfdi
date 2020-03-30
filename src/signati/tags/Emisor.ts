import {
  XmlEmisor,
  XmlEmisorAttribute,
  XmlEmisorDomicilioF,
  XmlEmisorExpedidoEn,
  XmlEmisorRF,
  XmlEmisorRFAttributes,
} from '../types/Tags/emisor.inteface';
import { XmlDomiciolioAttributes } from '../types/Tags/domiciolio.interface';

export class Emisor {
  public emisor: XmlEmisor = {} as XmlEmisor;

  constructor(emisor: XmlEmisorAttribute) {
    this.emisor._attributes = emisor;
    return this;
  }

  public async addDomicilioFiscal(domicilio: XmlDomiciolioAttributes) {
    this.emisor['cfdi:DomicilioFiscal'] = {
      _attributes: domicilio,
    } as XmlEmisorDomicilioF;
    return this;
  }

  public async addExpedidoEn(expedido: XmlDomiciolioAttributes) {
    this.emisor['cfdi:ExpedidoEn'] = {
      _attributes: expedido,
    } as XmlEmisorExpedidoEn;
    return this;
  }

  public async addRegimenFiscal(regimefiscal: XmlEmisorRFAttributes) {
    this.emisor['cfdi:RegimenFiscal'] = {
      _attributes: regimefiscal,
    } as XmlEmisorRF;
    return this;
  }
}
