import {
  Cce11,
  ConsumoDeCombustibles11,
  Decreto,
  Destruccion,
  Divisas,
  Donat,
  Gceh,
  Iedu,
  Ieeh,
  Implocal,
  LeyendaFisc,
  ObrasArte,
  PagoEnEspecie,
  Pfic,
  RegistroFiscal,
  ServicioParcial,
  Spei,
  Tfd,
  Tpe,
  ValesDeDespensa,
  VehiculoUsado,
} from '../..';
import {
  XmlCce11,
  XmlConsumodecombustibles,
  XmlDecreto,
  XmlDestruccion,
  XmlDivisas,
  XmlDonat,
  XmlGceh,
  XmlIeeh,
  XmlImplocal,
  XmlLeyendasFiscales,
  XmlObrasarte,
  XmlPagoenespecie,
  XmlPfic,
  XmlRegistrofiscal,
  XmlServicioparcial,
  XmlSpei,
  XmlTfd,
  XmlTpe,
  XmlValesDeDespensa,
  XmlVehiculousado,
} from '../complements';

import { Complemento } from '../../Complemento';
import { XmlAerolineas } from '../../4.0/aerolineas/type/aerolineas.xslt';
import { XmlCartaPorte20 } from '../../4.0/cartaporte20/types/CartaPorte20.xslt';
import { XmlIedu } from '../../4.0/iedu/type/iedu.xslt';
import { XmlIne } from '../../4.0/ine/type/ine.xslt';
import { XmlPagos20 } from '../../4.0/pago20/types/pago20.xslt';

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
  'pago20:Pagos'?: XmlPagos20;
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
  | Cce11
  | ConsumoDeCombustibles11
  | Decreto
  | Destruccion
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
  | Tfd
  | Complemento;
export declare type ComplementTypeXml<T> =
  | XmlCce11
  | XmlConsumodecombustibles
  | XmlDecreto
  | XmlDestruccion
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
  | XmlCartaPorte20
  | T;
export declare type ComlementTypeConcept = Iedu;

export interface ComplementsReturn<T = any> extends ComplementProperties {
  complement: ComplementTypeXml<T>;
}

export interface ComplementProperties {
  key: string;
  xmlns: string;
  xmlnskey: string;
  schemaLocation: string[];
}

export interface XmlComplementsAttributes extends AnyKey {
  'xmlns:cfdi'?: string; // http://www.sat.gob.mx/cfd/3
  'xmlns:ecc11'?: string; // http://www.sat.gob.mx/EstadoDeCuentaCombustible
  'xmlns:donat'?: string; // http://www.sat.gob.mx/donat
  'xmlns:divisas'?: string; // http://www.sat.gob.mx/divisas
  'xmlns:implocal'?: string; // http://www.sat.gob.mx/implocal
  'xmlns:leyendasFisc'?: string; // http://www.sat.gob.mx/leyendasFiscales
  'xmlns:pfic'?: string; // http://www.sat.gob.mx/pfic
  'xmlns:tpe'?: string; // http://www.sat.gob.mx/TuristaPasajeroExtranjero
  'xmlns:spei'?: string; // http://www.sat.gob.mx/spei
  'xmlns:detallista'?: string; // http://www.sat.gob.mx/detallista
  'xmlns:registrofiscal'?: string; // http://www.sat.gob.mx/registrofiscal
  'xmlns:nomina12'?: string; // http://www.sat.gob.mx/nomina12
  'xmlns:pagoenespecie'?: string; // http://www.sat.gob.mx/pagoenespecie
  'xmlns:valesdedespensa'?: string; // http://www.sat.gob.mx/valesdedespensa
  'xmlns:consumodecombustibles11'?: string; // http://www.sat.gob.mx/ConsumoDeCombustibles11
  'xmlns:aerolineas'?: string; // ="http://www.sat.gob.mx/aerolineas"
  'xmlns:notariospublicos'?: string; // http://www.sat.gob.mx/notariospublicos
  'xmlns:vehiculousado'?: string; // http://www.sat.gob.mx/vehiculousado
  'xmlns:servicioparcial'?: string; // http://www.sat.gob.mx/servicioparcialconstruccion
  'xmlns:decreto'?: string; // http://www.sat.gob.mx/renovacionysustitucionvehiculos
  'xmlns:destruccion'?: string; // http://www.sat.gob.mx/certificadodestruccion
  'xmlns:obrasarte'?: string; //  http://www.sat.gob.mx/arteantiguedades
  'xmlns:ine'?: string; // http://www.sat.gob.mx/ine
  'xmlns:cce11'?: string; // http://www.sat.gob.mx/ComercioExterior11
  'xmlns:pago20'?: string; // http://www.sat.gob.mx/Pagos
  'xmlns:gceh'?: string; // http://www.sat.gob.mx/GastosHidrocarburos10
  /* ########XmlComplementsConcepts#########3 */
  'xmlns:iedu'?: string; // http://www.sat.gob.mx/iedu
  'xmlns:ventavehiculos'?: string; // http://www.sat.gob.mx/ventavehiculos
  'xmlns:terceros'?: string; // http://www.sat.gob.mx/terceros
  'xmlns:aieps'?: string; // http://www.sat.gob.mx/acreditamiento
}

export interface XmlnsComplementsLinks extends AnyKey {
  /* ########XmlComplementsConcepts#########3 */
  ecc11?: string; // http://www.sat.gob.mx/EstadoDeCuentaCombustible
  donat?: string; // http://www.sat.gob.mx/donat
  divisas?: string; // http://www.sat.gob.mx/divisas
  implocal?: string; // http://www.sat.gob.mx/implocal
  leyendasFisc?: string; // http://www.sat.gob.mx/leyendasFiscales
  pfic?: string; // http://www.sat.gob.mx/pfic
  tpe?: string; // http://www.sat.gob.mx/TuristaPasajeroExtranjero
  spei?: string; // http://www.sat.gob.mx/spei
  detallista?: string; // http://www.sat.gob.mx/detallista
  registrofiscal?: string; // http://www.sat.gob.mx/registrofiscal
  nomina12?: string; // http://www.sat.gob.mx/nomina12
  pagoenespecie?: string; // http://www.sat.gob.mx/pagoenespecie
  valesdedespensa?: string; // http://www.sat.gob.mx/valesdedespensa
  consumodecombustibles11?: string; // http://www.sat.gob.mx/ConsumoDeCombustibles11
  aerolineas?: string; // ="http://www.sat.gob.mx/aerolineas"
  notariospublicos?: string; // http://www.sat.gob.mx/notariospublicos
  vehiculousado?: string; // http://www.sat.gob.mx/vehiculousado
  servicioparcial?: string; // http://www.sat.gob.mx/servicioparcialconstruccion
  decreto?: string; // http://www.sat.gob.mx/renovacionysustitucionvehiculos
  destruccion?: string; // http://www.sat.gob.mx/certificadodestruccion
  obrasarte?: string; // http://www.sat.gob.mx/arteantiguedades
  ine?: string; // http://www.sat.gob.mx/ine
  cce11?: string; // http://www.sat.gob.mx/ComercioExterior11
  pago20?: string; // http://www.sat.gob.mx/Pagos
  gceh?: string; // http://www.sat.gob.mx/GastosHidrocarburos10
  /* ########XmlComplementsConcepts#########3 */
  iedu?: string; // http://www.sat.gob.mx/iedu
  ventavehiculos?: string; // http://www.sat.gob.mx/ventavehiculos
  terceros?: string; // http://www.sat.gob.mx/terceros
  aieps?: string; // http://www.sat.gob.mx/acreditamiento
}
