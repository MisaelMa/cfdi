# CFDI 3.3
| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| setAttributesXml | XmlVersion |  version: string;<br>encoding: string;| |  Inicializa la clase|
| setAttributesComprobantes | ComprobanteInterface |  xmlns: XmlnsLinks;<br>schemaLocation: string[];<br>Version: string;<br>Serie: string;<br>Folio: string;<br>Fecha: string;<br>Sello: string;<br>FormaPago: string;<br>NoCertificado: string;<br>Certificado: string;<br>condicionesDePago?: string;<br>SubTotal: string;<br>Descuento: string;<br>Moneda: string;<br>Total: string;<br>TipoDeComprobante: string;<br>MetodoPago: string;<br>LugarExpedicion: string; | | Inicializa la clase|
| relacionados | Relacionado |  class | | |
| emisor | Emisor |  class | | |
| receptor | Receptor |  class | | |
| concepto | Concepts |  class | | |
| impuesto | Impuestos |  class | | |
| certificar | |  cerpath: string | | |
| sellar | |  keyfile: string,<br>password: string | | |