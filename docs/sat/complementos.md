# COMPLEMENTOS

Los Complementos y Complementos Concepto, permiten integrar información adicional de uso regulado por la autoridad para un sector o actividad específica, permitiendo que la información adicional sea protegida por el sello digital de la Factura.
En Contenidos Relacionados encontrarás el listado de los Complementos y Complementos Concepto

 ## Complemeto INE 

INE

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlIneAttribute |  Version: string;<br>TipoProceso: TipoProcesoIne;<br>TipoComite?: TipoComiteIne;<br>IdContabilidad?: string; | |  Inicializa la clase|
| Entidad | XmlIneEntidadAttribute | ClaveEntidad: ClaveEntidadIne;<br>Ambito?: AmbitoIne; | | |
| Contabilidad | XmlIneContabilidadAttribute | IdContabilidad: string; | | |


```ts
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
 ## Complemeto PAGO10
 PAGO10

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlPagos10Attributes|    Version?: string; | |  Inicializa la clase|
| pago  | data: XmlPago10Attributes,<br>relacionado?: XmlDoctoRelacionado[],<br>impuestos?: XmlPago10Impuesto[] |  FechaPago: string;<br>FormaDePagoP: string;<br>MonedaP: string;<br>TipoCambioP?: string;<br>Monto: string;<br>NumOperacion?: string;<br>RfcEmisorCtaOrd?: string;<br>NomBancoOrdExt?: string;<br>CtaOrdenante?: string;<br>RfcEmisorCtaBen?: string;<br>CtaBeneficiario?: string;<br>TipoCadPago?: string;<br>CertPago?: string;<br>CadPago?: string;<br>SelloPago?: string; | |  |

PAGO10-RELACIONADO

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlDoctoRelacionado |    _attributes?: XmlDoctoRelAttributes | |  Inicializa la clase|
| relacion | XmlDoctoRelAttributes | IdDocumento: string,<br>Serie?: string,<br>Folio?: string,<br>MonedaDR: string,<br>TipoCambioDR?: string,<br>MetodoDePagoDR: string,<br>NumParcialidad?: string,<br>ImpSaldoAnt?: string,<br>ImpPagado?: string,<br>ImpSaldoInsoluto?: string | | |

PAGO10-IMPUESTOS

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlPagoImptoAttributes |    TotalImpuestosRetenidos?: string;<br>TotalImpuestosTrasladados?: string; | |  Inicializa la clase|
| traslados | XmlPagoTranladoAttributes | Impuesto: string;<br>TipoFactor: string;<br>TasaOCuota: string;<br>Importe: string; | | Agregar la entidad|
| retenciones | XmlPagoRetencionAttributes |Impuesto: string;<br>Importe: string; | | |

```ts
import { pago10 } from '@signati/core';

const pago = new Pago10({
      Version: '1.0',
    });
    const docRela = new Pago10Relacionado();
    docRela.relacion({
      IdDocumento: 'hasd',
      MonedaDR: 'MMX',
      MetodoDePagoDR: 'PUE',
    });
    docRela.relacion({
      IdDocumento: 'hasd',
      MonedaDR: 'MMX',
      MetodoDePagoDR: 'PUE',
    });
    const impuesto = new Pago10Impuestos({
      TotalImpuestosRetenidos: '12',
      TotalImpuestosTrasladados: '234z ',
    });
    impuesto.traslados({
      Importe: '100',
      Impuesto: '1201',
      TasaOCuota: '123',
      TipoFactor: '%',
    });
    impuesto.retenciones({ Importe: '10', Impuesto: '10' });
    const impuesto2 = new Pago10Impuestos({
      TotalImpuestosRetenidos: '12',
      TotalImpuestosTrasladados: '234z ',
    });
    impuesto2.traslados({
      Importe: '100',
      Impuesto: '1201',
      TasaOCuota: '123',
      TipoFactor: '%',
    });
    impuesto2.retenciones({ Importe: '10', Impuesto: '10' });
    pago.pago({
      data: {
        FechaPago: '2019-11-27T00:00:00',
        FormaDePagoP: '03',
        MonedaP: 'MXN',
        Monto: '5220.00',
        NumOperacion: '1',
        RfcEmisorCtaOrd: 'SEQ920520ME3',
        NomBancoOrdExt: 'BBVA Bancomer',
        RfcEmisorCtaBen: 'WSI1503194J6',
        CtaBeneficiario: '0101255614',
      },
      relacionado: docRela.getRelations(),
      impuestos: [impuesto.getImpuesto(), impuesto2.getImpuesto()],
    });

    this.cfd.complemento(pago);

```

```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
  <pago10:Pagos Version="1.0">
    <pago10:Pago FechaPago="2019-11-27T00:00:00" FormaDePagoP="03" MonedaP="MXN" Monto="5220.00" NumOperacion="1" RfcEmisorCtaOrd="SEQ920520ME3" NomBancoOrdExt="BBVA Bancomer" RfcEmisorCtaBen="WSI1503194J6" CtaBeneficiario="0101255614">
       <pago10:DoctoRelacionado IdDocumento="hasd" MonedaDR="MMX" MetodoDePagoDR="PUE"/>
       <pago10:DoctoRelacionado IdDocumento="hasd" MonedaDR="MMX"  MetodoDePagoDR="PUE"/>
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
## Complemento CCE11

