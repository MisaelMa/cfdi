import {Attributes, ElementCompact} from 'xml-js';
import {XmlComplementsConcepts} from './complements.interface';
import {XmlImpuestos} from './impuestos.interface';

export interface XmlConcepto {
    'cfdi:Concepto': XmlConceptoProperties[];
}

export interface XmlConceptoProperties extends ElementCompact {
    '_attributes': XmlConceptoAttributes;
    'cfdi:Impuestos': XmlImpuestos;
    'cfdi:ComplementoConcepto': XmlComplementsConcepts
}

export interface XmlConceptoAttributes extends Attributes {
    ClaveProdServ: string;
    NoIdentificacion: string;
    Cantidad: number | string;
    ClaveUnidad: string;
    Unidad: string;
    Descripcion: string;
    ValorUnitario: number | string;
    Importe: number | string;
    Descuento: number | string;
}
