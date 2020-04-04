import { XmlIneAttribute } from '../ine/ine.com';

export interface XmlImplocal {
    _attributes: XmlImplocalAttributes;
    'implocal:RetencionesLocales': XmlRetencionesLocales[];
    'implocal:TrasladosLocales': XmlTrasladosLocales[]
}

export interface XmlImplocalAttributes {
    version: string;
    TotaldeRetenciones: string;
    TotaldeTraslados: string;
}

export interface XmlRetencionesLocales {
    _attributes: XmlRetLocalAttributes
}

export interface XmlRetLocalAttributes {
    ImpLocRetenido: string;
    TasadeRetencion: string;
    Importe: string;
}

export interface XmlTrasladosLocales {
    _attributes: XmlTrasLocalAttributes
}

export interface XmlTrasLocalAttributes {
    ImpLocTrasladado: string;
    TasadeTraslado: string;
    Importe: string;
}
