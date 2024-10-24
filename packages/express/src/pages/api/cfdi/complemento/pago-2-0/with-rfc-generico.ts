import {
  CFDI,
  CFDIComprobante,
  Concepts,
  Emisor,
  ObjetoImpEnum,
  Receptor,
} from '@cfdi/xml';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  Pago20,
  Pago20ImpuestosP,
  Pago20Relacionado,
  Pagos20,
} from '@cfdi/complementos/4.0/pago20';

import path from 'path';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const files = path.join(
    path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'files'
    )
  );
  console.log('ruta', files);

  const styleSheet = path.join(files, '4.0', 'cadenaoriginal.xslt');

  const key = `${files}/certificados/LAN7008173R5.key`;
  const cer = `${files}/certificados/LAN7008173R5.cer`;

  const comprobante: CFDIComprobante = {
    Serie: 'E',
    // eslint-disable-next-line
    Folio: 'ACACUN-27',
    Fecha: '2014-07-08T12:16:50',
    Sello: '',
    FormaPago: '01',
    NoCertificado: '',
    Certificado: '',
    condicionesDePago: 'Contado',
    SubTotal: '0',
    Descuento: '645.92',
    Moneda: 'MXN',
    Total: '17207.35',
    TipoDeComprobante: 'I',
    MetodoPago: 'PUE',
    LugarExpedicion: 'México',
    Exportacion: '01',
  };

  const cfd = new CFDI({
    debug: true,
    xslt: {
      path: styleSheet,
    },
  });
  cfd.setAttributesXml({ version: '1.0', encoding: 'utf-8' });
  cfd.comprobante(comprobante);
  const emisor = new Emisor({
    Rfc: 'TCM970625MB1',
    Nombre: 'RECREANDO SA DE CV',
    RegimenFiscal: 601,
    FacAtrAdquirente: 'asdasd',
  });
  cfd.emisor(emisor);

  const receptor = new Receptor({
    Rfc: 'XAXX010101000',
    Nombre: 'PUBLICO EN GENERAL',
    UsoCFDI: 'CP01',
    DomicilioFiscalReceptor: '75700',
    RegimenFiscalReceptor: '22',
  });
  cfd.receptor(receptor);

  const concepto = new Concepts({
    ClaveProdServ: '84111506',
    Cantidad: '1',
    ClaveUnidad: 'ACT',
    Descripcion: 'Pago',
    ValorUnitario: '0',
    Importe: '0',
    ObjetoImp: ObjetoImpEnum.NoobjetoDeimpuesto,
  });
  cfd.concepto(concepto);

  const pago20 = new Pagos20();
  pago20.setTotales({
    TotalTrasladosBaseIVA16: '5843.11',
    TotalTrasladosImpuestoIVA16: '934.90',
    TotalTrasladosBaseIVA0: '0.00',
    MontoTotalPagos: '6778.00',
  });

  const pago = new Pago20();
  pago.setAttribute({
    FechaPago: '2022-09-09T17:33:38',
    FormaDePagoP: '01',
    MonedaP: 'MXN',
    TipoCambioP: '1',
    Monto: '6778.00',
  });

  const docRela = new Pago20Relacionado();
  docRela.setRelacion({
    doc: {
      IdDocumento: 'b7c8d2bf-cb4e-4f84-af89-c68b6731206a',
      Serie: 'FA',
      Folio: 'N0000216349',
      MonedaDR: 'MXN',
      EquivalenciaDR: '1',
      NumParcialidad: '2',
      ImpSaldoAnt: '6777.41',
      ImpPagado: '6777.41',
      ImpSaldoInsoluto: '0.00',
      ObjetoImpDR: '02',
    },
    trasladoDR: [
      {
        BaseDR: '5842.600000',
        ImpuestoDR: '002',
        TipoFactorDR: 'Tasa',
        TasaOCuotaDR: '0.160000',
        ImporteDR: '934.816000',
      },
    ],
  });
  pago.doctoRelacionado(docRela);

  const docRela2 = new Pago20Relacionado();
  docRela2.setRelacion({
    doc: {
      IdDocumento: '94f4e541-bb38-4355-b779-02d337dc9720',
      Serie: 'FA',
      Folio: 'SI000032690',
      MonedaDR: 'MXN',
      EquivalenciaDR: '1',
      NumParcialidad: '1',
      ImpSaldoAnt: '9610.81',
      ImpPagado: '0.59',
      ImpSaldoInsoluto: '9610.22',
      ObjetoImpDR: '02',
    },
    trasladoDR: [
      {
        BaseDR: '0.510000',
        ImpuestoDR: '002',
        TipoFactorDR: 'Tasa',
        TasaOCuotaDR: '0.160000',
        ImporteDR: '0.081600',
      },
    ],
  });
  pago.doctoRelacionado(docRela2);

  const impuestosP = new Pago20ImpuestosP();

  impuestosP.setTrasladosP({
    BaseP: '5843.110000',
    ImpuestoP: '002',
    TipoFactorP: 'Tasa',
    TasaOCuotaP: '0.160000',
    ImporteP: '934.897600',
  });
  pago.setImpuestosP(impuestosP);
  pago20.setPago(pago);
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
