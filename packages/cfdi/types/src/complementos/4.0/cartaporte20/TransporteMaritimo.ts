import {
  CPM20TMaritimo,
  XmlCPM20TMaritimoAttribute,
  XmlCPMTMaritimoConAttribute,
} from './types/CartaPorte20.xslt';

export class TransporteMaritimo {
  private static instance: TransporteMaritimo;

  public tMaritimo: CPM20TMaritimo = {} as CPM20TMaritimo;

  constructor(merca?: XmlCPM20TMaritimoAttribute) {
    if (merca) {
      this.tMaritimo._attributes = merca;
    }
  }

  reset() {
    this.tMaritimo = {} as CPM20TMaritimo;
  }
  setAttributes(merca?: XmlCPM20TMaritimoAttribute) {
    if (merca) {
      this.tMaritimo._attributes = merca;
    }
  }
  static getInstance(merca?: XmlCPM20TMaritimoAttribute) {
    if (!TransporteMaritimo.instance) {
      TransporteMaritimo.instance = new TransporteMaritimo(merca);
    }
    this.instance.reset();
    this.instance.setAttributes(merca);
    return TransporteMaritimo.instance;
  }

  setContenedor(contenedor: XmlCPMTMaritimoConAttribute) {
    if (!this.tMaritimo['cartaporte20:Contenedor']) {
      this.tMaritimo['cartaporte20:Contenedor'] = [];
    }
    this.tMaritimo['cartaporte20:Contenedor'].push({
      _attributes: contenedor,
    });
  }

  getTMaritimo() {
    return this.tMaritimo;
  }
}
