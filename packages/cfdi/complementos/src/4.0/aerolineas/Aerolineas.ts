import {
  XmlAerolineas,
  XmlAerolineasAttributes,
  XmlAerolineasCargoAttributes,
  XmlAerolineasOtrosCargos,
  XmlAerolineasOtrosCargosAttributes,
} from './type/aerolineas.xslt';

import { Complemento } from '../../Complemento';

/*
 * https://www.sat.gob.mx/consulta/99314/genera-facturas-electronicas-para-el-manejo-de-datos-de-aerolineas-de-pasajeros
 */
/**
 *
 */
const xmlns = 'http://www.sat.gob.mx/aerolineas';
const xsd =
  'http://www.sat.gob.mx/sitio_internet/cfd/aerolineas/aerolineas.xsd';

export class Aerolineas extends Complemento<XmlAerolineas> {
  public complemento: XmlAerolineas = {} as XmlAerolineas;

  /**
   * constructor
   *
   * @param attributes
   * XmlAerolineasAttributes
   */
  constructor(attributes: XmlAerolineasAttributes) {
    super({ key: 'aerolineas:Aerolineas', xmlns, xsd });
    this.complemento._attributes = attributes;
  }

  /**
   * OtrosCargos
   *
   * @param attributes
   * XmlAerolineasOtrosCargosAttributes
   */
  OtrosCargos(attributes: XmlAerolineasOtrosCargosAttributes): void {
    if (!this.complemento['aerolineas:OtrosCargos']) {
      this.complemento['aerolineas:OtrosCargos'] =
        {} as XmlAerolineasOtrosCargos;
    }
    this.complemento['aerolineas:OtrosCargos']._attributes = attributes;
  }

  /**
   *Cargo
   *
   * @param attributes
   * XmlAerolineasCargoAttributes
   */
  Cargo(attributes: XmlAerolineasCargoAttributes): void {
    if (this.complemento['aerolineas:OtrosCargos']) {
      if (!this.complemento['aerolineas:OtrosCargos']['aerolineas:Cargo']) {
        this.complemento['aerolineas:OtrosCargos']['aerolineas:Cargo'] = [];
      }
      this.complemento['aerolineas:OtrosCargos']['aerolineas:Cargo'].push({
        _attributes: attributes,
      });
    } else {
      throw new Error('agrega OtrosCargos primero');
    }
  }
}
