"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xml_1 = require("@cfdi/xml");
const express_1 = __importDefault(require("express"));
const sum = (a, b) => {
    return a + b;
};
const wrapAsync_1 = require("./utils/wrapAsync");
const app = (0, express_1.default)();
app.get('/sum', (req, res) => {
    console.log(req.query);
    const d = sum(1, 1);
    console.log(d);
    res.send({ val: d });
});
app.get('/', (0, wrapAsync_1.wrapAsync)(async (req, res) => {
    const comprobanteAttribute = {
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
        Exportacion: '01',
    };
    const cfd = new xml_1.CFDI(comprobanteAttribute, {
        debug: true,
    });
    await cfd.setAttributesXml({ version: '1.0', encoding: 'utf-8' });
    cfd.informacionGlobal({
        Periodicidad: '1',
        Meses: '1',
        Año: '2',
    });
    const relation = new xml_1.Relacionado({ TipoRelacion: '01' });
    relation.addRelation('asdasd-3234-asdasd-2332-asdas');
    relation.addRelation('asdasd-3234-asdasd-2332-asdas');
    await cfd.relacionados(relation);
    const emisor = new xml_1.Emisor({
        Rfc: 'TCM970625MB1',
        Nombre: 'FACTURACION MODERNA SA DE CV',
        RegimenFiscal: 601,
        FacAtrAdquirente: 'asdasd',
    });
    await cfd.emisor(emisor);
    const receptor = new xml_1.Receptor({
        Rfc: 'XAXX010101000',
        Nombre: 'PUBLICO EN GENERAL',
        UsoCFDI: 'G01',
        DomicilioFiscalReceptor: '112',
        RegimenFiscalReceptor: '22',
    });
    await cfd.receptor(receptor);
    const concepto = new xml_1.Concepts({
        ClaveProdServ: '001',
        NoIdentificacion: '1212',
        Cantidad: '2',
        ClaveUnidad: 'pieza',
        Unidad: 'Pieza',
        Descripcion: 'audifonos',
        ValorUnitario: '1000',
        Importe: '2000',
        Descuento: '00.0',
        ObjetoImp: xml_1.ObjetoImpEnum.NoobjetoDeimpuesto,
    });
    concepto.predial('000121231');
    concepto.aduana('21  47  3807  8003832');
    concepto.parte({
        ClaveProdServ: '51241200',
        NoIdentificacion: 'IM020',
        Cantidad: 1,
        Unidad: 'PIEZA',
        Descripcion: '25311FM00114 CREMA FUNGICIDA 35ML (ACIDO UNDECILENICO, ARBOL DEL TE VEHICULO EMOLIENTE)',
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
    await cfd.concepto(concepto);
    const concepto2 = new xml_1.Concepts({
        ClaveProdServ: '001',
        NoIdentificacion: '1212',
        Cantidad: '2',
        ClaveUnidad: 'pieza',
        Unidad: 'Pieza',
        Descripcion: 'audifonos',
        ValorUnitario: '1000',
        Importe: '2000',
        Descuento: '00.0',
        ObjetoImp: xml_1.ObjetoImpEnum.NoobjetoDeimpuesto,
    });
    concepto2.terceros({
        RfcACuentaTerceros: 'JUFA7608212V6',
        NombreACuentaTerceros: 'ADRIANA JUAREZ FERNANDEZ',
        RegimenFiscalACuentaTerceros: '601',
        DomicilioFiscalACuentaTerceros: '29133',
    });
    await cfd.concepto(concepto2);
    const impuesto = new xml_1.Impuestos({
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
    await cfd.impuesto(impuesto);
    const json = await cfd.getJsonCdfi();
    const xml = await cfd.getXmlCdfi();
    if (req.query.xml) {
        res.set('Content-Type', 'text/xml');
        res.send(xml);
    }
    else {
        res.send(json);
    }
}));
app.listen(1500, () => {
    console.log('App is listening on port 1500!');
});
//# sourceMappingURL=index.js.map