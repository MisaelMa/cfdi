import {
  XmlIne,
  XmlIneAttribute,
  XmlIneContabilidadAttribute,
  XmlIneEntidad,
  XmlIneEntidadAttribute,
} from './type/ine.xslt';

import { Complemento } from '../../Complemento';

/*
 * https://www.sat.gob.mx/consulta/09695/genera-tus-facturas-con-el-complemento-del-ine-version-1.1
 * */
const xmlns = 'http://www.sat.gob.mx/ine';
const xsd = 'http://www.sat.gob.mx/sitio_internet/cfd/ine/ine11.xsd';
export class Ine extends Complemento<XmlIne> {
  public complemento: XmlIne = {} as XmlIne;

  /**
   *constructor
   *
   * @param attributes
   * XmlIneAttribute
   */
  constructor(attributes: XmlIneAttribute) {
    super({ key: 'ine:INE', xmlns, xsd });
    this.complemento._attributes = attributes;
  }

  /**
   *Entidad
   *
   * @param attributes
   * XmlIneEntidadAttribute
   */
  Entidad(attributes: XmlIneEntidadAttribute): void {
    if (!this.complemento['ine:Entidad']) {
      this.complemento['ine:Entidad'] = {} as XmlIneEntidad;
    }
    this.complemento['ine:Entidad']._attributes = attributes;
  }

  /**
   *Contabilidad
   *
   * @param attributes
   * XmlIneContabilidadAttribute
   */
  Contabilidad(attributes: XmlIneContabilidadAttribute): void {
    if (this.complemento['ine:Entidad']) {
      this.complemento['ine:Entidad']['ine:Contabilidad'] = {
        _attributes: attributes,
      };
    } else {
      throw new Error('agrega entidad primero');
    }
  }
}
