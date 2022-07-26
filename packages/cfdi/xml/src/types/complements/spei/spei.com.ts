export interface XmlSpei {
  'spei:SPEI_Tercero': XmlSpeiTercero[];
}

export interface XmlSpeiTercero {
  _attributes: XmlSpeiTerceroAttributes;
  'spei:Ordenante': XmlSpeiOrdenante;
  'spei:Beneficiario': XmlSpeiBeneficiario;
}

export interface XmlSpeiTerceroAttributes {
  FechaOperacion: string;
  Hora: string;
  ClaveSPEI: string;
  sello: string;
  numeroCertificado: string;
}

export interface XmlSpeiOrdenante {
  _attributes: XmlSpeiOrdenanteAttributes;
}

export interface XmlSpeiBeneficiario {
  _attributes: XmlSpeiBeneficiarioAttributes;
}

export interface XmlSpeiOrdenanteAttributes extends SpeiCommon {
  BancoEmisor: string;
}

export interface XmlSpeiBeneficiarioAttributes extends SpeiCommon {
  BancoReceptor: string;
  Concepto: string;
  IVA?: string;
  MontoPago: string;
}

interface SpeiCommon {
  Nombre: string;
  RFC: string;
  Cuenta: string;
  TipoCuenta: string;
}
