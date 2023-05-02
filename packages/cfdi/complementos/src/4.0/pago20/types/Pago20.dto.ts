import {
  XmlDoctoRelAttributes,
  XmlPago20Attributes,
  XmlPagoRetencionPAttributes,
  XmlPagoTranladoPAttributes,
  XmlPagos20TotalesAttributes,
  XmlRetencionDRAttributes,
  XmlTrasladoDRAttributes,
} from './pago20.interface';

export interface DoctoRelacionado extends XmlDoctoRelAttributes {
  ImpuestosDR: ImpuestosDR;
}
export interface ImpuestosDR {
  RetencionesDR: RetencioneDR[];
  TrasladosDR: TrasladoDR[];
}
export interface RetencioneDR extends XmlRetencionDRAttributes {}
export interface TrasladoDR extends XmlTrasladoDRAttributes {}
export interface ImpuestoP {
  RetencionesP: RetencionP[];
  TrasladosP: TrasladoP[];
}
export interface RetencionP extends XmlPagoRetencionPAttributes {}
export interface TrasladoP extends XmlPagoTranladoPAttributes {}

export interface Pagos20Totales extends XmlPagos20TotalesAttributes {
  DoctoRelacionado: DoctoRelacionado;
  ImpuestosP: ImpuestoP;
}
export interface XmlPago20 extends XmlPago20Attributes {}
export interface Pagos20 {
  Totales: Pagos20Totales;
  Pago: XmlPago20[];
}
