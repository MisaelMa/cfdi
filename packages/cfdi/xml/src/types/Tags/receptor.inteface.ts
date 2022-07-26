import { XmlDomiciolioAttributes } from '@cfdi/xml/src/types/Tags/domiciolio.interface';

export interface XmlReceptor {
  _attributes?: XmlReceptorAttribute;
  'cfdi:Domicilio'?: XmlReceptorDomicilio;
}

export interface XmlReceptorAttribute {
  Rfc: string;
  Nombre: string;
  UsoCFDI: string;
  DomicilioFiscalReceptor: string;
  ResidenciaFiscal?: string;
  NumRegIdTrib?: string;
  RegimenFiscalReceptor: string;
}

export interface XmlReceptorDomicilio {
  _attributes?: XmlDomiciolioAttributes;
}
