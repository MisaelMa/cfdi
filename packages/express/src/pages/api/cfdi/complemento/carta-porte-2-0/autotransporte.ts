import {
  CFDI,
  CFDIAttributes,
  Concepts,
  Emisor,
  ObjetoImpEnum,
  Receptor,
} from '@cfdi/xml';
import {
  CartaPorte20,
  CtaPrt20Mercancia,
  CtaPrt20Ubicacion,
} from '@cfdi/complementos/4.0/cartaporte20';
import { NextApiRequest, NextApiResponse } from 'next';

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

  const cartaPorte20 = new CartaPorte20();
  cartaPorte20.setAttributes({
    Version: '2.0',
    TranspInternac: 'No',
    TotalDistRec: '2',
  });

  const ubicacion1 = new CtaPrt20Ubicacion();
  ubicacion1.setAttributes({
    IDUbicacion: 'OR101010',
    TipoUbicacion: 'Origen',
    RFCRemitenteDestinatario: 'EKU9003173C9',
    FechaHoraSalidaLlegada: '2021-11-01T00:00:00',
  });
  ubicacion1.setDomicilio({
    Calle: 'calle',
    NumeroExterior: '211',
    Colonia: '0347',
    Localidad: '23',
    Referencia: 'casa blanca 1',
    Municipio: '004',
    Estado: 'COA',
    Pais: 'MEX',
    CodigoPostal: '25350',
  });

  cartaPorte20.setUbicacion(ubicacion1);

  const ubicacion2 = new CtaPrt20Ubicacion();
  ubicacion2.setAttributes({
    IDUbicacion: 'DE202020',
    TipoUbicacion: 'Destino',
    RFCRemitenteDestinatario: 'AAA010101AAA',
    FechaHoraSalidaLlegada: '2021-11-01T01:00:00',
    DistanciaRecorrida: '1',
  });

  ubicacion2.setDomicilio({
    Calle: 'calle',
    NumeroExterior: '214',
    Colonia: '0347',
    Localidad: '23',
    Referencia: 'casa blanca 2',
    Municipio: '004',
    Estado: 'COA',
    Pais: 'MEX',
    CodigoPostal: '25350',
  });

  cartaPorte20.setUbicacion(ubicacion2);

  const ubicacion3 = new CtaPrt20Ubicacion();
  ubicacion3.setAttributes({
    IDUbicacion: 'DE202020',
    TipoUbicacion: 'Destino',
    RFCRemitenteDestinatario: 'AAA010101AAA',
    FechaHoraSalidaLlegada: '2021-11-01T01:00:00',
    DistanciaRecorrida: '1',
  });

  ubicacion3.setDomicilio({
    Calle: 'calle',
    NumeroExterior: '220',
    Colonia: '0347',
    Localidad: '23',
    Referencia: 'casa blanca 3',
    Municipio: '004',
    Estado: 'COA',
    Pais: 'MEX',
    CodigoPostal: '25350',
  });
  cartaPorte20.setUbicacion(ubicacion3);

  const mercancia = new CtaPrt20Mercancia();
  mercancia.setAttributes({
    PesoBrutoTotal: '2.0',
    UnidadPeso: 'XBX',
    NumTotalMercancias: '2',
  });
  mercancia.setMercancia({
    BienesTransp: '11121900',
    Descripcion: 'Productos de perfumería',
    Cantidad: '1.0',
    ClaveUnidad: 'XBX',
    PesoEnKg: '1.0',
    MaterialPeligroso: 'Sí',
    CveMaterialPeligroso: '1266',
    Embalaje: '4H2',
  });

  mercancia.setMercancia({
    BienesTransp: '11121900',
    Descripcion: 'Productos de perfumería',
    Cantidad: '1.0',
    ClaveUnidad: 'XBX',
    PesoEnKg: '1.0',
    MaterialPeligroso: 'Sí',
    CveMaterialPeligroso: '1266',
    Embalaje: '4H2',
  });
  cartaPorte20.setMercancia(mercancia);
  cfd.complemento(cartaPorte20);

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
