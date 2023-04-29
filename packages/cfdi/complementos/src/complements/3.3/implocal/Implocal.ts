import {
  XmlImplocal,
  XmlImplocalAttributes,
  XmlRetLocalAttributes,
  XmlTrasLocalAttributes,
} from '../../../types/complements';

import { ComplementsReturn } from '../../../types';

/**
 *
 */
export class Implocal {
  private implocal: XmlImplocal = {} as XmlImplocal;

  private xmlns = 'http://www.sat.gob.mx/implocal';

  private xmlnskey = 'implocal';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/implocal',
    'http://www.sat.gob.mx/sitio_internet/cfd/implocal/implocal.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlImplocalAttributes
   */
  constructor(data: XmlImplocalAttributes) {
    this.implocal._attributes = data;
  }

  /**
   *retenciones
   *
   * @param data
   * XmlRetLocalAttributes
   */
  public retenciones(data: XmlRetLocalAttributes): void {
    if (!this.implocal['implocal:RetencionesLocales']) {
      this.implocal['implocal:RetencionesLocales'] = [];
    }
    this.implocal['implocal:RetencionesLocales'].push({
      _attributes: data,
    });
  }

  /**
   *traslados
   *
   * @param data
   * XmlTrasLocalAttributes
   */
  public traslados(data: XmlTrasLocalAttributes): void {
    if (!this.implocal['implocal:TrasladosLocales']) {
      this.implocal['implocal:TrasladosLocales'] = [];
    }
    this.implocal['implocal:TrasladosLocales'].push({
      _attributes: data,
    });
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.implocal,
      key: 'implocal:ImpuestosLocales',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
