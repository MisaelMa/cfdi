import { AmbitoIne, ClaveEntidadIne, TipoComiteIne, TipoProcesoIne } from '@cfdi/xml/src/types/Complements/ine/ine.enum';

export interface XmlIne {
    _attributes: XmlIneAttribute;
    'ine:Entidad'?: XmlIneEntidad;
}

export interface XmlIneAttribute {
    Version: string;
    TipoProceso: TipoProcesoIne;
    TipoComite?: TipoComiteIne;
    IdContabilidad?: string; /*<xs:totalDigits value="6"/><xs:fractionDigits value="0"/>*/
}

export interface XmlIneEntidad {
    _attributes?: XmlIneEntidadAttribute;
    'ine:Contabilidad'?: XmlIneContabilidad;
}

export interface XmlIneEntidadAttribute {
    ClaveEntidad: ClaveEntidadIne;
    Ambito?: AmbitoIne;
}

export interface XmlIneContabilidad {
    _attributes?: XmlIneContabilidadAttribute;
}

export interface XmlIneContabilidadAttribute {
    IdContabilidad: string;
}
