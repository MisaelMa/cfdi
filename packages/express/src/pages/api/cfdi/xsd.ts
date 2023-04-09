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
import { NextApiRequest, NextApiResponse } from 'next';

import TransformXsd from '@cfdi/xsd';
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

  await cfd.certificar(cer);
  const saxon = await cfd.getCadenaOriginal();
  //await cfd.sellar(key, '12345678a');
  const json = await cfd.getJsonCdfi();
  const xml = await cfd.getXmlCdfi();

  const trs = new TransformXsd(json);
  const mio = await trs.run();
  // const download = Buffer.from(await Receip.getBase64(), 'base64');
  // res.contentType('application/pdf');
  if (req.query.xml) {
    res.setHeader('Content-Type', 'text/xml');
    // console.log(xml)
    res.send(xml);
  } else {
    res.send({
      mio,
      saxon,
      xml: json,
    });
  }
}
