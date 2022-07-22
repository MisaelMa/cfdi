import {
  XmlAerolineas,
  XmlAerolineasAttributes,
  XmlAerolineasCargoAttributes,
  XmlAerolineasOtrosCargos,
  XmlAerolineasOtrosCargosAttributes,
} from '../../types/Complements/aerolineas.interface';
import { ComplementsReturn } from '../../types';

/*
 * https://www.sat.gob.mx/consulta/99314/genera-facturas-electronicas-para-el-manejo-de-datos-de-aerolineas-de-pasajeros
 */
/**
 *
 */
export class Aerolineas {
  private aerolineas: XmlAerolineas = {} as XmlAerolineas;

  private xmlns = 'http://www.sat.gob.mx/aerolineas';

  private xmlnskey = 'aerolineas';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/aerolineas',
    'http://www.sat.gob.mx/sitio_internet/cfd/aerolineas/aerolineas.xsd',
  ];

  /**
   * constructor
   *
   * @param attributes
   * XmlAerolineasAttributes
   */
  constructor(attributes: XmlAerolineasAttributes) {
    this.aerolineas._attributes = attributes;
  }

  /**
   * OtrosCargos
   *
   * @param attributes
   * XmlAerolineasOtrosCargosAttributes
   */
  OtrosCargos(attributes: XmlAerolineasOtrosCargosAttributes): void {
    if (!this.aerolineas['aerolineas:OtrosCargos']) {
      this.aerolineas['aerolineas:OtrosCargos'] =
        {} as XmlAerolineasOtrosCargos;
    }
    this.aerolineas['aerolineas:OtrosCargos']._attributes = attributes;
  }

  /**
   *Cargo
   *
   * @param attributes
   * XmlAerolineasCargoAttributes
   */
  Cargo(attributes: XmlAerolineasCargoAttributes): void {
    if (this.aerolineas['aerolineas:OtrosCargos']) {
      if (!this.aerolineas['aerolineas:OtrosCargos']['aerolineas:Cargo']) {
        this.aerolineas['aerolineas:OtrosCargos']['aerolineas:Cargo'] = [];
      }
      this.aerolineas['aerolineas:OtrosCargos']['aerolineas:Cargo'].push({
        _attributes: attributes,
      });
    } else {
      throw new Error('agrega OtrosCargos primero');
    }
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.aerolineas,
      key: 'aerolineas:Aerolineas',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
