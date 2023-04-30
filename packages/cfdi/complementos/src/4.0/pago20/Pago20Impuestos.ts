import {
  XmlPago20ImpuestoP,
  XmlPagoRetencionPAttributes,
  XmlPagoTranladoPAttributes,
} from './types/pago20.interface';

/**
 *
 */
export class PagoImpuestosP {
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
  retenciones(data: XmlPagoRetencionPAttributes): void {
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
  traslados(data: XmlPagoTranladoPAttributes): void {
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
  getImpuestos(): XmlPago20ImpuestoP {
    return this.impuesto;
  }
}
