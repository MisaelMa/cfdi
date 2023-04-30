import {
  CFDI,
  CFDIAttributes,
  Concepto,
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
import { NextApiRequest, NextApiResponse } from 'next';

import { XmlIeduAttribute } from '@cfdi/complementos';
import path from 'path';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const files = path.join(
    path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'files')
  );
  console.log('ruta', files);

  const styleSheet = path.join(files, '4.0', 'cadenaoriginal.xslt');

  const key = `${files}/certificados/LAN7008173R5.key`;
  const cer = `${files}/certificados/LAN7008173R5.cer`;

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
    SubTotal: '16148.04',
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
  });
  cfd.setAttributesXml({ version: '1.0', encoding: 'utf-8' });

  cfd.informacionGlobal({
    Periodicidad: 'amir',
    Meses: '1',
    Año: '2',
  });
  const relation = new Relacionado({ TipoRelacion: '01' });
  relation.addRelation('asdasd-3234-asdasd-2332-asdas');
  relation.addRelation('asdasd-3234-asdasd-2332-asdas');
  cfd.relacionados(relation);

  const emisor = new Emisor({
    Rfc: 'TCM970625MB1',
    Nombre: 'FACTURACION MODERNA SA DE CV',
    RegimenFiscal: 601,
    FacAtrAdquirente: 'asdasd',
  });
  cfd.emisor(emisor);

  const receptor = new Receptor({
    Rfc: 'XAXX010101000',
    Nombre: 'PUBLICO EN GENERAL',
    UsoCFDI: 'G01',
    DomicilioFiscalReceptor: '112',
    RegimenFiscalReceptor: '22',
  });
  cfd.receptor(receptor);

  const concepto = new Concepto({
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
  concepto.predial('000121231');
  concepto.aduana('21  47  3807  8003832');
  concepto.parte({
    ClaveProdServ: '51241200',
    NoIdentificacion: 'IM020',
    Cantidad: 1,
    Unidad: 'PIEZA',
    Descripcion:
      '25311FM00114 CREMA FUNGICIDA 35ML (ACIDO UNDECILENICO, ARBOL DEL TE VEHICULO EMOLIENTE)',
    ValorUnitario: '172.50',
    Importe: '172.50',
  });
  concepto.traslado({
    Base: '369.83',
    Impuesto: '002',
    TipoFactor: 'Tasa',
    TasaOCuota: '0.16',
    Importe: '59.17',
  });
  concepto.traslado({
    Base: '369.8aaaa3',
    Impuesto: '002',
    TipoFactor: 'Tasa',
    TasaOCuota: '0.16',
    Importe: '59.17',
  });

  concepto.retencion({
    Base: '369.83',
    Impuesto: '002',
    TipoFactor: 'Tasa',
    TasaOCuota: '0.16',
    Importe: '59.17',
  });

  cfd.concepto(concepto);

  const concepto2 = new Concepts({
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
  concepto2.terceros({
    RfcACuentaTerceros: 'JUFA7608212V6',
    NombreACuentaTerceros: 'ADRIANA JUAREZ FERNANDEZ',
    RegimenFiscalACuentaTerceros: '601',
    DomicilioFiscalACuentaTerceros: '29133',
  });
  cfd.concepto(concepto2);
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

  const destruccion = new Destruccion({
    Version: '1.0',
    NumFolDesVeh: '0221',
    Serie: '012',
  });
  destruccion.InformacionAduanera({
    Aduana: 'ADUANA',
    Fecha: '129283',
    NumPedImp: 'ASAS',
  });
  destruccion.VehiculoDestruido({
    Año: '2019',
    Marca: 'Nissan',
    Modelo: 'ASAD',
    TipooClase: 'ASDSA',
    NumFolTarjCir: 'ASSA',
    NumPlacas: 'QRR0',
  });
  cfd.complemento(destruccion);

  const pago = new Pago10({
    Version: '1.0',
  });
  const docRela = new Pago10Relacionado();
  docRela.relacion({
    IdDocumento: 'hasd',
    MonedaDR: 'MMX',
    MetodoDePagoDR: 'PUE',
  });
  docRela.relacion({
    IdDocumento: 'hasd',
    MonedaDR: 'MMX',
    MetodoDePagoDR: 'PUE',
  });
  const pagoImpuesto = new Pago10Impuestos({
    TotalImpuestosRetenidos: '12',
    TotalImpuestosTrasladados: '234z ',
  });
  pagoImpuesto.traslados({
    Importe: '100',
    Impuesto: '1201',
    TasaOCuota: '123',
    TipoFactor: '%',
  });
  pagoImpuesto.retenciones({ Importe: '10', Impuesto: '10' });

  const pagoImpuesto2 = new Pago10Impuestos({
    TotalImpuestosRetenidos: '12',
    TotalImpuestosTrasladados: '234z ',
  });
  pagoImpuesto2.traslados({
    Importe: '100',
    Impuesto: '1201',
    TasaOCuota: '123',
    TipoFactor: '%',
  });
  pagoImpuesto2.retenciones({ Importe: '10', Impuesto: '10' });
  pago.pago({
    data: {
      FechaPago: '2019-11-27T00:00:00',
      FormaDePagoP: '03',
      MonedaP: 'MXN',
      Monto: '5220.00',
      NumOperacion: '1',
      RfcEmisorCtaOrd: 'SEQ920520ME3',
      NomBancoOrdExt: 'BBVA Bancomer',
      RfcEmisorCtaBen: 'WSI1503194J6',
      CtaBeneficiario: '0101255614',
    },
    relacionado: docRela.getRelations(),
    impuestos: [pagoImpuesto.getImpuesto(), pagoImpuesto.getImpuesto()],
  });

  cfd.complemento(pago);

  await cfd.certificar(cer);
  /*  const mio = await cfd.prueba();
  const saxon = await cfd.getCadenaOriginal(); */
  await cfd.sellar(key, '12345678a');
  const json = await cfd.getJsonCdfi();
  const xml = await cfd.getXmlCdfi();
  // console.log(xml)
  // console.log(json)
  // return json;

  // const download = Buffer.from(await Receip.getBase64(), 'base64');
  // res.contentType('application/pdf');
  if (req.query.xml) {
    res.setHeader('Content-Type', 'text/xml');
    // console.log(xml)
    res.send(xml);
  } else {
    res.send({
      /*    mio,
      saxon, */
      xml: json,
    });
  }
}
