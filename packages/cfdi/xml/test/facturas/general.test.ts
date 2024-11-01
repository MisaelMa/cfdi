import { describe, it, expect } from 'vitest';
import { CFDI, Concepto, Emisor, Impuestos, Receptor } from '../../src';
import path from 'path';

const files = path.resolve(__dirname, '..', '..', '..', '..', 'files');

const key_path = `${files}/certificados/LAN7008173R5.key`;
const cer_path = `${files}/certificados/LAN7008173R5.cer`;
const xslt_path = `${files}/4.0/cadenaoriginal.xslt`;

const expectedXml = `<?xml version="1.0" encoding="utf-8"?>
<cfdi:Comprobante xsi:schemaLocation="http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd" Version="4.0" Serie="RC" Folio="123456" Fecha="2024-04-29T00:00:00" Sello="" FormaPago="01" NoCertificado="20001000000300022815" Certificado="MIIFxTCCA62gAwIBAgIUMjAwMDEwMDAwMDAzMDAwMjI4MTUwDQYJKoZIhvcNAQELBQAwggFmMSAwHgYDVQQDDBdBLkMuIDIgZGUgcHJ1ZWJhcyg0MDk2KTEvMC0GA1UECgwmU2VydmljaW8gZGUgQWRtaW5pc3RyYWNpw7NuIFRyaWJ1dGFyaWExODA2BgNVBAsML0FkbWluaXN0cmFjacOzbiBkZSBTZWd1cmlkYWQgZGUgbGEgSW5mb3JtYWNpw7NuMSkwJwYJKoZIhvcNAQkBFhphc2lzbmV0QHBydWViYXMuc2F0LmdvYi5teDEmMCQGA1UECQwdQXYuIEhpZGFsZ28gNzcsIENvbC4gR3VlcnJlcm8xDjAMBgNVBBEMBTA2MzAwMQswCQYDVQQGEwJNWDEZMBcGA1UECAwQRGlzdHJpdG8gRmVkZXJhbDESMBAGA1UEBwwJQ295b2Fjw6FuMRUwEwYDVQQtEwxTQVQ5NzA3MDFOTjMxITAfBgkqhkiG9w0BCQIMElJlc3BvbnNhYmxlOiBBQ0RNQTAeFw0xNjEwMjUyMTUyMTFaFw0yMDEwMjUyMTUyMTFaMIGxMRowGAYDVQQDExFDSU5ERU1FWCBTQSBERSBDVjEaMBgGA1UEKRMRQ0lOREVNRVggU0EgREUgQ1YxGjAYBgNVBAoTEUNJTkRFTUVYIFNBIERFIENWMSUwIwYDVQQtExxMQU43MDA4MTczUjUgLyBGVUFCNzcwMTE3QlhBMR4wHAYDVQQFExUgLyBGVUFCNzcwMTE3TURGUk5OMDkxFDASBgNVBAsUC1BydWViYV9DRkRJMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgvvCiCFDFVaYX7xdVRhp/38ULWto/LKDSZy1yrXKpaqFXqERJWF78YHKf3N5GBoXgzwFPuDX+5kvY5wtYNxx/Owu2shNZqFFh6EKsysQMeP5rz6kE1gFYenaPEUP9zj+h0bL3xR5aqoTsqGF24mKBLoiaK44pXBzGzgsxZishVJVM6XbzNJVonEUNbI25DhgWAd86f2aU3BmOH2K1RZx41dtTT56UsszJls4tPFODr/caWuZEuUvLp1M3nj7Dyu88mhD2f+1fA/g7kzcU/1tcpFXF/rIy93APvkU72jwvkrnprzs+SnG81+/F16ahuGsb2EZ88dKHwqxEkwzhMyTbQIDAQABox0wGzAMBgNVHRMBAf8EAjAAMAsGA1UdDwQEAwIGwDANBgkqhkiG9w0BAQsFAAOCAgEAJ/xkL8I+fpilZP+9aO8n93+20XxVomLJjeSL+Ng2ErL2GgatpLuN5JknFBkZAhxVIgMaTS23zzk1RLtRaYvH83lBH5E+M+kEjFGp14Fne1iV2Pm3vL4jeLmzHgY1Kf5HmeVrrp4PU7WQg16VpyHaJ/eonPNiEBUjcyQ1iFfkzJmnSJvDGtfQK2TiEolDJApYv0OWdm4is9Bsfi9j6lI9/T6MNZ+/LM2L/t72Vau4r7m94JDEzaO3A0wHAtQ97fjBfBiO5M8AEISAV7eZidIl3iaJJHkQbBYiiW2gikreUZKPUX0HmlnIqqQcBJhWKRu6Nqk6aZBTETLLpGrvF9OArV1JSsbdw/ZH+P88RAt5em5/gjwwtFlNHyiKG5w+UFpaZOK3gZP0su0sa6dlPeQ9EL4JlFkGqQCgSQ+NOsXqaOavgoP5VLykLwuGnwIUnuhBTVeDbzpgrg9LuF5dYp/zs+Y9ScJqe5VMAagLSYTShNtN8luV7LvxF9pgWwZdcM7lUwqJmUddCiZqdngg3vzTactMToG16gZA4CWnMgbU4E+r541+FNMpgAZNvs2CiW/eApfaaQojsZEAHDsDv4L5n3M1CC7fYjE/d61aSng1LaO6T1mh+dEfPvLzp7zyzz+UgWMhi5Cs4pcXx1eic5r7uxPoBwcCTt3YI1jKVVnV7/w=" CondicionesDePago="Contado" SubTotal="10.00" Descuento="0.00" Moneda="MXN" Total="10.00" TipoDeComprobante="I" Exportacion="01" MetodoPago="PUE" LugarExpedicion="45610" xmlns:cfdi="http://www.sat.gob.mx/cfd/4" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
    const cfdi = new CFDI({
      xslt: { path: xslt_path },
    });
    
    cfdi.comprobante({
      Version: '4.0',
      FormaPago: '01',
      Serie: 'RC',
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
    
    cfdi.certificar(cer_path);
    //cfdi.setDebug(true);
   // cfdi.sellar(key_path, '12345678a');

    const jsonToXml = cfdi.getXmlCdfi()
    expect(jsonToXml.trim()).toBe(expectedXml.trim());
  });
});
