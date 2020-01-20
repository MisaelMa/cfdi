import {XmlImpuestos} from './impuestos.interface';
import {XmlComplementsConcepts} from './complements.interface';
import Iedu from '../../complements/iedu';
import {Attributes, ElementCompact} from 'xml-js';

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
