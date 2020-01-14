import {CFDI, ComprobanteInterface, Concepts, Emisor, Impuestos, Receptor} from '..';
import * as path from 'path';

describe('Create CFDI', () => {

    test('Return this CFDI XML', async () => {

        const useCFDI = async () => {
            const cfd = new CFDI();
            const key = '/hom/misael/Documentos/misproyectos/nestjs/signati/src/storage/certificados/LAN7008173R5.key';
            const cer = '/hom/misael/Documentos/misproyectos/nestjs/signati/src/storage/certificados/LAN7008173R5.cer';
            const comprobanteAttribute: ComprobanteInterface = {
                xmlns: {
                    xsi: 'http://www.w3.org/2001/XMLSchema-instance',
                    cfdi: 'http://www.sat.gob.mx/cfd/3',
                },
                schemaLocation: [
                    'http://www.sat.gob.mx/cfd/3',
                    'http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd',
                ],
                Version: '3.3',
                Serie: 'E',
                Folio: 'ACACUN-27',
                Fecha: '2014-07-08T12:16:50',
                Sello: '',
                FormaPago: 'Pago en una sola exhibición',
                NoCertificado: '20001000000200000192',
                Certificado: '',
                condicionesDePago: 'Contado',
                SubTotal: '16148.04',
                Descuento: '645.92',
                Moneda: 'MXN',
                Total: '17207.35',
                TipoDeComprobante: 'ingreso',
                MetodoPago: 'En efectivo',
                LugarExpedicion: 'México',
            };
            await cfd.setAttributesXml({version: '1.0', encoding: 'utf-8'});
            await cfd.setAttributesComprobantes(comprobanteAttribute);
            /*
            const relation = new Relacionado({ TipoRelacion: '01' });
            relation.addRelation('asdasd-3234-asdasd-2332-asdas');
            relation.addRelation('asdasd-3234-asdasd-2332-asdas');
            await this.cfd.cfdiRelacionados(relation);*/

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
            return json;
        }
        expect(await useCFDI()).toStrictEqual({
            '_declaration': {'_attributes': {'encoding': 'utf-8', 'version': '1.0'}}, 'cfdi:Comprobante': {
                '_attributes': {
                    'Certificado': '',
                    'Descuento': '645.92',
                    'Fecha': '2014-07-08T12:16:50',
                    'Folio': 'ACACUN-27',
                    'FormaPago': 'Pago en una sola exhibición',
                    'LugarExpedicion': 'México',
                    'MetodoPago': 'En efectivo',
                    'Moneda': 'MXN',
                    'NoCertificado': '20001000000200000192',
                    'Sello': '',
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
        });
    })
});
