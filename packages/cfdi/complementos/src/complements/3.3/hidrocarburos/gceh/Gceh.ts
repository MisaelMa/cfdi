import {
  XmlGceh,
  XmlGcehAttributes,
} from '../../../../types/complements/hidrocarburos/gceh/gceh.com';

import { ComplementsReturn } from '../../../../types';
import { Erogacion } from './Erogacion.gceh';

/**
 *
 */
export class Gceh {
  private gceh: XmlGceh = {} as XmlGceh;

  private xmlns = 'http://www.sat.gob.mx/GastosHidrocarburos10';

  private xmlnskey = 'gceh';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/GastosHidrocarburos10',
    'http://www.sat.gob.mx/sitio_internet/cfd/GastosHidrocarburos10/GastosHidrocarburos10.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlGcehAttributes
   */
  constructor(data: XmlGcehAttributes) {
    this.gceh._attributes = data;
  }

  /**
   *erogacion
   *
   * @param ero
   * Erogacion
   */
  public erogacion(ero: Erogacion): void {
    if (!this.gceh['gceh:Erogacion']) {
      this.gceh['gceh:Erogacion'] = [];
    }
    this.gceh['gceh:Erogacion'].push(ero.getErogacion());
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.gceh,
      key: 'gceh:GastosHidrocarburos',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
