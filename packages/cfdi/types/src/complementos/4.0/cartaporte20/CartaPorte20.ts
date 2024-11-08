import {
  XmlCartaPorte20,
  XmlCartaPorte20Attribute,
} from './types/CartaPorte20.xslt';

import { Complemento } from '../../Complemento';
import { CtaPrt20Mercancias } from './CtaPrt20Mercancias';
import { CtaPrt20Ubicacion } from './CtaPrt20Ubicacion';
import { CtaPrt20FiguraTransporte } from './CtaPrt20FiguraTransporte';

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

  setMercancias(mercancia: CtaPrt20Mercancias) {
    this.complemento['cartaporte20:Mercancias'] = mercancia.getMercancias();
  }

  setFiguraTransporte(ft: CtaPrt20FiguraTransporte) {
    if (!this.complemento['cartaporte20:FiguraTransporte']) {
      this.complemento['cartaporte20:FiguraTransporte'] = {
        'cartaporte20:TiposFigura': [],
      };
    }
    this.complemento['cartaporte20:FiguraTransporte'][
      'cartaporte20:TiposFigura'
    ].push(ft.getFiguraTransporte());
  }
}
