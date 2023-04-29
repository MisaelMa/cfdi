import {
  XmlDoctoRelacionado,
  XmlPago20Attributes,
  XmlPago10Impuesto,
  XmlPago20,
  XmlPagos20,
  XmlPagos20Attributes,
} from './types/pago10.interface';

import { Complemento } from '../../Complemento';
import { Pago } from './Pago';

/**
 *
 */
const xmlns = 'http://www.sat.gob.mx/Pagos20';
const xsd = 'http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos20.xsd';

export class Pago20 extends Complemento<XmlPagos20> {
  public complemento: XmlPagos20 = {} as XmlPagos20;

  /**
   *constructor
   *
   * @param attributes
   * XmlPagos10Attributes
   */
  constructor(attributes: XmlPagos20Attributes = { Version: '2.0' }) {
    super({ key: 'pago20:Pagos', xmlns, xsd });
    this.complemento._attributes = attributes;
  }

  totales(pago: {
    data: XmlPago20Attributes;
    relacionado?: XmlDoctoRelacionado[];
    impuestos?: XmlPago10Impuesto[];
  }): void {
    /*     if (!this.complemento['pago20:Pago']) {
      this.complemento['pago20:Pago'] = [];
    }
    const setPago: XmlPago20 = {} as XmlPago20;
    setPago._attributes = pago.data;
    if (pago.relacionado) {
      setPago['pago10:DoctoRelacionado'] = pago.relacionado;
    }
    if (pago.impuestos) {
      setPago['pago10:Impuestos'] = pago.impuestos;
    }
    this.complemento['pago20:Pago'].push(setPago); */
  }
  /**
   *pago
   *
   * @param pago
   * XmlPago10Attributes
   * @param pago.data
   * XmlPago10Attributes
   * @param pago.relacionado
   * XmlDoctoRelacionado
   * @param pago.impuestos
   * XmlPago10Impuesto
   */
  pago(pago: Pago): void {
    if (!this.complemento['pago20:Pago']) {
      this.complemento['pago20:Pago'] = [];
    }
    /*   const setPago: XmlPago20 = {} as XmlPago20;
    setPago._attributes = pago.data;
    if (pago.relacionado) {
      setPago['pago10:DoctoRelacionado'] = pago.relacionado;
    }
    if (pago.impuestos) {
      setPago['pago10:Impuestos'] = pago.impuestos;
    }
    this.complemento['pago20:Pago'].push(setPago); */

    this.complemento['pago20:Pago'].push(pago.getPago());
  }
}
