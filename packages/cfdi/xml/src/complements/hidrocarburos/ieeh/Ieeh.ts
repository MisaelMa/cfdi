import {
  XmlIeeh,
  XmlIeehAttributes,
  XmlIeehDocRelaAttributes,
} from '../../../types/Complements/hidrocarburos/ieeh/ieeh.com';
import { ComplementsReturn } from '../../../types';

/**
 *
 */
export class Ieeh {
  private ieeh: XmlIeeh = {} as XmlIeeh;

  private xmlns = 'http://www.sat.gob.mx/IngresosHidrocarburos10';

  private xmlnskey = 'ieeh';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/IngresosHidrocarburos10',
    'http://www.sat.gob.mx/sitio_internet/cfd/IngresosHidrocarburos10/IngresosHidrocarburos.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlIeehAttributes
   */
  constructor(data: XmlIeehAttributes) {
    this.ieeh._attributes = data;
  }

  /**
   *docRelacionado
   *
   * @param data
   * XmlIeehDocRelaAttributes
   */
  docRelacionado(data: XmlIeehDocRelaAttributes): void {
    if (!this.ieeh['ieeh:DocumentoRelacionado']) {
      this.ieeh['ieeh:DocumentoRelacionado'] = [];
    }
    this.ieeh['ieeh:DocumentoRelacionado'].push({
      _attributes: data,
    });
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.ieeh,
      key: 'ieeh:IngresosHidrocarburos',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
