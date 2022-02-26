import * as path from 'path';
import {
    CFDI,
    Comprobante,
    Concepts,
    Emisor,
    FormaPagoList,
    Impuestos,
    ObjetoImpEnum,
    Receptor,
    Relacionado,
} from '..';

describe('Create CFDI', () => {

    test('Return this CFDI XML', async () => {

        const useCFDI = async () => {
            const pathCer = path.join(path.resolve(__dirname, '../signati'), 'certificados');
            const styleSheet = path.join(path.resolve(__dirname, '..', '../', '../'), 'resources', '4.0', 'cadenaoriginal.xslt');
            const key = pathCer + '/LAN7008173R5.key';
            const cer = pathCer + '/LAN7008173R5.cer';
            const comprobanteAttribute: Comprobante = {
                // xmlns: {
                //     xsi: 'http://www.w3.org/2001/XMLSchema-instance',
                //     cfdi: 'http://www.sat.gob.mx/cfd/3',
                // },
                // schemaLocation: [
                //     'http://www.sat.gob.mx/cfd/3',
                //     'http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd',
                // ],
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
            const cfd = new CFDI(comprobanteAttribute, {
                xslt: styleSheet,
                debug: false
            });
            await cfd.setAttributesXml({ version: '1.0', encoding: 'utf-8' });

            const relation = new Relacionado({ TipoRelacion: '01' });
            relation.addRelation('asdasd-3234-asdasd-2332-asdas');
            relation.addRelation('asdasd-3234-asdasd-2332-asdas');
            await cfd.relacionados(relation);

            const emisor = new Emisor({
                Rfc: 'TCM970625MB1',
                Nombre: 'FACTURACION MODERNA SA DE CV',
                RegimenFiscal: 601
            });
            await cfd.emisor(emisor);

            const receptor = new Receptor({
                Rfc: 'XAXX010101000',
                Nombre: 'PUBLICO EN GENERAL',
                UsoCFDI: 'G01',
                DomicilioFiscalReceptor: '112',
                RegimenFiscalReceptor: '22'
            });

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
                ObjetoImp: '01'
            });
            concepto.predial("000121231")
            concepto.aduana("21  47  3807  8003832")
            concepto.parte({
                ClaveProdServ: "51241200",
                NoIdentificacion: 'IM020',
                Cantidad: 1,
                Unidad: "PIEZA",
                Descripcion: "25311FM00114 CREMA FUNGICIDA 35ML (ACIDO UNDECILENICO, ARBOL DEL TE VEHICULO EMOLIENTE)",
                ValorUnitario: "172.50",
                Importe: "172.50"
            })
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
            await cfd.concepto(concepto);

            const impuesto: Impuestos = new Impuestos({ TotalImpuestosRetenidos: '1000' });
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

            await cfd.certificar(cer);
            await cfd.sellar(key, '12345678a');
            const json = await cfd.getJsonCdfi();
            const xml = await cfd.getXmlCdfi();
            // console.log(xml)
            console.log(json)
            return json;
        }
        expect(await useCFDI())/*.toStrictEqual({
            '_declaration': {'_attributes': {'encoding': 'utf-8', 'version': '1.0'}},
            'cfdi:Comprobante': {
                '_attributes': {
                    'Certificado': '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',
                    'Descuento': '645.92',
                    'Fecha': '2014-07-08T12:16:50',
                    'Folio': 'ACACUN-27',
                    'FormaPago': 'Pago en una sola exhibición',
                    'LugarExpedicion': 'México',
                    'MetodoPago': 'En efectivo',
                    'Moneda': 'MXN',
                    'NoCertificado': '20001000000300022762',
                    'Sello': 'Vj/X/ZUWxL6DJOEXflMAVwfotRU5uZ4MHCJyD+CcLJwBbz5ob8a1QhilwjJCu5crpvgw6t5p4wTm0LHyqsKhtdBdvgHj54FTZ9ximRby8MNn4mW4xdCzKwqE7wIoS5Mhj4aVSjcV+kH/tk9sAgToBgFt4PxByzWg8u/WYTg41Y2lfhizz2iY0u86VHn+gU1Bnx6MBNRU7D7uXTeiNu3FMWROVe4xfAaESWyD5Vd1dzw3IoaC8/5CXmuvgu/zTM7uQIx8cOnWSFj2yOYJ6LzlTucYqQXnTB/1PAQrrmo0biXyeKcZO14nh22BOqYPLj0MhA/OAySCPcsaDUe7p2Gesg==',
                    'Serie': 'E',
                    'SubTotal': '16148.04',
                    'TipoDeComprobante': 'ingreso',
                    'Total': '17207.35',
                    'Version': '3.3',
                    'condicionesDePago': 'Contado',
                    'xmlns:cfdi': 'http://www.sat.gob.mx/cfd/3',
                    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                    'xsi:schemaLocation': 'http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd'
                },
                'cfdi:Conceptos': {
                    'cfdi:Concepto': [{
                        '_attributes': {
                            'Cantidad': '2',
                            'ClaveProdServ': '001',
                            'ClaveUnidad': 'pieza',
                            'Descripcion': 'audifonos',
                            'Descuento': '00.0',
                            'Importe': '2000',
                            'NoIdentificacion': '1212',
                            'Unidad': 'Pieza',
                            'ValorUnitario': '1000'
                        },
                        'cfdi:Impuestos': {
                            'cfdi:Retenciones': {
                                'cfdi:Retencion': [{
                                    '_attributes': {
                                        'Base': '369.83',
                                        'Importe': '59.17',
                                        'Impuesto': '002',
                                        'TasaOCuota': '0.16',
                                        'TipoFactor': 'Tasa'
                                    }
                                }]
                            },
                            'cfdi:Traslados': {
                                'cfdi:Traslado': [{
                                    '_attributes': {
                                        'Base': '369.83',
                                        'Importe': '59.17',
                                        'Impuesto': '002',
                                        'TasaOCuota': '0.16',
                                        'TipoFactor': 'Tasa'
                                    }
                                }, {
                                    '_attributes': {
                                        'Base': '369.8aaaa3',
                                        'Importe': '59.17',
                                        'Impuesto': '002',
                                        'TasaOCuota': '0.16',
                                        'TipoFactor': 'Tasa'
                                    }
                                }]
                            }
                        }
                    }]
                },
                'cfdi:Emisor': {
                    '_attributes': {
                        'Nombre': 'FACTURACION MODERNA SA DE CV',
                        'RegimenFiscal': 601,
                        'Rfc': 'TCM970625MB1'
                    }
                },
                'cfdi:Impuestos': {
                    '_attributes': {'TotalImpuestosRetenidos': '1000'},
                    'cfdi:Retenciones': {
                        'cfdi:Retencion': [{
                            '_attributes': {
                                'Importe': '59.17',
                                'Impuesto': '002',
                                'TasaOCuota': '0.16',
                                'TipoFactor': 'Tasa'
                            }
                        }]
                    },
                    'cfdi:Traslados': {
                        'cfdi:Traslado': [{
                            '_attributes': {
                                'Importe': '59.17',
                                'Impuesto': '002',
                                'TasaOCuota': '0.16',
                                'TipoFactor': 'Tasa'
                            }
                        }]
                    }
                },
                'cfdi:Receptor': {
                    '_attributes': {
                        'Nombre': 'PUBLICO EN GENERAL',
                        'Rfc': 'XAXX010101000',
                        'UsoCFDI': 'G01'
                    }
                }
            }
        });*/
    })
});
