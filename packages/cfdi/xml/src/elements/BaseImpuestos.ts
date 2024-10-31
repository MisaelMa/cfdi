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
import { sortObject } from 'src/utils/Map';

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
      const sortTotalImpuestos = sortObject(TI, ['TotalImpuestosRetenidos', 'TotalImpuestosTrasladados']);
      this.impuesto._attributes = sortTotalImpuestos;
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
    const sortTraslado = sortObject(traslado, ['Base', 'Impuesto', 'TipoFactor', 'TasaOCuota','Importe']);
    const atrributos: XmlTransladoAttributes = {
      _attributes: sortTraslado,
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
    console.log(retencion,'retencion');
    if (!this.impuesto['cfdi:Retenciones']) {
      this.impuesto['cfdi:Retenciones'] = {
        'cfdi:Retencion': [],
      } as XmlRetenciones;
    }
    const sortRetencion = sortObject(retencion, ['Base', 'Impuesto', 'TipoFactor', 'TasaOCuota', 'Importe',]);
    const atrributos: XmlRetencionAttributes = {
      _attributes: sortRetencion,
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
