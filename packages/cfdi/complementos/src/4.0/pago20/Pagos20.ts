import {
  XmlPagos20,
  XmlPagos20Attributes,
  XmlPagos20TotalesAttributes,
} from './types/pago20.xslt';

import { Complemento } from '../../Complemento';
import { Pago20 } from './Pago20';

/**
 *
 */
const xmlns = 'http://www.sat.gob.mx/Pagos20';
const xsd = 'http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos20.xsd';

export class Pagos20 extends Complemento<XmlPagos20> {
  public complemento: XmlPagos20 = {} as XmlPagos20;

  /**
   *constructor
   *
   * @param attributes
   * XmlPagos20Attributes
   */
  constructor(attributes: XmlPagos20Attributes = { Version: '2.0' }) {
    super({ key: 'pago20:Pagos', xmlns, xsd });
    this.complemento = {} as XmlPagos20;
    this.complemento._attributes = attributes;
  }

  setTotales(total: XmlPagos20TotalesAttributes): void {
    if (!this.complemento['pago20:Totales']) {
      this.complemento['pago20:Totales'] = [];
    }

    this.complemento['pago20:Totales'].push({ _attributes: total });
  }
  /**
   *pago
   *
   * @param pago
   * Pago
   */
  setPago(pago: Pago20): void {
    if (!this.complemento['pago20:Pago']) {
      this.complemento['pago20:Pago'] = [];
    }
    this.complemento['pago20:Pago'].push(pago.getPago());
  }
}
