import {
  XmlCartaPorte20,
  XmlCartaPorte20Attribute,
} from './types/CartaPorte20.xslt';

import { Complemento } from '../../Complemento';
import { ComplementsReturn } from '../../types/tags';
import { CtaPrt20Mercancia } from './CtaPrt20Mercancia';
import { CtaPrt20Ubicacion } from './CtaPrt20Ubicacion';

/**
 *
 */

const xmlns = 'http://www.sat.gob.mx/CartaPorte20';
const xsd =
  'http://www.sat.gob.mx/sitio_internet/cfd/CartaPorte/CartaPorte20.xsd';
export class CartaPorte20 extends Complemento<XmlCartaPorte20> {
  public complemento: XmlCartaPorte20 = {} as XmlCartaPorte20;

  /**
   *constructor
   *
   * @param attributes
   * XmlCartaPorteAttribute
   */
  constructor(attributes?: XmlCartaPorte20Attribute) {
    super({ key: 'cartaporte20:CartaPorte', xmlns, xsd });
    if (attributes) {
      this.complemento = {
        _attributes: attributes,
      } as XmlCartaPorte20;
    }
  }

  setAttributes(attributes: XmlCartaPorte20Attribute) {
    this.complemento = {
      _attributes: attributes,
    } as XmlCartaPorte20;
  }

  setUbicacion(ubicacion: CtaPrt20Ubicacion) {
    if (!this.complemento['cartaporte20:Ubicaciones']) {
      this.complemento['cartaporte20:Ubicaciones'] = {
        'cartaporte20:Ubicacion': [],
      };
    }
    this.complemento['cartaporte20:Ubicaciones']['cartaporte20:Ubicacion'].push(
      ubicacion.getUbicacion()
    );
  }

  setMercancia(mercancia: CtaPrt20Mercancia) {
    this.complemento['cartaporte20:Mercancias'] = mercancia.getMercancias();
  }
}
