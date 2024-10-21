import { XmlEmisor, XmlEmisorAttribute } from '../types';

import { Schema } from '@cfdi/xsd';

/**
 *
 */
export class Emisor {
  public emisor: XmlEmisor = {
    _attributes: {
      Rfc: '',
      Nombre: '',
      RegimenFiscal: '',
    },
  } as XmlEmisor;
  /**
   *constructor
   *
   * @param emisor
   * XmlEmisorAttribute
   */
  constructor(emisor: XmlEmisorAttribute) {
    Schema.of().cfdi.emisor.validate(emisor);
    this.emisor._attributes = emisor;
  }

  setRfc(rfc: string): void {
    this.emisor._attributes.Rfc = rfc;
  }

  setNombre(nombre: string): void {
    this.emisor._attributes.Nombre = nombre;
  }

  setRegimenFiscal(regimenFiscal: string | number): void {
    this.emisor._attributes.RegimenFiscal = regimenFiscal;
  }

  setFacAtrAdquirente(facAtrAdquirente: string | number): void {
    this.emisor._attributes.FacAtrAdquirente = facAtrAdquirente;
  }
  /**
   *toJson
   *
   * @returns XmlEmisor
   */
  public toJson(): XmlEmisor {
    Schema.of().cfdi.emisor.validate(this.emisor._attributes);
    return this.emisor;
  }
}
