import { ComprobanteInterface, XmlComprobanteAttributes, XmlnsLinks } from '../types/Tags/comprobante.interface';
import {schema} from '../utils/XmlHelp';

export class Comprobante {
  public comprobante: ComprobanteInterface;
  public attributes: XmlComprobanteAttributes = {} as XmlComprobanteAttributes;

  constructor(comporbante: ComprobanteInterface) {
    this.comprobante = comporbante;
  }

  public async getComprobante(): Promise<XmlComprobanteAttributes> {
    //await this.xmlns(this.comprobante.xmlns);

    // 'xmlns:cfdi': this.comprobante.cfdi,
    // 'xmlns:xsi':  this.comprobante.xsi,
    // 'xmlns:iedu': this.comprobante.iedu,
    //this.attributes['xsi:schemaLocation'] = schema(this.comprobante.schemaLocation);
    // 'http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd',
    this.attributes.Version = this.comprobante.Version;
    this.attributes.Serie = this.comprobante.Serie;
    this.attributes.Folio = this.comprobante.Folio;
    this.attributes.Fecha = this.comprobante.Fecha;
    this.attributes.Sello = '';
    this.attributes.FormaPago = this.comprobante.FormaPago;
    this.attributes.NoCertificado = this.comprobante.NoCertificado;
    this.attributes.Certificado = '';
    this.attributes.condicionesDePago = this.comprobante.condicionesDePago;
    this.attributes.SubTotal = this.comprobante.SubTotal;
    this.attributes.Descuento = this.comprobante.Descuento;
    this.attributes.Moneda = this.comprobante.Moneda;
    this.attributes.Total = this.comprobante.Total;
    this.attributes.TipoDeComprobante = this.comprobante.TipoDeComprobante;
    this.attributes.MetodoPago = this.comprobante.MetodoPago;
    this.attributes.LugarExpedicion = this.comprobante.LugarExpedicion;

    return this.attributes;
  }

  public async xmlns(xmlns: XmlnsLinks) {
    for (const key in xmlns) {
      if (xmlns.hasOwnProperty.call(xmlns, key)) {
        this.attributes['xmlns:' + key] = xmlns[key];
      }
    }
  }

}
