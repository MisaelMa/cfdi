# CFDI

<p align="center">
  <a href="https://cfdi.recreando.dev/" target="blank">
  <img src="https://cfdi.recreando.dev/site/favicon.ico" width="32" alt="Nest Logo" /></a>
</p>
<ul direction="ltr" format="" indent="0" type="list" version="1" listtype="check" start="1" tag="ul">
<li direction="ltr" format="" indent="0" type="listitem" version="1" value="1"><input type="checkbox" checked=""><a href="https://www.npmjs.com/package/@cfdi/xml"><code class="css-1ht163b">@cfdi/xml</code></a></li>

<li direction="ltr" format="" indent="0" type="listitem" version="1" value="2"><input type="checkbox" checked=""><a href="https://"><code class="css-1ht163b">@cfdi/catalogos</code></a></li><li direction="ltr" format="" indent="0" type="listitem" version="1" value="3"><input type="checkbox" checked=""><a href="https://www.npmjs.com/package/@cfdi/csd"><code class="css-1ht163b">@cfdi/csd</code></a></li><li direction="ltr" format="" indent="0" type="listitem" version="1" value="4"><input type="checkbox" checked=""><a href="https://"><code class="css-1ht163b">@cfdi/utils</code></a></li><li direction="ltr" format="" indent="0" type="listitem" version="1" value="5"><input type="checkbox"><span>@cfdi/pdf</span></li><li direction="ltr" format="" indent="0" type="listitem" version="1" value="6"><input type="checkbox"><span>@cfdi/curp</span>

</li><li direction="ltr" format="" indent="0" type="listitem" version="1" value="7"><input type="checkbox"><span>@cfdi/csf</span></li>
</li><li direction="ltr" format="" indent="0" type="listitem" version="1" value="7"><input type="checkbox"><span>@cfdi/rfc</span></li></ul>
<a href="https://cfdi.recreando.dev/">Documentacion</a>
<p align="center">
    Este módulo genera un CFDI a partir de clases lo que facilita la creacion de XMl y sellarlo sin nigun problema de compatibilidad de las versiones 2.0 del xml de complementos.
</p>

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="LYAK7CBWDNVMY" />
<input type="image" src="https://www.paypalobjects.com/en_US/MX/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_MX/i/scr/pixel.gif" width="1" height="1" />
</form>

Instala las dependencias and devDependencies y comienza a crear xml CFDI 4.0.
Para Windows Lea la <a href="https://cfdi.recreando.dev">Documentacion</a>

# Dependeces

JDK

```sh
    sudo apt install default-jre
    sudo apt install default-jdk
```

Openssl

```sh
  Debian/Ubuntu: sudo apt-get install openssl
  CentOS, Red Hat: yum install openssl
  Archlinux: sudo pacman -S openssl
```

Saxon-HE >=9.9.1.6J

```sh

  official: http://saxon.sourceforge.net/
  Archlinux:  https://aur.archlinux.org/packages/saxon-he

  Automatic Installation Alternative

  https://github.com/MisaelMa/saxon-he
  sudo chmod 777 saxon.sh
  sudo ./saxon.sh

  ███████╗ █████╗ ██╗  ██╗ ██████╗ ███╗   ██╗    ██╗  ██╗███████╗
  ██╔════╝██╔══██╗╚██╗██╔╝██╔═══██╗████╗  ██║    ██║  ██║██╔════╝
  ███████╗███████║ ╚███╔╝ ██║   ██║██╔██╗ ██║    ███████║█████╗
  ╚════██║██╔══██║ ██╔██╗ ██║   ██║██║╚██╗██║    ██╔══██║██╔══╝
  ███████║██║  ██║██╔╝ ██╗╚██████╔╝██║ ╚████║    ██║  ██║███████╗
  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝  ╚═╝╚══════╝
```

# Installation

```sh
npm i --save @cfdi/xml
```

# Complementos

## Información adicional para las Facturas

- [x] :pushpin: Timbre fiscal digital (TFD).
- [ ] Estado de cuenta de combustibles de monederos electrónicos.
- [x] :pushpin: Donatarias.
- [x] :pushpin: Compra venta de divisas.
- [x] :pushpin: Otros derechos e impuestos.
- [x] :pushpin: Leyendas fiscales.
- [x] :pushpin: Persona física integrante de coordinado.
- [x] :pushpin: Turista pasajero extranjero.
- [x] :pushpin: Spei de tercero a tercero.
- [ ] Sector de ventas al detalle (Detallista).
- [x] :pushpin: CFDI Registro fiscal.
- [ ] Recibo de pago de nómina.
- [x] :pushpin: Pago en especie.
- [x] :pushpin: Vales de despensa.
- [x] :pushpin: Consumo de combustibles. versión 1.1
- [x] :pushpin: Aerolíneas.
- [ ] Notarios Públicos.
- [x] :pushpin: Vehículo usado.
- [x] :pushpin: Servicios parciales de construcción.
- [x] :pushpin: Renovación y sustitución de vehículos.
- [x] :pushpin: Certificado de destrucción
- [x] :pushpin: Obras de arte plásticas y antigüedades
- [x] :pushpin: INE
- [x] :pushpin: Comercio Exterior versión 1.1
- [x] :pushpin: Recepción de pagos
- [x] Hidrocarburos
  - [x] :pushpin: IngresosHidrocarburos
  - [x] :pushpin: GastosHidrocarburos10

