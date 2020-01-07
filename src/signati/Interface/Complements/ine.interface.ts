export interface XmlIne {
  _attributes?: XmlIneAttribute;
  'ine:Entidad'?: XmlIneEntidad;
}

export interface XmlIneAttribute {
  Version: string;
  TipoProceso: string;
  TipoComite?: string;
  IdContabilidad?: string;
}

export interface XmlIneEntidad {
  _attributes?: XmlIneEntidadAttribute;
  'ine:Contabilidad'?: XmlIneContabilidad;
}

export interface XmlIneEntidadAttribute {
  ClaveEntidad: string;
  Ambito?: string;
}
export interface XmlIneContabilidad {
  _attributes?: XmlIneContabilidadAttribute;
}
export interface XmlIneContabilidadAttribute {
  IdContabilidad: string;
}
