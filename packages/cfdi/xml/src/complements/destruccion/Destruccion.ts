import {
  XmlDestruccion,
  XmlDestruccionAttributes,
  XmlInfoAduAttributes,
  XmlVehiculoDestruidoAttributes,
} from '@cfdi/xml/src/types/Complements/destruccion.interface';
import { ComplementsReturn } from '@cfdi/xml/src/types';

/*
 * sat.gob.mx/consulta/44950/genera-tus-facturas-electronicas-con-el-complemento-de-certificado-de-destruccion
 */
/**
 *
 */
export class Destruccion {
  private destruccion: XmlDestruccion = {} as XmlDestruccion;

  private xmlns = 'http://www.sat.gob.mx/certificadodestruccion';

  private xmlnskey = 'destruccion';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/certificadodestruccion',
    'http://www.sat.gob.mx/sitio_internet/cfd/certificadodestruccion/certificadodedestruccion.xsd',
  ];

  /**
   *constructor
   *
   * @param attributes
   * XmlDestruccionAttributes
   */
  constructor(attributes: XmlDestruccionAttributes) {
    this.destruccion._attributes = attributes;
  }

  /**
   *InformacionAduanera
   *
   * @param attributes
   * XmlInfoAduAttributes
   */
  InformacionAduanera(attributes: XmlInfoAduAttributes): void {
    if (!this.destruccion['destruccion:InformacionAduanera']) {
      this.destruccion['destruccion:InformacionAduanera'] = {
        _attributes: attributes,
      };
    }
  }

  /**
   *VehiculoDestruido
   *
   * @param attributes
   * XmlVehiculoDestruidoAttributes
   */
  VehiculoDestruido(attributes: XmlVehiculoDestruidoAttributes): void {
    if (!this.destruccion['destruccion:VehiculoDestruido']) {
      this.destruccion['destruccion:VehiculoDestruido'] = {
        _attributes: attributes,
      };
    }
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.destruccion,
      key: 'destruccion:certificadodedestruccion',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
