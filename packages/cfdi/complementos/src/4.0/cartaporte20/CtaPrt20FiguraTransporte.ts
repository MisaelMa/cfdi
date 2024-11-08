import {
  CP20TiposFigura,
  CP20TiposFiguraAttr,
  CPDomicilioAttribute,
  PartesTransporteAttr,
} from './types/CartaPorte20.xslt';

export class CtaPrt20FiguraTransporte {
  private fTransporte: CP20TiposFigura = {} as CP20TiposFigura;
  constructor(attributes?: CP20TiposFiguraAttr) {
    if (attributes) {
      this.fTransporte = {
        _attributes: attributes,
      } as CP20TiposFigura;
    }
  }

  setAttributes(attributes: CP20TiposFiguraAttr) {
    this.fTransporte = {
      _attributes: attributes,
    } as CP20TiposFigura;
  }

  setPartesTransporte(pt: PartesTransporteAttr) {
    if (!this.fTransporte['cartaporte20:PartesTransporte']) {
      this.fTransporte['cartaporte20:PartesTransporte'] = [];
    }
    this.fTransporte['cartaporte20:PartesTransporte'].push({ _attributes: pt });
  }

  setDomicilio(domicilio: CPDomicilioAttribute) {
    if (!this.fTransporte['cartaporte20:Domicilio']) {
      this.fTransporte['cartaporte20:Domicilio'] = [];
    }
    this.fTransporte['cartaporte20:Domicilio'].push({
      _attributes: domicilio,
    });
  }

  getFiguraTransporte() {
    return this.fTransporte;
  }
}
