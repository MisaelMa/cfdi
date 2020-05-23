# Receptor

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlReceptorAttribute |Rfc: string; <br> Nombre: string; <br> UsoCFDI: string; | |  Inicializa la clase|


```ts
import { CFDI, Receptor } from '@signati/core';

const cfd = new CFDI();
const receptor = new Receptor({
    Rfc: 'XAXX010101000', 
    Nombre: 'PUBLICO EN GENERAL', 
    UsoCFDI: 'G01'
});
await cfd.receptor(receptor);
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Receptor Rfc="XAXX010101000" Nombre="PUBLICO EN GENERAL" UsoCFDI="G01"/>
```

