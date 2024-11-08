export interface XmlVehiculousado {
  _attributes: XmlVehiculousadoAttributes;
  'vehiculousado:InformacionAduanera': XmlVInformacionAduanera;
}

export interface XmlVehiculousadoAttributes {
  Version: string;
  montoAdquisicion: string;
  montoEnajenacion: string;
  claveVehicular: string;
  marca: string;
  tipo: string;
  modelo: string;
  numeroMotor?: string;
  numeroSerie?: string;
  NIV: string;
  valor: string;
}

export interface XmlVInformacionAduanera {
  _attributes: XmlVIAduaneraAttributes;
}

export interface XmlVIAduaneraAttributes {
  numero: string;
  fecha: string;
  aduana?: string;
}
