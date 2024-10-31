import { describe, it, expect } from 'vitest';
import { CFDI, Concepto, Emisor, Impuestos, Receptor } from '../../src';

const expectedXml = `<?xml version="1.0" encoding="utf-8"?>
<cfdi:Comprobante xsi:schemaLocation="http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd" Version="4.0" Serie="Serie" Folio="2080427802" Fecha="2024-04-29T00:00:00" Sello="" FormaPago="99" NoCertificado="" Certificado="" CondicionesDePago="CondicionesDePago" SubTotal="844.98" Descuento="0" Moneda="MXN" Total="980.18" TipoDeComprobante="I" Exportacion="01" MetodoPago="PUE" LugarExpedicion="20000" xmlns:cfdi="http://www.sat.gob.mx/cfd/4" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <cfdi:InformacionGlobal Periodicidad="01" Meses="01" Año="2023"/>
    <cfdi:Emisor Rfc="EKU9003173C9" Nombre="ESCUELA KEMPER URGATE" RegimenFiscal="601"/>
    <cfdi:Receptor Rfc="XAXX010101000" Nombre="PUBLICO EN GENERAL" DomicilioFiscalReceptor="20000" RegimenFiscalReceptor="616" UsoCFDI="S01"/>
    <cfdi:Conceptos>
        <cfdi:Concepto ClaveProdServ="01010101" NoIdentificacion="UT421511" Cantidad="1" ClaveUnidad="ACT" Descripcion="Venta" ValorUnitario="130" Importe="130" Descuento="0" ObjetoImp="02">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado Base="130" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="20.80"/>
                </cfdi:Traslados>
            </cfdi:Impuestos>
        </cfdi:Concepto>
        <cfdi:Concepto ClaveProdServ="01010101" NoIdentificacion="UT421512" Cantidad="1" ClaveUnidad="ACT" Descripcion="Venta" ValorUnitario="359.98" Importe="359.98" Descuento="0" ObjetoImp="02">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado Base="359.98" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="57.60"/>
                </cfdi:Traslados>
            </cfdi:Impuestos>
        </cfdi:Concepto>
        <cfdi:Concepto ClaveProdServ="01010101" NoIdentificacion="UT421513" Cantidad="1" ClaveUnidad="ACT" Descripcion="Venta" ValorUnitario="355.00" Importe="355.00" Descuento="0" ObjetoImp="02">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado Base="355.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="56.80"/>
                </cfdi:Traslados>
            </cfdi:Impuestos>
        </cfdi:Concepto>
    </cfdi:Conceptos>
    <cfdi:Impuestos TotalImpuestosTrasladados="135.20">
        <cfdi:Traslados>
            <cfdi:Traslado Base="844.98" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="135.20"/>
        </cfdi:Traslados>
    </cfdi:Impuestos>
</cfdi:Comprobante>`;

describe('general', () => {
  it('debe generar una factura global con xslt', () => {
    const cfdi = new CFDI();

    cfdi.comprobante({
      Version: '4.0',
      Serie: 'Serie',
      Folio: '2080427802',
      Fecha: '2024-04-29T00:00:00',
      Sello: '',
      FormaPago: 99,
      NoCertificado: '',
      Certificado: '',
      CondicionesDePago: 'CondicionesDePago',
      SubTotal: 844.98,
      Descuento: 0,
      Moneda: 'MXN',
      Total: 980.18,
      TipoDeComprobante: 'I',
      Exportacion: '01',
      MetodoPago: 'PUE',
      LugarExpedicion: '20000',
    });

    cfdi.informacionGlobal({
      Periodicidad: '01',
      Meses: '01',
      Año: '2023',
    });

    const emisor = new Emisor({
      Rfc: 'EKU9003173C9',
      Nombre: 'ESCUELA KEMPER URGATE',
      RegimenFiscal: 601,
    });

    const receptor = new Receptor({
      Rfc: 'XAXX010101000',
      Nombre: 'PUBLICO EN GENERAL',
      DomicilioFiscalReceptor: '20000',
      RegimenFiscalReceptor: 616,
      UsoCFDI: 'S01',
    });

    const concepto1 = new Concepto({
      ClaveProdServ: '01010101',
      NoIdentificacion: 'UT421511',
      Cantidad: 1,
      ClaveUnidad: 'ACT',
      Descripcion: 'Venta',
      ValorUnitario: 130,
      Importe: 130,
      Descuento: 0,
      ObjetoImp: '02',
    });
    concepto1.traslado({
      Base: 130,
      Impuesto: '002',
      TipoFactor: 'Tasa',
      TasaOCuota: '0.160000',
      Importe: '20.80',
    });

    const concepto2 = new Concepto({
      ClaveProdServ: '01010101',
      NoIdentificacion: 'UT421512',
      Cantidad: 1,
      ClaveUnidad: 'ACT',
      Descripcion: 'Venta',
      ValorUnitario: 359.98,
      Importe: 359.98,
      Descuento: 0,
      ObjetoImp: '02',
    });

    concepto2.traslado({
      Base: 359.98,
      Impuesto: '002',
      TipoFactor: 'Tasa',
      TasaOCuota: '0.160000',
      Importe: '57.60',
    });

    const concepto3 = new Concepto({
      ClaveProdServ: '01010101',
      NoIdentificacion: 'UT421513',
      Cantidad: 1,
      ClaveUnidad: 'ACT',
      Descripcion: 'Venta',
      ValorUnitario: '355.00',
      Importe: '355.00',
      Descuento: 0,
      ObjetoImp: '02',
    });

    concepto3.traslado({
      Base: '355.00',
      Impuesto: '002',
      TipoFactor: 'Tasa',
      TasaOCuota: '0.160000',
      Importe: '56.80'
    });
    const impuestos = new Impuestos({
      TotalImpuestosTrasladados: '135.20',
    });

    impuestos.traslados({
      Base: '844.98',
      Impuesto: '002',
      TipoFactor: 'Tasa',
      TasaOCuota: '0.160000',
      Importe: '135.20',
    });

    cfdi.emisor(emisor);
    cfdi.receptor(receptor);
    cfdi.concepto(concepto1);
    cfdi.concepto(concepto2);
    cfdi.concepto(concepto3);
    cfdi.impuesto(impuestos);

    const jsonToXml = cfdi.getXmlCdfi()
    expect(jsonToXml.trim()).toBe(expectedXml.trim());
  });
});
