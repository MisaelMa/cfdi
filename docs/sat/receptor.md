# Receptor

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlReceptorAttribute |Rfc: string; <br> Nombre: string; <br> UsoCFDI: string; | |  Inicializa la clase|


```ts
import { Receptor } from '@signati/core';
const receptor = new Receptor({
    Rfc: 'XAXX010101000', 
    Nombre: 'PUBLICO EN GENERAL', 
    UsoCFDI: 'G01'
});
await cfd.receptor(receptor);
```
