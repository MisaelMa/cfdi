import {Attributes} from 'xml-js';

export interface XmlCartaPorte {
    _attributes?: XmlCartaPorteAttribute;
    'cartaporte:Ubicaciones': CPUbicacion[];
    'cartaporte:Mercancias': CPMercancias;
    'cartaporte:FiguraTransporte': CPFTransporte
}

export interface CPFTransporte {
    _attributes?: XmlCPFTransporteAttribute;
    'cartaporte:Operadores': CPFTOperadores;
    'cartaporte:Propietario': CPPropietario[];
    'cartaporte:Arrendatario': CPArrendatario[];
    'cartaporte:Notificado': CPNotificado[];
}

export interface CPNotificado {
    _attributes?: XmlCPNotificadoAttribute;
    'cartaporte:Domicilio': CPDomicilio[]
}

export interface XmlCPNotificadoAttribute extends Attributes {
    RFCNotificado?: string;
    NombreNotificado?: string;
    NumRegIdTribNotificado?: string;
    ResidenciaFiscalNotificado?: string;
}

export interface CPArrendatario {
    _attributes?: XmlCPArrendatarioAttribute;
    'cartaporte:Domicilio': CPDomicilio[]
}

export interface XmlCPArrendatarioAttribute {
    RFCArrendatario?: string;
    NombreArrendatario?: string;
    NumRegIdTribArrendatario?: string;
    ResidenciaFiscalArrendatario?: string;
}

export interface CPPropietario {
    _attributes?: XmlCPPropietarioAttribute;
    'cartaporte:Domicilio': CPDomicilio[]
}

export interface XmlCPPropietarioAttribute extends Attributes {
    RFCPropietario?: string;
    NombrePropietario?: string;
    NumRegIdTribPropietario?: string;
    ResidenciaFiscalPropietario?: string;
}

export interface CPFTOperadores {
    'cartaporte:Operador': CPFTOperador[];
}

export interface CPFTOperador extends Attributes {
    _attributes?: CPFTOperadorAttribute;
    'cartaporte:Domicilio': CPDomicilio[]
}

export interface CPDomicilio {
    _attributes?: CPDomicilioAttribute;
}

export interface CPDomicilioAttribute extends Attributes {
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

export interface CPFTOperadorAttribute {
    RFCOperador?: string
    NumLicencia?: string
    NombreOperador?: string
    NumRegIdTribOperador?: string
    ResidenciaFiscalOperador?: string
}

export interface XmlCPFTransporteAttribute extends Attributes {
    CveTransporte: string
}

export interface CPMercancias {
    _attributes?: XmlCPMercanciasAttribute;
    'cartaporte:Mercancia': CPMercancia[];
    'cartaporte:AutotransporteFederal': CPMAFederal[];
    'cartaporte:TransporteMaritimo': CPMTMaritimo
    'cartaporte:TransporteAereo': CPMTAereo[]
    'cartaporte:TransporteFerroviario': CPMTFerroviario
}

export interface CPMTFerroviario {
    _attributes?: XmlCPMTFerroviarioAttribute;
    'cartaporte:DerechosDePaso': {};
    'cartaporte:Carro': {};
}

export interface XmlCPMTFerroviarioAttribute {
    TipoDeServicio: string;
    NombreAseg?: string;
    NumPolizaSeguro?: string;
    Concesionario?: string;
}

export interface CPMTAereo {
    _attributes?: XmlCPMTAereoAttribute;
}

export interface XmlCPMTAereoAttribute extends Attributes {
    PermSCT: string;
    NumPermisoSCT: string;
    MatriculaAeronave: string;
    NombreAseg?: string;
    NumPolizaSeguro?: string;
    NumeroGuia: string;
    LugarContrato?: string;
    RFCTransportista?: string;
    CodigoTransportista: string;
    NumRegIdTribTranspor?: string;
    ResidenciaFiscalTranspor?: string;
    NombreTransportista?: string;
    RFCEmbarcador?: string;
    NumRegIdTribEmbarc?: string;
    ResidenciaFiscalEmbarc?: string;
    NombreEmbarcador?: string;
}

export interface CPMTMaritimo {
    _attributes?: XmlCPMTMaritimoAttribute
    'cartaporte:Contenedor': CPMTMaritimoCon[]
}

export interface CPMTMaritimoCon {
    _attributes?: XmlCPMTMaritimoConAttribute
}

export interface XmlCPMTMaritimoConAttribute extends Attributes {
    MatriculaContenedor: string
    TipoContenedor: string
    NumPrecinto?: string
}

export interface XmlCPMTMaritimoAttribute extends Attributes {
    PermSCT?: string;
    NumPermisoSCT?: string;
    NombreAseg?: string;
    NumPolizaSeguro?: string;
    TipoEmbarcacion: string;
    Matricula: string;
    NumeroOMI: string;
    AnioEmbarcacion?: string;
    NombreEmbarc?: string;
    NacionalidadEmbarc: string;
    UnidadesDeArqBruto: string;
    TipoCarga: string;
    NumCertITC: string;
    Eslora?: string;
    Manga?: string;
    Calado?: string;
    LineaNaviera?: string;
    NombreAgenteNaviero: string;
    NumAutorizacionNaviero: string;
    NumViaje?: string;
    NumConocEmbarc?: string;
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
    'cartaporte:Domicilio': CPDomicilio;
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
