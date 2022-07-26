import {
  RegistroFiscal,
  Cce11,
  ConsumoDeCombustibles11,
  Decreto,
  Ine,
  Iedu,
  Pago10,
  Donat,
  LeyendaFisc,
  PagoEnEspecie,
  Spei,
  ServicioParcial,
  VehiculoUsado,
  Gceh,
  Ieeh,
  Implocal,
  Pfic,
  Tfd,
  Aerolineas,
  Destruccion,
  ObrasArte,
  ValesDeDespensa,
  Divisas,
  Tpe,
} from '../../complements';
import {
  XmlIne,
  XmlSpei,
  XmlPagoenespecie,
  XmlVehiculousado,
  XmlServicioparcial,
  XmlValesDeDespensa,
  XmlObrasarte,
  XmlTpe,
  XmlDivisas,
  XmlCartaPorte,
  XmlLeyendasFiscales,
  XmlIeeh,
  XmlGceh,
  XmlImplocal,
  XmlPfic,
  XmlTfd,
  XmlIedu,
  XmlRegistrofiscal,
  XmlDonat,
  XmlAerolineas,
  XmlPagos10,
  XmlCce11,
  XmlConsumodecombustibles,
  XmlDecreto,
  XmlDestruccion,
} from '../complements';

export interface AnyKey {
  [key: string]: any;
}

export interface XmlComplements extends AnyKey {
  // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/ecc/ecc.xml
  // tslint:disable-next-line:max-line-length
  // https://www.sat.gob.mx/consulta/21885/genera-tus-facturas-electronicas-con-el-complemento-para-el-estado-de-cuenta-de-combustibles-para-monederos-electronicos
  'ecc11:EstadoDeCuentaCombustible'?: any;
  //  https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/donatarias/donatarias.xml
  // https://www.sat.gob.mx/consulta/54115/facturas-electronicas-con-leyendas-fiscalestarias.xml
  'donat:Donatarias'?: XmlDonat;
  // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/divisas/divisas.xml
  // https://www.sat.gob.mx/consulta/53967/genera-tus-facturas-electronicas-con-el-complemento-para-compraventa-de-divisas
  'divisas:Divisas'?: XmlDivisas;
  // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/imp_locales/imp_local.xml
  // https://www.sat.gob.mx/consulta/18002/genera-tus-facturas-electronicas-con-la-informacion-de-otros-derechos-e-impuestos
  'implocal:ImpuestosLocales'?: any;
  // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/leyendas_fiscales/leyendas_fiscales.xml
  // https://www.sat.gob.mx/consulta/54115/facturas-electronicas-con-leyendas-fiscales
  'leyendasFisc:LeyendasFiscales'?: XmlLeyendasFiscales;
  // https://www.sat.gob.mx/consulta/54191/facturas-electronicas-de-personas-fisicas-integrantes-de-coordinados
  'pfic:PFintegranteCoordinado'?: any;
  // https://www.sat.gob.mx/consulta/54366/emite-facturas-electronicas-para-el-manejo-de-datos-de-turistas-o-pasajeros-extranjeros
  'tpe:TuristaPasajeroExtranjero'?: XmlTpe;
  // tslint:disable-next-line:max-line-length
  // https://www.sat.gob.mx/consulta/85904/genera-facturas-electronicas-con-el-complemento-para-el-uso-del-sistema-de-pagos-electronicos-interbancarios
  'spei:Complemento_SPEI'?: XmlSpei;
  // https://www.sat.gob.mx/consulta/76197/complemento-para-factura-electronica
  'detallista:detallista'?: any;
  // https://www.sat.gob.mx/consulta/52697/complemento-concepto-para-factura-electronica
  'registrofiscal:CFDIRegistroFiscal'?: XmlRegistrofiscal;
  // http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_nomina.htm
  'nomina12:Nomina'?: any;
  // https://www.sat.gob.mx/consulta/70751/genera-facturas-electronicas-con-el-complemento-por-la-facilidad-de-pago-en-especie
  'pagoenespecie:PagoEnEspecie'?: XmlPagoenespecie;
  // https://www.sat.gob.mx/consulta/43376/genera-facturas-electronicas-con-informacion-del-servicio-de-monedero-electronico-de-vales-de-despensa
  'valesdedespensa:ValesDeDespensa'?: XmlValesDeDespensa;
  'consumodecombustibles11:ConsumoDeCombustibles'?: XmlConsumodecombustibles;
  'aerolineas:Aerolineas'?: XmlAerolineas;
  // https://www.sat.gob.mx/consulta/33510/genera-facturas-electronicas-con-el-complemento-de-notarios
  'notariospublicos:NotariosPublicos'?: any;
  // https://www.sat.gob.mx/consulta/45480/genera-facturas-electronicas-con-el-complemento-de-vehiculos-usados
  'vehiculousado:VehiculoUsado'?: XmlVehiculousado;
  // https://www.sat.gob.mx/consulta/18158/si-prestas-servicios-parciales-de-construccion,-genera-facturas-electronicas-con-este-complemento
  'servicioparcial:parcialesconstruccion'?: XmlServicioparcial;
  'decreto:renovacionysustitucionvehiculos'?: XmlDecreto;
  'destruccion:certificadodedestruccion'?: XmlDestruccion;
  // https://www.sat.gob.mx/consulta/92945/si-realizas-venta-de-obras-de-arte-plasticas-y-antiguedades-genera-tus-facturas-electronicas-con-este-complemento
  'obrasarte:obrasarteantiguedades'?: XmlObrasarte;
  'ine:INE'?: XmlIne;
  'cce11:ComercioExterior'?: XmlCce11;
  // https://www.sat.gob.mx/consultas/92764/comprobante-de-recepcion-de-pagos
  // http://omawww.sat.gob.mx/tramitesyservicios/Paginas/recepcion_de_pagos.htm
  // http://omawww.sat.gob.mx/tramitesyservicios/Paginas/documentos/Pagos10.pdf
  'pago10:Pagos'?: XmlPagos10;
  // https://www.sat.gob.mx/consulta/50282/conoce-los-complementos-para-consorcios-en-materia-de-hidrocarburos
  'gceh:GastosHidrocarburos'?: any;
  'ieeh:IngresosHidrocarburos'?: any;
  'tfd:TimbreFiscalDigital'?: XmlTfd;
}

