import {
  XmlEroDocRelaAttributes,
  XmlGcehErogacion,
  XmlGcehErogacionAttributes,
} from '../../../types/complements/hidrocarburos/gceh/gceh.com';

import { Actividades } from './Actividades.gceh';
import { CentroCostos } from './CentroCostos.gceh';

/**
 *
 */
export class Erogacion {
  private erogacion: XmlGcehErogacion = {} as XmlGcehErogacion;

  /**
   *constructor
   *
   * @param data
   * XmlGcehErogacionAttributes
   */
  constructor(data: XmlGcehErogacionAttributes) {
    this.erogacion._attributes = data;
  }

  /**
   * documentoRelacionado
   *
   * @param data
   * XmlEroDocRelaAttributes
   */
  public documentoRelacionado(data: XmlEroDocRelaAttributes): void {
    if (!this.erogacion['gceh:DocumentoRelacionado']) {
      this.erogacion['gceh:DocumentoRelacionado'] = [];
    }
    this.erogacion['gceh:DocumentoRelacionado'].push({
      _attributes: data,
    });
  }

  /**
   *actividad
   *
   * @param act
   * Actividades
   */
  public actividad(act: Actividades): void {
    if (!this.erogacion['gceh:Actividades']) {
      this.erogacion['gceh:Actividades'] = [];
    }
    this.erogacion['gceh:Actividades'].push(act.getActividad());
  }

  /**
   *centroCostos
   *
   * @param cen
   * CentroCostos
   */
  public centroCostos(cen: CentroCostos): void {
    if (!this.erogacion['gceh:CentroCostos']) {
      this.erogacion['gceh:CentroCostos'] = [];
    }
    this.erogacion['gceh:CentroCostos'].push(cen.getCenCosto());
  }

  /**
   *getErogacion
   */
  public getErogacion(): XmlGcehErogacion {
    return this.erogacion;
  }
}
