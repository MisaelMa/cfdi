import { XmlComprobante } from '.';

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

export interface AnyKey {
  [key: string]: any;
}
