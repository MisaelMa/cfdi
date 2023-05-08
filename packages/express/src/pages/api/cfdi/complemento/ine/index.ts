import {
  CFDI,
  CFDIAttributes,
  Concepts,
  Emisor,
  ObjetoImpEnum,
  Receptor,
} from '@cfdi/xml';
import { NextApiRequest, NextApiResponse } from 'next';

import { Ine } from '@cfdi/complementos/4.0/ine';
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
    SubTotal: '0',
    Descuento: '645.92',
    Moneda: 'MXN',
    Total: '17207.35',
    TipoDeComprobante: 'I',
    MetodoPago: 'PUE',
    LugarExpedicion: 'México',
    Exportacion: '01',
  };

  const cfd = new CFDI(comprobanteAttribute, {
    debug: true,
    xslt: {
      path: styleSheet,
    },
  });
  cfd.setAttributesXml({ version: '1.0', encoding: 'utf-8' });
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

  const ine11 = new Ine({
    Version: '1.1',
    TipoProceso: 'Ordinario',
    TipoComite: 'Ejecutivo Nacional',
  });

  ine11.Entidad({ ClaveEntidad: 'AGU', Ambito: 'Local' });
  ine11.Contabilidad({ IdContabilidad: '1' });
  cfd.complemento(ine11);

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
