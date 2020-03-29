export interface XmlPagos10 {
    _attributes: XmlPagos10Attributes;
    'pago10:Pago': XmlPago10[];
}

export interface XmlPagos10Attributes {
    Version?: string;
}

export interface XmlPago10 {
    _attributes?: XmlPago10Attributes,
    'pago10:DoctoRelacionado': XmlDoctoRelacionado[];
    'pago10:Impuestos': XmlPago10Impuesto[];
}

export interface XmlPago10Attributes {
    FechaPago: string
    FormaDePagoP: string;
    MonedaP: string
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
    _attributes?: XmlDoctoRelAttributes,
}

export interface XmlDoctoRelAttributes {
    IdDocumento: string
    Serie?: string
    Folio?: string
    MonedaDR: string
    TipoCambioDR?: string
    MetodoDePagoDR: string
    NumParcialidad?: string
    ImpSaldoAnt?: string
    ImpPagado?: string
    ImpSaldoInsoluto?: string
}

export interface XmlPago10Impuesto {
    _attributes?: XmlPagoImptoAttributes;
    'pago10:Retenciones': XmlPagoRetenciones;
    'pago10:Traslados': XmlPagoTranlados;
}

export interface XmlPagoImptoAttributes {
    TotalImpuestosRetenidos?: string;
    TotalImpuestosTrasladados?: string;
}

export interface XmlPagoRetenciones {
    'pago10:Retencion': XmlPagoRetencion[]
}

export interface XmlPagoTranlados {
    'pago10:Traslado': XmlPagoTranlado[]
}

export interface XmlPagoRetencion {
    _attributes?: XmlPagoRetencionAttributes;
}

export interface XmlPagoRetencionAttributes {
    Impuesto: string;
    Importe: string;
}

export interface XmlPagoTranlado {
    _attributes?: XmlPagoTranladoAttributes;
}

export interface XmlPagoTranladoAttributes {
    Impuesto: string;
    TipoFactor: string;
    TasaOCuota: string;
    Importe: string;
}
