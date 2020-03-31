export interface XmlServicioparcial {
    _attributes: XmlSerparAttributes
    'servicioparcial:Inmueble': XmlSerparInmueble
}

export interface XmlSerparAttributes {
    Version: string;
    NumPerLicoAut: string
}

export interface XmlSerparInmueble {
    _attributes: XmlSerparInAttributes
}

export interface XmlSerparInAttributes {
    Calle: string;
    NoExterior?: string;
    NoInterior?: string;
    Colonia?: string;
    Localidad?: string;
    Referencia?: string;
    Municipio: string;
    Estado: string;
    CodigoPostal: string;
}
