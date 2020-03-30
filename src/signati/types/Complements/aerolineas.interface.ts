export interface XmlAerolineas {
  _attributes?: XmlAerolineasAttributes;
  'aerolineas:OtrosCargos': XmlAerolineasOtrosCargos;
}

export interface XmlAerolineasAttributes {
  Version: string;
  TUA: string;
}

export interface XmlAerolineasOtrosCargos {
  _attributes?: XmlAerolineasOtrosCargosAttributes;
  'aerolineas:Cargo': XmlAerolineasCargo[];
}

export interface XmlAerolineasOtrosCargosAttributes {
  TotalCargos: string;
}

export interface XmlAerolineasCargo {
  _attributes?: XmlAerolineasCargoAttributes;
}

export interface XmlAerolineasCargoAttributes {
  CodigoCargo: string;
  Importe: string;
}