CCE11

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor |  XmlCce11Attributes |  Version: string;<br>MotivoTraslado?: string;<br>TipoOperacion: string;<br>ClaveDePedimento?: string;<br>CertificadoOrigen?: string;<br>NumCertificadoOrigen?: string;<br>NumeroExportadorConfiable?: string;<br>Incoterm?: string;<br>Subdivision?: string;<br>Observaciones?: string;<br>TipoCambioUSD?: string;<br>TotalUSD?: string;  | |  Inicializa la clase|
| Emisor | XmlCce11EmisorAttributes | Curp?: string; | | |
| Propietario | XmlCce11PropietarioAttributes | NumRegIdTrib: string;<br>ResidenciaFiscal: string;| | |
| Receptor | XmlCce11ReceptorAttributes | NumRegIdTrib?: string; | | |
| Destinatario | XmlCce11DestinatarioAttributes |NumRegIdTrib?: string;<br>Nombre?: string; | | |
| Mercancias | XmlCce11MercanciaAttributes | oIdentificacion: string;<br>FraccionArancelaria?: string;<br>CantidadAduana?: string;<br>UnidadAduana?: string;<br>ValorUnitarioAduana?: string;<br>ValorDolares: string; | | |


 ```ts
import { cce11 } from '@signati/core';
const cce11 = new Cce11({ Version: '1.1', TipoOperacion: 'exportacion' });
    cce11.Emisor({ Curp: 'MACA0012KSHDSADS' }, {
      Pais: 'MX',
      Estado: 'QROO',
      Calle: 'av. colosio',
      CodigoPostal: '77728',
    });
    cce11.Propietario({ NumRegIdTrib: '0016', ResidenciaFiscal: 'cresencio' });
    cce11.Propietario({ NumRegIdTrib: '0017', ResidenciaFiscal: 'steeve' });
    cce11.Receptor({ NumRegIdTrib: 'aaa' }, {
      Pais: 'MX',
      Estado: 'QROO',
      Calle: 'av. colosio',
      CodigoPostal: '77728',
    });
    cce11.Destinatario({ Nombre: 'arturos', NumRegIdTrib: '2' });
    cce11.Destinatario({ Nombre: 'arturos', NumRegIdTrib: '2' }, {
      Pais: 'MX',
      Estado: 'QROO',
      Calle: 'av. colosio',
      CodigoPostal: '77728',
    });

    cce11.Mercancias({ NoIdentificacion: 'misael', ValorDolares: 'JSON' });
    cce11.Mercancias({ NoIdentificacion: 'misael', ValorDolares: 'JSON' }, [{ Marca: 'webtel' }, { Marca: 'webtela' }]);
    cce11.Mercancias({
      NoIdentificacion: 'misael',
      ValorDolares: 'JSON',
    }, [{ Marca: 'webtel', Modelo: '000aa' }, { Marca: 'wal', SubModelo: 'asaa' }, { Marca: 'webtela' }]);

    this.cfd.complemento(cce11);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <cce11:ComercioExterior Version="1.1" TipoOperacion="exportacion">
  <cce11:Emisor Curp="MACA0012KSHDSADS">
   <cce11:Domicilio Pais="MX" Estado="QROO" Calle="av. colosio" CodigoPostal="77728"/>
  </cce11:Emisor>
  <cce11:Propietario NumRegIdTrib="0016" ResidenciaFiscal="cresencio"/>
  <cce11:Propietario NumRegIdTrib="0017" ResidenciaFiscal="steeve"/>
  <cce11:Receptor NumRegIdTrib="aaa">
   <cce11:Domicilio Pais="MX" Estado="QROO" Calle="av. colosio" CodigoPostal="77728"/>
  </cce11:Receptor>
  <cce11:Destinatario Nombre="arturos" NumRegIdTrib="2"/>
  <cce11:Destinatario Nombre="arturos" NumRegIdTrib="2">
   <cce11:Domicilio Pais="MX" Estado="QROO" Calle="av. colosio" CodigoPostal="77728"/>
  </cce11:Destinatario>
  <cce11:Mercancias>
   <cce11:Mercancia NoIdentificacion="misael" ValorDolares="JSON"/>
   <cce11:Mercancia NoIdentificacion="misael" ValorDolares="JSON">
    <cce11:DescripcionesEspecificas Marca="webtel"/>
    <cce11:DescripcionesEspecificas Marca="webtela"/>
  </cce11:Mercancia>
   <cce11:Mercancia NoIdentificacion="misael" ValorDolares="JSON">
    <cce11:DescripcionesEspecificas Marca="webtel" Modelo="000aa"/>
    <cce11:DescripcionesEspecificas Marca="wal" SubModelo="asaa"/>
    <cce11:DescripcionesEspecificas Marca="webtela"/>
   </cce11:Mercancia>
  </cce11:Mercancias>
 </cce11:ComercioExterior>
</cfdi:Complemento>
```
 ## Complemento AEROLINEAS

 AEROLINEAS

 | Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlAerolineasAttributes |  Version: string;<br>TUA: string; | |  Inicializa la clase|
| OtrosCargos | XmlAerolineasOtrosCargosAttributes |  TotalCargos: string; | | |
| Cargo | XmlAerolineasCargoAttributes |  CodigoCargo: string;<br>Importe: string; | | |

 ```ts
import { areolineas } from '@signati/core';
const aerolineas = new Aerolineas({ Version: '1.0', TUA: 'asas' });
    aerolineas.OtrosCargos({ TotalCargos: '90000.00' });
    aerolineas.Cargo({ CodigoCargo: 'assa', Importe: 'aaaasas99' });
    aerolineas.Cargo({ CodigoCargo: 'assa', Importe: '121221' });
    aerolineas.Cargo({ CodigoCargo: 'assa', Importe: 'aaaasas99' });

    this.cfd.complemento(aerolineas);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <aerolineas:Aerolineas Version="1.0" TUA="asas">
  <aerolineas:OtrosCargos TotalCargos="90000.00">
   <aerolineas:Cargo CodigoCargo="assa" Importe="aaaasas99"/>
   <aerolineas:Cargo CodigoCargo="assa" Importe="121221"/>
   <aerolineas:Cargo CodigoCargo="assa" Importe="aaaasas99"/>
  </aerolineas:OtrosCargos>
 </aerolineas:Aerolineas>
</cfdi:Complemento>
```
## Complemento COMBUSTIBLE

