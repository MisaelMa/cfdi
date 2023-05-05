import {
  CP20Mercancia,
  CP20Mercancias,
  CP20Ubicacion,
  CPDomicilioAttribute,
  CPM20AutotransporteAttr,
  XmlCP20MercanciaAttribute,
  XmlCP20MercanciasAttribute,
  XmlCP20UbicacionAttribute,
  XmlCPM20TAereoAttribute,
  XmlCPM20TFerroviarioAttribute,
  XmlCPM20TMaritimoAttribute,
  XmlCartaPorte20,
  XmlCartaPorte20Attribute,
} from './types/CartaPorte20.xslt';

import { Mercancia } from './Mercancia';
import { Autotransporte } from './Autotransporte';
import { TransporteMaritimo } from './TransporteMaritimo';
import { TransporteFerroviario } from './TransporteFerroviario';

export class CtaPrt20Mercancias {
  private mercancias: CP20Mercancias = {} as CP20Mercancias;
  constructor(attributes?: XmlCP20MercanciasAttribute) {
    if (attributes) {
      this.mercancias = {
        _attributes: attributes,
      } as CP20Mercancias;
    }
  }

  setAttributes(attributes: XmlCP20MercanciasAttribute) {
    this.mercancias = {
      _attributes: attributes,
    } as CP20Mercancias;
  }
  setMercancia(merca: XmlCP20MercanciaAttribute): Mercancia {
    if (!this.mercancias['cartaporte20:Mercancia']) {
      this.mercancias['cartaporte20:Mercancia'] = [];
    }
    const mercancia = Mercancia.getInstance(merca);
    this.mercancias['cartaporte20:Mercancia'].push(mercancia.getMercancia());
    return mercancia;
  }

  setAutotransporte(auto: CPM20AutotransporteAttr) {
    if (!this.mercancias['cartaporte20:Autotransporte']) {
      this.mercancias['cartaporte20:Autotransporte'] = [];
    }

    const transporte = Autotransporte.getInstance(auto);
    this.mercancias['cartaporte20:Autotransporte'].push(
      transporte.getTransporte()
    );
    return transporte;
  }

  setTransporteMaritimo(maritimo: XmlCPM20TMaritimoAttribute) {
    if (!this.mercancias['cartaporte20:TransporteMaritimo']) {
      this.mercancias['cartaporte20:TransporteMaritimo'] = [];
    }

    const transporte = TransporteMaritimo.getInstance(maritimo);
    this.mercancias['cartaporte20:TransporteMaritimo'].push(
      transporte.getTMaritimo()
    );
    return transporte;
  }

  setTransporteAereo(aereo: XmlCPM20TAereoAttribute) {
    if (!this.mercancias['cartaporte20:TransporteAereo']) {
      this.mercancias['cartaporte20:TransporteAereo'] = [];
    }
    this.mercancias['cartaporte20:TransporteAereo'].push({
      _attributes: aereo,
    });
  }

  setTransporteFerroviario(ferroviario: XmlCPM20TFerroviarioAttribute) {
    if (!this.mercancias['cartaporte20:TransporteFerroviario']) {
      this.mercancias['cartaporte20:TransporteFerroviario'] = [];
    }

    const ferro = TransporteFerroviario.getInstance(ferroviario);
    this.mercancias['cartaporte20:TransporteFerroviario'].push(
      ferro.getTransporteFerroviario()
    );
    return ferro;
  }
  getMercancias() {
    return this.mercancias;
  }
}
