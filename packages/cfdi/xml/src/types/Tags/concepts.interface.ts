import { Attributes, ElementCompact } from 'xml-js';
import { XmlComplementsConcepts } from '@cfdi/xml/src/types/Tags/complements.interface';
import { XmlImpuestos } from '@cfdi/xml/src/types/Tags/impuestos.interface';

export interface XmlConcepto {
    'cfdi:Concepto': XmlConceptoProperties[];
}

export interface XmlConceptoTercerosAttributes {
    RfcACuentaTerceros: string | number;
    NombreACuentaTerceros: string | number;
    RegimenFiscalACuentaTerceros: string | number;
    DomicilioFiscalACuentaTerceros: string | number;
}

export interface XmlConceptoParte {
    _attributes: XmlConceptParteAttributes
}
export interface XmlConceptParteAttributes {
    ClaveProdServ: string | number;
    NoIdentificacion?: string | number;
    Cantidad: string | number;
    Unidad?: string | number;
    Descripcion: string | number;
    ValorUnitario?: string | number;
    Importe?: string | number;
}
export interface XmlConceptoProperties extends ElementCompact {
    '_attributes': XmlConceptoAttributes;
    'cfdi:Impuestos': XmlImpuestos;
    'cfdi:ComplementoConcepto': XmlComplementsConcepts
    'cfdi:Parte'?: XmlConceptoParte
}

export type ObjetoImp = '01' | '02' | '03';
export enum ObjetoImpEnum {
    NoobjetoDeimpuesto = '01',
    SíObjetoDeImpuesto = '02',
    SíObjetoDeImpuestoYNobligadoAlDesglose = '03',
}
export interface XmlConceptoAttributes extends Attributes {
    ClaveProdServ: string;
    NoIdentificacion?: string;
    Cantidad: number | string;
    ClaveUnidad: string;
    Unidad?: string;
    Descripcion: string;
    ValorUnitario: number | string;
    Importe: number | string;
    Descuento?: number | string;
    ObjetoImp: ObjetoImpEnum | ObjetoImp
}
