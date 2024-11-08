import { describe, it, expect } from 'vitest';
import { CFDI, Concepto, Emisor, Impuestos, Receptor } from '../../src';
import path from 'path';

const files = path.resolve(__dirname, '..', '..', '..', '..', 'files');

const key_path = `${files}/certificados/LAN7008173R5.key`;
const cer_path = `${files}/certificados/LAN7008173R5.cer`;
const xslt_path = `${files}/4.0/cadenaoriginal.xslt`;

const expectedXml = `<?xml version="1.0" encoding="utf-8"?>
<cfdi:Comprobante xsi:schemaLocation="http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd" Version="4.0" Serie="RC" Folio="2080427802" Fecha="2024-04-29T00:00:00" Sello="d0p5IQGrpx0pyepaaXYHwlNzGNN1EpPlI+srBY3PHMyHGF81kuKbQVRTp+8okPprcZgqJz4kfEn2CACRUsLLYgvlHhQPuzVlxMWwA3DZSj8LSr8W3FiaP5efLpHTnT8ZS9nMaVbHK3pCVCevDfW7I+DXEESd2fsh7bKnoYUva8QfQcCqFeGGq6B+sOlAGmxahSRqxlwfX3ZoxqiN3t1Wtu7yYc78VFDWj751Bf7DjQJzZo9uaK+/W8BV1uMeSycb9Xn4xuyVQTPeQNnlpV8lz3otT9vPhbrsy1aIChhHZDiv8CRVxUAr+hnuOGgT9u3LmmzfP8ajNoSzJXxf3mFP+w==" FormaPago="99" NoCertificado="20001000000300022815" Certificado="MIIFxTCCA62gAwIBAgIUMjAwMDEwMDAwMDAzMDAwMjI4MTUwDQYJKoZIhvcNAQELBQAwggFmMSAwHgYDVQQDDBdBLkMuIDIgZGUgcHJ1ZWJhcyg0MDk2KTEvMC0GA1UECgwmU2VydmljaW8gZGUgQWRtaW5pc3RyYWNpw7NuIFRyaWJ1dGFyaWExODA2BgNVBAsML0FkbWluaXN0cmFjacOzbiBkZSBTZWd1cmlkYWQgZGUgbGEgSW5mb3JtYWNpw7NuMSkwJwYJKoZIhvcNAQkBFhphc2lzbmV0QHBydWViYXMuc2F0LmdvYi5teDEmMCQGA1UECQwdQXYuIEhpZGFsZ28gNzcsIENvbC4gR3VlcnJlcm8xDjAMBgNVBBEMBTA2MzAwMQswCQYDVQQGEwJNWDEZMBcGA1UECAwQRGlzdHJpdG8gRmVkZXJhbDESMBAGA1UEBwwJQ295b2Fjw6FuMRUwEwYDVQQtEwxTQVQ5NzA3MDFOTjMxITAfBgkqhkiG9w0BCQIMElJlc3BvbnNhYmxlOiBBQ0RNQTAeFw0xNjEwMjUyMTUyMTFaFw0yMDEwMjUyMTUyMTFaMIGxMRowGAYDVQQDExFDSU5ERU1FWCBTQSBERSBDVjEaMBgGA1UEKRMRQ0lOREVNRVggU0EgREUgQ1YxGjAYBgNVBAoTEUNJTkRFTUVYIFNBIERFIENWMSUwIwYDVQQtExxMQU43MDA4MTczUjUgLyBGVUFCNzcwMTE3QlhBMR4wHAYDVQQFExUgLyBGVUFCNzcwMTE3TURGUk5OMDkxFDASBgNVBAsUC1BydWViYV9DRkRJMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgvvCiCFDFVaYX7xdVRhp/38ULWto/LKDSZy1yrXKpaqFXqERJWF78YHKf3N5GBoXgzwFPuDX+5kvY5wtYNxx/Owu2shNZqFFh6EKsysQMeP5rz6kE1gFYenaPEUP9zj+h0bL3xR5aqoTsqGF24mKBLoiaK44pXBzGzgsxZishVJVM6XbzNJVonEUNbI25DhgWAd86f2aU3BmOH2K1RZx41dtTT56UsszJls4tPFODr/caWuZEuUvLp1M3nj7Dyu88mhD2f+1fA/g7kzcU/1tcpFXF/rIy93APvkU72jwvkrnprzs+SnG81+/F16ahuGsb2EZ88dKHwqxEkwzhMyTbQIDAQABox0wGzAMBgNVHRMBAf8EAjAAMAsGA1UdDwQEAwIGwDANBgkqhkiG9w0BAQsFAAOCAgEAJ/xkL8I+fpilZP+9aO8n93+20XxVomLJjeSL+Ng2ErL2GgatpLuN5JknFBkZAhxVIgMaTS23zzk1RLtRaYvH83lBH5E+M+kEjFGp14Fne1iV2Pm3vL4jeLmzHgY1Kf5HmeVrrp4PU7WQg16VpyHaJ/eonPNiEBUjcyQ1iFfkzJmnSJvDGtfQK2TiEolDJApYv0OWdm4is9Bsfi9j6lI9/T6MNZ+/LM2L/t72Vau4r7m94JDEzaO3A0wHAtQ97fjBfBiO5M8AEISAV7eZidIl3iaJJHkQbBYiiW2gikreUZKPUX0HmlnIqqQcBJhWKRu6Nqk6aZBTETLLpGrvF9OArV1JSsbdw/ZH+P88RAt5em5/gjwwtFlNHyiKG5w+UFpaZOK3gZP0su0sa6dlPeQ9EL4JlFkGqQCgSQ+NOsXqaOavgoP5VLykLwuGnwIUnuhBTVeDbzpgrg9LuF5dYp/zs+Y9ScJqe5VMAagLSYTShNtN8luV7LvxF9pgWwZdcM7lUwqJmUddCiZqdngg3vzTactMToG16gZA4CWnMgbU4E+r541+FNMpgAZNvs2CiW/eApfaaQojsZEAHDsDv4L5n3M1CC7fYjE/d61aSng1LaO6T1mh+dEfPvLzp7zyzz+UgWMhi5Cs4pcXx1eic5r7uxPoBwcCTt3YI1jKVVnV7/w=" CondicionesDePago="CondicionesDePago" SubTotal="844.98" Descuento="0" Moneda="MXN" Total="980.18" TipoDeComprobante="I" Exportacion="01" MetodoPago="PUE" LugarExpedicion="20000" xmlns:cfdi="http://www.sat.gob.mx/cfd/4" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
  it('debe generar una factura global con xslt', async () => {
    const cfdi = new CFDI({
      xslt: { path: xslt_path },
    });

    cfdi.comprobante({
      Version: '4.0',
      Serie: 'RC',
      Folio: '2080427802',
      Fecha: '2024-04-29T00:00:00',
      FormaPago: 99,
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

    cfdi.certificar(cer_path);

    await cfdi.sellar(key_path, '12345678a');
    const jsonToXml = cfdi.getXmlCdfi()
    expect(jsonToXml.trim()).toBe(expectedXml.trim());
  });
});
