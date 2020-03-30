import {
  XmlSustitVehicular,
  XmlVehicularAttributes, XmlVehiculoUsaEnajPermAlFabAttributes, XmlVehNueEnaFabAlPermAttributes,
} from '../../types/Complements/decreto.interface';

export class SustitVehicular {
  private sustitVehicular: XmlSustitVehicular = {} as XmlSustitVehicular;

  constructor(attributes: XmlVehicularAttributes) {
    this.sustitVehicular._attributes = attributes;
  }

  VehiculoUsado(attributes: XmlVehiculoUsaEnajPermAlFabAttributes) {
    if (!this.sustitVehicular['decreto:VehiculoUsadoEnajenadoPermAlFab']) {
      this.sustitVehicular['decreto:VehiculoUsadoEnajenadoPermAlFab'] = {
        _attributes: attributes,
      };
    }
  }

  VehiculoNuvoSem(attributes: XmlVehNueEnaFabAlPermAttributes) {
    if (!this.sustitVehicular['decreto:VehiculoNuvoSemEnajenadoFabAlPerm']) {
      this.sustitVehicular['decreto:VehiculoNuvoSemEnajenadoFabAlPerm'] = {
        _attributes: attributes,
      };
    }
  }

  getSustitVehicular(): XmlSustitVehicular {
    return this.sustitVehicular;
  }
}