COSUMO-DE-COMBUSTIBLES11

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlCondComAttributes |  version: string;<br>tipoOperacion: string;<br>numeroDeCuenta: string;<br>subTotal?: string;<br>total: string; | |  Inicializa la clase|
| Concepto | XmlCondComConcepConsumDeCombusAttributes |  identificador: string;<br>fecha: string;<br>rfc:string;<br>claveEstacion: string;<br>cantidad: string;<br>nombreCombustible: string;<br>folioOperacion: string;<br>valorUnitario: string;<br>importe: string; | | |

 ```ts
import {combustible} from '@signati/core';
onst combustible = new ConsumoDeCombustibles11({
      version: '1.1',
      numeroDeCuenta: '1221',
      tipoOperacion: 'dssd',
      total: '100',
    });
    combustible.Concepto({
      cantidad: '100',
      claveEstacion: '1000',
      fecha: '121212',
      folioOperacion: '2332',
      identificador: '0',
      importe: '10000',
      nombreCombustible: 'Magna',
      rfc: 'Macaasas',
      valorUnitario: '10000',
    }, [
      { importe: 'misaek100', impuesto: '20', tasa: 'MISAEL' },
      { importe: 'sss100', impuesto: '10', tasa: 'steeve' },
    ]);

    combustible.Concepto({
      cantidad: '100',
      claveEstacion: '1000',
      fecha: '121212',
      folioOperacion: '2332',
      identificador: '0',
      importe: '10000',
      nombreCombustible: 'Magna',
      rfc: 'Macaasas',
      valorUnitario: '10000',
    }, [
      { importe: 'misaek100', impuesto: '20', tasa: 'MISAEL' },
    ]);

    this.cfd.complemento(combustible);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <consumodecombustibles11:ConsumoDeCombustibles version="1.1" numeroDeCuenta="1221" tipoOperacion="dssd" total="100">
  <consumodecombustibles11:Conceptos>
   <consumodecombustibles11:ConceptoConsumoDeCombustibles cantidad="100" claveEstacion="1000" fecha="121212" folioOperacion="2332" identificador="0" importe="10000" nombreCombustible="Magna" rfc="Macaasas" valorUnitario="10000">
     <consumodecombustibles11:Determinados>
      <consumodecombustibles11:Determinado importe="misaek100" impuesto="20" tasa="MISAEL"/>
      <consumodecombustibles11:Determinado importe="sss100" impuesto="10" tasa="steeve"/>
     </consumodecombustibles11:Determinados>
  </consumodecombustibles11:ConceptoConsumoDeCombustibles>
  <consumodecombustibles11:ConceptoConsumoDeCombustibles cantidad="100" claveEstacion="1000" fecha="121212" folioOperacion="2332" identificador="0" importe="10000" nombreCombustible="Magna" rfc="Macaasas" valorUnitario="10000">
    <consumodecombustibles11:Determinados>
     <consumodecombustibles11:Determinado importe="misaek100" impuesto="20" tasa="MISAEL"/>
    </consumodecombustibles11:Determinados>
   </consumodecombustibles11:ConceptoConsumoDeCombustibles>
  </consumodecombustibles11:Conceptos>
 </consumodecombustibles11:ConsumoDeCombustibles>
</cfdi:Complemento>
``` 
  ## Complemento DECRETO

DECRETO

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlDecretoAttributes |  Version: string;<br>TipoDeDecreto: string; | |  Inicializa la clase|

RENOV-VEHICULAR

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlVehicularAttributes |  VehEnaj: string; | |  Inicializa la clase|
| VehiculosUsados | XmlVehiculosUsaEnajPermAlFabAttributes |  PrecioVehUsado: string;<br>TipoVeh: string;<br>Marca: string;<br>TipooClase: string;<br>Año: string;<br>Modelo?: string;<br>NIV?: string;<br>NumSerie?: string;<br>NumPlacas: string;<br>NumMotor?: string;<br>NumFolTarjCir: string;<br>NumPedIm?: string;<br>Aduana?: string;<br>FechaRegulVeh?: string;<br>Foliofiscal: string; | | |
| VehiculoNuvoSem | XmlVehNueEnaFabAlPermAttributes |  Año: string;<br>Modelo?: string;<br>NumPlacas: string;<br>RFC?: string; | | |

SUSTIT-VEHICULAR

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlVehicularAttributes |  VehEnaj: string; | |  Inicializa la clase|
| VehiculoUsado | XmlVehiculoUsaEnajPermAlFabAttributes |  PrecioVehUsado: string;<br>TipoVeh: string;<br>Marca: string;<br>TipooClase: string;<br>Año: string;<br>Modelo?: string;<br>NIV?: string;<br>NumSerie?: string;<br>NumPlacas: string;<br>NumMotor?: string;<br>NumFolTarjCir: string;<br>NumFolAvisoint: string;<br>NumPedIm: string;<br>Aduana: string;<br>FechaRegulVeh: string;<br>Foliofiscal: string; | | |
| VehiculoNuvoSem | XmlVehNueEnaFabAlPermAttributes | Año: string;<br>Modelo?: string;<br>NumPlacas: string;<br>RFC?: string; | | |


