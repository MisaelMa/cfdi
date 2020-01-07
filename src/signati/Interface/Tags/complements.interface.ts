import {XmlIedu} from '../Complements/iedu.interface';
import {XmlIne} from '../Complements/ine.interface';

export interface anyKey {
    [key: string]: any
}

export interface XmlComplements extends anyKey {
    // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/ecc/ecc.xml
    // tslint:disable-next-line:max-line-length
    // https://www.sat.gob.mx/consulta/21885/genera-tus-facturas-electronicas-con-el-complemento-para-el-estado-de-cuenta-de-combustibles-para-monederos-electronicos
    'ecc11:EstadoDeCuentaCombustible'?: any;
    //  https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/donatarias/donatarias.xml
    // https://www.sat.gob.mx/consulta/54115/facturas-electronicas-con-leyendas-fiscalestarias.xml
    'donat:Donatarias'?: any;
    // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/divisas/divisas.xml
    // https://www.sat.gob.mx/consulta/53967/genera-tus-facturas-electronicas-con-el-complemento-para-compraventa-de-divisas
    'divisas:Divisas'?: any;
    // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/imp_locales/imp_local.xml
    // https://www.sat.gob.mx/consulta/18002/genera-tus-facturas-electronicas-con-la-informacion-de-otros-derechos-e-impuestos
    'implocal:ImpuestosLocales'?: any;
    // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/leyendas_fiscales/leyendas_fiscales.xml
    // https://www.sat.gob.mx/consulta/54115/facturas-electronicas-con-leyendas-fiscales
    'leyendasFisc:LeyendasFiscales'?: any;
    // https://www.sat.gob.mx/consulta/54191/facturas-electronicas-de-personas-fisicas-integrantes-de-coordinados
    'pfic:PFintegranteCoordinado'?: any;
    // https://www.sat.gob.mx/consulta/54366/emite-facturas-electronicas-para-el-manejo-de-datos-de-turistas-o-pasajeros-extranjeros
    'tpe:TuristaPasajeroExtranjero'?: any;
    // tslint:disable-next-line:max-line-length
    // https://www.sat.gob.mx/consulta/85904/genera-facturas-electronicas-con-el-complemento-para-el-uso-del-sistema-de-pagos-electronicos-interbancarios
    'spei:Complemento_SPEI'?: any;
    // https://www.sat.gob.mx/consulta/76197/complemento-para-factura-electronica
    'detallista:detallista'?: any;
    // https://www.sat.gob.mx/consulta/52697/complemento-concepto-para-factura-electronica
    'registrofiscal:CFDIRegistroFiscal'?: any;
    // http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_nomina.htm
    'nomina12:Nomina'?: any;
    // https://www.sat.gob.mx/consulta/70751/genera-facturas-electronicas-con-el-complemento-por-la-facilidad-de-pago-en-especie
    'pagoenespecie:PagoEnEspecie'?: any;
    // https://www.sat.gob.mx/consulta/43376/genera-facturas-electronicas-con-informacion-del-servicio-de-monedero-electronico-de-vales-de-despensa
    'valesdedespensa:ValesDeDespensa'?: any;
    // https://www.sat.gob.mx/consulta/41426/genera-facturas-electronicas-con-informacion-del-consumo-de-combustible-con-monedero-electronico
    'consumodecombustibles11:ConsumoDeCombustibles'?: any;
    // https://www.sat.gob.mx/consulta/99314/genera-facturas-electronicas-para-el-manejo-de-datos-de-aerolineas-de-pasajeros
    'aerolineas:Aerolineas'?: any;
    // https://www.sat.gob.mx/consulta/33510/genera-facturas-electronicas-con-el-complemento-de-notarios
    'notariospublicos:NotariosPublicos'?: any;
    // https://www.sat.gob.mx/consulta/45480/genera-facturas-electronicas-con-el-complemento-de-vehiculos-usados
    'vehiculousado:VehiculoUsado'?: any;
    // https://www.sat.gob.mx/consulta/18158/si-prestas-servicios-parciales-de-construccion,-genera-facturas-electronicas-con-este-complemento
    'servicioparcial:parcialesconstruccion'?: any;
    // tslint:disable-next-line:max-line-length
    // https://www.sat.gob.mx/consulta/05041/si-recibes-un-estimulos-por-la-renovacion-del-parque-vehicular-del-autotransporte-genera-tus-facturas-con-complemento-de-renovacion-y-sustitucion-de-vehiculo
    'decreto:renovacionysustitucionvehiculos'?: any;
    // sat.gob.mx/consulta/44950/genera-tus-facturas-electronicas-con-el-complemento-de-certificado-de-destruccion
    'destruccion:certificadodedestruccion'?: any;
    // tslint:disable-next-line:max-line-length
    // https://www.sat.gob.mx/consulta/92945/si-realizas-venta-de-obras-de-arte-plasticas-y-antiguedades-genera-tus-facturas-electronicas-con-este-complemento
    'obrasarte:obrasarteantiguedades'?: any;
    // https://www.sat.gob.mx/consulta/09695/genera-tus-facturas-con-el-complemento-del-ine-version-1.1
    'ine:INE': XmlIne;
    // https://www.sat.gob.mx/consultas/61165/comprobante-de-comercio-exterior
    // http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_comercio_exterior.htm
    // http://omawww.sat.gob.mx/tramitesyservicios/Paginas/documentos/ComercioExterior11.pdf
    'cce11:ComercioExterior'?: any;
    // https://www.sat.gob.mx/consultas/92764/comprobante-de-recepcion-de-pagos
    // http://omawww.sat.gob.mx/tramitesyservicios/Paginas/recepcion_de_pagos.htm
    // http://omawww.sat.gob.mx/tramitesyservicios/Paginas/documentos/Pagos10.pdf
    'pago10:Pagos'?: any;
    // https://www.sat.gob.mx/consulta/50282/conoce-los-complementos-para-consorcios-en-materia-de-hidrocarburos
    'gceh:GastosHidrocarburos'?: any;
}

export interface XmlComplementsConcepts extends anyKey {
    'iedu:instEducativas'?: XmlIedu;
    'ventavehiculos:VentaVehiculos'?: any;
    // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/venta_vehiculos/venta_vehiculos.xml
    'terceros:PorCuentadeTerceros'?: any; // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/terceros/terceros.xml
    // deprecated
    // 'aieps:acreditamientoIEPS'?: any;
    // https://github.com/facturacionmoderna/Comprobantes/blob/master/complementos/CFDI/acreditamiento_ieps/aieps.xml
}
