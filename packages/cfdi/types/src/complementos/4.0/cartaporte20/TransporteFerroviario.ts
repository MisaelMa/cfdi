import {
  CPM20TFerroviario,
  Carro,
  CarroAttr,
  CarroContenedorAttr,
  DerechosDePasoAttr,
  XmlCPM20TFerroviarioAttribute,
} from './types/CartaPorte20.xslt';

export class TransporteFerroviario {
  private static instance: TransporteFerroviario;

  public tFerroviario: CPM20TFerroviario = {} as CPM20TFerroviario;

  constructor(attr?: XmlCPM20TFerroviarioAttribute) {
    if (attr) {
      this.tFerroviario._attributes = attr;
    }
  }

  reset() {
    this.tFerroviario = {} as CPM20TFerroviario;
  }
  setAttributes(attr?: XmlCPM20TFerroviarioAttribute) {
    if (attr) {
      this.tFerroviario._attributes = attr;
    }
  }
  static getInstance(attr?: XmlCPM20TFerroviarioAttribute) {
    if (!TransporteFerroviario.instance) {
      TransporteFerroviario.instance = new TransporteFerroviario(attr);
    }
    this.instance.reset();
    this.instance.setAttributes(attr);
    return TransporteFerroviario.instance;
  }

  setDerechosDePaso(ddp: DerechosDePasoAttr) {
    if (!this.tFerroviario['cartaporte20:DerechosDePaso']) {
      this.tFerroviario['cartaporte20:DerechosDePaso'] = [];
    }
    this.tFerroviario['cartaporte20:DerechosDePaso'].push({
      _attributes: ddp,
    });
  }
  setCarro(data: { carro: CarroAttr; contenedores?: CarroContenedorAttr[] }) {
    if (!this.tFerroviario['cartaporte20:Carro']) {
      this.tFerroviario['cartaporte20:Carro'] = [];
    }
    const carro: Carro = {
      _attributes: data.carro,
    } as Carro;
    if (data.contenedores && !!data.contenedores.length) {
      if (!carro['cartaporte20:Contenedor']) {
        carro['cartaporte20:Contenedor'] = [];
      }
      data.contenedores.map((ctn) =>
        carro['cartaporte20:Contenedor'].push({ _attributes: ctn })
      );
    }
    this.tFerroviario['cartaporte20:Carro'].push(carro);
  }

  getTransporteFerroviario() {
    return this.tFerroviario;
  }
}
