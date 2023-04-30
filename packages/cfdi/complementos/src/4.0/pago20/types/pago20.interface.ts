export interface XmlPagos20 {
  _attributes: XmlPagos20Attributes;
  'pago20:Totales': XmlPagos20Totales[];
  'pago20:Pago': XmlPago20[];
}

export interface XmlPagos20Attributes {
  Version?: string;
}
export interface XmlPagos20Totales {
  _attributes?: XmlPagos20TotalesAttributes;
}
export interface XmlPagos20TotalesAttributes {
  TotalRetencionesIVA?: string;
  TotalRetencionesISR?: string;
  TotalRetencionesIEPS?: string;
  TotalTrasladosBaseIVA16?: string;
  TotalTrasladosImpuestoIVA16?: string;
  TotalTrasladosBaseIVA8?: string;
  TotalTrasladosImpuestoIVA8?: string;
  TotalTrasladosBaseIVA0?: string;
  TotalTrasladosImpuestoIVA0?: string;
  TotalTrasladosBaseIVAExento?: string;
  MontoTotalPagos?: string;
}
export interface XmlPago20 {
  _attributes?: XmlPago20Attributes;
  'pago20:DoctoRelacionado': XmlDoctoRelacionado[];
  'pago20:ImpuestosP': XmlPago20ImpuestoP[];
}

export interface XmlPago20Attributes {
  FechaPago: string;
  FormaDePagoP: string;
  MonedaP: string;
  TipoCambioP?: string;
  Monto: string;
  NumOperacion?: string;
  RfcEmisorCtaOrd?: string;
  NomBancoOrdExt?: string;
  CtaOrdenante?: string;
  RfcEmisorCtaBen?: string;
  CtaBeneficiario?: string;
  TipoCadPago?: string;
  CertPago?: string;
  CadPago?: string;
  SelloPago?: string;
}

export interface XmlDoctoRelacionado {
  _attributes?: XmlDoctoRelAttributes;
  'pago20:ImpuestosDR'?: XmlImpuestosDR;
}

export interface XmlImpuestosDR {
  'pago20:RetencionesDR': {
    'pago20:RetencionDR': XmlRetencionDR[];
  };
  'pago20:TrasladosDR': {
    'pago20:TrasladoDR': XmlTrasladoDR[];
  };
}
interface XmlRetencionDR {
  _attributes: XmlRetencionDRAttributes;
}
interface XmlTrasladoDR {
  _attributes: XmlTrasladoDRAttributes;
}

export interface XmlDoctoRelAttributes {
  IdDocumento: string;
  Serie?: string;
  Folio?: string;
  MonedaDR: string;
  EquivalenciaDR?: string;
  NumParcialidad: string;
  ImpSaldoAnt: string;
  ImpPagado: string;
  ImpSaldoInsoluto: string;
  ObjetoImpDR: string;
}

export interface XmlPago20ImpuestoP {
  'pago20:RetencionesP': XmlPagoRetenciones;
  'pago20:TrasladosP': XmlPagoTranlados;
}

export interface XmlPagoImptoAttributes {
  TotalImpuestosRetenidos?: string;
  TotalImpuestosTrasladados?: string;
}

export interface XmlPagoRetenciones {
  'pago20:RetencionP': XmlPagoRetencionP[];
}

export interface XmlPagoTranlados {
  'pago20:TrasladoP': XmlPagoTranladoP[];
}

export interface XmlPagoRetencionP {
  _attributes?: XmlPagoRetencionPAttributes;
}

export interface XmlPagoRetencionPAttributes {
  ImpuestoP: string;
  ImporteP: string;
}

export interface XmlPagoTranladoP {
  _attributes?: XmlPagoTranladoPAttributes;
}

export interface XmlPagoTranladoPAttributes {
  BaseP: string;
  ImpuestoP: string;
  TipoFactorP: string;
  TasaOCuotaP?: string;
  ImporteP?: string;
}
interface DR {
  BaseDR: string;
  ImpuestoDR: string;
  TipoFactorDR: string;
  TasaOCuotaDR?: string;
  ImporteDR?: string;
}
export interface XmlRetencionDRAttributes extends DR {
  TasaOCuotaDR: string;
  ImporteDR: string;
}
export interface XmlTrasladoDRAttributes extends DR {}
