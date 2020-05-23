# Concepto
| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlConceptoAttributes | ClaveProdServ: string; <br>NoIdentificacion: string;  <br>Cantidad: number/string; <br>ClaveUnidad: string; <br>Unidad: string; <br> Descripcion: string; <br>ValorUnitario: number/string; <br>Importe: number/string; <br>Descuento: number /string;  <br> | |  Inicializa la clase|
| traslado | XmlTranRentAttributesProperties |  Base?: string;</br>Impuesto: string;</br>TipoFactor: string; </br>TasaOCuota: string;</br> Importe: string; | |  Inicializa la clase|
| retencion | XmlTranRentAttributesProperties |  Base?: string;</br>Impuesto: string;</br>TipoFactor: string; </br>TasaOCuota: string;</br> Importe: string; | |  Inicializa la clase|
| complemento | ComlementTypeConcept |  Iedu | |  |



```ts
import { CFDI, Concepts } from '@signati/core';

const cfd = new CFDI();
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

 await cfd.concepto(concepto);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
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
```

