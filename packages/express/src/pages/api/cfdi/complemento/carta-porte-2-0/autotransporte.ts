import {
  CFDI,
  CFDIComprobante,
  Concepts,
  Emisor,
  ObjetoImpEnum,
  Receptor,
} from '@cfdi/xml';
import {
  CartaPorte20,
  CtaPrt20Mercancias,
  CtaPrt20Ubicacion,
  CtaPrt20FiguraTransporte,
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

  const mercancias = new CtaPrt20Mercancias();
  mercancias.setAttributes({
    PesoBrutoTotal: '2.0',
    UnidadPeso: 'XBX',
    NumTotalMercancias: '2',
  });

  const mercancia1 = mercancias.setMercancia({
    BienesTransp: '11121900',
    Descripcion: 'Productos de perfumería',
    Cantidad: '1.0',
    ClaveUnidad: 'XBX',
    PesoEnKg: '1.0',
    MaterialPeligroso: 'Sí',
    CveMaterialPeligroso: '1266',
    Embalaje: '4H2',
  });
  mercancia1.setPedimentos({ Pedimento: '1' });
  mercancia1.setPedimentos({ Pedimento: '2' });
  mercancia1.setGuiaIdentificacion({
    DescripGuiaIdentificacion: '143',
    NumeroGuiaIdentificacion: '2213',
    PesoGuiaIdentificacion: 'NZ2332',
  });
  mercancia1.setGuiaIdentificacion({
    DescripGuiaIdentificacion: '143',
    NumeroGuiaIdentificacion: '2213',
    PesoGuiaIdentificacion: 'NZ2332',
  });
  mercancia1.setCantidadTransporta({
    Cantidad: '100',
    IDDestino: '10',
    IDOrigen: '10',
  });
  mercancia1.setCantidadTransporta({
    Cantidad: '100',
    IDDestino: '10',
    IDOrigen: '10',
    CvesTransporte: 'g',
  });

  mercancia1.setDetalleMercancia({
    NumPiezas: '1',
    PesoBruto: '1',
    PesoNeto: '1',
    PesoTara: '1',
    UnidadPesoMerc: 'A44',
  });

  const autotransporte1 = mercancias.setAutotransporte({
    NumPermisoSCT: '2',
    PermSCT: '2',
  });

  autotransporte1.setIdentificacionVehicular({
    AnioModeloVM: '2',
    ConfigVehicular: '3',
    PlacaVM: 'dsd',
  });
  autotransporte1.setIdentificacionVehicular({
    AnioModeloVM: '2',
    ConfigVehicular: '3',
    PlacaVM: 'dad',
  });
  autotransporte1.setSeguro({
    AseguraRespCivil: '',
    PolizaRespCivil: '',
    AseguraCarga: '',
  });
  autotransporte1.setSeguro({
    AseguraRespCivil: '',
    PolizaRespCivil: '',
    AseguraCarga: '',
  });

  autotransporte1.setRemolque({
    Placa: '3333',
    SubTipoRem: 'trac',
  });
  autotransporte1.setRemolque({
    Placa: '44444',
    SubTipoRem: 'ambulancia',
  });

  const tMaritmo = mercancias.setTransporteMaritimo({
    Matricula: 'ssss',
    NacionalidadEmbarc: '2',
    NombreAgenteNaviero: '344',
    NumAutorizacionNaviero: '333',
    NumCertITC: 'ee',
    NumeroOMI: '3',
    TipoCarga: '3',
    TipoEmbarcacion: '4',
    UnidadesDeArqBruto: '4',
  });
  tMaritmo.setContenedor({
    MatriculaContenedor: '333',
    TipoContenedor: 'MZN',
  });
  tMaritmo.setContenedor({
    MatriculaContenedor: '444',
    TipoContenedor: 'MZN2',
  });

  mercancias.setTransporteAereo({
    CodigoTransportista: '222',
    NumeroGuia: '2222',
    NumPermisoSCT: '333',
    PermSCT: '555',
  });

  const ferroviario = mercancias.setTransporteFerroviario({
    TipoDeServicio: 'mega',
  });

  ferroviario.setDerechosDePaso({
    KilometrajePagado: '200',
    TipoDerechoDePaso: '222',
  });

  ferroviario.setCarro({
    carro: {
      GuiaCarro: '3333',
      MatriculaCarro: '3303MX',
      TipoCarro: 'AUTOMOVIL',
      ToneladasNetasCarro: 'S',
    },
    contenedores: [
      {
        PesoContenedorVacio: '2KG',
        PesoNetoMercancia: '300KG',
        TipoContenedor: '2',
      },
    ],
  });

  const mercancia2 = mercancias.setMercancia({
    BienesTransp: '11121910',
    Descripcion: 'Productos de perfumería',
    Cantidad: '1.0',
    ClaveUnidad: 'XBX',
    PesoEnKg: '1.0',
    MaterialPeligroso: 'Sí',
    CveMaterialPeligroso: '1266',
    Embalaje: '4H2',
  });

  mercancia2.setPedimentos({ Pedimento: '11' });
  mercancia2.setGuiaIdentificacion({
    DescripGuiaIdentificacion: '143',
    NumeroGuiaIdentificacion: '2213',
    PesoGuiaIdentificacion: 'NZ2332',
  });

  mercancia2.setCantidadTransporta({
    Cantidad: '100',
    IDDestino: '10',
    IDOrigen: '10',
  });

  cartaPorte20.setMercancias(mercancias);

  const figuraT = new CtaPrt20FiguraTransporte();
  figuraT.setAttributes({ TipoFigura: '1' });
  figuraT.setPartesTransporte({ ParteTransporte: '1' });
  figuraT.setPartesTransporte({ ParteTransporte: '1.1' });
  const figuraT2 = new CtaPrt20FiguraTransporte();
  figuraT2.setAttributes({ TipoFigura: '2' });
  figuraT2.setPartesTransporte({ ParteTransporte: '2' });
  figuraT2.setDomicilio({
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
  figuraT2.setDomicilio({
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
  cartaPorte20.setFiguraTransporte(figuraT);
  cartaPorte20.setFiguraTransporte(figuraT2);

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
