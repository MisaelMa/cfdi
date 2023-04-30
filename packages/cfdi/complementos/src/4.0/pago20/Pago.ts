import { PagoImpuestosP } from './Pago20Impuestos';
import { PagoRelacionado } from './Pago20Relacionado';
import { XmlPago20, XmlPago20Attributes } from './types/pago20.interface';

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

  doctoRelacionado(documents: PagoRelacionado) {
    if (!this.pago['pago20:DoctoRelacionado']) {
      this.pago['pago20:DoctoRelacionado'] = [];
    }
    this.pago['pago20:DoctoRelacionado'] = documents.getRelations();
  }
  setImpuestosP(impuestos: PagoImpuestosP) {
    if(!this.pago['pago20:ImpuestosP'] || this.pago['pago20:ImpuestosP']){
      this.pago['pago20:ImpuestosP'] = []
    }
    this.pago['pago20:ImpuestosP'].push(impuestos.getImpuestos())

  }

  getPago() {
    return this.pago;
  }
}
