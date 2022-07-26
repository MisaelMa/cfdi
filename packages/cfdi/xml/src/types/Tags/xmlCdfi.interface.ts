import { XmlComprobante } from '@cfdi/xml/src/types/Tags/comprobante.interface';

export interface XmlCdfi {
  _declaration: XmlDeclaration;
  'cfdi:Comprobante': XmlComprobante;
}
export interface XmlDeclaration {
  _attributes: XmlVersion;
}
export interface XmlVersion {
  version: string;
  encoding: string;
}
