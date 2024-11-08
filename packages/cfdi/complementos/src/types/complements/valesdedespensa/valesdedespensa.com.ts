export interface XmlValesDeDespensa {
  _attributes: XmlValesAttributes;
  'valesdedespensa:Conceptos': XmlValesDeDespensaConceptos;
}

export interface XmlValesAttributes {
  version: string;
  tipoOperacion: string;
  registroPatronal?: string;
  numeroDeCuenta: string;
  total: string;
}

export interface XmlValesDeDespensaConceptos {
  'valesdedespensa:Concepto': XmlValesDeDespensaConcepto[];
}

export interface XmlValesDeDespensaConcepto {
  _attributes: XmlValesConceptAttributes;
}

export interface XmlValesConceptAttributes {
  identificador: string;
  fecha: string;
  rfc: string;
  curp: string;
  nombre: string;
  numSeguridadSocial?: string;
  importe: string;
}
