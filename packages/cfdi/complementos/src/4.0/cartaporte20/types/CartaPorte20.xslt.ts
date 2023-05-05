import { Attributes } from 'xml-js';

export interface XmlCartaPorte20 {
  _attributes?: XmlCartaPorte20Attribute;
  'cartaporte20:Ubicaciones': CP20Ubicaciones;
  'cartaporte20:Mercancias': CP20Mercancias;
  'cartaporte20:FiguraTransporte': CP20FTransporte;
}
export interface CP20Ubicaciones {
  'cartaporte20:Ubicacion': CP20Ubicacion[];
}

export interface CP20FTransporte {
  'cartaporte20:TiposFigura': CP20TiposFigura[];
}

export interface CP20TiposFigura {
  _attributes: CP20TiposFiguraAttr;
  'cartaporte20:PartesTransporte': PartesTransporte[];
  'cartaporte20:Domicilio': CPDomicilio[];
}

export interface PartesTransporte {
  _attributes: PartesTransporteAttr;
}
export interface PartesTransporteAttr {
  ParteTransporte: string;
}

export interface CP20TiposFiguraAttr {
  TipoFigura: string;
  RFCFigura?: string;
  NumLicencia?: string;
  NombreFigura?: string;
  NumRegIdTribFigura?: string;
  ResidenciaFiscalFigura?: string;
}

export interface CPNotificado {
  _attributes?: XmlCPNotificadoAttribute;
  'cartaporte:Domicilio': CPDomicilio[];
}

export interface XmlCPNotificadoAttribute extends Attributes {
  RFCNotificado?: string;
  NombreNotificado?: string;
  NumRegIdTribNotificado?: string;
  ResidenciaFiscalNotificado?: string;
}

export interface CPArrendatario {
  _attributes?: XmlCPArrendatarioAttribute;
  'cartaporte:Domicilio': CPDomicilio[];
}

export interface XmlCPArrendatarioAttribute {
  RFCArrendatario?: string;
  NombreArrendatario?: string;
  NumRegIdTribArrendatario?: string;
  ResidenciaFiscalArrendatario?: string;
}

