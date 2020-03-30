import { XmlDomiciolioAttributes } from './domiciolio.interface';

export interface XmlReceptor {
  _attributes?: XmlReceptorAttribute;
  'cfdi:Domicilio'?: XmlReceptorDomicilio;
}

export interface XmlReceptorAttribute {
  Rfc: string;
  Nombre: string;
  UsoCFDI: string;
}

export interface XmlReceptorDomicilio {
  _attributes?: XmlDomiciolioAttributes;
}
