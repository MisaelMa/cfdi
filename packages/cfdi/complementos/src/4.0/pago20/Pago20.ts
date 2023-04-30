import {
  XmlPagos20,
  XmlPagos20Attributes,
  XmlPagos20TotalesAttributes,
} from './types/pago20.interface';

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

  totales(total: XmlPagos20TotalesAttributes): void {
    if (!this.complemento['pago20:Totales']) {
      this.complemento['pago20:Totales'] = [];
    }

    this.complemento['pago20:Totales'].push({ _attributes: total });
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
  setPago(pago: Pago): void {
    if (!this.complemento['pago20:Pago']) {
      this.complemento['pago20:Pago'] = [];
    }
    this.complemento['pago20:Pago'].push(pago.getPago());
  }
}
