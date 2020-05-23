# Impuestos

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlImpuestosTrasladados | TotalImpuestosRetenidos?: string; </br>TotalImpuestosTrasladados?: string;| |  Inicializa la clase|
| traslados | XmlTranRentAttributesProperties |  Base?: string;</br>Impuesto: string;</br>TipoFactor: string; </br>TasaOCuota: string;</br> Importe: string;| |  Agregar Traslados|
| retenciones | XmlTranRentAttributesProperties |Base?: string;</br>Impuesto: string;</br>TipoFactor: string; </br>TasaOCuota: string;</br> Importe: string;| |  Agrega Retenciones|


```ts
import { CFDI, EmisImpuestosor } from '@signati/core';
const cfd = new CFDI();
 const impuesto = new Impuestos({TotalImpuestosRetenidos: ''});
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

```

```xml
<?xml version="1.0" encoding="UTF-8"?>
  <cfdi:Impuestos TotalImpuestosRetenidos="" TotalImpuestosTrasladados="">
    <cfdi:Retenciones>
      <cfdi:Retencion Impuesto="" Importe=""/>
    </cfdi:Retenciones>
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="" TipoFactor="" TasaOCuota="" Importe=""/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
```
