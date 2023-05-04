import {
  CP20Ubicacion,
  CPDomicilioAttribute,
  XmlCP20UbicacionAttribute,
  XmlCartaPorte20,
  XmlCartaPorte20Attribute,
} from './types/CartaPorte20.xslt';

export class CtaPrt20Ubicacion {
  private ubicacion: CP20Ubicacion = {} as CP20Ubicacion;
  constructor(attributes?: XmlCP20UbicacionAttribute) {
    if (attributes) {
      this.ubicacion = {
        _attributes: attributes,
      } as CP20Ubicacion;
    }
  }

  setAttributes(attributes: XmlCP20UbicacionAttribute) {
    this.ubicacion = {
      _attributes: attributes,
    } as CP20Ubicacion;
  }

  setDomicilio(domicilio: CPDomicilioAttribute) {
    if (!this.ubicacion['cartaporte20:Domicilio']) {
      this.ubicacion['cartaporte20:Domicilio'] = [];
    }
    this.ubicacion['cartaporte20:Domicilio'].push({
      _attributes: domicilio,
    });
  }

  getUbicacion() {
    return this.ubicacion;
  }
}
