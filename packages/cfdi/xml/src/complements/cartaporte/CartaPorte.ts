import { XmlCartaPorte, XmlCartaPorteAttribute } from '../../types/complements';
import { ComplementsReturn } from '../../types/tags';

/**
 *
 */
export class CartaPorte {
  private cartaporte: XmlCartaPorte = {} as XmlCartaPorte;

  private xmlns = 'http://www.sat.gob.mx/CartaPorte';

  private xmlnskey = 'cartaporte';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/CartaPorte',
    'http://www.sat.gob.mx/sitio_internet/cfd/CartaPorte/CartaPorte.xsd',
  ];

  /**
   *constructor
   *
   * @param attributes
   * XmlCartaPorteAttribute
   */
  constructor(attributes: XmlCartaPorteAttribute) {
    this.cartaporte = {
      _attributes: attributes,
    } as XmlCartaPorte;
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.cartaporte,
      key: 'cartaporte:CartaPorte',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
