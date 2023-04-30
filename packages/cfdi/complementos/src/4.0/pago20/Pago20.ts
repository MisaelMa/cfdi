import { XmlPago20, XmlPago20Attributes } from './types/pago20.interface';

import { Pago20ImpuestosP } from './Pago20Impuestos';
import { Pago20Relacionado } from './Pago20Relacionado';

export class Pago20 {
  private static instance: Pago20;

  private pago: XmlPago20 = {} as XmlPago20;
  constructor(data?: XmlPago20Attributes) {
    this.pago  = {} as XmlPago20;
    if (data) {
      this.pago._attributes = data;
    }
  }
  static getInstance(data?: XmlPago20Attributes): Pago20 {
    if (!Pago20.instance) {
      Pago20.instance = new Pago20(data);
    }
    return Pago20.instance;
  }

  setAttribute(data: XmlPago20Attributes) {
    this.pago._attributes = data;
  }

  doctoRelacionado(documents: Pago20Relacionado) {
    if (!this.pago['pago20:DoctoRelacionado']) {
      this.pago['pago20:DoctoRelacionado'] = [];
    }
    this.pago['pago20:DoctoRelacionado'].push(documents.getRelation())
  }
  setImpuestosP(impuestos: Pago20ImpuestosP) {
    if (!this.pago['pago20:ImpuestosP'] || this.pago['pago20:ImpuestosP']) {
      this.pago['pago20:ImpuestosP'] = [];
    }
    this.pago['pago20:ImpuestosP'].push(impuestos.getImpuestosP());
  }

  getPago() {
    return this.pago;
  }
}
