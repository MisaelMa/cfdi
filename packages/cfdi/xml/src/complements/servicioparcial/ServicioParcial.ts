import {
  XmlSerparAttributes,
  XmlSerparInAttributes,
  XmlServicioparcial,
} from '@cfdi/xml/src/types/Complements/servicioparcial/servicioparcial.com';
import { ComplementsReturn } from '@cfdi/xml/src/types';

/**
 *
 */
export class ServicioParcial {
  private servicio: XmlServicioparcial = {} as XmlServicioparcial;

  private xmlns = 'http://www.sat.gob.mx/servicioparcialconstruccion';

  private xmlnskey = 'servicioparcial';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/servicioparcialconstruccion',
    'http://www.sat.gob.mx/sitio_internet/cfd/servicioparcialconstruccion/servicioparcialconstruccion.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlSerparAttributes
   */
  constructor(data: XmlSerparAttributes) {
    this.servicio._attributes = data;
  }

  /**
   *inmueble
   *
   * @param data
   * XmlSerparInAttributes
   */
  inmueble(data: XmlSerparInAttributes): void {
    this.servicio['servicioparcial:Inmueble'] = {
      _attributes: data,
    };
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.servicio,
      key: 'servicioparcial:parcialesconstruccion',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
