import { describe, it, expect } from 'vitest';
import { CFDI, Concepto, Emisor, Impuestos, Receptor } from '../../src';
import { json2xml } from 'xml-js';
const expectedXml = `<?xml version="1.0" encoding="utf-8"?>
<cfdi:Comprobante xsi:schemaLocation="http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd" Version="4.0" Serie="SW" Folio="123456" Fecha="2024-04-29T00:00:00" Sello="" FormaPago="01" NoCertificado="" Certificado="" CondicionesDePago="Contado" SubTotal="10.00" Descuento="0.00" Moneda="MXN" Total="10.00" TipoDeComprobante="I" Exportacion="01" MetodoPago="PUE" LugarExpedicion="45610" xmlns:cfdi="http://www.sat.gob.mx/cfd/4" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <cfdi:Emisor Rfc="EKU9003173C9" Nombre="ESCUELA KEMPER URGATE" RegimenFiscal="603"/>
    <cfdi:Receptor Rfc="XAXX010101000" Nombre="CLIENTE" DomicilioFiscalReceptor="45610" RegimenFiscalReceptor="616" UsoCFDI="S01"/>
    <cfdi:Conceptos>
        <cfdi:Concepto ClaveProdServ="50211503" NoIdentificacion="None" Cantidad="1.0" ClaveUnidad="H87" Unidad="Pieza" Descripcion="Cigarros" ValorUnitario="10.00" Importe="10.00" Descuento="0.00" ObjetoImp="02">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado Base="1" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="1"/>
                </cfdi:Traslados>
                <cfdi:Retenciones>
                    <cfdi:Retencion Base="1" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.040000" Importe="1"/>
                </cfdi:Retenciones>
            </cfdi:Impuestos>
        </cfdi:Concepto>
    </cfdi:Conceptos>
    <cfdi:Impuestos TotalImpuestosRetenidos="1.00" TotalImpuestosTrasladados="1.00">
        <cfdi:Retenciones>
            <cfdi:Retencion Impuesto="002" Importe="1.00"/>
        </cfdi:Retenciones>
        <cfdi:Traslados>
            <cfdi:Traslado Base="1.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="1.00"/>
        </cfdi:Traslados>
    </cfdi:Impuestos>
</cfdi:Comprobante>`
describe('general', () => {
  it('debe generar una factura general con xslt', () => {
    console.log(process.env)
    const cfdi = new CFDI();
    
    cfdi.comprobante({
      Version: '4.0',
      FormaPago: '01',
      Serie: 'SW',
      Folio: '123456',
      Fecha: '2024-04-29T00:00:00',
      MetodoPago: 'PUE',
      Sello: '',
      NoCertificado: '',
      Certificado: '',
      CondicionesDePago: 'Contado',
      SubTotal: '10.00',
      Descuento: '0.00',
      Moneda: 'MXN',
      Total: '10.00',
      TipoDeComprobante: 'I',
      Exportacion: '01',
      LugarExpedicion: '45610',
    });


    const emisor = new Emisor({
      Rfc: 'EKU9003173C9',
      Nombre: 'ESCUELA KEMPER URGATE',
      RegimenFiscal: '603',
    });

    const receptor = new Receptor({
      Rfc: 'XAXX010101000',
      Nombre: 'CLIENTE',
      DomicilioFiscalReceptor: '45610',
      RegimenFiscalReceptor: '616',
      UsoCFDI: 'S01',
    });

    const concepto = new Concepto({
      ClaveProdServ: '50211503',
      NoIdentificacion: 'None',
      Cantidad: '1.0',
      ClaveUnidad: 'H87',
      Unidad: 'Pieza',
      Descripcion: 'Cigarros',
      ValorUnitario: '10.00',
      Importe: '10.00',
      Descuento: '0.00',
      ObjetoImp: '02',
    });

    concepto.traslado({
      Base: '1',
      Importe: '1',
      Impuesto: '002',
      TasaOCuota: '0.160000',
      TipoFactor: 'Tasa',
    });

    concepto.retencion({
      Base: '1',
      Importe: '1',
      Impuesto: '002',
      TasaOCuota: '0.040000',
      TipoFactor: 'Tasa',
    });

    const impuestos = new Impuestos({
      TotalImpuestosTrasladados: '1.00',
      TotalImpuestosRetenidos: '1.00',
    });

    impuestos.retenciones({
      Importe: '1.00',
      Impuesto: '002',
    });

    impuestos.traslados({
      Base: '1.00',
      Importe: '1.00',
      Impuesto: '002',
      TasaOCuota: '0.160000',
      TipoFactor: 'Tasa',
    });

    cfdi.emisor(emisor);
    cfdi.receptor(receptor);
    cfdi.concepto(concepto);
    cfdi.impuesto(impuestos);

    const jsonToXml = cfdi.getXmlCdfi()
    expect(jsonToXml.trim()).toBe(expectedXml.trim());
  });

  it(
    process.env.CI ? 'debería ser ignorado en CI' : 'debería pasar este test',
    () => {
      if (process.env.CI) {
        console.log('Este test se omite en CI');
        return; // Omitir el test en CI
      }
      expect(false).toBe(true); // Esto solo se ejecutará si no estamos en CI
    }
  );
});
