export interface XmlCartaPorte {
    _attributes?: XmlCartaPorteAttribute;
    'cartaporte:Ubicaciones': CPUbicacion[];
    'cartaporte:Mercancias': CPMercancias;
    'cartaporte:FiguraTransporte': {}
}

export interface CPMercancias {
    _attributes?: XmlCPMercanciasAttribute;
    'cartaporte:Mercancia': CPMercancia[];
    'cartaporte:AutotransporteFederal': CPMAFederal[];
    'cartaporte:TransporteMaritimo': {}
    'cartaporte:TransporteAereo': {}
    'cartaporte:TransporteFerroviario': {}
}

export interface CPMAFederal {
    _attributes?: XmlCPMAFederalAttribute;
    'cartaporte:IdentificacionVehicular': CPMAFIVehicular[];
    'cartaporte:Remolques': CPMAFRemolques;
}

export interface CPMAFRemolques {
    'cartaporte:Remolque': CPMAFRemolque[]
}

export interface CPMAFRemolque {
    _attributes?: XmlCPMAFRemolqueAttribute;
}

export interface XmlCPMAFRemolqueAttribute {
    SubTipoRem: string
    Placa: string
}

export interface CPMAFIVehicular {
    _attributes?: XmlCPMAFIVehicularAttribute;
}

export interface XmlCPMAFIVehicularAttribute {
    ConfigVehicular: string
    PlacaVM: string
    AnioModeloVM: string
}

export interface XmlCPMAFederalAttribute {
    PermSCT: string
    NumPermisoSCT: string
    NombreAseg: string
    NumPolizaSeguro: string
}

export interface CPMercancia {
    _attributes?: XmlCPMercanciaAttribute
    'cartaporte:CantidadTransporta': CPMCTransporta[]
    'cartaporte:DetalleMercancia': CPMDMercancia[]
}

export interface CPMDMercancia {
    _attributes?: CPMDMercanciaAttribute
}

export interface CPMDMercanciaAttribute {
    UnidadPeso: string;
    PesoBruto: string;
    PesoNeto: string;
    PesoTara: string;
    NumPiezas?: string;
}

export interface CPMCTransporta {
    _attributes?: CPMCTransportaAttribute
}

export interface CPMCTransportaAttribute {
    Cantidad: string
    IDOrigen: string
    IDDestino: string
    CvesTransporte?: string
}

export interface XmlCPMercanciaAttribute {
    BienesTransp?: string
    ClaveSTCC?: string
    Descripcion?: string
    Cantidad: string
    ClaveUnidad: string
    Unidad?: string
    Dimensiones?: string
    MaterialPeligroso?: string
    CveMaterialPeligroso?: string
    Embalaje?: string
    DescripEmbalaje?: string
    PesoEnKg: string
    ValorMercancia?: string
    Moneda?: string
    FraccionArancelaria?: string
    UUIDComercioExt?: string
}

export interface XmlCPMercanciasAttribute {
    PesoBrutoTotal?: string;
    UnidadPeso?: string;
    PesoNetoTotal?: string;
    NumTotalMercancias: string;
    CargoPorTasacion?: string;
}

export interface XmlCartaPorteAttribute {
    Version: string;
    TranspInternac: string;
    EntradaSalidaMerc: string;
    ViaEntradaSalida: string;
    TotalDistRec: string;
    rfcPago: string;
}

export interface CPUbicacion {
    _attributes?: XmlCPUbicacionAttribute;
    'cartaporte:Origen': CPUOrigen;
    'cartaporte:Destino': CPUDestino;
    'cartaporte:Domicilio': CPUDomicilio;
}

export interface XmlCPUbicacionAttribute {
    TipoEstacion?: string;
    DistanciaRecorrida: string;
}

export interface CPUOrigen {
    _attributes?: XmlCPUOrigenAttribute;
}

export interface CPUDestino {
    _attributes?: XmlCPUDestinoAttribute;
}

export interface CPUDomicilio {
    _attributes?: XmlCPUDomicilioAttribute;
}

export interface XmlCPUDomicilioAttribute {
    Calle: string;
    NumeroExterior?: string;
    NumeroInterior?: string;
    Colonia?: string;
    Localidad?: string;
    Referencia?: string;
    Municipio?: string;
    Estado: string;
    Pais: string;
    CodigoPostal: string;
}

export interface XmlCPUOrigenAttribute extends ShareAttributeU {
    IDOrigen?: string;
    RFCRemitente?: string;
    NombreRemitente?: string;
    FechaHoraSalida: string
}

export interface XmlCPUDestinoAttribute extends ShareAttributeU {
    IDDestino?: string;
    RFCDestinatario?: string;
    NombreDestinatario?: string;
    FechaHoraProgLlegada: string
}

interface ShareAttributeU {
    NumRegIdTrib?: string;
    ResidenciaFiscal?: string;
    NumEstacion?: string;
    NombreEstacion?: string;
    NavegacionTrafico?: string;
}