import { XmlComprobante } from './comprobante.interface';

export interface XmlCdfiInterface {
  '_declaration': XmlDeclaration;
  'cfdi:Comprobante': XmlComprobante;
}
export interface XmlDeclaration {
  '_attributes': XmlVersion;
}
export interface XmlVersion {
  version: string;
  encoding: string;
}
