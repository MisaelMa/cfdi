import {CFDI} from '..';

describe('Create CFDI', () => {

    test('Return this CFDI', () => {

        const useCFDI = () => {
            return 'amir';
        }
        expect(useCFDI()).toStrictEqual({
            '_declaration': {
                '_attributes': {
                    'version': '1.0',
                    'encoding': 'utf-8'
                }
            },
            'cfdi:Comprobante': {
                '_attributes': {
                    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                    'xmlns:cfdi': 'http://www.sat.gob.mx/cfd/3',
                    'xsi:schemaLocation': 'http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd',
                    'Version': '3.3',
                    'Serie': 'E',
                    'Folio': 'ACACUN-27',
                    'Fecha': '2014-07-08T12:16:50',
                    'Sello': 'gBVpQI+eQcvaIqemqyqlM8NrljYqNkXkHVWWFU+/dq61zPqRuy+7lNVu9pnKY8aNb0uxkkfnWsyOQihFQ5Zuxb7JiJ/njsOvF2YqQbp9GCTThtYK14rrqHrFegK+oZLBQYLCtEtLx2aMHDualepw0+MAG1vPLYXF0B3Vo7sierNAq3pANubpRU8104bs58nQuoIgfXmr9nESlbjUi0Qpw+4mWvgzTqb2up4QzVJd9gIR+2RMip/1eVjAdxWrwiSGBARNZWry6H4gEKejv3BLZq1YK6X46K7uqXC3yxkYTPJgFUSUhgPATSmVYUgDVNXkft2DBpHeiIUDM/iMEyj0zg==',
                    'FormaPago': 'Pago en una sola exhibición',
                    'NoCertificado': '20001000000300022815',
                    'Certificado': 'MIIFxTCCA62gAwIBAgIUMjAwMDEwMDAwMDAzMDAwMjI4MTUwDQYJKoZIhvcNAQELBQAwggFmMSAwHgYDVQQDDBdBLkMuIDIgZGUgcHJ1ZWJhcyg0MDk2KTEvMC0GA1UECgwmU2VydmljaW8gZGUgQWRtaW5pc3RyYWNpw7NuIFRyaWJ1dGFyaWExODA2BgNVBAsML0FkbWluaXN0cmFjacOzbiBkZSBTZWd1cmlkYWQgZGUgbGEgSW5mb3JtYWNpw7NuMSkwJwYJKoZIhvcNAQkBFhphc2lzbmV0QHBydWViYXMuc2F0LmdvYi5teDEmMCQGA1UECQwdQXYuIEhpZGFsZ28gNzcsIENvbC4gR3VlcnJlcm8xDjAMBgNVBBEMBTA2MzAwMQswCQYDVQQGEwJNWDEZMBcGA1UECAwQRGlzdHJpdG8gRmVkZXJhbDESMBAGA1UEBwwJQ295b2Fjw6FuMRUwEwYDVQQtEwxTQVQ5NzA3MDFOTjMxITAfBgkqhkiG9w0BCQIMElJlc3BvbnNhYmxlOiBBQ0RNQTAeFw0xNjEwMjUyMTUyMTFaFw0yMDEwMjUyMTUyMTFaMIGxMRowGAYDVQQDExFDSU5ERU1FWCBTQSBERSBDVjEaMBgGA1UEKRMRQ0lOREVNRVggU0EgREUgQ1YxGjAYBgNVBAoTEUNJTkRFTUVYIFNBIERFIENWMSUwIwYDVQQtExxMQU43MDA4MTczUjUgLyBGVUFCNzcwMTE3QlhBMR4wHAYDVQQFExUgLyBGVUFCNzcwMTE3TURGUk5OMDkxFDASBgNVBAsUC1BydWViYV9DRkRJMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgvvCiCFDFVaYX7xdVRhp/38ULWto/LKDSZy1yrXKpaqFXqERJWF78YHKf3N5GBoXgzwFPuDX+5kvY5wtYNxx/Owu2shNZqFFh6EKsysQMeP5rz6kE1gFYenaPEUP9zj+h0bL3xR5aqoTsqGF24mKBLoiaK44pXBzGzgsxZishVJVM6XbzNJVonEUNbI25DhgWAd86f2aU3BmOH2K1RZx41dtTT56UsszJls4tPFODr/caWuZEuUvLp1M3nj7Dyu88mhD2f+1fA/g7kzcU/1tcpFXF/rIy93APvkU72jwvkrnprzs+SnG81+/F16ahuGsb2EZ88dKHwqxEkwzhMyTbQIDAQABox0wGzAMBgNVHRMBAf8EAjAAMAsGA1UdDwQEAwIGwDANBgkqhkiG9w0BAQsFAAOCAgEAJ/xkL8I+fpilZP+9aO8n93+20XxVomLJjeSL+Ng2ErL2GgatpLuN5JknFBkZAhxVIgMaTS23zzk1RLtRaYvH83lBH5E+M+kEjFGp14Fne1iV2Pm3vL4jeLmzHgY1Kf5HmeVrrp4PU7WQg16VpyHaJ/eonPNiEBUjcyQ1iFfkzJmnSJvDGtfQK2TiEolDJApYv0OWdm4is9Bsfi9j6lI9/T6MNZ+/LM2L/t72Vau4r7m94JDEzaO3A0wHAtQ97fjBfBiO5M8AEISAV7eZidIl3iaJJHkQbBYiiW2gikreUZKPUX0HmlnIqqQcBJhWKRu6Nqk6aZBTETLLpGrvF9OArV1JSsbdw/ZH+P88RAt5em5/gjwwtFlNHyiKG5w+UFpaZOK3gZP0su0sa6dlPeQ9EL4JlFkGqQCgSQ+NOsXqaOavgoP5VLykLwuGnwIUnuhBTVeDbzpgrg9LuF5dYp/zs+Y9ScJqe5VMAagLSYTShNtN8luV7LvxF9pgWwZdcM7lUwqJmUddCiZqdngg3vzTactMToG16gZA4CWnMgbU4E+r541+FNMpgAZNvs2CiW/eApfaaQojsZEAHDsDv4L5n3M1CC7fYjE/d61aSng1LaO6T1mh+dEfPvLzp7zyzz+UgWMhi5Cs4pcXx1eic5r7uxPoBwcCTt3YI1jKVVnV7/w=',
                    'condicionesDePago': 'Contado',
                    'SubTotal': '16148.04',
                    'Descuento': '645.92',
                    'Moneda': 'MXN',
                    'Total': '17207.35',
                    'TipoDeComprobante': 'ingreso',
                    'MetodoPago': 'En efectivo',
                    'LugarExpedicion': 'México'
                },
                'cfdi:Emisor': {
                    '_attributes': {
                        'Rfc': 'TCM970625MB1',
                        'Nombre': 'FACTURACION MODERNA SA DE CV',
                        'RegimenFiscal': 601
                    }
                },
                'cfdi:Receptor': {
                    '_attributes': {
                        'Rfc': 'XAXX010101000',
                        'Nombre': 'PUBLICO EN GENERAL',
                        'UsoCFDI': 'G01'
                    }
                },
                'cfdi:Conceptos': {
                    'cfdi:Concepto': [
                        {
                            '_attributes': {
                                'ClaveProdServ': '001',
                                'NoIdentificacion': '1212',
                                'Cantidad': '2',
                                'ClaveUnidad': 'pieza',
                                'Unidad': 'Pieza',
                                'Descripcion': 'audifonos',
                                'ValorUnitario': 1000,
                                'Importe': 2000,
                                'Descuento': 0
                            },
                            'cfdi:Impuestos': {
                                'cfdi:Traslados': {
                                    'cfdi:Traslado': [
                                        {
                                            '_attributes': {
                                                'Base': '369.83',
                                                'Impuesto': '002',
                                                'TipoFactor': 'Tasa',
                                                'TasaOCuota': '0.16',
                                                'Importe': '59.17'
                                            }
                                        },
                                        {
                                            '_attributes': {
                                                'Base': '369.8aaaa3',
                                                'Impuesto': '002',
                                                'TipoFactor': 'Tasa',
                                                'TasaOCuota': '0.16',
                                                'Importe': '59.17'
                                            }
                                        }
                                    ]
                                },
                                'cfdi:Retenciones': {
                                    'cfdi:Retencion': [
                                        {
                                            '_attributes': {
                                                'Base': '369.83',
                                                'Impuesto': '002',
                                                'TipoFactor': 'Tasa',
                                                'TasaOCuota': '0.16',
                                                'Importe': '59.17'
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                },
                'cfdi:Impuestos': {
                    '_attributes': {
                        'TotalImpuestosRetenidos': '1000'
                    },
                    'cfdi:Traslados': {
                        'cfdi:Traslado': [
                            {
                                '_attributes': {
                                    'Impuesto': '002',
                                    'TipoFactor': 'Tasa',
                                    'TasaOCuota': '0.16',
                                    'Importe': '59.17'
                                }
                            }
                        ]
                    },
                    'cfdi:Retenciones': {
                        'cfdi:Retencion': [
                            {
                                '_attributes': {
                                    'Impuesto': '002',
                                    'TipoFactor': 'Tasa',
                                    'TasaOCuota': '0.16',
                                    'Importe': '59.17'
                                }
                            }
                        ]
                    }
                }
            }
        });
    })
});