```ts
import {decreto} from '@signati/core';
const decreto = new Decreto({ Version: '1.0', TipoDeDecreto: '01' });
    const renov = new RenovVehicular({ VehEnaj: '100.00' });
    renov.VehiculosUsados({
      Año: '2019',
      Foliofiscal: '120120',
      Marca: 'Nissan',
      NumFolTarjCir: 'asaas',
      NumPlacas: '00129',
      PrecioVehUsado: '2000,000',
      TipooClase: 'TSURo',
      TipoVeh: 'Caminoneta',
    });
    renov.VehiculosUsados({
      Año: '2019',
      Foliofiscal: '120120',
      Marca: 'Nissan',
      NumFolTarjCir: 'asaas',
      NumPlacas: '00129',
      PrecioVehUsado: '2000,000',
      TipooClase: 'TSURo',
      TipoVeh: 'Caminoneta',
    });
    renov.VehiculoNuvoSem({ Año: '2019', NumPlacas: '00129qR' });
    const sustiV = new SustitVehicular({ VehEnaj: '001' });
    sustiV.VehiculoUsado({
      Año: '2019',
      Foliofiscal: '120120',
      Marca: 'Nissan',
      NumFolTarjCir: 'asaas',
      NumPlacas: '00129',
      PrecioVehUsado: '2000,000',
      TipooClase: 'TSURo',
      TipoVeh: 'Caminoneta',
      Aduana: '100',
      FechaRegulVeh: '9292',
      NumFolAvisoint: '122',
      NumPedIm: '1212',
    });
    sustiV.VehiculoNuvoSem({ Año: '2019', NumPlacas: '00129qR' });
    decreto.RenovVehicular(renov);
    decreto.SustitVehicular(sustiV);
    this.cfd.complemento(decreto);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <decreto:renovacionysustitucionvehiculos Version="1.0" TipoDeDecreto="01">
  <decreto:DecretoRenovVehicular VehEnaj="100.00">
   <decreto:VehiculosUsadosEnajenadoPermAlFab Año="2019" Foliofiscal="120120" Marca="Nissan" NumFolTarjCir="asaas" NumPlacas="00129" PrecioVehUsado="2000,000" TipooClase="TSURo" TipoVeh="Caminoneta"/>
   <decreto:VehiculosUsadosEnajenadoPermAlFab Año="2019" Foliofiscal="120120" Marca="Nissan" NumFolTarjCir="asaas" NumPlacas="00129" PrecioVehUsado="2000,000" TipooClase="TSURo" TipoVeh="Caminoneta"/>
   <decreto:VehiculoNuvoSemEnajenadoFabAlPerm Año="2019" NumPlacas="00129qR"/>
  </decreto:DecretoRenovVehicular>
  <decreto:DecretoSustitVehicular VehEnaj="001">
   <decreto:VehiculoUsadoEnajenadoPermAlFab Año="2019" Foliofiscal="120120" Marca="Nissan" NumFolTarjCir="asaas" NumPlacas="00129" PrecioVehUsado="2000,000" TipooClase="TSURo" TipoVeh="Caminoneta" Aduana="100" FechaRegulVeh="9292" NumFolAvisoint="122" NumPedIm="1212"/>
   <decreto:VehiculoNuvoSemEnajenadoFabAlPerm Año="2019" NumPlacas="00129qR"/>
  </decreto:DecretoSustitVehicular>
 </decreto:renovacionysustitucionvehiculos>
</cfdi:Complemento>
```
 ## Complemento DESTRUCCION

DESTRUCCION

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlDestruccionAttributes |  Version: string;<br>Serie: string;<br>NumFolDesVeh: string; | |  Inicializa la clase|
| InformacionAduanera | XmlInfoAduAttributes |  NumPedImp: string;<br>Fecha: string;<br>Aduana: string; | | |
| VehiculoDestruido | XmlVehiculoDestruidoAttributes |  Marca: string;<br>TipooClase: string;<br>Año: string;<br>Modelo: string;<br>NIV?: string;<br>NumSerie?: string;<br>NumPlacas: string;<br>NumMotor?: string;<br>NumFolTarjCir: string; | | |


```ts
import {destruccion} from '@signati/core';
const destruccion = new Destruccion({ Version: '1.0', NumFolDesVeh: '0221', Serie: '012' });
    destruccion.InformacionAduanera({ Aduana: 'ADUANA', Fecha: '129283', NumPedImp: 'ASAS' });
    destruccion.VehiculoDestruido({
      Año: '2019',
      Marca: 'Nissan',
      Modelo: 'ASAD',
      TipooClase: 'ASDSA',
      NumFolTarjCir: 'ASSA',
      NumPlacas: 'QRR0',
    });
    this.cfd.complemento(destruccion);

```

```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <destruccion:certificadodedestruccion Version="1.0" NumFolDesVeh="0221" Serie="012">
  <destruccion:InformacionAduanera Aduana="ADUANA" Fecha="129283" NumPedImp="ASAS"/>
  <destruccion:VehiculoDestruido Año="2019" Marca="Nissan" Modelo="ASAD" TipooClase="ASDSA" NumFolTarjCir="ASSA" NumPlacas="QRR0"/>
 </destruccion:certificadodedestruccion>
</cfdi:Complemento
```
 ## Complemento REGISTRO-FISCAL

REGISTRO-FISCAL

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlRegistrofiscalAttributes |     Version: string;<br>Folio: string; | |  Inicializa la clase|

 ```ts
import {registrofiscal} from '@signati/core';
 const registroFiscal = new RegistroFiscal({
      Version: '1.0',
      Folio: '12223132',
    });
    this.cfd.complemento(registroFiscal);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <registrofiscal:CFDIRegistroFiscal Version="1.0" Folio="12223132"/>
</cfdi:Complemento>
```
 ## Complemento DONATARIAS

