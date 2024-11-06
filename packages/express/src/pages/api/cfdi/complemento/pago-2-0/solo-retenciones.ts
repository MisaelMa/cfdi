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
    Folio: 'ACACUN-27',
    Fecha: '2014-07-08T12:16:50',
    FormaPago: '01',
    CondicionesDePago: 'Contado',
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
    MontoTotalPagos: '100.00',
    TotalRetencionesIVA: '16.00',
    TotalRetencionesIEPS: '34.40',
    TotalRetencionesISR: '35.00',
  });

  const pago = new Pago20();
  pago.setAttribute({
    FechaPago: '2022-06-06T00:00:00',
    FormaDePagoP: '01',
    MonedaP: 'MXN',
    Monto: '100.00',
    TipoCambioP: '1',
  });

  const docRela = new Pago20Relacionado();
  docRela.setRelacion({
    doc: {
      IdDocumento: 'bfc36522-4b8e-45c4-8f14-d11b289f9eb7',
      MonedaDR: 'MXN',
      NumParcialidad: '1',
      ImpSaldoAnt: '100.00',
      ImpPagado: '100.00',
      ImpSaldoInsoluto: '0.00',
      ObjetoImpDR: '02',
      EquivalenciaDR: '1',
    },
    retencionDR: [
      {
        BaseDR: '100.00',
        ImpuestoDR: '001',
        TipoFactorDR: 'Tasa',
        TasaOCuotaDR: '0.000000',
        ImporteDR: '00.00',
      },
      {
        BaseDR: '100.00',
        ImpuestoDR: '001',
        TipoFactorDR: 'Tasa',
        TasaOCuotaDR: '0.350000',
        ImporteDR: '35.00',
      },
      {
        BaseDR: '100.00',
        ImpuestoDR: '002',
        TipoFactorDR: 'Tasa',
        TasaOCuotaDR: '0.000000',
        ImporteDR: '0.00',
      },
      {
        BaseDR: '100.00',
        ImpuestoDR: '002',
        TipoFactorDR: 'Tasa',
        TasaOCuotaDR: '0.160000',
        ImporteDR: '16.00',
      },
      {
        BaseDR: '100.00',
        ImpuestoDR: '003',
        TipoFactorDR: 'Cuota',
        TasaOCuotaDR: '0.000000',
        ImporteDR: '0.00',
      },
      {
        BaseDR: '100.00',
        ImpuestoDR: '003',
        TipoFactorDR: 'Tasa',
        TasaOCuotaDR: '0.304000',
        ImporteDR: '30.40',
      },
      {
        BaseDR: '100.00',
        ImpuestoDR: '003',
        TipoFactorDR: 'Cuota',
        TasaOCuotaDR: '0.040000',
        ImporteDR: '4.00',
      },
    ],
  });
  pago.doctoRelacionado(docRela);

  const impuestosP = new Pago20ImpuestosP();

  impuestosP.setRetencionesP({
    ImpuestoP: '001',
    ImporteP: '35.00',
  });
  impuestosP.setRetencionesP({
    ImpuestoP: '002',
    ImporteP: '16.00',
  });
  impuestosP.setRetencionesP({
    ImpuestoP: '003',
    ImporteP: '34.40',
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
