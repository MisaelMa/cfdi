## Complemento IEDU

IEDU

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor |  XmlIeduAttribute | version: string;<br>nombreAlumno: string;<br>CURP: string;<br>nivelEducativo: string;<br>autRVOE: string; <br>rfcPago: string;  | |  Inicializa la clase|



```ts
import { CFDI, Iedu, Concepts, XmlIeduAttribute } from '@signati/core';

const cfd = new CFDI();
const concepto = new Concepts({ ...});
    concepto.traslado({ ...});
    concepto.retencion({ ...});
    const ieduObject: XmlIeduAttribute = {
      version: '1.0',
      autRVOE: '201587PRIM',
      CURP: 'EJEMPLOGH101004HQRRRN',
      nivelEducativo: 'Primaria',
      nombreAlumno: 'ejemplo garcia correa',
      rfcPago: 'XAXX010101000',
    };
    const iedu = new Iedu(ieduObject);
    concepto.complemento(iedu);

    await cfd.concepto(concepto);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="" NoIdentificacion="" Cantidad="" ClaveUnidad="" Unidad="" Descripcion="" ValorUnitario="" Importe="" Descuento="">
        <cfdi:ComplementoConcepto>
            <iedu:instEducativas version="1.0" nombreAlumno="ejemplo garcia correa" CURP="EJEMPLOGH101004HQRRRN" nivelEducativo="Primaria" autRVOE="201587PRIM" rfcPago="XAXX010101000"/>
        </cfdi:ComplementoConcepto>
    </cfdi:Concepto>
</cfdi:Conceptos>
```
