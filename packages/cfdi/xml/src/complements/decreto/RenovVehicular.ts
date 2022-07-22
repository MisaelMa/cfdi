import {
  XmlRenovVehicular,
  XmlVehicularAttributes,
  XmlVehiculosUsaEnajPermAlFabAttributes,
  XmlVehNueEnaFabAlPermAttributes,
} from '../../types/Complements/decreto.interface';

/**
 *
 */
export class RenovVehicular {
  private renoVehicular: XmlRenovVehicular = {} as XmlRenovVehicular;

  /**
   *constructor
   *
   * @param attributes
   * XmlVehicularAttributes
   */
  constructor(attributes: XmlVehicularAttributes) {
    this.renoVehicular._attributes = attributes;
  }

  // decreto:VehiculosUsadosEnajenadoPermAlFab
  /**
   *VehiculosUsados
   *
   * @param attributes
   * XmlVehiculosUsaEnajPermAlFabAttributes
   */
  VehiculosUsados(attributes: XmlVehiculosUsaEnajPermAlFabAttributes): void {
    if (!this.renoVehicular['decreto:VehiculosUsadosEnajenadoPermAlFab']) {
      this.renoVehicular['decreto:VehiculosUsadosEnajenadoPermAlFab'] = [];
    }
    this.renoVehicular['decreto:VehiculosUsadosEnajenadoPermAlFab'].push({
      _attributes: attributes,
    });
  }

  /**
   *VehiculoNuvoSem
   *
   * @param attributes
   * XmlVehNueEnaFabAlPermAttributes
   */
  VehiculoNuvoSem(attributes: XmlVehNueEnaFabAlPermAttributes): void {
    if (!this.renoVehicular['decreto:VehiculoNuvoSemEnajenadoFabAlPerm']) {
      this.renoVehicular['decreto:VehiculoNuvoSemEnajenadoFabAlPerm'] = {
        _attributes: attributes,
      };
    }
  }

  /**
   *getRenoVehicular
   */
  getRenoVehicular(): XmlRenovVehicular {
    return this.renoVehicular;
  }
}
