import { CFDI, CFDIAttributes, Emisor, Receptor, Relacionado } from '@cfdi/xml';
import { NextApiRequest, NextApiResponse } from 'next';

import { Pago20, Pago } from '@cfdi/complementos/4.0/pago20';
import path from 'path';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const files = path.join(
    path.resolve(__dirname, '..', '..', '..', '..', '..', '..', '..', 'files')
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

  const pago20 = new Pago20();
  const pago = Pago.getInstance();
  pago.setAttribute({
    FechaPago: '2019-11-27T00:00:00',
    FormaDePagoP: '03',
    MonedaP: 'MXN',
    Monto: '5220.00',
    NumOperacion: '1',
    RfcEmisorCtaOrd: 'SEQ920520ME3',
    NomBancoOrdExt: 'BBVA Bancomer',
    RfcEmisorCtaBen: 'WSI1503194J6',
    CtaBeneficiario: '0101255614',
  });
  pago20.pago(pago);
  const v = pago20.getComplement();
  console.log(v.key);

  cfd.complemento(pago20);

  await cfd.certificar(cer);
  await cfd.sellar(key, '12345678a');
  const json = await cfd.getJsonCdfi();
  const xml = await cfd.getXmlCdfi();

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
