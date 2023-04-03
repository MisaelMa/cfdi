import {
  XmlDoctoRelacionado,
  XmlPago10,
  XmlPago10Attributes,
  XmlPago10Impuesto,
  XmlPagos10,
  XmlPagos10Attributes,
} from '../../types/complements/pago10.interface';
import { ComplementsReturn } from '../../types';

/**
 *
 */
export class Pago10 {
  private pago10: XmlPagos10 = {} as XmlPagos10;

  private xmlns = 'http://www.sat.gob.mx/Pagos';

  private xmlnskey = 'pago10';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/Pagos',
    'http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos10.xsd',
  ];

  /**
   *constructor
   *
   * @param attributes
   * XmlPagos10Attributes
   */
  constructor(attributes: XmlPagos10Attributes) {
    this.pago10._attributes = attributes;
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
  pago(pago: {
    data: XmlPago10Attributes;
    relacionado?: XmlDoctoRelacionado[];
    impuestos?: XmlPago10Impuesto[];
  }): void {
    if (!this.pago10['pago10:Pago']) {
      this.pago10['pago10:Pago'] = [];
    }
    const setPago: XmlPago10 = {} as XmlPago10;
    setPago._attributes = pago.data;
    if (pago.relacionado) {
      setPago['pago10:DoctoRelacionado'] = pago.relacionado;
    }
    if (pago.impuestos) {
      setPago['pago10:Impuestos'] = pago.impuestos;
    }
    this.pago10['pago10:Pago'].push(setPago);
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.pago10,
      key: 'pago10:Pagos',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
