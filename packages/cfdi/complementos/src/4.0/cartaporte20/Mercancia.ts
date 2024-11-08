import {
  CP20Mercancia,
  CrtPrt20CantidadTransportaAttr,
  CrtPrt20DetalleMercanciaAttr,
  CrtPrt20GuiaIdAttr,
  CrtPrt20PedimentosAttr,
  XmlCP20MercanciaAttribute,
} from './types/CartaPorte20.xslt';

export class Mercancia {
  private static instance: Mercancia;

  public mercancia: CP20Mercancia = {} as CP20Mercancia;

  constructor(merca?: XmlCP20MercanciaAttribute) {
    if (merca) {
      this.mercancia._attributes = merca;
    }
  }
  reset() {
    this.mercancia = {} as CP20Mercancia;
  }
  setAttributes(merca?: XmlCP20MercanciaAttribute) {
    if (merca) {
      this.mercancia._attributes = merca;
    }
  }
  static getInstance(merca?: XmlCP20MercanciaAttribute) {
    if (!Mercancia.instance) {
      Mercancia.instance = new Mercancia(merca);
    }
    this.instance.reset();
    this.instance.setAttributes(merca);
    return Mercancia.instance;
  }

  setPedimentos(pedimiento: CrtPrt20PedimentosAttr) {
    if (!this.mercancia['cartaporte20:Pedimentos']) {
      this.mercancia['cartaporte20:Pedimentos'] = [];
    }
    this.mercancia['cartaporte20:Pedimentos'].push({
      _attributes: pedimiento,
    });
  }

  setGuiaIdentificacion(guideID: CrtPrt20GuiaIdAttr) {
    if (!this.mercancia['cartaporte20:GuiasIdentificacion']) {
      this.mercancia['cartaporte20:GuiasIdentificacion'] = [];
    }

    this.mercancia['cartaporte20:GuiasIdentificacion'].push({
      _attributes: guideID,
    });
  }

  setCantidadTransporta(ct: CrtPrt20CantidadTransportaAttr) {
    if (!this.mercancia['cartaporte20:CantidadTransporta']) {
      this.mercancia['cartaporte20:CantidadTransporta'] = [];
    }

    this.mercancia['cartaporte20:CantidadTransporta'].push({
      _attributes: ct,
    });
  }

  setDetalleMercancia(detalle: CrtPrt20DetalleMercanciaAttr) {
    if (!this.mercancia['cartaporte20:DetalleMercancia']) {
      this.mercancia['cartaporte20:DetalleMercancia'] = [];
    }

    this.mercancia['cartaporte20:DetalleMercancia'].push({
      _attributes: detalle,
    });
  }

  getMercancia() {
    return this.mercancia;
  }
}