export interface XmlComplementsConcepts extends AnyKey {
  'iedu:instEducativas'?: XmlIedu;
  'ventavehiculos:VentaVehiculos'?: any;
  // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/venta_vehiculos/venta_vehiculos.xml
  'terceros:PorCuentadeTerceros'?: any; // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/terceros/terceros.xml
  // deprecated
  //  https://www.sat.gob.mx/consulta/75154/complemento-concepto-para-acreditamiento-del-ieps-
  // 'aieps:acreditamientoIEPS'?: any;
  // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/acreditamiento_ieps/aieps.xml
}

export declare type ComlementType =
  | Aerolineas
  | Cce11
  | ConsumoDeCombustibles11
  | Decreto
  | Destruccion
  | Ine
  | Pago10
  | RegistroFiscal
  | Donat
  | ObrasArte
  | ValesDeDespensa
  | Divisas
  | Tpe
  | LeyendaFisc
  | PagoEnEspecie
  | Spei
  | ServicioParcial
  | VehiculoUsado
  | Ieeh
  | Gceh
  | Implocal
  | Pfic
  | Tfd;
export declare type ComplementTypeXml =
  | XmlAerolineas
  | XmlCce11
  | XmlConsumodecombustibles
  | XmlDecreto
  | XmlDestruccion
  | XmlIne
  | XmlPagos10
  | XmlIedu
  | XmlRegistrofiscal
  | XmlDonat
  | XmlObrasarte
  | XmlValesDeDespensa
  | XmlDivisas
  | XmlTpe
  | XmlLeyendasFiscales
  | XmlPagoenespecie
  | XmlSpei
  | XmlServicioparcial
  | XmlVehiculousado
  | XmlIeeh
  | XmlGceh
  | XmlImplocal
  | XmlPfic
  | XmlTfd
  | XmlCartaPorte;
export declare type ComlementTypeConcept = Iedu;

export interface ComplementsReturn extends ComplementProperties {
  complement: ComplementTypeXml;
}

export interface ComplementProperties {
  key: string;
  xmlns: string;
  xmlnskey: string;
  schemaLocation: string[];
}
