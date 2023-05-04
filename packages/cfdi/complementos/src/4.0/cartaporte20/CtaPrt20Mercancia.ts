import {
  CP20Mercancia,
  CP20Mercancias,
  CP20Ubicacion,
  CPDomicilioAttribute,
  XmlCP20MercanciaAttribute,
  XmlCP20MercanciasAttribute,
  XmlCP20UbicacionAttribute,
  XmlCartaPorte20,
  XmlCartaPorte20Attribute,
} from './types/CartaPorte20.xslt';

export class CtaPrt20Mercancia {
  private mercancia: CP20Mercancias = {} as CP20Mercancias;
  constructor(attributes?: XmlCP20MercanciasAttribute) {
    if (attributes) {
      this.mercancia = {
        _attributes: attributes,
      } as CP20Mercancias;
    }
  }

  setAttributes(attributes: XmlCP20MercanciasAttribute) {
    this.mercancia = {
      _attributes: attributes,
    } as CP20Mercancias;
  }
  setMercancia(merca: XmlCP20MercanciaAttribute) {
    if (!this.mercancia['cartaporte20:Mercancia']) {
      this.mercancia['cartaporte20:Mercancia'] = [];
    }
    this.mercancia['cartaporte20:Mercancia'].push({
      _attributes: merca,
    } as CP20Mercancia);
  }
  getMercancias() {
    return this.mercancia;
  }
}