DONAT

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlDonatAttributes | version: string;<br>noAutorizacion: string;<br>fechaAutorizacion: string;<br>leyenda: string; | |  Inicializa la clase|

 ```ts
import {donatarias} from '@signati/core';
const donat = new Donat({
      version: '1.1',
      fechaAutorizacion: '122231',
      leyenda: '12312',
      noAutorizacion: 'weqweq',
    });
    this.cfd.complemento(donat);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <donat:Donatarias version="1.1" fechaAutorizacion="122231" leyenda="12312" noAutorizacion="weqweq"/>
</cfdi:Complemento>
```
## Complemento OBRAS-ARTE

OBRAS-ARTE

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlObrasarteAttributes | Version: string;<br>TipoBien: TiposDeBien;<br>OtrosTipoBien?: string;<br>TituloAdquirido: TituloAdquirido;<br>OtrosTituloAdquirido?: string;<br>Subtotal?: string;<br>IVA?: string;<br>FechaAdquisicion: string;<br>CaracterísticasDeObraoPieza: CaracteristicaObraPieza; | |  Inicializa la clase|

```ts
import {obrasarte} from '@signati/core';
const arte = new ObrasArte({
      Version: '1.0',
      TipoBien: TiposDeBien.Grabados,
      TituloAdquirido: TituloAdquirido.Compra,
      FechaAdquisicion: '20123/2312/2',
      CaracterísticasDeObraoPieza: CaracteristicaObraPieza.Alambrados,
    });
    this.cfd.complemento(arte);
```    
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <obrasarte:obrasarteantiguedades Version="1.0" TipoBien="02" TituloAdquirido="01" FechaAdquisicion="20123/2312/2" CaracterísticasDeObraoPieza="05"/>
</cfdi:Complemento>

```
 ## Complemento VALES-DESPENSA

VALES-DE-DESPENSA

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlValesAttributes |  version: string;<br>tipoOperacion: string;<br>registroPatronal?: string;<br>numeroDeCuenta: string;<br>total: string | |  Inicializa la clase|
| concepto | XmlValesConceptAttributes | identificador: string;<br>fecha: string;<br>rfc: string;<br>curp: string;<br>nombre: string;<br>numSeguridadSocial?: string;<br>importe: string | | |

```ts
import {valesdespensa} from '@signati/core';
const vale = new ValesDeDespensa({
      version: '1.0',
      numeroDeCuenta: '1221313123',
      tipoOperacion: 'monedero electrónico',
      total: '120',
    });
    vale.concepto({
      nombre: 'amir misael marin coh',
      curp: 'MACASADADASSDA',
      identificador: '122',
      rfc: 'MACA99ASDA',
      fecha: '20/12/1212',
      importe: '120',
    });
    vale.concepto({
      nombre: 'amir misael marin coh',
      curp: 'MACASADADASSDA',
      identificador: '122',
      rfc: 'MACA99ASDA',
      fecha: '20/12/1212',
      importe: '120',
    });
    this.cfd.complemento(vale);
```    
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <valesdedespensa:ValesDeDespensa version="1.0" numeroDeCuenta="1221313123" tipoOperacion="monedero electrónico" total="120">
  <valesdedespensa:Conceptos>
   <valesdedespensa:Concepto nombre="amir misael marin coh" curp="MACASADADASSDA" identificador="122" rfc="MACA99ASDA" fecha="20/12/1212" importe="120"/>
   <valesdedespensa:Concepto nombre="amir misael marin coh" curp="MACASADADASSDA" identificador="122" rfc="MACA99ASDA" fecha="20/12/1212" importe="120"/>
  </valesdedespensa:Conceptos> 
 </valesdedespensa:ValesDeDespensa>
</cfdi:Complemento>
```
 ## Complemento DIVISAS

DIVISAS

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlDivisasAttributes |  version: string;<br>tipoOperacion: tipoOperacion; | |  Inicializa la clase|


 ```ts
import {divisas} from '@signati/core';
const divisas = new Divisas({ version: '1.0', tipoOperacion: tipoOperacion.compra });

   this.cfd.complemento(divisas);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <divisas:Divisas version="1.0" tipoOperacion="compra"/>
</cfdi:Complemento>
```
 ## Complemento TURISTAS

TPE

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlTpeAttributes |  version: string;<br>fechadeTransito: string;<br>tipoTransito: tipoTransito| |  Inicializa la clase|
| datosTransito | XmlTpeDTransAttributes | Via: Via;<br>TipoId: string;<br>NumeroId: string;<br>Nacionalidad: string;<br>EmpresaTransporte: string;<br>IdTransporte?: string | | |

 ```ts
import {turistas} from '@signati/core';
const turista = new Tpe({
      version: '1.0',
      fechadeTransito: '234/23/234',
      tipoTransito: tipoTransito.Arribo,
    });
    turista.datosTransito({
      EmpresaTransporte: '23',
      Nacionalidad: 'asduasd',
      NumeroId: '2',
      TipoId: 'asd',
      Via: Via.Aerea,
    });
    this.cfd.complemento(turista);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <tpe:TuristaPasajeroExtranjero version="1.0" fechadeTransito="234/23/234" tipoTransito="Arribo">
  <tpe:datosTransito EmpresaTransporte="23" Nacionalidad="asduasd" NumeroId="2" TipoId="asd" Via="Aérea"/>
 </tpe:TuristaPasajeroExtranjero>
</cfdi:Complemento>
```
 ## Complemento LEYENDA-FISCAL

