# List of Plugins

## Complemeto INE 
```javascript
import { Ine } from '@signati/core';
const ine = new Ine({
      Version: '1.0',
      TipoProceso: 'Ordinario',
      IdContabilidad: '9',
      TipoComite: 'Ejecutivo Estatal',
    });
    ine.Entidad({ Ambito: 'Federal', ClaveEntidad: 'ROO' });
    ine.Contabilidad({ IdContabilidad: '9' });
    this.cfd.complemento(ine);
```

```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
  <ine:INE Version="1.0" TipoProceso="Ordinario" IdContabilidad="9" TipoComite="Ejecutivo Estatal">
<ine:Entidad Ambito="Federal" ClaveEntidad="ROO">
<ine:Contabilidad IdContabilidad="9"/>
</ine:Entidad>
</ine:INE>
</cfdi:Complemento>

```
## Complemeto pago 10

```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
   <pago10:Pagos Version="1.0">
<pago10:Pago FechaPago="2019-11-27T00:00:00" FormaDePagoP="03" MonedaP="MXN" Monto="5220.00" NumOperacion="1" RfcEmisorCtaOrd="SEQ920520ME3" NomBancoOrdExt="BBVA Bancomer" RfcEmisorCtaBen="WSI1503194J6" CtaBeneficiario="0101255614">
<pago10:DoctoRelacionado IdDocumento="hasd" MonedaDR="MMX" MetodoDePagoDR="PUE"/>
<pago10:DoctoRelacionado IdDocumento="hasd" MonedaDR="MMX" MetodoDePagoDR="PUE"/>
<pago10:Impuestos TotalImpuestosRetenidos="12" TotalImpuestosTrasladados="234z ">
<pago10:Traslados>
<pago10:Traslado Importe="100" Impuesto="1201" TasaOCuota="123" TipoFactor="%"/>
</pago10:Traslados>
<pago10:Retenciones>
<pago10:Retencion Importe="10" Impuesto="10"/>
</pago10:Retenciones>
</pago10:Impuestos>
<pago10:Impuestos TotalImpuestosRetenidos="12" TotalImpuestosTrasladados="234z ">
<pago10:Traslados>
<pago10:Traslado Importe="100" Impuesto="1201" TasaOCuota="123" TipoFactor="%"/>
</pago10:Traslados>
<pago10:Retenciones>
<pago10:Retencion Importe="10" Impuesto="10"/>
</pago10:Retenciones>
</pago10:Impuestos>
</pago10:Pago>
</pago10:Pagos>
</cfdi:Complemento>

```
