
export interface XmlReceptor {
  _attributes: XmlReceptorAttribute;
}

export interface XmlReceptorAttribute {
  Rfc: string;
  Nombre: string;
  UsoCFDI: string;
  DomicilioFiscalReceptor: string;
  ResidenciaFiscal?: string;
  NumRegIdTrib?: string;
  RegimenFiscalReceptor: string;
}

