import { Controller, Res, Req, Get } from '@nestjs/common';
import { Request, Response } from 'express';
// import { CFDI, ComprobanteAttr, Concepts, Emisor, Impuestos, ObjetoImpEnum, Receptor, Relacionado } from '@cfdi/xml';
// import { sum } from '@cfdi/utils';
/**
 *
 */
@Controller('cfdi/xml')
export class XmlController {
  /**
   *index
   *
   * @param req
   * Request
   * @param res
   * Response
   */
  @Get('/')
  async index(@Req() req: Request, @Res() res: Response) {
    // const styleSheet = path.join(
    //   path.resolve(__dirname, '..', '../'),
    //   'resources',
    //   '4.0',
    //   'cadenaoriginal.xslt'
    // );

    // const pathCer = path.join(
    //   path.resolve(__dirname, '..', 'src', 'signati'),
    //   'certificados'
    // );
    // console.log(pathCer)
    // const key = `${pathCer}/LAN7008173R5.key`;
    // const cer = `${pathCer}/LAN7008173R5.cer`;
    // const comprobanteAttribute: ComprobanteAttr = {
    //   Serie: 'E',
    //   // eslint-disable-next-line
    //   Folio: 'ACACUN-27',
    //   Fecha: '2014-07-08T12:16:50',
    //   Sello: '',
    //   FormaPago: '01',
    //   NoCertificado: '',
    //   Certificado: '',
    //   condicionesDePago: 'Contado',
    //   SubTotal: '16148.04',
    //   Descuento: '645.92',
    //   Moneda: 'MXN',
    //   Total: '17207.35',
    //   TipoDeComprobante: 'I',
    //   MetodoPago: 'PUE',
    //   LugarExpedicion: 'México',
    //   Exportacion: '01',
    // };
    // // const custom = {
    // //   'cfdi:Comprobante': 'comprobante',
    // // };
    // const cfd = new CFDI(comprobanteAttribute, {
    //   debug: true,
    //   // xslt: styleSheet,
    // });
    // cfd.setAttributesXml({ version: '1.0', encoding: 'utf-8' });

    // cfd.informacionGlobal({
    //   Periodicidad: '1',
    //   Meses: '1',
    //   Año: '2',
    // });
    // const relation = new Relacionado({ TipoRelacion: '01' });
    // relation.addRelation('asdasd-3234-asdasd-2332-asdas');
    // relation.addRelation('asdasd-3234-asdasd-2332-asdas');
    // cfd.relacionados(relation);

    // const emisor = new Emisor({
    //   Rfc: 'TCM970625MB1',
    //   Nombre: 'FACTURACION MODERNA SA DE CV',
    //   RegimenFiscal: 601,
    //   FacAtrAdquirente: 'asdasd',
    // });
    // cfd.emisor(emisor);

    // const receptor = new Receptor({
    //   Rfc: 'XAXX010101000',
    //   Nombre: 'PUBLICO EN GENERAL',
    //   UsoCFDI: 'G01',
    //   DomicilioFiscalReceptor: '112',
    //   RegimenFiscalReceptor: '22',
    // });
    // cfd.receptor(receptor);

    // const concepto = new Concepts({
    //   ClaveProdServ: '001',
    //   NoIdentificacion: '1212',
    //   Cantidad: '2',
    //   ClaveUnidad: 'pieza',
    //   Unidad: 'Pieza',
    //   Descripcion: 'audifonos',
    //   ValorUnitario: '1000',
    //   Importe: '2000',
    //   Descuento: '00.0',
    //   ObjetoImp: ObjetoImpEnum.NoobjetoDeimpuesto,
    // });
    // concepto.predial('000121231');
    // concepto.aduana('21  47  3807  8003832');
    // concepto.parte({
    //   ClaveProdServ: '51241200',
    //   NoIdentificacion: 'IM020',
    //   Cantidad: 1,
    //   Unidad: 'PIEZA',
    //   Descripcion: '25311FM00114 CREMA FUNGICIDA 35ML (ACIDO UNDECILENICO, ARBOL DEL TE VEHICULO EMOLIENTE)',
    //   ValorUnitario: '172.50',
    //   Importe: '172.50',
    // });
    // concepto.traslado({
    //   Base: '369.83',
    //   Impuesto: '002',
    //   TipoFactor: 'Tasa',
    //   TasaOCuota: '0.16',
    //   Importe: '59.17',
    // });
    // concepto.traslado({
    //   Base: '369.8aaaa3',
    //   Impuesto: '002',
    //   TipoFactor: 'Tasa',
    //   TasaOCuota: '0.16',
    //   Importe: '59.17',
    // });

    // concepto.retencion({
    //   Base: '369.83',
    //   Impuesto: '002',
    //   TipoFactor: 'Tasa',
    //   TasaOCuota: '0.16',
    //   Importe: '59.17',
    // });

    // cfd.concepto(concepto);

    // const concepto2 = new Concepts({
    //   ClaveProdServ: '001',
    //   NoIdentificacion: '1212',
    //   Cantidad: '2',
    //   ClaveUnidad: 'pieza',
    //   Unidad: 'Pieza',
    //   Descripcion: 'audifonos',
    //   ValorUnitario: '1000',
    //   Importe: '2000',
    //   Descuento: '00.0',
    //   ObjetoImp: ObjetoImpEnum.NoobjetoDeimpuesto,
    // });
    // concepto2.terceros({
    //   RfcACuentaTerceros: 'JUFA7608212V6',
    //   NombreACuentaTerceros: 'ADRIANA JUAREZ FERNANDEZ',
    //   RegimenFiscalACuentaTerceros: '601',
    //   DomicilioFiscalACuentaTerceros: '29133',
    // });
    // cfd.concepto(concepto2);
    // const impuesto: Impuestos = new Impuestos({
    //   TotalImpuestosRetenidos: '1000',
    // });
    // impuesto.traslados({
    //   Base: 1,
    //   Impuesto: '002',
    //   TipoFactor: 'Tasa',
    //   TasaOCuota: '0.16',
    //   Importe: '59.17',
    // });
    // impuesto.retenciones({
    //   Impuesto: '002',
    //   Importe: '59.17',
    // });
    // cfd.impuesto(impuesto);

    // // await cfd.certificar(cer);
    // // await cfd.sellar(key, '12345678a');
    // const json = await cfd.getJsonCdfi();
    // const xml = await cfd.getXmlCdfi();
    // // console.log(xml)
    // // console.log(json)
    // // return json;

    // // const download = Buffer.from(await Receip.getBase64(), 'base64');
    // // res.contentType('application/pdf');
    // if (req.query.xml) {
    //   res.set('Content-Type', 'text/xml');
    //   // console.log(xml)
    //   res.send(xml);
    // } else {
    //   res.send(json);
    // }
  }
}
