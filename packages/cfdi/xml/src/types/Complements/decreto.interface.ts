// decreto:renovacionysustitucionvehiculos/

export interface XmlDecreto {
  _attributes: XmlDecretoAttributes;
  'decreto:DecretoRenovVehicular': XmlRenovVehicular;
  'decreto:DecretoSustitVehicular': XmlSustitVehicular;
}

export interface XmlRenovVehicular {
  _attributes: XmlVehicularAttributes;
  'decreto:VehiculosUsadosEnajenadoPermAlFab': XmlVehiculosUsadosEnajenadoPermAlFab[];
  'decreto:VehiculoNuvoSemEnajenadoFabAlPerm': XmlVehiculoNuvoSemEnajenadoFabAlPerm;
}

export interface XmlVehiculosUsadosEnajenadoPermAlFab {
  _attributes: XmlVehiculosUsaEnajPermAlFabAttributes;
}

export interface XmlVehiculoNuvoSemEnajenadoFabAlPerm {
  _attributes: XmlVehNueEnaFabAlPermAttributes;
}

export interface XmlSustitVehicular {
  _attributes: XmlVehicularAttributes;
  'decreto:VehiculoUsadoEnajenadoPermAlFab': XmlVehiculoUsadosEnajenadoPermAlFab;
  'decreto:VehiculoNuvoSemEnajenadoFabAlPerm': XmlVehiculoNuvoSemEnajenadoFabAlPerm;
}

export interface XmlVehiculoUsadosEnajenadoPermAlFab {
  _attributes: XmlVehiculoUsaEnajPermAlFabAttributes;
}

export interface XmlDecretoAttributes {
  Version: string;
  TipoDeDecreto: string;
}

export interface XmlVehicularAttributes {
  VehEnaj: string;
}

export interface XmlVehiculosUsaEnajPermAlFabAttributes {
  PrecioVehUsado: string;
  TipoVeh: string;
  Marca: string;
  TipooClase: string;
  Año: string;
  Modelo?: string;
  NIV?: string;
  NumSerie?: string;
  NumPlacas: string;
  NumMotor?: string;
  NumFolTarjCir: string;
  NumPedIm?: string;
  Aduana?: string;
  FechaRegulVeh?: string;
  Foliofiscal: string;
}

export interface XmlVehiculoUsaEnajPermAlFabAttributes {
  PrecioVehUsado: string;
  TipoVeh: string;
  Marca: string;
  TipooClase: string;
  Año: string;
  Modelo?: string;
  NIV?: string;
  NumSerie?: string;
  NumPlacas: string;
  NumMotor?: string;
  NumFolTarjCir: string;
  NumFolAvisoint: string;
  NumPedIm: string;
  Aduana: string;
  FechaRegulVeh: string;
  Foliofiscal: string;
}

export interface XmlVehNueEnaFabAlPermAttributes {
  Año: string;
  Modelo?: string;
  NumPlacas: string;
  RFC?: string;
}