LEYENDA-FISC

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlLeyFisAttributes |  version: string;| |  Inicializa la clase|
| leyenda | XmlLeyendaAttributes | disposicionFiscal?: string<br>norma?: string;<br>textoLeyenda: string; | ||


 ```ts
import {leyendafiscal} from '@signati/core';
const leyenda = new LeyendaFisc();
    leyenda.leyenda({
      disposicionFiscal: '12',
      norma: '221',
      textoLeyenda: 'sadadasdasd',
    });
    leyenda.leyenda({
      disposicionFiscal: '12',
      norma: '221',
      textoLeyenda: 'sadadasdasd',
    });
    this.cfd.complemento(leyenda);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <leyendasFisc:LeyendasFiscales version="1.0">
  <leyendasFisc:Leyenda disposicionFiscal="12" norma="221" textoLeyenda="sadadasdasd"/>
  <leyendasFisc:Leyenda disposicionFiscal="12" norma="221" textoLeyenda="sadadasdasd"/>
 </leyendasFisc:LeyendasFiscales>
</cfdi:Complemento>
```
 ## Complemento PAGO-ESPECIE

PAGO-EN-ESPECIE

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlPagoenespecieAttributes | Version: string;<br>CvePIC: string;<br>FolioSolDon: string;<br>PzaArtNombre: string;<br>PzaArtTecn: string;<br>PzaArtAProd: string;<br>PzaArtDim: string;| |  Inicializa la clase|

 ```ts
import {pagoespecie} from '@signati/core';
const especie = new PagoEnEspecie({
      Version: '1.0',
      CvePIC: 'as',
      FolioSolDon: 'as',
      PzaArtAProd: 'qas',
      PzaArtDim: 'asd',
      PzaArtNombre: 'asd',
      PzaArtTecn: 'asd',
    });
    this.cfd.complemento(especie);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <pagoenespecie:PagoEnEspecie Version="1.0" CvePIC="as" FolioSolDon="as" PzaArtAProd="qas" PzaArtDim="asd" PzaArtNombre="asd" PzaArtTecn="asd"/>
</cfdi:Complemento>
```
 ## Complemento SPEI

SPEI

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
|  | XmlSpei | 'spei:SPEI_Tercero': XmlSpeiTercero[]| |  Inicializa la clase|

SPEI-TERCERO

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlSpeiTerceroAttributes | FechaOperacion: string;<br>Hora: string;<br>ClaveSPEI: string;<br>sello: string;<br>numeroCertificado: string;| |  Inicializa la clase|
| ordenante | XmlSpeiOrdenanteAttributes | BancoEmisor: string; | | |
| beneficiario | XmlSpeiBeneficiarioAttributes | BancoReceptor: string;<br>Concepto: string;<br>IVA?: string;<br>MontoPago: string; | | |

  ```ts
import {spei} from '@signati/core';
const spei = new Spei();
    const terceros = new SpeiTercero({
      ClaveSPEI: 'a',
      FechaOperacion: 'ss',
      Hora: 'asssad',
      numeroCertificado: 'asda',
      sello: 'asdsa',
    });
    terceros.ordenante({
      BancoEmisor: 'Banamex',
      Cuenta: 'asdasda',
      Nombre: 'asdasd',
      RFC: 'asdasd',
      TipoCuenta: 'asdas',
    });
    terceros.beneficiario({
      BancoReceptor: 'Banco',
      TipoCuenta: 'asdasd',
      RFC: 'asdasdas',
      Nombre: 'asdsasd',
      Cuenta: 'asdasd',
      Concepto: 'asdasdadsa',
      MontoPago: 'w123123',
    });
    spei.tercero(terceros);
    spei.tercero(terceros);
    this.cfd.complemento(spei);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <spei:Complemento_SPEI>
  <spei:SPEI_Tercero ClaveSPEI="a" FechaOperacion="ss" Hora="asssad" numeroCertificado="asda" sello="asdsa">
   <spei:Ordenante BancoEmisor="Banamex" Cuenta="asdasda" Nombre="asdasd" RFC="asdasd" TipoCuenta="asdas"/>
   <spei:Beneficiario BancoReceptor="Banco" TipoCuenta="asdasd" RFC="asdasdas" Nombre="asdsasd" Cuenta="asdasd" Concepto="asdasdadsa" MontoPago="w123123"/>
  </spei:SPEI_Tercero>
  <spei:SPEI_Tercero ClaveSPEI="a" FechaOperacion="ss" Hora="asssad" numeroCertificado="asda" sello="asdsa">
   <spei:Ordenante BancoEmisor="Banamex" Cuenta="asdasda" Nombre="asdasd" RFC="asdasd" TipoCuenta="asdas"/>
   <spei:Beneficiario BancoReceptor="Banco" TipoCuenta="asdasd" RFC="asdasdas" Nombre="asdsasd" Cuenta="asdasd" Concepto="asdasdadsa" MontoPago="w123123"/>
  </spei:SPEI_Tercero>
 </spei:Complemento_SPEI>
</cfdi:Complemento>
```
## Complemento SERVICIOS-PARCIALES-DE-CONTRUCCION

SERVICIO-PARCIAL

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlSerparAttributes | Version: string;<br>NumPerLicoAut: string| |  Inicializa la clase|
| inmueble | XmlSerparInAttributes | Calle: string;<br>NoExterior?: string;<br>NoInterior?: string;<br>Colonia?: string;<br>Localidad?: string;<br>Referencia?: string;<br>Municipio: string;<br>Estado: string;<br>CodigoPostal: string; | | |

