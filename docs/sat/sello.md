# Sellar Xml CFDI 3.3

La funcion certificar extra la informacion del cer y decodifica el numero del certificado y las anexa en la propiesades del xml para poder ser sellada.
La funcion sellar anexa un sello unico en base a todo el xml y la key 


```ts
import { CFDI } from '@signati/core';
 const key = 'CSD_Pruebas_CFDI_TCM970625MB1.key';
 const cer = 'CSD_Pruebas_CFDI_TCM970625MB1.cer';
 const cfd = new CFDI();
 await cfd.certificar(cer);
 await cfd.sellar(key, '12345678a');
 const xml = await cfd.getXmlCdfi();
```

```xml
<?xml version="1.0" encoding="utf-8"?>      
<cfdi:Comprobante xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                  xmlns:cfdi="http://www.sat.gob.mx/cfd/3" 
                  xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd" 
                  Version="3.3" 
                  Serie="" 
                  Folio=""
                  Fecha="" 
                  Sello="Vj/X/ZUWxL6DJOEXflMAVwfotRU5uZ4MHCJyD+CcLJwBbz5ob8a1QhilwjJCu5crpvgw6t5p4wTm0LHyqsKhtdBdvgHj54FTZ9ximRby8MNn4mW4xdCzKwqE7wIoS5Mhj4aVSjcV+kH/tk9sAgToBgFt4PxByzWg8u/WYTg41Y2lfhizz2iY0u86VHn+gU1Bnx6MBNRU7D7uXTeiNu3FMWROVe4xfAaESWyD5Vd1dzw3IoaC8/5CXmuvgu/zTM7uQIx8cOnWSFj2yOYJ6LzlTucYqQXnTB/1PAQrrmo0biXyeKcZO14nh22BOqYPLj0MhA/OAySCPcsaDUe7p2Gesg==" 
                  FormaPago="" 
                  NoCertificado="20001000000300022762" 
                  Certificado="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" 
                  condicionesDePago="" 
                  SubTotal="" 
                  Descuento="" 
                  Moneda="" 
                  Total="" 
                  TipoDeComprobante="" 
                  MetodoPago="" 
                  LugarExpedicion="">
```
