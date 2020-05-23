# Emisor
| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlEmisorAttribute |  Rfc?: string; </br>Nombre?: string; </br>RegimenFiscal?: string ! number; | |  Inicializa la clase|

```ts
import { CFDI, Emisor } from '@signati/core';

const cfd = new CFDI();
const emisor = new Emisor({
   Rfc: '',
   Nombre: '',
   RegimenFiscal: 601
});
await cfd.emisor(emisor);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Emisor Rfc="" Nombre="" RegimenFiscal="601"/>
```