```ts
import {servicios-parciales-de-contruccion} from '@signati/core';

const constr = new ServicioParcial({ Version: '1.0', NumPerLicoAut: '3' });
    constr.inmueble({ Calle: 'av 25', CodigoPostal: '77714', Estado: 'QROO', Municipio: 'Solidaridad' });
    this.cfd.complemento(constr);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <servicioparcial:parcialesconstruccion Version="1.0" NumPerLicoAut="3">
  <servicioparcial:Inmueble Calle="av 25" CodigoPostal="77714" Estado="QROO" Municipio="Solidaridad"/>
 </servicioparcial:parcialesconstruccion>
</cfdi:Complemento>

```
 ## Complemento VEHICULO-USADO

VEHICULOUSADO

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlVehiculousadoAttributes | Version: string;<br>montoAdquisicion: string;<br>montoEnajenacion: string;<br>claveVehicular: string;<br>marca: string;<br>tipo: string;<br>modelo: string;<br>numeroMotor?: string;<br>numeroSerie?: string;<br>NIV: string;<br>valor: string;| |  Inicializa la clase|
| informacionAduanera | XmlVIAduaneraAttributes | numero: string;<br>fecha: string;<br>aduana?: string; | | |


 ```ts
import {vehiculo-usado} from '@signati/core';
const vehiculo = new VehiculoUsado({
      Version: '1.0',
      claveVehicular: '3232423',
      marca: 'asdsasd',
      modelo: '3323',
      montoAdquisicion: '40000',
      montoEnajenacion: '1221321',
      NIV: '1231',
      tipo: 'cassd',
      valor: '12313',
    });
    vehiculo.informacionAduanera({ aduana: 'asda', fecha: '12/23/2323', numero: '12' });
    this.cfd.complemento(vehiculo);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <vehiculousado:VehiculoUsado Version="1.0" claveVehicular="3232423" marca="asdsasd" modelo="3323" montoAdquisicion="40000" montoEnajenacion="1221321" NIV="1231" tipo="cassd" valor="12313">
  <vehiculousado:InformacionAduanera aduana="asda" fecha="12/23/2323" numero="12"/>
 </vehiculousado:VehiculoUsado>
</cfdi:Complemento>
```
 ## Complemento INGRESOS-HIDROCARBUROS

IEEH

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlIeehAttributes | Version: string;<br>NumeroContrato: string;<br>ContraprestacionPagadaOperador: string;<br>Porcentaje: string;| |  Inicializa la clase|
| docRelacionado | XmlIeehDocRelaAttributes | FolioFiscalVinculado: string;<br>FechaFolioFiscalVinculado: string;<br>Mes: string; | | |


 ```ts
import {ingresos-hidrocarburos} from '@signati/core';
const ingreso = new Ieeh({
      Version: '1.0',
      Porcentaje: '100',
      ContraprestacionPagadaOperador: '212',
      NumeroContrato: '0001',
    });
    ingreso.docRelacionado({
      FechaFolioFiscalVinculado: 'asd',
      FolioFiscalVinculado: 'saad',
      Mes: 'Mayo',
    });
    this.cfd.complemento(ingreso);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <ieeh:IngresosHidrocarburos Version="1.0" Porcentaje="100" ContraprestacionPagadaOperador="212" NumeroContrato="0001">
  <ieeh:DocumentoRelacionado FechaFolioFiscalVinculado="asd" FolioFiscalVinculado="saad" Mes="Mayo"/>
 </ieeh:IngresosHidrocarburos>
</cfdi:Complemento>

```
## Complemento GASTOS-HIDROCARBUROS

GCEH

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlGcehAttributes | Version: string;<br>NumeroContrato: string;<br>AreaContractual?: string;| |  Inicializa la clase|

EROGACION

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlGcehErogacionAttributes | TipoErogacion: string;<br>MontocuErogacion: string;<br>Porcentaje: string;| |  Inicializa la clase|
| documentoRelacionado | XmlEroDocRelaAttributes | OrigenErogacion: string;<br>FolioFiscalVinculado?: string;<br>RFCProveedor?: string;<br>MontoTotalIVA: string;<br>MontoRetencionISR?: string;<br>MontoRetencionIVA?: string;<br>MontoRetencionOtrosImpuestos?: string;<br>NumeroPedimentoVinculado?: string;<br>ClavePedimentoVinculado?: string;<br>ClavePagoPedimentoVinculado?: string;<br>MontoIVAPedimento?: string;<br>OtrosImpuestosPagadosPedimento?: string;<br>FechaFolioFiscalVinculado: string;<br>Mes: string;<br>MontoTotalErogaciones: string;| | |

ACTIVIDADES

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlEroActAttributes | ActividadRelacionada?: string;| |  Inicializa la clase|
| subActividad | XmlEroSubActAttributes | SubActividadRelacionada?: string;| | |

CENTRO-COSTOS

| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlEroCenCostAttributes | Campo?: string;| |  Inicializa la clase|
| yacimiento | XmlEroCenCostYacAttributes | Yacimiento?: string;| | |



 ```ts
import {gastos-hidrocarburos} from '@signati/core';
const gasto = new Gceh({
      Version: '1.0',
      AreaContractual: 'asd',
      NumeroContrato: '1212',
    });

    const erogacion = new Erogacion({
      MontocuErogacion: '2332',
      Porcentaje: 'asd', TipoErogacion: 'Comido',
    });

    erogacion.documentoRelacionado({
      ClavePagoPedimentoVinculado: '2332',
      FechaFolioFiscalVinculado: '21/12/2323',
      Mes: 'Mayo',
      MontoTotalErogaciones: '22323',
      MontoTotalIVA: 'assdasd',
      OrigenErogacion: 'china',
    });

    erogacion.documentoRelacionado({
      ClavePagoPedimentoVinculado: '2332',
      FechaFolioFiscalVinculado: '21/12/2323',
      Mes: 'Mayo',
      MontoTotalErogaciones: '22323',
      MontoTotalIVA: 'assdasd',
      OrigenErogacion: 'china',
    });
    const actividad = new Actividades({ ActividadRelacionada: '2332' });
    actividad.subActividad({ SubActividadRelacionada: 'adas' },
      [
        {
          TareaRelacionada: 'asd',
        },
        {
          TareaRelacionada: 'asd',
        },
      ]);
    actividad.subActividad({ SubActividadRelacionada: 'adas' },
      [
        {
          TareaRelacionada: 'asd',
        },
        {
          TareaRelacionada: 'asd',
        },
      ]);
    erogacion.actividad(actividad);
    const costo = new CentroCostos({ Campo: '12' });
    costo.yacimiento({ Yacimiento: '122' }, [
      { Pozo: '21' },
      { Pozo: '221' },
    ]);
    costo.yacimiento({ Yacimiento: '122' }, [
      { Pozo: '21' },
      { Pozo: '221' },
    ]);
    erogacion.centroCostos(costo);
    const costo2 = new CentroCostos({ Campo: '12' });
    erogacion.centroCostos(costo2);
    const actividad2 = new Actividades({ ActividadRelacionada: '2332' });
    erogacion.actividad(actividad2);

    const erogacion2 = new Erogacion({
      MontocuErogacion: '2332',
      Porcentaje: 'asd', TipoErogacion: 'Comido',
    });

    gasto.erogacion(erogacion);
    gasto.erogacion(erogacion2);
    this.cfd.complemento(gasto);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <gceh:GastosHidrocarburos Version="1.0" AreaContractual="asd" NumeroContrato="1212">
  <gceh:Erogacion MontocuErogacion="2332" Porcentaje="asd" TipoErogacion="Comido">   
   <gceh:DocumentoRelacionado ClavePagoPedimentoVinculado="2332" FechaFolioFiscalVinculado="21/12/2323" Mes="Mayo" MontoTotalErogaciones="22323" MontoTotalIVA="assdasd" OrigenErogacion="china"/>
   <gceh:DocumentoRelacionado ClavePagoPedimentoVinculado="2332" FechaFolioFiscalVinculado="21/12/2323" Mes="Mayo" MontoTotalErogaciones="22323" MontoTotalIVA="assdasd" OrigenErogacion="china"/>
   <gceh:Actividades ActividadRelacionada="2332">
    <gceh:SubActividades SubActividadRelacionada="adas">
     <gceh:Tareas TareaRelacionada="asd"/>
     <gceh:Tareas TareaRelacionada="asd"/>
    </gceh:SubActividades>
    <gceh:SubActividades SubActividadRelacionada="adas">
     <gceh:Tareas TareaRelacionada="asd"/>
     <gceh:Tareas TareaRelacionada="asd"/>
    </gceh:SubActividades>
   </gceh:Actividades>
   <gceh:Actividades ActividadRelacionada="2332"/>
   <gceh:CentroCostos Campo="12">
    <gceh:Yacimientos Yacimiento="122">
     <gceh:Pozos Pozo="21"/>
     <gceh:Pozos Pozo="221"/>
   </gceh:Yacimientos>
    <gceh:Yacimientos Yacimiento="122">
     <gceh:Pozos Pozo="21"/>
     <gceh:Pozos Pozo="221"/>
    </gceh:Yacimientos>
   </gceh:CentroCostos>
   <gceh:CentroCostos Campo="12"/>
  </gceh:Erogacion>
  <gceh:Erogacion MontocuErogacion="2332" Porcentaje="asd" TipoErogacion="Comido"/>
 </gceh:GastosHidrocarburos>
</cfdi:Complemento>

```
## Complemento IMPLOCAL

IMPLOCAL


| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlImplocalAttributes | version: string;<br>TotaldeRetenciones: string;<br>TotaldeTraslados: string;| |  Inicializa la clase|
| retenciones | XmlRetLocalAttributes | ImpLocRetenido: string;<br>TasadeRetencion: string;<br>Importe: string;| | |
| traslados | XmlTrasLocalAttributes | ImpLocTrasladado: string;<br>TasadeTraslado: string;<br>Importe: string;| | |


 ```ts
import {implocal} from '@signati/core';

const implocal = new Implocal({
      version: '1.0',
      TotaldeRetenciones: '12',
      TotaldeTraslados: '12213',
    });

    implocal.retenciones({
      ImpLocRetenido: '5 al millar',
      TasadeRetencion: '0.5',
      Importe: '712.50',
    });

    implocal.retenciones({
      ImpLocRetenido: '2 al millar',
      TasadeRetencion: '0.2',
      Importe: '312.50',
    });

    implocal.traslados({
      ImpLocTrasladado: 'asda',
      Importe: 'asda',
      TasadeTraslado: 'asdad',
    });
    implocal.traslados({
      ImpLocTrasladado: 'asda',
      Importe: 'asda',
      TasadeTraslado: 'asdad',
    });
    this.cfd.complemento(implocal);
```
```xml
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <implocal:ImpuestosLocales version="1.0" TotaldeRetenciones="12" TotaldeTraslados="12213">
  <implocal:RetencionesLocales ImpLocRetenido="5 al millar" TasadeRetencion="0.5" Importe="712.50"/>
  <implocal:RetencionesLocales ImpLocRetenido="2 al millar" TasadeRetencion="0.2" Importe="312.50"/>
  <implocal:TrasladosLocales ImpLocTrasladado="asda" Importe="asda" TasadeTraslado="asdad"/>
  <implocal:TrasladosLocales ImpLocTrasladado="asda" Importe="asda" TasadeTraslado="asdad"/>
 </implocal:ImpuestosLocales>
</cfdi:Complemento>

```
