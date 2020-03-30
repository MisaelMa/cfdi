import {
  XmlRenovVehicular,
  XmlVehicularAttributes,
  XmlVehiculosUsaEnajPermAlFabAttributes, XmlVehNueEnaFabAlPermAttributes,
} from '../../types/Complements/decreto.interface';

export class RenovVehicular {
  private renoVehicular: XmlRenovVehicular = {} as XmlRenovVehicular;

  constructor(attributes: XmlVehicularAttributes) {
    this.renoVehicular._attributes = attributes;
  }

  // decreto:VehiculosUsadosEnajenadoPermAlFab
  VehiculosUsados(attributes: XmlVehiculosUsaEnajPermAlFabAttributes) {
    if (!this.renoVehicular['decreto:VehiculosUsadosEnajenadoPermAlFab']) {
      this.renoVehicular['decreto:VehiculosUsadosEnajenadoPermAlFab'] = [];
    }
    this.renoVehicular['decreto:VehiculosUsadosEnajenadoPermAlFab'].push({
      _attributes: attributes,
    });
  }

  VehiculoNuvoSem(attributes: XmlVehNueEnaFabAlPermAttributes) {
    if (!this.renoVehicular['decreto:VehiculoNuvoSemEnajenadoFabAlPerm']) {
      this.renoVehicular['decreto:VehiculoNuvoSemEnajenadoFabAlPerm'] = {
        _attributes: attributes,
      };
    }
  }

  getRenoVehicular(): XmlRenovVehicular {
    return this.renoVehicular;
  }

}
