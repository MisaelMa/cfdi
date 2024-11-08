import {
  XmlReceptor,
  XmlReceptorAttribute,
} from '../types';

import { Schema } from '@cfdi/xsd';

/**
 *
 */
export class Receptor {
  public receptor: XmlReceptor = {
    _attributes: {
      Rfc: '',
      Nombre: '',
      UsoCFDI: '',
      DomicilioFiscalReceptor: '',
      RegimenFiscalReceptor: '',
    },
  } as XmlReceptor;

  /**
   *constructor
   *
   * @param receptor
   * XmlReceptorAttribute
   */
  constructor(receptor: XmlReceptorAttribute) {
    Schema.of().cfdi.receptor.validate(receptor);
    this.receptor._attributes = receptor;
  }

  setRFC(rfc: string): void {
    this.receptor._attributes.Rfc = rfc;
  }

  setNombre(nombre: string): void {
    this.receptor._attributes.Nombre = nombre;
  }

  setUsoCFDI(usoCFDI: string): void {
    this.receptor._attributes.UsoCFDI = usoCFDI;
  }

  setDomicilioFiscalReceptor(domicilioFiscalReceptor: string): void {
    this.receptor._attributes.DomicilioFiscalReceptor = domicilioFiscalReceptor;
  }

  setResidenciaFiscal(residenciaFiscal: string): void {
    this.receptor._attributes.ResidenciaFiscal = residenciaFiscal;
  }

  setNumRegIdTrib(numRegIdTrib: string): void {
    this.receptor._attributes.NumRegIdTrib = numRegIdTrib;
  }
  setRegimenFiscalReceptor(regimenFiscalReceptor: string): void {
    this.receptor._attributes.RegimenFiscalReceptor = regimenFiscalReceptor;
  }

  /**
   *toJson
   *
   * @returns XmlReceptor
   */
  public toJson(): XmlReceptor {
    Schema.of().cfdi.receptor.validate(this.receptor._attributes);
    return this.receptor;
  }
}
