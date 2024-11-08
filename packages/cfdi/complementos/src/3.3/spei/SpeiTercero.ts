import {
  XmlSpeiBeneficiarioAttributes,
  XmlSpeiOrdenanteAttributes,
  XmlSpeiTercero,
  XmlSpeiTerceroAttributes,
} from '../../types/complements/spei/spei.com';

/**
 *
 */
export class SpeiTercero {
  private tercero: XmlSpeiTercero = {} as XmlSpeiTercero;

  /**
   *constructor
   *
   * @param data
   * XmlSpeiTerceroAttributes
   */
  constructor(data: XmlSpeiTerceroAttributes) {
    this.tercero = {
      _attributes: data,
    } as XmlSpeiTercero;
  }

  /**
   *ordenante
   *
   * @param data
   * XmlSpeiOrdenanteAttributes
   */
  public ordenante(data: XmlSpeiOrdenanteAttributes): void {
    this.tercero['spei:Ordenante'] = {
      _attributes: data,
    };
  }

  /**
   *beneficiario
   *
   * @param data
   * XmlSpeiBeneficiarioAttributes
   */
  public beneficiario(data: XmlSpeiBeneficiarioAttributes): void {
    this.tercero['spei:Beneficiario'] = {
      _attributes: data,
    };
  }

  /**
   *getTercero
   */
  getTercero(): XmlSpeiTercero {
    return this.tercero;
  }
}
