import {
  XmlDecreto,
  XmlDecretoAttributes,
} from '../../types/Complements/decreto.interface';
import { ComplementsReturn } from '../../types';

import { RenovVehicular } from './RenovVehicular';
import { SustitVehicular } from './SustitVehicular';

/*
 * https://www.sat.gob.mx/consulta/05041/si-recibes-un-estimulos-por-la-renovacion-del-parque-vehicular-del-autotransporte-genera-tus-facturas-con-complemento-de-renovacion-y-sustitucion-de-vehiculo
 */
/**
 *
 */
export class Decreto {
  private decreto: XmlDecreto = {} as XmlDecreto;

  private xmlns = 'http://www.sat.gob.mx/renovacionysustitucionvehiculos';

  private xmlnskey = 'decreto';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/renovacionysustitucionvehiculos',
    'http://www.sat.gob.mx/sitio_internet/cfd/renovacionysustitucionvehiculos/renovacionysustitucionvehiculos.xsd',
  ];

  /**
   *constructor
   *
   * @param attributes
   * XmlDecretoAttributes
   */
  constructor(attributes: XmlDecretoAttributes) {
    this.decreto._attributes = attributes;
  }

  /**
   *RenovVehicular
   *
   * @param renovVehicular
   * RenovVehicular
   */
  RenovVehicular(renovVehicular: RenovVehicular): void {
    if (!this.decreto['decreto:DecretoRenovVehicular']) {
      this.decreto['decreto:DecretoRenovVehicular'] =
        renovVehicular.getRenoVehicular();
    }
  }

  /**
   *SustitVehicular
   *
   * @param sustitVehicular
   * SustitVehicular
   */
  SustitVehicular(sustitVehicular: SustitVehicular): void {
    if (!this.decreto['decreto:DecretoSustitVehicular']) {
      this.decreto['decreto:DecretoSustitVehicular'] =
        sustitVehicular.getSustitVehicular();
    }
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.decreto,
      key: 'decreto:renovacionysustitucionvehiculos',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
