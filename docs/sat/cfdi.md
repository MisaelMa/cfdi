# CFDI 3.3
| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| setAttributesXml | XmlVersion |  version: string;<br>encoding: string;| |  Inicializa la clase|
| setAttributesComprobantes | ComprobanteInterface |  xmlns: XmlnsLinks;<br>schemaLocation: string[];<br>Version: string;<br>Serie: string;<br>Folio: string;<br>Fecha: string;<br>Sello: string;<br>FormaPago: string;<br>NoCertificado: string;<br>Certificado: string;<br>condicionesDePago?: string;<br>SubTotal: string;<br>Descuento: string;<br>Moneda: string;<br>Total: string;<br>TipoDeComprobante: string;<br>MetodoPago: string;<br>LugarExpedicion: string; | | Agregar la Relacion|
| relacionados | Relacionado |  class | | Agregar la Relacion|
| emisor | Emisor |  class | | Agregar la Relacion|
| receptor | Receptor |  class | | Agregar la Relacion|
| concepto | Concepts |  class | | Agregar la Relacion|
| impuesto | Impuestos |  class | | Agregar la Relacion|
| certificar | certificar|  cerpath: string | | Agregar la Relacion|
| sellar | sellar|  keyfile: string, password: string | | Agregar la Relacion|