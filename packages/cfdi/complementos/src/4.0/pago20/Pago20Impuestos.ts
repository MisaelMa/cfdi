import {
  XmlPago20ImpuestoP,
  XmlPagoRetencionPAttributes,
  XmlPagoTranladoPAttributes,
} from './types/pago20.interface';

/**
 *
 */
export class Pago20ImpuestosP {
  private impuesto: XmlPago20ImpuestoP = {} as XmlPago20ImpuestoP;

  /**
   *constructor
   *
   * @param data
   * XmlPagoImptoAttributes
   */
  constructor() {}

  /**
   *retenciones
   *
   * @param data
   * XmlPagoRetencionAttributes
   */
  setRetencionesP(data: XmlPagoRetencionPAttributes): void {
    if (!this.impuesto['pago20:RetencionesP']) {
      this.impuesto['pago20:RetencionesP'] = {
        'pago20:RetencionP': [],
      };
    }
    this.impuesto['pago20:RetencionesP']['pago20:RetencionP'].push({
      _attributes: data,
    });
  }

  /**
   *traslados
   *
   * @param data
   * XmlPagoTranladoAttributes
   */
  setTrasladosP(data: XmlPagoTranladoPAttributes): void {
    if (!this.impuesto['pago20:TrasladosP']) {
      this.impuesto['pago20:TrasladosP'] = {
        'pago20:TrasladoP': [],
      };
    }
    this.impuesto['pago20:TrasladosP']['pago20:TrasladoP'].push({
      _attributes: data,
    });
  }

  /**
   *getImpuesto
   */
  getImpuestosP(): XmlPago20ImpuestoP {
    return this.impuesto;
  }
}
