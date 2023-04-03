import {
  XmlComplementsAttributes,
  XmlnsComplementsLinks,
  XmlComplements,
} from '@cfdi/complementos';
import { AnyKey, XmlConcepto, XmlEmisor, XmlImpuestos, XmlReceptor } from '.';
import {
  ExportacionEnum,
  ExportacionType,
  FormaPago,
  FormaPagoType,
  MetodoPago,
  MetodoPagoType,
  TipoComprobante,
  TypeComprobante,
} from '@cfdi/catalogos';

export interface XmlComprobante {
  _attributes: XmlComprobanteAttributes;
  'cfdi:InformacionGlobal'?: any;
  'cfdi:CfdiRelacionados'?: XmlRelacionados;
  'cfdi:Emisor'?: XmlEmisor;
  'cfdi:Receptor'?: XmlReceptor;
  'cfdi:Conceptos': XmlConcepto;
  'cfdi:Impuestos'?: XmlImpuestos;
  'cfdi:Complemento'?: XmlComplements;
}

export interface XmlRelacionados {
  _attributes?: XmlRelacionadosAttributes;
  'cfdi:CfdiRelacionado'?: XmlRelacionado[];
}

export interface XmlRelacionadosAttributes {
  TipoRelacion: string;
}

export interface XmlRelacionado {
  _attributes?: XmlRelacionadoAttributes;
}

export interface XmlRelacionadoAttributes {
  UUID: string;
}

export interface XmlComprobanteAttributes
  extends XmlComplementsAttributes,
    CFDIAttributes,
    AnyKey {
  'xmlns:xsi'?: string; // http://www.w3.org/2001/XMLSchema-instance
  'xmlns:xs'?: string; // http://www.w3.org/2001/XMLSchema
  'xsi:schemaLocation'?: string;
}

export interface CFDIAttributes {
  xmlns?: XmlnsLinks;
  schemaLocation?: string[];
  Version?: string;
  Serie?: string;
  Folio?: string;
  Fecha: string;
  FormaPago?: FormaPago | FormaPagoType;
  NoCertificado: string;
  condicionesDePago?: string;
  SubTotal: string;
  Descuento?: string;
  Moneda: string;
  TipoCambio?: string;
  Total: string;
  TipoDeComprobante: TipoComprobante | TypeComprobante;
  Exportacion: ExportacionEnum | ExportacionType | string;
  MetodoPago?: MetodoPago | MetodoPagoType;
  LugarExpedicion: string;
  Confirmacion?: string;
  Certificado?: string;
  Sello?: string;
}

export interface XmlnsLinks extends XmlnsComplementsLinks, AnyKey {
  cfdi?: string; // http://www.sat.gob.mx/cfd/3
  xs?: string; // http://www.w3.org/2001/XMLSchema
  xsi?: string; // http://www.w3.org/2001/XMLSchema-instance
}
