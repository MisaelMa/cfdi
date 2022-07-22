import {
  XmlEmisor,
  XmlEmisorAttribute,
  XmlEmisorDomicilioF,
  XmlEmisorExpedidoEn,
  XmlEmisorRF,
  XmlEmisorRFAttributes,
} from '../types/Tags/emisor.inteface';
import { XmlDomiciolioAttributes } from '../types/Tags/domiciolio.interface';

/**
 *
 */
export class Emisor {
  public emisor: XmlEmisor = {} as XmlEmisor;

  /**
   *constructor
   *
   * @param emisor
   * XmlEmisorAttribute
   */
  constructor(emisor: XmlEmisorAttribute) {
    this.emisor._attributes = emisor;
    // return this;
  }

  /**
   *addDomicilioFiscal
   *
   * @param domicilio
   * XmlDomiciolioAttributes
   */
  public addDomicilioFiscal(domicilio: XmlDomiciolioAttributes): Emisor {
    this.emisor['cfdi:DomicilioFiscal'] = {
      _attributes: domicilio,
    } as XmlEmisorDomicilioF;
    return this;
  }

  /**
   *addExpedidoEn
   *
   * @param expedido
   * XmlDomiciolioAttributes
   */
  public addExpedidoEn(expedido: XmlDomiciolioAttributes): Emisor {
    this.emisor['cfdi:ExpedidoEn'] = {
      _attributes: expedido,
    } as XmlEmisorExpedidoEn;
    return this;
  }

  /**
   *addRegimenFiscal
   *
   * @param regimefiscal
   * XmlEmisorRFAttributes
   */
  public addRegimenFiscal(regimefiscal: XmlEmisorRFAttributes): Emisor {
    this.emisor['cfdi:RegimenFiscal'] = {
      _attributes: regimefiscal,
    } as XmlEmisorRF;
    return this;
  }
}
