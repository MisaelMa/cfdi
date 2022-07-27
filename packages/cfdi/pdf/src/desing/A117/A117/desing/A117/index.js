"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A117 = void 0;
const Catalogs_1 = require("@signati/core/lib/signati/types/Catalogs");
const Logo_1 = require("../utils/Logo");
const XmlToJson_1 = require("../utils/XmlToJson");
const NumbersToLetter_1 = require("../utils/NumbersToLetter");
const QRCode = require("qrcode");
const generic_1 = require("../../src/signati/generic");
const pdfmake_1 = require("pdfmake/build/pdfmake");
const vfs_fonts_1 = require("pdfmake/build/vfs_fonts");
pdfmake_1.vfs = vfs_fonts_1.pdfMake.vfs;
class A117 extends generic_1.Generic {
    constructor(xml, options = {}) {
        super();
        this.docDefinition = {
            pageSize: 'A4',
            pageMargins: [20, 25, 20, 25],
            content: [
                {
                    columns: [
                        {
                            text: 'logo'
                        },
                        {
                            width: 40,
                            text: ''
                        },
                        {
                            margin: [0, 0, 0, 0],
                            width: 200,
                            text: [
                                {
                                    text: '\n',
                                    style: {
                                        bold: true,
                                        color: '#a76d09',
                                    }
                                },
                                {
                                    text: [
                                        {
                                            text: 'R.F.C: ',
                                            style: {
                                                bold: true,
                                                color: '#a76d09',
                                            }
                                        },
                                        { text: '\n' }
                                    ]
                                },
                                {
                                    text: [
                                        {
                                            text: 'REGIMEN: ',
                                            style: {
                                                bold: true,
                                                color: '#a76d09',
                                            }
                                        },
                                        { text: '\n' }
                                    ]
                                },
                                {
                                    text: [
                                        {
                                            text: 'LUGAR DE EXPEDICION: ',
                                            style: {
                                                bold: true,
                                                color: '#a76d09',
                                            }
                                        },
                                        { text: '\n' }
                                    ]
                                }
                            ],
                            style: {
                                fontSize: 9,
                            }
                        },
                        [
                            {
                                alignment: 'center',
                                margin: [55, 0, 0, 0],
                                text: 'FACTURA',
                                style: {
                                    fontSize: 9,
                                    bold: true,
                                }
                            },
                            {
                                margin: [80, 0, 0, 10],
                                alignment: 'center',
                                width: [10],
                                table: {
                                    alignment: 'right',
                                    body: [
                                        [{
                                                text: 'FOLIO',
                                                style: {
                                                    bold: true,
                                                    fontSize: 9,
                                                    alignment: 'center',
                                                    margin: [0, 0, 0, 0],
                                                }
                                            }],
                                    ],
                                },
                                layout: {
                                    paddingLeft: (i, node) => {
                                        return 20;
                                    },
                                    paddingRight: (i, node) => {
                                        return 20;
                                    },
                                    paddingTop: (i, node) => {
                                        return 0;
                                    },
                                    paddingBottom: (i, node) => {
                                        return 0;
                                    },
                                    fillColor: (rowIndex, node, columnIndex) => {
                                        return (rowIndex === 0) ? '#eeeeee' : null;
                                    }
                                }
                            },
                            {
                                alignment: 'center',
                                margin: [80, 0, 0, 0],
                                table: {
                                    alignment: 'right',
                                    heights: 10,
                                    body: [
                                        [{
                                                text: 'FECHA',
                                                style: {
                                                    bold: true,
                                                    fontSize: 9,
                                                    alignment: 'center',
                                                    margin: [0, 0, 0, 0],
                                                }
                                            }],
                                    ],
                                },
                                layout: {
                                    paddingTop: (i, node) => {
                                        return 0;
                                    },
                                    paddingBottom: (i, node) => {
                                        return 0;
                                    },
                                    fillColor: (rowIndex, node, columnIndex) => {
                                        return (rowIndex === 0) ? '#eeeeee' : null;
                                    }
                                }
                            }
                        ]
                    ]
                },
                {
                    bold: true,
                    margin: [0, 20, 0, 10],
                    text: [
                        {
                            text: 'Datos del Cliente\n',
                            style: {
                                color: '#0941a7'
                            }
                        },
                        {
                            text: 'Razon Social: ',
                            style: {
                                bold: true,
                                color: '#a76d09',
                            }
                        },
                        { text: '' },
                        {
                            text: 'R.F.C.: ',
                            style: {
                                bold: true,
                                color: '#a76d09',
                            }
                        },
                        { text: '' },
                        {
                            text: 'Uso CFDI: ',
                            style: {
                                bold: true,
                                color: '#a76d09',
                            }
                        },
                        { text: '' }
                    ],
                    style: {
                        fontSize: 10,
                    }
                },
                {
                    style: {
                        fontSize: 9
                    },
                    table: {
                        widths: [45, 50, 213, 40, 50, 53, 40],
                        body: [
                            [
                                {
                                    text: 'CANTIDAD',
                                    style: {
                                        bold: true
                                    }
                                },
                                {
                                    text: 'CLAVE SAT',
                                    style: {
                                        bold: true
                                    }
                                },
                                {
                                    text: 'CONCEPTO/DESCRIPCIÓN',
                                    alignment: 'center',
                                    style: {
                                        bold: true
                                    }
                                },
                                {
                                    text: 'UNIDAD',
                                    style: {
                                        bold: true
                                    }
                                },
                                {
                                    text: 'P.UNITARIO',
                                    style: {
                                        bold: true
                                    }
                                },
                                {
                                    text: 'DESCUENTO',
                                    style: {
                                        bold: true
                                    }
                                },
                                {
                                    text: 'IMPORTE',
                                    style: {
                                        bold: true
                                    }
                                }
                            ],
                        ],
                    },
                    layout: {
                        fillColor: (rowIndex, node, columnIndex) => {
                            return (rowIndex === 0) ? '#eeeeee' : null;
                        }
                    }
                },
                {
                    margin: [0, 7, 0, 7],
                    table: {
                        widths: ['*', 'auto'],
                        body: [
                            [
                                {
                                    stack: [
                                        {
                                            text: 'CANTIDAD CON LETRA',
                                            style: {
                                                bold: true,
                                                fontSize: 9
                                            }
                                        },
                                        {
                                            text: 'OCHOCIENTOS TREINTA Y NUEVE PESOS 99/100 M.N.',
                                            style: {
                                                fontSize: 9
                                            }
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        {
                                            text: 'SUBTOTAL: ',
                                            style: {
                                                bold: true,
                                                color: '#a76d09',
                                            }
                                        },
                                        { text: '\n' },
                                        {
                                            text: 'DESCUENTO: ',
                                            style: {
                                                bold: true,
                                                color: '#a76d09',
                                            }
                                        },
                                        { text: '$\n' },
                                        {
                                            text: 'IMPUESTOS: ',
                                            style: {
                                                bold: true,
                                                color: '#a76d09',
                                            }
                                        },
                                        { text: '$\n' },
                                        {
                                            text: 'TOTAL: ',
                                            style: {
                                                bold: true,
                                                color: '#a76d09',
                                            }
                                        },
                                        { text: '$' }
                                    ],
                                    style: {
                                        fontSize: 9
                                    }
                                }
                            ],
                        ]
                    }
                },
                {
                    columns: [
                        {
                            text: [
                                {
                                    text: 'Forma de pago: ',
                                    style: {
                                        bold: true,
                                        color: '#a76d09',
                                    }
                                },
                                { text: ' \n' },
                                {
                                    text: 'Método de pago: ',
                                    style: {
                                        bold: true,
                                        color: '#a76d09',
                                    }
                                },
                                { text: ' \n' },
                                {
                                    text: 'No. de cuenta: ',
                                    style: {
                                        bold: true,
                                        color: '#a76d09',
                                    }
                                },
                                { text: ' \n' },
                            ],
                            style: {
                                fontSize: 9
                            }
                        },
                        {
                            text: [
                                {
                                    text: 'Moneda: ',
                                    style: {
                                        bold: true,
                                        color: '#a76d09',
                                    }
                                },
                                { text: ' $ 1034.48\n' },
                                {
                                    text: 'Tipo de comprobante: ',
                                    style: {
                                        bold: true,
                                        color: '#a76d09',
                                    }
                                },
                                { text: ' $ 310.35\n' },
                            ],
                            style: {
                                fontSize: 9
                            }
                        }
                    ]
                },
                {
                    style: {
                        fontSize: 9
                    },
                    table: {
                        widths: [250, 280],
                        body: [
                            [
                                {
                                    border: [false, false, false, false],
                                    text: 'No. CSD del Emisor',
                                    alignment: 'center',
                                    style: {
                                        bold: true
                                    }
                                },
                                {
                                    border: [false, false, false, false],
                                    text: 'Fecha y hora de certificacion',
                                    alignment: 'center',
                                    style: {
                                        bold: true
                                    }
                                },
                            ],
                            [
                                {
                                    border: [false, true, false, false],
                                    text: ' ',
                                    alignment: 'center'
                                },
                                {
                                    border: [false, true, false, false],
                                    text: '',
                                    alignment: 'center'
                                },
                            ],
                            [
                                {
                                    border: [false, false, false, false],
                                    text: 'Folio Fiscal',
                                    alignment: 'center',
                                    style: {
                                        bold: true
                                    }
                                },
                                {
                                    border: [false, false, false, false],
                                    text: 'No. CSD del SAT',
                                    alignment: 'center',
                                    style: {
                                        bold: true
                                    }
                                },
                            ],
                            [
                                {
                                    border: [false, true, false, false],
                                    text: '',
                                    alignment: 'center'
                                },
                                {
                                    border: [false, true, false, false],
                                    text: '',
                                    alignment: 'center'
                                },
                            ],
                        ]
                    }
                },
                {
                    margin: [0, 25, 0, 0],
                    style: {
                        fontSize: 9
                    },
                    columns: [
                        {
                            text: ''
                        },
                        {
                            margin: [-10, -15, 0, 0],
                            table: {
                                widths: [418],
                                body: [
                                    [
                                        {
                                            border: [false, false, false, false],
                                            text: 'SELLO DIGITAL DEL EMISOR',
                                            style: {
                                                alignment: 'left',
                                                color: '#0941a7'
                                            }
                                        },
                                    ],
                                    [
                                        {
                                            border: [false, false, false, false],
                                            text: '',
                                            style: {
                                                fontSize: 7
                                            }
                                        },
                                    ],
                                    [
                                        {
                                            border: [false, false, false, false],
                                            text: 'SELLO DEL SAT',
                                            style: {
                                                alignment: 'left',
                                                color: '#0941a7'
                                            }
                                        },
                                    ],
                                    [
                                        {
                                            border: [false, false, false, false],
                                            text: '',
                                            style: {
                                                fontSize: 7
                                            }
                                        },
                                    ],
                                    [
                                        {
                                            border: [false, false, false, false],
                                            text: 'CADENA ORIGINAL DEL COMPLEMENTO DE CERTIFICACION DIGITAL DEL SAT',
                                            style: {
                                                alignment: 'left',
                                                color: '#0941a7'
                                            }
                                        },
                                    ],
                                    [
                                        {
                                            border: [false, false, false, false],
                                            text: '',
                                            style: {
                                                fontSize: 7
                                            }
                                        },
                                    ]
                                ]
                            },
                            style: {
                                fontSize: 9
                            }
                        }
                    ]
                },
            ],
            footer: (currentPage, pageCount) => {
                return {
                    table: {
                        body: [
                            [
                                {
                                    image: Logo_1.logo,
                                    margin: [10, 0, 0, 0],
                                    alignment: 'center',
                                    fit: [20, 20],
                                },
                                {
                                    margin: [-5, 5, 0, 0],
                                    text: 'by Signati',
                                    alignment: 'right',
                                    style: {
                                        fontSize: 10
                                    }
                                },
                            ],
                        ]
                    },
                    layout: 'noBorders'
                };
            },
        };
        this.xml = XmlToJson_1.XmlToJson(xml);
        this.options = options;
    }
    async getDocument() {
        if (this.xml['cfdi:Comprobante']['cfdi:Emisor']) {
            this.addEmisorData(this.xml['cfdi:Comprobante']['cfdi:Emisor'], this.xml['cfdi:Comprobante']._attributes.LugarExpedicion);
        }
        await this.addLogo();
        this.addFolio(this.xml['cfdi:Comprobante']._attributes);
        this.addDate(this.xml['cfdi:Comprobante']._attributes.Fecha);
        this.addReceptor(this.xml['cfdi:Comprobante']['cfdi:Receptor']);
        this.addDetalles(this.xml['cfdi:Comprobante']['cfdi:Conceptos']);
        this.addCatidad(this.xml['cfdi:Comprobante']._attributes);
        this.addImpuesto(this.xml['cfdi:Comprobante']['cfdi:Impuestos']);
        this.addNumberToLetter(+this.xml['cfdi:Comprobante']._attributes.Total);
        this.addCSDEmisor(this.xml['cfdi:Comprobante']._attributes.NoCertificado);
        this.addFormaDePago(this.xml['cfdi:Comprobante']._attributes.FormaPago);
        this.addMetodoDePago(this.xml['cfdi:Comprobante']._attributes.MetodoPago);
        this.addMoneda(this.xml['cfdi:Comprobante']._attributes.Moneda);
        this.addTipoComprobante(this.xml['cfdi:Comprobante']._attributes.TipoDeComprobante);
        if (this.xml['cfdi:Comprobante']['cfdi:Complemento']) {
            const complements = this.xml['cfdi:Comprobante']['cfdi:Complemento'];
            if (complements['tfd:TimbreFiscalDigital']) {
                const tfd = complements['tfd:TimbreFiscalDigital'];
                this.fechaTimbrado(tfd);
                this.addCSDSat(tfd);
                this.folioFiscal(tfd);
                this.addSelloDgtEmisor(tfd);
                this.addSelloDelSat(tfd);
                this.addCadenaOriginal(tfd);
                await this.addQr(tfd, this.xml['cfdi:Comprobante']['cfdi:Emisor'], this.xml['cfdi:Comprobante']['cfdi:Receptor'], this.xml['cfdi:Comprobante']._attributes.Total);
            }
        }
        return pdfmake_1.createPdf(this.docDefinition);
    }
    addLogo() {
        if (this.options.logo) {
            if (typeof this.options.logo === 'object') {
                this.docDefinition.content[0].columns[0] = {
                    width: this.options.logo.width,
                    image: this.options.logo.image,
                    height: this.options.logo.height,
                    alignment: 'left'
                };
            }
            else {
                this.docDefinition.content[0].columns[0] = {
                    width: 100,
                    image: this.options.logo,
                    height: 100,
                    alignment: 'left'
                };
            }
        }
        else {
            this.docDefinition.content[0].columns[0] = {
                width: 100,
                image: Logo_1.logo,
                height: 100,
                alignment: 'left'
            };
        }
    }
    addFolio(c) {
        const data = [{
                text: c.Serie + ' - ' + c.Folio,
                style: {
                    fontSize: 10,
                    alignment: 'center',
                    color: 'red',
                    margin: [0, 0, 0, 0],
                }
            }];
        this.docDefinition.content[0].columns[3][1].table.body.push(data);
    }
    addEmisorData(emisor, expedido) {
        this.docDefinition.content[0].columns[2].text[0].text = emisor._attributes.Nombre + '\n';
        this.docDefinition.content[0].columns[2].text[1].text[1].text = emisor._attributes.Rfc + '\n';
        const regimen = Catalogs_1.RegimenFiscalList.find((f) => f.value.toString() === emisor._attributes.RegimenFiscal);
        this.docDefinition.content[0].columns[2].text[2].text[1].text = emisor._attributes.RegimenFiscal + ' - ' + regimen.descripcion.toUpperCase() + '\n';
        this.docDefinition.content[0].columns[2].text[3].text[1].text = this.options.lugarExpedicion ? this.options.lugarExpedicion : expedido;
    }
    addDate(date) {
        const data = [{
                text: date,
                style: {
                    fontSize: 10,
                    alignment: 'center',
                    color: 'red',
                    margin: [0, 0, 0, 0],
                }
            }];
        this.docDefinition.content[0].columns[3][2].table.body.push(data);
    }
    addDetalles(detalles) {
        let deatails = [];
        if (Array.isArray(detalles['cfdi:Concepto'])) {
            deatails = detalles['cfdi:Concepto'];
        }
        else {
            deatails.push(detalles['cfdi:Concepto']);
        }
        for (const detail of deatails) {
            const con = detail._attributes;
            const descripcion = [
                {
                    text: con.Descripcion + '\n'
                }
            ];
            if (detail['cfdi:ComplementoConcepto']) {
                if (detail['cfdi:ComplementoConcepto']['iedu:instEducativas']) {
                    if (detail['cfdi:ComplementoConcepto']['iedu:instEducativas']._attributes) {
                        const iedu = detail['cfdi:ComplementoConcepto']['iedu:instEducativas']._attributes;
                        descripcion.push({ text: 'ALUMNO: ', bold: true });
                        descripcion.push({ text: iedu.nombreAlumno.toLocaleUpperCase() + '\n' });
                        descripcion.push({ text: 'CURP: ', bold: true });
                        descripcion.push({ text: iedu.CURP.toLocaleUpperCase() + '\n' });
                        descripcion.push({ text: 'NIVEL EDUCATIVO: ', bold: true });
                        descripcion.push({ text: iedu.nivelEducativo.toLocaleUpperCase() + '\n' });
                        descripcion.push({ text: 'CLAVE: ', bold: true });
                        descripcion.push({ text: iedu.autRVOE.toLocaleUpperCase() + '\n' });
                        descripcion.push({ text: 'RFC: ', bold: true });
                        descripcion.push({ text: iedu.rfcPago.toLocaleUpperCase() + '\n' });
                    }
                }
                if (detail['cfdi:ComplementoConcepto']['terceros:PorCuentadeTerceros']) {
                    const terceros = detail['cfdi:ComplementoConcepto']['terceros:PorCuentadeTerceros'];
                }
                if (detail['cfdi:ComplementoConcepto']['ventavehiculos:VentaVehiculos']) {
                    const ventavehiculos = detail['cfdi:ComplementoConcepto']['ventavehiculos:VentaVehiculos'];
                }
            }
            this.docDefinition.content[2].table.body.push([
                {
                    text: con.Cantidad
                },
                {
                    text: con.ClaveProdServ
                },
                {
                    text: descripcion
                },
                {
                    text: con.ClaveUnidad
                },
                {
                    text: '$' + con.ValorUnitario
                },
                {
                    text: '$' + con.Descuento
                },
                {
                    text: '$' + con.Importe
                }
            ]);
        }
    }
    addReceptor(receptor) {
        this.docDefinition.content[1].text[2] = { text: receptor ? receptor._attributes ? receptor._attributes.Nombre + '\n' : '' : '' };
        this.docDefinition.content[1].text[4] = { text: receptor ? receptor._attributes ? receptor._attributes.Rfc + '\n' : '' : '' };
        this.docDefinition.content[1].text[6] = { text: receptor ? receptor._attributes ? receptor._attributes.UsoCFDI + '\n' : '' : '' };
    }
    addCatidad(comprobante) {
        this.docDefinition.content[3].table.body[0][1].text[1] = { text: '$' + comprobante.SubTotal + '\n' };
        this.docDefinition.content[3].table.body[0][1].text[3] = { text: '$' + comprobante.Descuento + '\n' };
        this.docDefinition.content[3].table.body[0][1].text[7] = { text: '$' + comprobante.Total + '\n' };
    }
    addImpuesto(impuesto) {
        if (impuesto) {
            let impues = '0.00';
            if (impuesto._attributes.TotalImpuestosTrasladados) {
                impues = impuesto._attributes.TotalImpuestosTrasladados;
            }
            this.docDefinition.content[3].table.body[0][1].text[5] = { text: '$' + impues + '\n' };
        }
    }
    addNumberToLetter(total) {
        const nue = new NumbersToLetter_1.NumeroALetras();
        this.docDefinition.content[3].table.body[0][0].stack[1].text = nue.NumeroALetras(total, {
            plural: 'PESOS',
            singular: 'PESO',
            centPlural: 'CENTAVOS',
            centSingular: 'CENTAVO'
        });
    }
    addCSDEmisor(NoCertificado) {
        this.docDefinition.content[5].table.body[1][0].text = NoCertificado;
    }
    fechaTimbrado(tfd) {
        this.docDefinition.content[5].table.body[1][1].text = tfd._attributes.FechaTimbrado;
    }
    addCSDSat(tfd) {
        this.docDefinition.content[5].table.body[3][1].text = tfd._attributes.NoCertificadoSAT;
    }
    folioFiscal(tfd) {
        this.docDefinition.content[5].table.body[3][0].text = tfd._attributes.UUID.toUpperCase();
    }
    addSelloDgtEmisor(tfd) {
        this.docDefinition.content[6].columns[1].table.body[1][0].text = tfd._attributes.SelloCFD;
    }
    addSelloDelSat(tfd) {
        this.docDefinition.content[6].columns[1].table.body[3][0].text = tfd._attributes.SelloSAT;
    }
    addCadenaOriginal(tfd) {
        const cadena = `||${tfd._attributes.Version}|${tfd._attributes.UUID}|${tfd._attributes.FechaTimbrado}|${tfd._attributes.RfcProvCertif}|${tfd._attributes.SelloCFD}|${tfd._attributes.NoCertificadoSAT}||`;
        this.docDefinition.content[6].columns[1].table.body[5][0].text = cadena;
    }
    addFormaDePago(forma) {
        const description = Catalogs_1.FormaPagoList.find((f) => f.value === forma);
        this.docDefinition.content[4].columns[0].text[1] = {
            text: forma + ' - ' + description.label + '\n'
        };
    }
    addMetodoDePago(metodo) {
        const description = Catalogs_1.MetodoPagoList.find((f) => f.value === metodo);
        this.docDefinition.content[4].columns[0].text[3] = {
            text: metodo + ' - ' + description.label + '\n'
        };
    }
    addCuenta(cuenta) {
        this.docDefinition.content[4].columns[0].text[5] = {
            text: cuenta + '\n'
        };
    }
    addMoneda(moneda) {
        this.docDefinition.content[4].columns[1].text[1] = {
            text: moneda + '\n'
        };
    }
    addTipoComprobante(tipo) {
        const description = Catalogs_1.TipoComprobanteList.find((f) => f.value === tipo);
        this.docDefinition.content[4].columns[1].text[3] = {
            text: tipo + ' - ' + description.label + '\n'
        };
    }
    async addQr(tfd, emisor, receptor, total) {
        const url = `https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx`;
        const uuid = tfd._attributes.UUID;
        const rfcEmisor = emisor._attributes.Rfc;
        const rfcReceptor = receptor._attributes.Rfc;
        const sello = tfd._attributes.SelloCFD.substr(-8);
        const totalSplit = total.split('.');
        const totalStart = totalSplit[0].padStart(18, '0');
        const totalEnd = totalSplit[1] ? totalSplit[1].padEnd(6, '0') : '0'.padEnd(6, '0');
        const cantidad = totalStart + '.' + totalEnd;
        const urlQr = `${url}?id=${uuid}&re=${rfcEmisor}&rr=${rfcReceptor}&tt=${cantidad}&fe=${sello}`;
        const text = await QRCode.toDataURL(urlQr);
        this.docDefinition.content[6].columns[0] = {
            margin: [-10, -19, 0, 0],
            width: 130,
            image: text,
            height: 130,
            alignment: 'left'
        };
    }
}
exports.A117 = A117;
//# sourceMappingURL=index.js.map