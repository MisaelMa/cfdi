import {
  XmlImpuestos,
  XmlImpuestosTrasladados,
  XmlRetencionAttributes,
  XmlRetenciones,
  XmlTranRentAttributesProperties,
  XmlTranslado,
  XmlTransladoAttributes,
} from '../types';

import { BaseImpuestos } from './BaseImpuestos';
import { Schema } from '@cfdi/xsd';
import { stringObjToNumerico } from '../utils/number.utils';

/**
 *
 */
export class Impuestos extends BaseImpuestos {
  constructor(
    TotalImpuestos: XmlImpuestosTrasladados = {} as XmlImpuestosTrasladados
  ) {
    super(TotalImpuestos);
  }

  traslados(
    payload: XmlTranRentAttributesProperties & { Base: string | number }
  ) {
    const traslado = {
      ...payload,
    };
    Schema.of().cfdi.traslado.validate(traslado);
    this.setTraslado(traslado);
    return this;
  }
  
  retenciones(
    payload: Omit<
      XmlTranRentAttributesProperties,
      'Base' | 'TipoFactor' | 'TasaOCuota'
    >
  ) {
    const retencion = {
      ...payload
    };
    Schema.of().cfdi.retencion.validate(retencion);
    this.setRetencion(retencion);
    return this;
  }
}
