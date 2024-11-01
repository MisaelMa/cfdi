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
import {
  XmlComplements,
  XmlComplementsAttributes,
  XmlnsComplementsLinks,
} from '@cfdi/complementos';

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
  CFDIComprobante,
    AnyKey {
  'xmlns:xsi'?: string; // http://www.w3.org/2001/XMLSchema-instance
  'xmlns:xs'?: string; // http://www.w3.org/2001/XMLSchema
  'xsi:schemaLocation'?: string;
}

export interface ComprobanteAttributes {
  xmlns?: XmlnsLinks;
  schemaLocation?: string[];
}
export interface CFDIComprobante {
  Version?: string;
  Serie?: string;
  Folio?: string;
  Fecha: string;
  FormaPago?: FormaPago | FormaPagoType | number
  NoCertificado: string;
  CondicionesDePago?: string;
  SubTotal: string | number;
  Descuento?: string | number;
  Moneda: string;
  TipoCambio?: string;
  Total: string | number;
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
