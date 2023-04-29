import { XmlPago20, XmlPago20Attributes } from './types/pago10.interface';

export class Pago {
  private static instance: Pago;

  private pago: XmlPago20 = {} as XmlPago20;
  constructor(data?: XmlPago20Attributes) {
    if (data) {
      this.pago._attributes = data;
    }
  }
  static getInstance(data?: XmlPago20Attributes): Pago {
    if (!Pago.instance) {
      Pago.instance = new Pago(data);
    }
    return Pago.instance;
  }

  setAttribute(data: XmlPago20Attributes) {
    this.pago._attributes = data;
  }

  getPago() {
    return this.pago;
  }
}
