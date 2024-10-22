import {
  XmlImpuestos,
  XmlImpuestosTrasladados,
  XmlRetencionAttributes,
  XmlRetenciones,
  XmlTranRentAttributesProperties,
  XmlTranslado,
  XmlTransladoAttributes,
} from '../types';

import { Schema } from '@cfdi/xsd';
import { stringObjToNumerico } from '../utils/number.utils';

/**
 *
 */
export class BaseImpuestos {
  public impuesto: XmlImpuestos = {} as XmlImpuestos;

  /**
   *constructor
   *
   * @param TotalImpuestos
   * XmlImpuestosTrasladados
   */
  constructor(
    TotalImpuestos: XmlImpuestosTrasladados = {} as XmlImpuestosTrasladados
  ) {
    if (Object.keys(TotalImpuestos).length !== 0) {
      const TI = stringObjToNumerico(TotalImpuestos);
      Schema.of().cfdi.impuestos.validate(TI);
      this.impuesto._attributes = TI;
    }
  }

  /**
   *traslados
   *
   * @param traslado
   * XmlTranRentAttributesProperties
   */
  setTraslado(
    traslado: XmlTranRentAttributesProperties & { Base: string | number }
  ): this {
    if (!this.impuesto['cfdi:Traslados']) {
      this.impuesto['cfdi:Traslados'] = {
        'cfdi:Traslado': [],
      } as XmlTranslado;
    }
    const atrributos: XmlTransladoAttributes = {
      _attributes: traslado,
    } as XmlTransladoAttributes;

    this.impuesto['cfdi:Traslados']['cfdi:Traslado'].push(atrributos);
    return this;
  }

  /**
   *retenciones
   *
   * @param retencion
   *  Omit<
      XmlTranRentAttributesProperties,
      'Base' | 'TipoFactor' | 'TasaOCuota'
    >
   */
  setRetencion(
    retencion: Omit<
      XmlTranRentAttributesProperties,
      'Base' | 'TipoFactor' | 'TasaOCuota'
    >
  ): this {
    if (!this.impuesto['cfdi:Retenciones']) {
      this.impuesto['cfdi:Retenciones'] = {
        'cfdi:Retencion': [],
      } as XmlRetenciones;
    }
    const atrributos: XmlRetencionAttributes = {
      _attributes: retencion,
    } as XmlRetencionAttributes;
    this.impuesto['cfdi:Retenciones']['cfdi:Retencion'].push(atrributos);
    return this;
  }

  getTotalImpuestos(): XmlImpuestosTrasladados {
    return this.impuesto._attributes;
  }

  getRetenciones(): XmlRetencionAttributes[] {
    return this.impuesto['cfdi:Retenciones']['cfdi:Retencion'];
  }

  getTraslados(): XmlTransladoAttributes[] {
    return this.impuesto['cfdi:Traslados']['cfdi:Traslado'];
  }
}
