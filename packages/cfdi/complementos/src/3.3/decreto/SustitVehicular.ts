import {
  XmlSustitVehicular,
  XmlVehNueEnaFabAlPermAttributes,
  XmlVehicularAttributes,
  XmlVehiculoUsaEnajPermAlFabAttributes,
} from '../../types/complements';

/**
 *
 */
export class SustitVehicular {
  private sustitVehicular: XmlSustitVehicular = {} as XmlSustitVehicular;

  /**
   *constructor
   *
   * @param attributes
   * XmlVehicularAttributes
   */
  constructor(attributes: XmlVehicularAttributes) {
    this.sustitVehicular._attributes = attributes;
  }

  /**
   *VehiculoUsado
   *
   * @param attributes
   * XmlVehiculoUsaEnajPermAlFabAttributes
   */
  VehiculoUsado(attributes: XmlVehiculoUsaEnajPermAlFabAttributes): void {
    if (!this.sustitVehicular['decreto:VehiculoUsadoEnajenadoPermAlFab']) {
      this.sustitVehicular['decreto:VehiculoUsadoEnajenadoPermAlFab'] = {
        _attributes: attributes,
      };
    }
  }

  /**
   * VehiculoNuvoSem
   *
   * @param attributes
   * XmlVehNueEnaFabAlPermAttributes
   */
  VehiculoNuvoSem(attributes: XmlVehNueEnaFabAlPermAttributes): void {
    if (!this.sustitVehicular['decreto:VehiculoNuvoSemEnajenadoFabAlPerm']) {
      this.sustitVehicular['decreto:VehiculoNuvoSemEnajenadoFabAlPerm'] = {
        _attributes: attributes,
      };
    }
  }

  /**
   *getSustitVehicular
   */
  getSustitVehicular(): XmlSustitVehicular {
    return this.sustitVehicular;
  }
}
