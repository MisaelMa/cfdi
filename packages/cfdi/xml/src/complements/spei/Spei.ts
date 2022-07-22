import { XmlSpei } from '../../types/Complements/spei/spei.com';
import { ComplementsReturn } from '../../types';

import { SpeiTercero } from './SpeiTercero';

/**
 *
 */
export class Spei {
  private spei: XmlSpei = {} as XmlSpei;

  private xmlns = 'http://www.sat.gob.mx/spei';

  private xmlnskey = 'spei';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/spei',
    'http://www.sat.gob.mx/sitio_internet/cfd/spei/spei.xsd',
  ];

  /**
   *tercero
   *
   * @param speiTercero
   * SpeiTercero
   */
  public tercero(speiTercero: SpeiTercero): void {
    if (!this.spei['spei:SPEI_Tercero']) {
      this.spei['spei:SPEI_Tercero'] = [];
    }
    this.spei['spei:SPEI_Tercero'].push(speiTercero.getTercero());
  }

  /**
   * getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.spei,
      key: 'spei:Complemento_SPEI',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
