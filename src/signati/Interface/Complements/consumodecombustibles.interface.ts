export interface XmlConsumodecombustibles {
  _attributes: XmlCondComAttributes;
  'consumodecombustibles11:Conceptos': XmlCondCom11Conceptos;
}

export interface XmlCondComAttributes {
  version: string;
  tipoOperacion: string;
  numeroDeCuenta: string;
  subTotal?: string;
  total: string;
}

export interface XmlCondCom11Conceptos {
  'consumodecombustibles11:ConceptoConsumoDeCombustibles': XmlCondCom11ConcepConsumoDeCombustibles[];
}

export interface XmlCondCom11ConcepConsumoDeCombustibles {
  _attributes: XmlCondComConcepConsumDeCombusAttributes;
  'consumodecombustibles11:Determinados'?: XmlCondComDeterminados;
}

export interface XmlCondComConcepConsumDeCombusAttributes {
  identificador: string;
  fecha: string;
  rfc: string;
  claveEstacion: string;
  cantidad: string;
  nombreCombustible: string;
  folioOperacion: string;
  valorUnitario: string;
  importe: string;
}

export interface XmlCondComDeterminados {
  'consumodecombustibles11:Determinado': XmlCondCom11Determinado[]
}

export interface XmlCondCom11Determinado {
  _attributes: XmlCondComDeterminadoAttributes;
}

export interface XmlCondComDeterminadoAttributes {
  impuesto: string;
  tasa: string;
  importe: string;
}
