import * as express from 'express';
import * as path from 'path';
import {CFDI, Comprobante, Concepts, Emisor, Impuestos, Receptor, Relacionado} from '../src';
// Create a new express app instance
const app: express.Application = express();
app.get('/', async (req, res) => {


    const pathCer = path.join(path.resolve(__dirname, '..','src','signati'), 'certificados');
    console.log(pathCer)
    const key = pathCer + '/LAN7008173R5.key';
    const cer = pathCer + '/LAN7008173R5.cer';
    const comprobanteAttribute: Comprobante = {
        Serie: 'E',
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
    };
    const cfd = new CFDI(comprobanteAttribute, {debug: true});
    await cfd.setAttributesXml({version: '1.0', encoding: 'utf-8'});

    const relation = new Relacionado({TipoRelacion: '01'});
    relation.addRelation('asdasd-3234-asdasd-2332-asdas');
    relation.addRelation('asdasd-3234-asdasd-2332-asdas');
    await cfd.relacionados(relation);

    const emisor = new Emisor({
        Rfc: 'TCM970625MB1',
        Nombre: 'FACTURACION MODERNA SA DE CV',
        RegimenFiscal: 601
    });
    await cfd.emisor(emisor);

    const receptor = new Receptor({Rfc: 'XAXX010101000', Nombre: 'PUBLICO EN GENERAL', UsoCFDI: 'G01'});
    await cfd.receptor(receptor);

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

    await cfd.concepto(concepto);
    const impuesto: Impuestos = new Impuestos({TotalImpuestosRetenidos: '1000'});
    impuesto.traslados({
        Impuesto: '002',
        TipoFactor: 'Tasa',
        TasaOCuota: '0.16',
        Importe: '59.17',
    });
    impuesto.retenciones({
        Impuesto: '002',
        TipoFactor: 'Tasa',
        TasaOCuota: '0.16',
        Importe: '59.17',
    });
    await cfd.impuesto(impuesto);

    await cfd.certificar(cer);
    await cfd.sellar(key, '12345678a');
    const json = await cfd.getJsonCdfi();
    const xml = await cfd.getXmlCdfi();
    // console.log(xml)
    // console.log(json)
    // return json;

    // const download = Buffer.from(await Receip.getBase64(), 'base64');
    // res.contentType('application/pdf');
    res.set('Content-Type', 'text/xml');
    res.send(xml);

    // res.send(XmlToJson(xml))
    // res.send(data);
});
app.listen(1500, () => {
    console.log('App is listening on port 1500!');
});
