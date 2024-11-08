import {
  CPM20Autotransporte,
  CPM20AutotransporteAttr,
  CrtPrtIdentificacionVehicularAttr,
  CrtPrtSegurosAttr,
  RemolqueAttr,
} from './types/CartaPorte20.xslt';

export class Autotransporte {
  private static instance: Autotransporte;

  public transporte: CPM20Autotransporte = {} as CPM20Autotransporte;

  constructor(merca?: CPM20AutotransporteAttr) {
    if (merca) {
      this.transporte._attributes = merca;
    }
  }

  reset() {
    this.transporte = {} as CPM20Autotransporte;
  }
  setAttributes(merca?: CPM20AutotransporteAttr) {
    if (merca) {
      this.transporte._attributes = merca;
    }
  }
  static getInstance(merca?: CPM20AutotransporteAttr) {
    if (!Autotransporte.instance) {
      Autotransporte.instance = new Autotransporte(merca);
    }
    this.instance.reset();
    this.instance.setAttributes(merca);
    return Autotransporte.instance;
  }

  setIdentificacionVehicular(idVehicle: CrtPrtIdentificacionVehicularAttr) {
    if (!this.transporte['cartaporte20:IdentificacionVehicular']) {
      this.transporte['cartaporte20:IdentificacionVehicular'] = [];
    }
    this.transporte['cartaporte20:IdentificacionVehicular'].push({
      _attributes: idVehicle,
    });
  }

  setSeguro(seguro: CrtPrtSegurosAttr) {
    if (!this.transporte['cartaporte20:Seguros']) {
      this.transporte['cartaporte20:Seguros'] = [];
    }
    this.transporte['cartaporte20:Seguros'].push({
      _attributes: seguro,
    });
  }

  setRemolque(remolque: RemolqueAttr) {
    if (!this.transporte['cartaporte20:Remolques']) {
      this.transporte['cartaporte20:Remolques'] = {
        'cartaporte20:Remolque': [],
      };
    }
    this.transporte['cartaporte20:Remolques']['cartaporte20:Remolque'].push({
      _attributes: remolque,
    });
  }

  getTransporte(): CPM20Autotransporte {
    return this.transporte;
  }
}
