
import { Complemento } from './Complemento';
import { XmlCartaPorte20 } from './4.0/cartaporte20/types/CartaPorte20.xslt';
import { XmlIedu } from './4.0/iedu/type/iedu.xslt';

export interface ComplementoKey {
  [key: string]: any;
}

export interface XmlComplements extends ComplementoKey {
  // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/ecc/ecc.xml
  // tslint:disable-next-line:max-line-length
  // https://www.sat.gob.mx/consulta/21885/genera-tus-facturas-electronicas-con-el-complemento-para-el-estado-de-cuenta-de-combustibles-para-monederos-electronicos
  'ecc11:EstadoDeCuentaCombustible'?: any;
  //  https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/donatarias/donatarias.xml
  // https://www.sat.gob.mx/consulta/54115/facturas-electronicas-con-leyendas-fiscalestarias.xml
  'donat:Donatarias'?: Complemento;
  // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/divisas/divisas.xml
  // https://www.sat.gob.mx/consulta/53967/genera-tus-facturas-electronicas-con-el-complemento-para-compraventa-de-divisas
  'divisas:Divisas'?: Complemento;
  // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/imp_locales/imp_local.xml
  // https://www.sat.gob.mx/consulta/18002/genera-tus-facturas-electronicas-con-la-informacion-de-otros-derechos-e-impuestos
  'implocal:ImpuestosLocales'?: Complemento;
  // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/leyendas_fiscales/leyendas_fiscales.xml
  // https://www.sat.gob.mx/consulta/54115/facturas-electronicas-con-leyendas-fiscales
  'leyendasFisc:LeyendasFiscales'?: Complemento;
  // https://www.sat.gob.mx/consulta/54191/facturas-electronicas-de-personas-fisicas-integrantes-de-coordinados
  'pfic:PFintegranteCoordinado'?: Complemento;
  // https://www.sat.gob.mx/consulta/54366/emite-facturas-electronicas-para-el-manejo-de-datos-de-turistas-o-pasajeros-extranjeros
  'tpe:TuristaPasajeroExtranjero'?: Complemento;
  // tslint:disable-next-line:max-line-length
  // https://www.sat.gob.mx/consulta/85904/genera-facturas-electronicas-con-el-complemento-para-el-uso-del-sistema-de-pagos-electronicos-interbancarios
  'spei:Complemento_SPEI'?: Complemento;
  // https://www.sat.gob.mx/consulta/76197/complemento-para-factura-electronica
  'detallista:detallista'?: Complemento;
  // https://www.sat.gob.mx/consulta/52697/complemento-concepto-para-factura-electronica
  'registrofiscal:CFDIRegistroFiscal'?: Complemento;
  // http://omawww.sat.gob.mx/Complemento/Paginas/complemento_nomina.htm
  'nomina12:Nomina'?: Complemento;
  // https://www.sat.gob.mx/consulta/70751/genera-facturas-electronicas-con-el-complemento-por-la-facilidad-de-pago-en-especie
  'pagoenespecie:PagoEnEspecie'?: Complemento;
  // https://www.sat.gob.mx/consulta/43376/genera-facturas-electronicas-con-informacion-del-servicio-de-monedero-electronico-de-vales-de-despensa
  'valesdedespensa:ValesDeDespensa'?: Complemento;
  'consumodecombustibles11:ConsumoDeCombustibles'?: Complemento;
  'aerolineas:Aerolineas'?: Complemento;
  // https://www.sat.gob.mx/consulta/33510/genera-facturas-electronicas-con-el-complemento-de-notarios
  'notariospublicos:NotariosPublicos'?: Complemento;
  // https://www.sat.gob.mx/consulta/45480/genera-facturas-electronicas-con-el-complemento-de-vehiculos-usados
  'vehiculousado:VehiculoUsado'?: Complemento;
  // https://www.sat.gob.mx/consulta/18158/si-prestas-servicios-parciales-de-construccion,-genera-facturas-electronicas-con-este-complemento
  'servicioparcial:parcialesconstruccion'?: Complemento;
  'decreto:renovacionysustitucionvehiculos'?: Complemento;
  'destruccion:certificadodedestruccion'?: Complemento;
  // https://www.sat.gob.mx/consulta/92945/si-realizas-venta-de-obras-de-arte-plasticas-y-antiguedades-genera-tus-facturas-electronicas-con-este-complemento
  'obrasarte:obrasarteantiguedades'?: Complemento;
  'ine:INE'?: Complemento;
  'cce11:ComercioExterior'?: Complemento;
  // https://www.sat.gob.mx/consultas/92764/comprobante-de-recepcion-de-pagos
  // http://omawww.sat.gob.mx/tramitesyservicios/Paginas/recepcion_de_pagos.htm
  // http://omawww.sat.gob.mx/tramitesyservicios/Paginas/documentos/Pagos10.pdf
  'pago20:Pagos'?: Complemento;
  // https://www.sat.gob.mx/consulta/50282/conoce-los-complementos-para-consorcios-en-materia-de-hidrocarburos
  'gceh:GastosHidrocarburos'?: Complemento;
  'ieeh:IngresosHidrocarburos'?: Complemento;
  'tfd:TimbreFiscalDigital'?: Complemento;
}

export interface XmlComplementsConcepts extends ComplementoKey {
  'iedu:instEducativas'?: XmlIedu;
  'ventavehiculos:VentaVehiculos'?: any;
  // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/venta_vehiculos/venta_vehiculos.xml
  'terceros:PorCuentadeTerceros'?: any; // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/terceros/terceros.xml
  // deprecated
  //  https://www.sat.gob.mx/consulta/75154/complemento-concepto-para-acreditamiento-del-ieps-
  // 'aieps:acreditamientoIEPS'?: any;
  // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/acreditamiento_ieps/aieps.xml
}

export declare type ComlementType = Complemento;
export declare type ComplementTypeXml<T> = XmlCartaPorte20| T;
export declare type ComlementTypeConcept = Complemento;

export interface ComplementsReturn<T = any> extends ComplementProperties {
  complement: ComplementTypeXml<T>;
}

export interface ComplementProperties {
  key: string;
  xmlns: string;
  xmlnskey: string;
  schemaLocation: string[];
}

export interface XmlComplementsAttributes extends ComplementoKey {
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

export interface XmlnsComplementsLinks extends ComplementoKey {
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