export interface CPPropietario {
  _attributes?: XmlCPPropietarioAttribute;
  'cartaporte:Domicilio': CPDomicilio[];
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

export interface CPFTOperador {
  _attributes?: CPFTOperadorAttribute;
  'cartaporte:Domicilio': CPDomicilio[];
}

export interface CPDomicilio {
  _attributes?: CPDomicilioAttribute;
}

export interface CPDomicilioAttribute extends Attributes {
  Calle?: string;
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
  RFCOperador?: string;
  NumLicencia?: string;
  NombreOperador?: string;
  NumRegIdTribOperador?: string;
  ResidenciaFiscalOperador?: string;
}

export interface XmlCPFTransporteAttribute extends Attributes {
  CveTransporte: string;
}

export interface CP20Mercancias {
  _attributes?: XmlCP20MercanciasAttribute;
  'cartaporte20:Mercancia': CP20Mercancia[];
  'cartaporte20:Autotransporte': CPM20Autotransporte[];
  'cartaporte20:TransporteMaritimo': CPM20TMaritimo[];
  'cartaporte20:TransporteAereo': CPMT20Aereo[];
  'cartaporte20:TransporteFerroviario': CPM20TFerroviario[];
}

export interface CPM20Autotransporte {
  _attributes?: CPM20AutotransporteAttr;
  'cartaporte20:IdentificacionVehicular': CrtPrtIdentificacionVehicular[];
  'cartaporte20:Seguros': CrtPrtSeguros[];
  'cartaporte20:Remolques': Remolques;
}
export interface Remolques {
  'cartaporte20:Remolque': Remolque[];
}

export interface Remolque {
  _attributes: RemolqueAttr;
}
export interface RemolqueAttr {
  SubTipoRem: string;
  Placa: string;
}

export interface CrtPrtSeguros {
  _attributes: CrtPrtSegurosAttr;
}

export interface CrtPrtSegurosAttr {
  AseguraRespCivil: string;
  PolizaRespCivil: string;
  AseguraMedAmbiente?: string;
  PolizaMedAmbiente?: string;
  AseguraCarga?: string;
  PolizaCarga?: string;
  PrimaSeguro?: string;
}
export interface CrtPrtIdentificacionVehicular {
  _attributes: CrtPrtIdentificacionVehicularAttr;
}
export interface CrtPrtIdentificacionVehicularAttr {
  ConfigVehicular: string;
  PlacaVM: string;
  AnioModeloVM: string;
}
export interface CPM20AutotransporteAttr {
  PermSCT: string;
  NumPermisoSCT: string;
}

export interface CPM20TFerroviario {
  _attributes?: XmlCPM20TFerroviarioAttribute;
  'cartaporte20:DerechosDePaso': DerechosDePaso[];
  'cartaporte20:Carro': Carro[];
}
export interface Carro {
  _attributes: CarroAttr;
  'cartaporte20:Contenedor': CarroContenedor[];
}

export interface CarroContenedor {
  _attributes: CarroContenedorAttr;
}
export interface CarroContenedorAttr {
  TipoContenedor: string;
  PesoContenedorVacio: string;
  PesoNetoMercancia: string;
}
export interface CarroAttr {
  TipoCarro: string;
  MatriculaCarro: string;
  GuiaCarro: string;
  ToneladasNetasCarro: string;
}
export interface DerechosDePaso {
  _attributes: DerechosDePasoAttr;
}
export interface DerechosDePasoAttr {
  TipoDerechoDePaso: string;
  KilometrajePagado: string;
}
export interface XmlCPM20TFerroviarioAttribute {
  TipoDeServicio: string;
  NombreAseg?: string;
  NumPolizaSeguro?: string;
  Concesionario?: string;
}

export interface CPMT20Aereo {
  _attributes?: XmlCPM20TAereoAttribute;
}

export interface XmlCPM20TAereoAttribute extends Attributes {
  PermSCT: string;
  NumPermisoSCT: string;
  MatriculaAeronave?: string;
  NombreAseg?: string;
  NumPolizaSeguro?: string;
  NumeroGuia: string;
  LugarContrato?: string;
  CodigoTransportista: string;
  RFCEmbarcador?: string;
  NumRegIdTribEmbarc?: string;
  ResidenciaFiscalEmbarc?: string;
  NombreEmbarcador?: string;
}

export interface CPM20TMaritimo {
  _attributes?: XmlCPM20TMaritimoAttribute;
  'cartaporte20:Contenedor': CPMTMaritimoCont[];
}

export interface CPMTMaritimoCont {
  _attributes?: XmlCPMTMaritimoConAttribute;
}

export interface XmlCPMTMaritimoConAttribute extends Attributes {
  MatriculaContenedor: string;
  TipoContenedor: string;
  NumPrecinto?: string;
}

export interface XmlCPM20TMaritimoAttribute extends Attributes {
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
  'cartaporte:Remolque': CPMAFRemolque[];
}

export interface CPMAFRemolque {
  _attributes?: XmlCPMAFRemolqueAttribute;
}

export interface XmlCPMAFRemolqueAttribute {
  SubTipoRem: string;
  Placa: string;
}

export interface CPMAFIVehicular {
  _attributes?: XmlCPMAFIVehicularAttribute;
}

export interface XmlCPMAFIVehicularAttribute {
  ConfigVehicular: string;
  PlacaVM: string;
  AnioModeloVM: string;
}

export interface XmlCPMAFederalAttribute {
  PermSCT: string;
  NumPermisoSCT: string;
  NombreAseg: string;
  NumPolizaSeguro: string;
}

export interface CP20Mercancia {
  _attributes?: XmlCP20MercanciaAttribute;
  'cartaporte20:Pedimentos': CrtPrt20Pedimentos[];
  'cartaporte20:GuiasIdentificacion': CrtPrt20GuiaIdentificacion[];
  'cartaporte20:CantidadTransporta': CrtPrt20CantidadTransporta[];
  'cartaporte20:DetalleMercancia': CrtPrt20DetalleMercancia[];
}

export interface CrtPrt20DetalleMercancia {
  _attributes: CrtPrt20DetalleMercanciaAttr;
}

export interface CrtPrt20DetalleMercanciaAttr {
  UnidadPesoMerc: string;
  PesoBruto: string;
  PesoNeto: string;
  PesoTara: string;
  NumPiezas?: string;
}
export interface CrtPrt20CantidadTransporta {
  _attributes: CrtPrt20CantidadTransportaAttr;
}

export interface CrtPrt20CantidadTransportaAttr {
  Cantidad: string;
  IDOrigen: string;
  IDDestino: string;
  CvesTransporte?: string;
}

export interface CrtPrt20GuiaIdentificacion {
  _attributes: CrtPrt20GuiaIdAttr;
}
export interface CrtPrt20GuiaIdAttr {
  NumeroGuiaIdentificacion: string;
  DescripGuiaIdentificacion: string;
  PesoGuiaIdentificacion: string;
}
export interface CrtPrt20Pedimentos {
  _attributes: CrtPrt20PedimentosAttr;
}
export interface CrtPrt20PedimentosAttr {
  Pedimento: string;
}
export interface CPMDMercancia {
  _attributes?: CPMDMercanciaAttribute;
}

export interface CPMDMercanciaAttribute {
  UnidadPeso: string;
  PesoBruto: string;
  PesoNeto: string;
  PesoTara: string;
  NumPiezas?: string;
}

export interface CPMCTransporta {
  _attributes?: CPMCTransportaAttribute;
}

export interface CPMCTransportaAttribute {
  Cantidad: string;
  IDOrigen: string;
  IDDestino: string;
  CvesTransporte?: string;
}

export interface XmlCP20MercanciaAttribute {
  BienesTransp: string;
  ClaveSTCC?: string;
  Descripcion: string;
  Cantidad: string;
  ClaveUnidad: string;
  Unidad?: string;
  Dimensiones?: string;
  MaterialPeligroso?: string;
  CveMaterialPeligroso?: string;
  Embalaje?: string;
  DescripEmbalaje?: string;
  PesoEnKg: string;
  ValorMercancia?: string;
  Moneda?: string;
  FraccionArancelaria?: string;
  UUIDComercioExt?: string;
}

export interface XmlCP20MercanciasAttribute {
  PesoBrutoTotal: string;
  UnidadPeso: string;
  PesoNetoTotal?: string;
  NumTotalMercancias: string;
  CargoPorTasacion?: string;
}

export interface XmlCartaPorte20Attribute {
  Version: string;
  TranspInternac: string;
  EntradaSalidaMerc?: string;
  PaisOrigenDestino?: string;
  ViaEntradaSalida?: string;
  TotalDistRec?: string;
}

export interface CP20Ubicacion {
  _attributes?: XmlCP20UbicacionAttribute;
  /* 'cartaporte:Origen': CPUOrigen;
  'cartaporte:Destino': CPUDestino; */
  'cartaporte20:Domicilio'?: CPDomicilio[];
}

export interface XmlCP20UbicacionAttribute {
  TipoUbicacion: string;
  IDUbicacion?: string;
  RFCRemitenteDestinatario: string;
  NombreRemitenteDestinatario?: string;
  NumRegIdTrib?: string;
  ResidenciaFiscal?: string;
  NumEstacion?: string;
  NavegacionTrafico?: string;
  FechaHoraSalidaLlegada: string;
  TipoEstacion?: string;
  DistanciaRecorrida?: string;
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
  FechaHoraSalida: string;
}

export interface XmlCPUDestinoAttribute extends ShareAttributeU {
  IDDestino?: string;
  RFCDestinatario?: string;
  NombreDestinatario?: string;
  FechaHoraProgLlegada: string;
}

interface ShareAttributeU {
  NumRegIdTrib?: string;
  ResidenciaFiscal?: string;
  NumEstacion?: string;
  NombreEstacion?: string;
  NavegacionTrafico?: string;
}
