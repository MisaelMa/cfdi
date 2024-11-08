export interface Schema {
  path: string;
}

export interface SaxonHe {
  binary: string;
}

export interface XsltSheet {
  path: string;
}

export interface Config {
  debug?: boolean;
  compact?: boolean;
  customTags?: any;
  schema?: Schema
  saxon?: SaxonHe
  xslt?: XsltSheet // @  Extensible Stylesheet Language Transformation
}


export enum InvoiceType {
  INGRESO = 'I',
  EGRESO = 'E',
  TRASLADO = 'T',
  NOMINA = 'N',
  PAGO = 'P',
}

export enum InvoiceRelation {
  NOTA_DE_CREDITO = '01',
  NOTA_DE_DEBITO = '02',
  DELOVUCION_DE_MERCANCIA = '03',
  SUSTITUCION_DE_CFDI_PREVIOS = '04',
  TRASLADOS_DE_MERCANCIA_FACTURADOS_PREVIAMENTE = '05',
  FACTURA_POR_TRASLADOS_PREVIOS = '06',
  APLICACION_DE_ANTICIPO = '07',
  PAGOS_EN_PARCIALIDADES = '08',
  PAGOS_DIFERIDOS = '09',
}

export enum TaxSystem {
  GENERAL_LEY_DE_PERSONAS_MORALES = '601',
  PERSONAS_MORALES_CON_FINES_NO_LUCRATIVOS = '603',
  SUELDOS_Y_SALARIOS = '605',
  ARRENDAMIENTO = '606',
  DEMAS_INGRESOS = '608',
  CONSOLIDACION = '609',
  RESIDENTES_EN_EL_EXTRANJERO = '610',
  INGRESOS_POR_DIVIDENDOS_SOCIOS_Y_ACCIONISTAS = '611',
  PERSONAS_FISICAS_CON_ACTIVIDADES_EMPRESARIALES_Y_PROFESIONALES = '612',
  INGRESOS_POR_INTERESES = '614',
  SIN_OBLIGACIONES_FISCALES = '616',
  SOCIEDADES_COOPERATIVAS_DE_PRODUCCION = '620',
  REGIMEN_DE_INCORPORACION_FISCAL = '621',
  ACTIVIDADES_AGRICOLAS_GANADERAS_SILVICOLAS_Y_PESQUERAS = '622',
  OPCIONAL_PARA_GRUPOS_DE_SOCIEDADES = '623',
  COORDINADOS = '624',
  HIDROCARBUROS = '628',
  REGIMEN_DE_ENAJENACION_O_ADQUISICION_DE_BIENES = '607',
  PREFERENTES_Y_EMPRESAS_MULTINACIONALES = '629',
  ENAJENACION_DE_ACCIONES_EN_BOLSA_DE_VALORES = '630',
  REGIMEN_DE_LOS_INGRESOS_POR_OBTENCION_DE_PREMIOS = '615',
}
