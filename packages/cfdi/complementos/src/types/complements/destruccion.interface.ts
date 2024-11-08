export interface XmlDestruccion {
  _attributes: XmlDestruccionAttributes;
  'destruccion:VehiculoDestruido': XmlVehiculoDestruido;
  'destruccion:InformacionAduanera': XmlInformacionAduanera;
}

export interface XmlVehiculoDestruido {
  _attributes: XmlVehiculoDestruidoAttributes;
}

export interface XmlInformacionAduanera {
  _attributes: XmlInfoAduAttributes;
}

export interface XmlDestruccionAttributes {
  Version: string;
  Serie: string;
  NumFolDesVeh: string;
}

export interface XmlVehiculoDestruidoAttributes {
  Marca: string;
  TipooClase: string;
  Año: string;
  Modelo: string;
  NIV?: string;
  NumSerie?: string;
  NumPlacas: string;
  NumMotor?: string;
  NumFolTarjCir: string;
}

export interface XmlInfoAduAttributes {
  NumPedImp: string;
  Fecha: string;
  Aduana: string;
}
