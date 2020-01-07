import {
  XmlTranslado,
  XmlTransladoAttributes,
  XmlTranRentAttributesProperties,
  XmlRetencionAttributes,
  XmlImpuestos, XmlRetenciones, XmlImpuestosTrasladados,
} from '../Interface/Tags/impuestos.interface';

export class Impuestos {
  public impuesto: XmlImpuestos = {} as XmlImpuestos;
  private translado: XmlTranslado = {
    'cfdi:Traslado': [],
  } as XmlTranslado;
  private retencion: XmlRetenciones = {
    'cfdi:Retencion': [],
  } as XmlRetenciones;

  constructor(TotalImpuestos: XmlImpuestosTrasladados = {} as XmlImpuestosTrasladados) {
    if (Object.keys(TotalImpuestos).length !== 0) {
      this.impuesto._attributes = TotalImpuestos;
    }
  }

  /**
   * @param {Object} traslado
   * @param {String} traslado.Base
   * @param {String} traslado.Impuesto
   * @param {String} traslado.TipoFactor
   * @param {String} traslado.TasaOCuota
   * @param {String} traslado.Importe// = traslado;
   */
  traslados(traslado: XmlTranRentAttributesProperties) {
    if (this.impuesto['cfdi:Traslados']) {
    } else {// = traslado;
      this.impuesto['cfdi:Traslados'] = {
        'cfdi:Traslado': [],
      } as XmlTranslado;
    }
    const atrributos: XmlTransladoAttributes = {
      _attributes: traslado,
    } as XmlTransladoAttributes;
    this.impuesto['cfdi:Traslados']['cfdi:Traslado'].push(atrributos); // = traslado;
    // para tener por separado los traslado del tag de impuesto solo para consulta
    this.translado['cfdi:Traslado'].push(atrributos);
    return this;

  }

  retenciones(retencion: XmlTranRentAttributesProperties) {
    if (this.impuesto['cfdi:Retenciones']) {

    } else {

      this.impuesto['cfdi:Retenciones'] = {
        'cfdi:Retencion': [],
      } as XmlRetenciones;
    }
    const atrributos: XmlRetencionAttributes = {
      _attributes: retencion,
    } as XmlRetencionAttributes;
    this.impuesto['cfdi:Retenciones']['cfdi:Retencion'].push(atrributos); // = traslado;
    // para tener por separado las retenciones del tag de impuesto solo para consulta
    this.retencion['cfdi:Retencion'].push(atrributos);
    return this;
  }
}
