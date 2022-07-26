// ComercioExterior11
import {
  XmlCce11,
  XmlCce11Attributes,
  XmlCce11Destinatario,
  XmlCce11DestinatarioAttributes,
  XmlCce11DomicilioAttributes,
  XmlCce11Emisor,
  XmlCce11EmisorAttributes,
  XmlCce11Mercancia,
  XmlCce11MercanciaAttributes,
  XmlCce11PropietarioAttributes,
  XmlCce11Receptor,
  XmlCce11ReceptorAttributes,
  XmlCee11DescEspecificasAttributes,
} from '@cfdi/xml/src/types/Complements/cce11.interface';
import { ComplementsReturn } from '@cfdi/xml/src/types';

/*
 *https://www.sat.gob.mx/consultas/61165/comprobante-de-comercio-exterior
 * http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_comercio_exterior.htm
 * http://omawww.sat.gob.mx/tramitesyservicios/Paginas/documentos/ComercioExterior11.pdf
 */
/**
 *
 */
export class Cce11 {
  public cce11: XmlCce11 = {} as XmlCce11;

  private xmlns = 'http://www.sat.gob.mx/ComercioExterior11';

  private xmlnskey = 'cce11';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/ComercioExterior11',
    'http://www.sat.gob.mx/sitio_internet/cfd/ComercioExterior11/ComercioExterior11.xsd',
  ];

  /**
   *constructor
   *
   * @param attributes
   * XmlCce11Attributes
   */
  constructor(attributes: XmlCce11Attributes) {
    this.cce11._attributes = attributes;
  }

  /**
   *v
   *
   * @param attributes
   * XmlCce11EmisorAttributes
   * @param domicilio
   * XmlCce11DomicilioAttributes
   */
  Emisor(
    attributes: XmlCce11EmisorAttributes,
    domicilio?: XmlCce11DomicilioAttributes
  ): void {
    if (!this.cce11['cce11:Emisor']) {
      this.cce11['cce11:Emisor'] = {} as XmlCce11Emisor;
    }
    this.cce11['cce11:Emisor']._attributes = attributes;
    if (domicilio) {
      this.cce11['cce11:Emisor']['cce11:Domicilio'] = {
        _attributes: domicilio,
      };
    }
  }

  /**
   *Receptor
   *
   * @param attributes
   * XmlCce11ReceptorAttributes
   * @param domicilio
   * XmlCce11DomicilioAttributes
   */
  Receptor(
    attributes: XmlCce11ReceptorAttributes,
    domicilio?: XmlCce11DomicilioAttributes
  ): void {
    if (!this.cce11['cce11:Receptor']) {
      this.cce11['cce11:Receptor'] = {} as XmlCce11Receptor;
    }
    this.cce11['cce11:Receptor']._attributes = attributes;
    if (domicilio) {
      this.cce11['cce11:Receptor']['cce11:Domicilio'] = {
        _attributes: domicilio,
      };
    }
  }

  /**
   * Propietario
   *
   * @param attributes
   * XmlCce11PropietarioAttributes
   */
  Propietario(attributes: XmlCce11PropietarioAttributes): void {
    if (!this.cce11['cce11:Propietario']) {
      this.cce11['cce11:Propietario'] = [];
    }
    this.cce11['cce11:Propietario'].push({ _attributes: attributes });
  }

  /**
   * Destinatario
   *
   * @param attributes
   * XmlCce11DestinatarioAttributes
   * @param domicilio
   * XmlCce11DomicilioAttributes
   */
  Destinatario(
    attributes: XmlCce11DestinatarioAttributes,
    domicilio?: XmlCce11DomicilioAttributes
  ): void {
    if (!this.cce11['cce11:Destinatario']) {
      this.cce11['cce11:Destinatario'] = [];
    }
    const des: XmlCce11Destinatario = {
      _attributes: attributes,
    };
    if (domicilio) {
      des['cce11:Domicilio'] = {
        _attributes: domicilio,
      };
    }
    this.cce11['cce11:Destinatario'].push(des);
  }

  /**
   *Mercancias
   *
   * @param mercancia
   * XmlCce11MercanciaAttributes
   * @param especificacion
   * XmlCee11DescEspecificasAttributes[]
   */
  Mercancias(
    mercancia: XmlCce11MercanciaAttributes,
    especificacion?: XmlCee11DescEspecificasAttributes[]
  ): void {
    if (!this.cce11['cce11:Mercancias']) {
      this.cce11['cce11:Mercancias'] = {
        'cce11:Mercancia': [],
      };
    }
    const mercanci: XmlCce11Mercancia = {
      _attributes: mercancia,
    };
    if (especificacion && especificacion.length > 0) {
      if (!mercanci['cce11:DescripcionesEspecificas']) {
        mercanci['cce11:DescripcionesEspecificas'] = [];
      }
      especificacion.forEach(espe => {
        mercanci['cce11:DescripcionesEspecificas']?.push({ _attributes: espe });
      });
      // for (const espe of especificacion) {
      //   mercanci['cce11:DescripcionesEspecificas'].push({ _attributes: espe });
      // }
    }
    this.cce11['cce11:Mercancias']['cce11:Mercancia'].push(mercanci);
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.cce11,
      key: 'cce11:ComercioExterior',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
