import {Greeter} from '../index';

test('My Greeter', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
});

/**
 * const comprobanteAttribute: ComprobanteInterface = {
      xmlns:{
        xsi: 'http://www.w3.org/2001/XMLSchema-instance',
        cfdi: 'http://www.sat.gob.mx/cfd/3',
        iedu: 'http://www.sat.gob.mx/iedu',

      },
      schemaLocation: ['http://www.sat.gob.mx/cfd/3',
                       'http://www.sat.gob.mx/iedu',
                       'http://www.sat.gob.mx/sitio_internet/cfd/iedu/iedu.xsd',
                       'http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd'
        ],
      version: '3.3',
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
 await this.cfd.setAttributesXml({ version: '1.0', encoding: 'utf-8' });
 await this.cfd.setAttributesComprobantes(comprobanteAttribute);
 const emisor = new Emisor({ Rfc: 'TCM970625MB1', Nombre: 'FACTURACION MODERNA SA DE CV', 'RegimenFiscal': 601 });
 //emisor.addDomicilioFiscal({calle:'aaa',estado:'Mexico'})
 //emisor.addExpedidoEn({localidad:'Solidaridad'})
 //emisor.addRegimenFiscal({Regimen:'caser0'})
 await this.cfd.Emisor(emisor);
 const receptor = new Receptor({ Rfc: 'XAXX010101000', Nombre: 'PUBLICO EN GENERAL', UsoCFDI: 'G01' });
 //receptor.addDomicilio({calle:'aaa'})
 await this.cfd.addReceptor(receptor);
 const concepto = new Concepts({
      ClaveProdServ: '001',
      NoIdentificacion: '1212',
      Cantidad: '2',
      ClaveUnidad: 'pieza',
      Unidad: 'Pieza',
      Descripcion: 'audifonos',
      ValorUnitario: 1000,
      Importe: 2000,
      Descuento: 0,
    });
 concepto.traslado({
      Base: '369.83',
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
 const concepto2 = new Concepts({
      ClaveProdServ: '001',
      NoIdentificacion: '1212',
      Cantidad: '2',
      ClaveUnidad: 'pieza',
      Unidad: 'Pieza',
      Descripcion: 'audifonos',
      ValorUnitario: 1000,
      Importe: 2000,
      Descuento: 0,
    });
 concepto2.traslado({
      Base: '369.83',
      Impuesto: '002',
      TipoFactor: 'Tasa',
      TasaOCuota: '0.16',
      Importe: '59.17',
    });

 concepto2.traslado({
      Base: '369.83',
      Impuesto: '002',
      TipoFactor: 'Tasa',
      TasaOCuota: '0.16',
      Importe: '59.17',
    });

 concepto2.retencion({
      Base: '369.83',
      Impuesto: '002',
      TipoFactor: 'Tasa',
      TasaOCuota: '0.16',
      Importe: '59.17',
    });
 const ieduObject: xmlIeduAttribute = {
      version: '1.0',
      autRVOE: 'asdas',
      CURP: 'asdasd',
      nivelEducativo: 'eew',
      nombreAlumno: 'tr',
      rfcPago: 'fd',
    };
 ///const complement = new Complements<xmlIeduAttribute,Iedu>(ieduObject,Iedu);
 //concepto.addComplent(complement.getComplement().iued);
 const iedu = new Iedu(ieduObject)
 iedu.iued
 concepto.addComplent(iedu.iued);

 await this.cfd.addConcept(concepto);
 //await this.cfd.addConcept(concepto2);
 const impuesto: Impuestos = new Impuestos({ TotalImpuestosRetenidos: '1000' });
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
 this.cfd.addImpuestos(impuesto);
 */


/**
 * El SDK CFDI debe tener la posibilidad de crear un CFDI Básico con un objecto JS pasandolo con su constructor o traves de
 * un método estático.
 * El SDK CFDI debe tener la posibilidad de crear un CFDI Básico por medio de métodos constructores.
 * El SDK CFDI debe tener la posibilidad de crear un CFDI Básico por medio de Builders Object pasando los objetos.
 * El SDK CFDI debe tener la posiblidad de agregar complementos una ves creada la estructura.
 * El SDK CFDI debe construir el xml según el complemento que se eligió.
 * El SDK SATISEN debe hacer cualquier tipo de comprobación de CFDI
 */
test('Create CFDI With Object JS', function (assert) {
    /**
     * Este payload corresponde a una factura simple sin Complementos
     */
    const invoice = {
        payload: {
            xmlns: {
                xsi: 'http://www.w3.org/2001/XMLSchema-instance',
                cfdi: 'http://www.sat.gob.mx/cfd/3',
                iedu: 'http://www.sat.gob.mx/iedu',
            },
            schemaLocation: ['http://www.sat.gob.mx/cfd/3',
                'http://www.sat.gob.mx/iedu',
                'http://www.sat.gob.mx/sitio_internet/cfd/iedu/iedu.xsd',
                'http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd'
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
        },
        emisor: {Rfc: 'TCM970625MB1', Nombre: 'FACTURACION MODERNA SA DE CV', RegimenFiscal: 601},
        receptor: {Rfc: 'XAXX010101000', Nombre: 'PUBLICO EN GENERAL', UsoCFDI: 'G01'},
        conceptos: [
            {
                payload: {
                    ClaveProdServ: '001',
                    NoIdentificacion: '1212',
                    Cantidad: '2',
                    ClaveUnidad: 'pieza',
                    Unidad: 'Pieza',
                    Descripcion: 'audifonos',
                    ValorUnitario: 1000,
                    Importe: 2000,
                    Descuento: 0,
                },
                traslado: {
                    Base: '369.83',
                    Impuesto: '002',
                    TipoFactor: 'Tasa',
                    TasaOCuota: '0.16',
                    Importe: '59.17',
                },
                retencion: {
                    Base: '369.83',
                    Impuesto: '002',
                    TipoFactor: 'Tasa',
                    TasaOCuota: '0.16',
                    Importe: '59.17',
                },
            },
        ],
        impuestos: {
            payload: {
                TotalImpuestosTrasladados: "81.38",
            },
            traslados: [
                {
                    payload: {
                        Impuesto: "002",
                        TipoFactor: "Tasa",
                        TasaOCuota: "0.160000",
                        Importe: "81.38",
                    }
                }
            ]
        }
    };

});