## Complementos de Concepto

- [x] :pushpin: Instituciones educativas privadas.
- [ ] Venta de vehículos.
- [ ] Terceros.
- [ ] Acreditamiento del IEPS

# Informacion Oficial

- Certificados de prueba
  http://omawww.sat.gob.mx/tramitesyservicios/Paginas/certificado_sello_digital.htm
- Anexo 20
  http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm
- Catálogo de productos y servicios
  http://pys.sat.gob.mx/PyS/catPyS.aspx
- Catálogo de unidades de medida
  http://pys.sat.gob.mx/PyS/catUnidades.aspx
- Consulta los complementos y complementos concepto de factura

https://www.sat.gob.mx/consultas/49522/complementos-y-complementos-concepto-de-factura-

https://www.sat.gob.mx/cs/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1461173971924&ssbinary=true

# Generar archivos .pem

Lo primero que se necesita es tener instalada la librería OpenSSL (programa dedicado a la generación y tratado de claves, certificados y keyStore) para poder utilizar los comandos que nos ayudarán a crear las llaves de nuestros sellos digitales.

## Linux

Instalar librería:

Debian/Ubuntu: #sudo apt-get install openssl

CentOS, Red Hat: #yum install openssl

Ejecutar las instrucciones:

Archivo key.pem

```sh
openssl pkcs8 -inform DER -in nombrearchivo.key -out nombrearchivo.key.pem -passin pass:contraseña
```

archivo cer.pem

```sh
openssl x509 -inform DER -outform PEM -in ruta/nombreArchivo.cer -pubkey -out ruta/nombreArchivo.cer.pem
```

## Windows

Descargar libreria: http://slproweb.com/products/Win32OpenSSL.html

Deberán descargar la versión según su sistema operativo, e instalar.

Ejecutar desde terminal

Archivo key.pem

```sh
openssl.exe pkcs8 -inform DER -in ruta/nombreArchivo.key -passin pass:contraseña -out ruta/nombreArchivo.key.pem
```

archivo cer.pem

```sh
openssl.exe x509 -inform DER -outform PEM -in ruta/nombreArchivo.cer -pubkey -out ruta/nombreArchivo.cer.pem
```

# Generar QR

ESPECIFICACIÓN TÉCNICA DEL CÓDIGO DE BARRAS BIDIMENSIONAL A INCORPORAR EN LA REPRESENTACIÓN IMPRESA.

Las representaciones impresas de los dos tipos de comprobantes fiscales digitales por Internet deben incluir un código de barras bidimensional conforme al formato de QR Code (Quick Response Code),usando la capacidad de corrección de error con nivel mínimo M, descrito en el estándar ISO/IEC18004, con base en los siguientes lineamientos.

a) Debe contener los siguientes datos en la siguiente secuencia:

    *La URL del acceso al servicio que pueda mostrar los datos de la versión publica del comprobante.
    *Numero de folio fiscal del comprobante (UUID).
    *RFC del emisor.
    *RFC del receptor.
    *Ocho últimos caracteres del sello digital del emisor del comprobante.

Donde se manejan / caracteres conformados de la siguiente manera:

<p align="center">
 <img class="MuiBox-root css-bzqjp8" src="https://ik.imagekit.io/gky5zgkgy/article/amir_xu8DI9cUO" alt="The house from the offer.">
</p>

De esta manera se generan los datos validos para realizar una consulta de un CFDI por medio de su expresión impresa.

Ejemplo:

https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=5803EB8D-81CD-4557-8719-26632D2FA434&re=XAXX010101000&rr=CARR861127SB0&tt=0000014300.000000&fe=rH8/bw==

El código de barras bidimensional debe ser impreso en un cuadro con lados no menores a 2.75 centímetros.

<p align="center">
<img class="MuiBox-root css-qug6nc" src="https://ik.imagekit.io/gky5zgkgy/article/amir_YxMzInREsA" alt="The house from the offer.">
</p>
