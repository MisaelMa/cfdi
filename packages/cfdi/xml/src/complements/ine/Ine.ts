import { ComplementsReturn } from '../../types';
import {
  XmlIne,
  XmlIneAttribute,
  XmlIneContabilidadAttribute,
  XmlIneEntidad,
  XmlIneEntidadAttribute,
} from '../../types/Complements/ine/ine.com';

/*
 * https://www.sat.gob.mx/consulta/09695/genera-tus-facturas-con-el-complemento-del-ine-version-1.1
 * */
/**
 *
 */
export class Ine {
  private ine: XmlIne = {} as XmlIne;

  private xmlns = 'http://www.sat.gob.mx/ine';

  private xmlnskey = 'ine';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/ine',
    'http://www.sat.gob.mx/sitio_internet/cfd/ine/ine11.xsd',
  ];

  /**
   *constructor
   *
   * @param attributes
   * XmlIneAttribute
   */
  constructor(attributes: XmlIneAttribute) {
    this.ine._attributes = attributes;
  }

  /**
   *Entidad
   *
   * @param attributes
   * XmlIneEntidadAttribute
   */
  Entidad(attributes: XmlIneEntidadAttribute): void {
    if (!this.ine['ine:Entidad']) {
      this.ine['ine:Entidad'] = {} as XmlIneEntidad;
    }
    this.ine['ine:Entidad']._attributes = attributes;
  }

  /**
   *Contabilidad
   *
   * @param attributes
   * XmlIneContabilidadAttribute
   */
  Contabilidad(attributes: XmlIneContabilidadAttribute): void {
    if (this.ine['ine:Entidad']) {
      this.ine['ine:Entidad']['ine:Contabilidad'] = {
        _attributes: attributes,
      };
    } else {
      throw new Error('agrega entidad primero');
    }
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.ine,
      key: 'ine:INE',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
