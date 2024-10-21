import { XmlDomiciolioAttributes } from '.';

export interface XmlEmisor {
  _attributes: XmlEmisorAttribute;
}

export interface XmlEmisorAttribute {
  Rfc: string;
  Nombre: string;
  RegimenFiscal: string | number;
  FacAtrAdquirente?: string | number;
}
