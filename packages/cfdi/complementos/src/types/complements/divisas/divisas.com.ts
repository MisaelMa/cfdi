import { tipoOperacion } from './divisas.enum';

export interface XmlDivisas {
  _attributes: XmlDivisasAttributes;
}

export interface XmlDivisasAttributes {
  version: string;
  tipoOperacion: tipoOperacion;
}
