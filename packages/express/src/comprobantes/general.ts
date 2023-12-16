import {
  CFDI,
  CFDIAttributes,
  Concepts,
  Emisor,
  Impuestos,
  ObjetoImpEnum,
  Receptor,
  Relacionado,
} from '@cfdi/xml';
import {
  Destruccion,
  Iedu,
  Pago10,
  Pago10Impuestos,
  Pago10Relacionado,
} from '@cfdi/complementos';

import { XmlIeduAttribute } from '@cfdi/complementos';

export const general = async (config: any): Promise<CFDI> => {
  const { cer, key, styleSheet } = config;
  const comprobanteAttribute: CFDIAttributes = {
    Serie: 'E',
    // eslint-disable-next-line
    Folio: 'ACACUN-27',
    Fecha: '2014-07-08T12:16:50',
    Sello: '',
    FormaPago: '01',
    NoCertificado: '',
    Certificado: '',
    condicionesDePago: 'Contado',
    SubTotal: 16148.04,
    Descuento: '645.92',
    Moneda: 'MXN',
    Total: '17207.35',
    TipoDeComprobante: 'I',
    MetodoPago: 'PUE',
    LugarExpedicion: 'México',
    Exportacion: '01',
  };
  // const custom = {
  //   'cfdi:Comprobante': 'comprobante',
  // };
  const cfd = new CFDI(comprobanteAttribute, {
    debug: true,
    xslt: {
      path: styleSheet,
    },
    schema: {
      path: '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/schema/src/files/schema',
    },
  });
  cfd.certificar(cer);

  cfd.setAttributesXml({ version: '1.0', encoding: 'utf-8' });

  cfd.informacionGlobal({
    Periodicidad: '01',
    Meses: '02',
    Año: 2021,
  });
  const relation = new Relacionado({ TipoRelacion: '01' });
  relation.addRelation('e19ca9ba-0d25-46df-bb09-f3745d187a05');
  relation.addRelation('e19ca9ba-0d25-46df-bb09-f3745d187a05');
  cfd.relacionados(relation);

  const emisor = new Emisor({
    Rfc: 'TCM970625MB1',
    Nombre: 'FACTURACION MODERNA SA DE CV',
    RegimenFiscal: '601',
  });
  cfd.emisor(emisor);

  const receptor = new Receptor({
    Rfc: 'XAXX010101000',
    Nombre: 'PUBLICO EN GENERAL',
    UsoCFDI: 'G01',
    DomicilioFiscalReceptor: '77728',
    RegimenFiscalReceptor: '601',
  });
  cfd.receptor(receptor);

  const concepto = new Concepts({
    ClaveProdServ: '001',
    NoIdentificacion: '1212',
    Cantidad: '2',
    ClaveUnidad: 'pieza',
    Unidad: 'Pieza',
    Descripcion: 'audifonos',
    ValorUnitario: '1000',
    Importe: '2000',
    Descuento: '00.0',
    ObjetoImp: ObjetoImpEnum.NoobjetoDeimpuesto,
  });
  concepto.parte({
    Cantidad: '2',
    Unidad: 'Pieza',
    Descripcion: 'audifonos',
    ValorUnitario: '1000',
    Importe: '2000',
    ClaveProdServ: '001',
    NoIdentificacion: 'sdds',
  });

  concepto.setParteInformacionAduanera('22  05  1234  9876543');
  concepto.terceros({
    RfcACuentaTerceros: 'TCM970625MB1',
    NombreACuentaTerceros: 'Empresa ACuentaTerceros S.A. de C.V.',
    RegimenFiscalACuentaTerceros: '601',
    DomicilioFiscalACuentaTerceros: '12345',
  });
  concepto.predial('Cuenta12345ABC6789XYZ');
  concepto.traslado({
    Base: 1,
    Impuesto: '002',
    TipoFactor: 'Tasa',
    TasaOCuota: '002',
    Importe: '59.17',
  });
  concepto.retencion({
    Impuesto: '002',
    Importe: '59.17',
    Base: 2,
    TasaOCuota: 2,
    TipoFactor: 'Tasa',
  });

  const ieduObject: XmlIeduAttribute = {
    version: '1.0',
    autRVOE: '201587PRIM',
    CURP: 'EJEMPLOGH101004HQRRRN',
    nivelEducativo: 'Primaria',
    nombreAlumno: 'ejemplo garcia correa',
    rfcPago: 'XAXX010101000',
  };
  const iedu = new Iedu(ieduObject);
  concepto.complemento(iedu);
  cfd.concepto(concepto);

  const impuesto: Impuestos = new Impuestos({
    TotalImpuestosRetenidos: '1000',
  });
  impuesto.traslados({
    Base: 1,
    Impuesto: '002',
    TipoFactor: 'Tasa',
    TasaOCuota: '0.16',
    Importe: '59.17',
  });
  impuesto.retenciones({
    Impuesto: '002',
    Importe: '59.17',
  });
  cfd.impuesto(impuesto);

  //await cfd.sellar(key, '12345678a');
  return cfd;
};
