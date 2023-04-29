import {
  XmlLeyFisAttributes,
  XmlLeyendaAttributes,
  XmlLeyendasFiscales,
} from '../../../types/complements/leyendasFiscales/leyendasFiscales.com';

import { ComplementsReturn } from '../../../types';

/**
 *
 */
export class LeyendaFisc {
  private leyendafiscal: XmlLeyendasFiscales = {} as XmlLeyendasFiscales;

  private xmlns = 'http://www.sat.gob.mx/leyendasFiscales';

  private xmlnskey = 'leyendasFisc';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/leyendasFiscales',
    'http://www.sat.gob.mx/sitio_internet/cfd/leyendasFiscales/leyendasFisc.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlLeyFisAttributes
   */
  constructor(data: XmlLeyFisAttributes = { version: '1.0' }) {
    this.leyendafiscal = {
      _attributes: data,
    } as XmlLeyendasFiscales;
  }

  /**
   *leyenda
   *
   * @param data
   * XmlLeyendaAttributes
   */
  public leyenda(data: XmlLeyendaAttributes): void {
    if (!this.leyendafiscal['leyendasFisc:Leyenda']) {
      this.leyendafiscal['leyendasFisc:Leyenda'] = [];
    }
    this.leyendafiscal['leyendasFisc:Leyenda'].push({
      _attributes: data,
    });
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.leyendafiscal,
      key: 'leyendasFisc:LeyendasFiscales',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
