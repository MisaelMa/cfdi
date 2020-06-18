# Estructura General CFDI 3.3
```ts
import { CFDI, 
         Comprobante, 
         Concepts, 
         Emisor, 
         Impuestos, 
         Receptor, 
         Relacionado }  from '@signati/core';

  const cfd = new CFDI();

  const key = 'CSD_Pruebas_CFDI_TCM970625MB1.key';
  const cer = 'CSD_Pruebas_CFDI_TCM970625MB1.cer';
 
  const comprobanteAttribute: Comprobante = {
                Version: '3.3',
                Serie: '',
                Folio: '',
                Fecha: '',
                Sello: '',
                FormaPago: '',
                NoCertificado: '',
                Certificado: '',
                condicionesDePago: '',
                SubTotal: '',
                Descuento: '',
                Moneda: '',
                Total: '',
                TipoDeComprobante: '',
                MetodoPago: '',
                LugarExpedicion: '',
            };
  await cfd.setAttributesXml({version: '1.0', encoding: 'utf-8'});
  await cfd.setAttributesComprobantes(comprobanteAttribute);
            
  const relation = new Relacionado({ TipoRelacion: '01' });
        relation.addRelation('');
  await cfd.relacionados(relation);
  
  const emisor = new Emisor({
                     Rfc: '',
                     Nombre: '',
                     RegimenFiscal: 601
                 });
  await cfd.emisor(emisor);
         
  const receptor = new Receptor({
                        Rfc: 'XAXX010101000', 
                        Nombre: 'PUBLICO EN GENERAL', 
                        UsoCFDI: 'G01'
                    });
  await cfd.receptor(receptor);
  const concepto = new Concepts({
                ClaveProdServ: '',
                NoIdentificacion: '',
                Cantidad: '',
                ClaveUnidad: '',
                Unidad: '',
                Descripcion: '',
                ValorUnitario: '',
                Importe: '',
                Descuento: '',
            });
         concepto.traslado({
               Base: '',
               Impuesto: '',
               TipoFactor: '',
               TasaOCuota: '',
               Importe: '',
         });     
 
         concepto.retencion({
               Base: '',
               Impuesto: '',
               TipoFactor: '',
               TasaOCuota: '',
               Importe: '',
         });

   await cfd.concepto(concepto);
   
   const impuesto: Impuestos = new Impuestos({ TotalImpuestosRetenidos: '', TotalImpuestosTrasladados: ''});
    
         impuesto.traslados({
               Impuesto: '',
               TipoFactor: '',
               TasaOCuota: '',
               Importe: '',
         });
         impuesto.retenciones({
                Impuesto: '',
                TipoFactor: '',
                TasaOCuota: '',
                Importe: '',
         });
   await cfd.impuesto(impuesto);
   await cfd.certificar(cer);
   await cfd.sellar(key, '12345678a');
   const xml = await cfd.getXmlCdfi();

```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/3" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd" Version="3.3" Serie="" Folio="" Fecha="" Sello="" FormaPago="" NoCertificado="" Certificado="" CondicionesDePago="" SubTotal="" Descuento="" Moneda="" TipoCambio="" Total="" TipoDeComprobante="" MetodoPago="" LugarExpedicion="" Confirmacion="">
  <cfdi:CfdiRelacionados TipoRelacion="">
    <cfdi:CfdiRelacionado UUID=""/>
  </cfdi:CfdiRelacionados>
  <cfdi:Emisor Rfc="" Nombre="" RegimenFiscal=""/>
  <cfdi:Receptor Rfc="" Nombre="" ResidenciaFiscal="" NumRegIdTrib="" UsoCFDI=""/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="" NoIdentificacion="" Cantidad="" ClaveUnidad="" Unidad="" Descripcion="" ValorUnitario="" Importe="" Descuento="">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="" Impuesto="" TipoFactor="" TasaOCuota="" Importe=""/>
        </cfdi:Traslados>
        <cfdi:Retenciones>
          <cfdi:Retencion Base="" Impuesto="" TipoFactor="" TasaOCuota="" Importe=""/>
        </cfdi:Retenciones>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosRetenidos="" TotalImpuestosTrasladados="">
    <cfdi:Retenciones>
      <cfdi:Retencion Impuesto="" Importe=""/>
    </cfdi:Retenciones>
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="" TipoFactor="" TasaOCuota="" Importe=""/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
  <cfdi:Complemento/>
</cfdi:Comprobante>

```
