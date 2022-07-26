import {
  XmlValesAttributes,
  XmlValesConceptAttributes,
  XmlValesDeDespensa,
} from '@cfdi/xml/src/types/Complements/valesdedespensa/valesdedespensa.com';
import { ComplementsReturn } from '@cfdi/xml/src/types';

/**
 *
 */
export class ValesDeDespensa {
  private vale: XmlValesDeDespensa = {} as XmlValesDeDespensa;

  private xmlns = 'http://www.sat.gob.mx/valesdedespensa';

  private xmlnskey = 'valesdedespensa';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/valesdedespensa',
    'http://www.sat.gob.mx/sitio_internet/cfd/valesdedespensa/valesdedespensa.xsd',
  ];

  /**
   *constructor
   *
   * @param data
   * XmlValesAttributes
   */
  constructor(data: XmlValesAttributes) {
    this.vale = {
      _attributes: data,
    } as XmlValesDeDespensa;
  }

  /**
   *concepto
   *
   * @param data
   * XmlValesConceptAttributes
   */
  public concepto(data: XmlValesConceptAttributes): void {
    if (!this.vale['valesdedespensa:Conceptos']) {
      this.vale['valesdedespensa:Conceptos'] = {
        'valesdedespensa:Concepto': [],
      };
    }
    this.vale['valesdedespensa:Conceptos']['valesdedespensa:Concepto'].push({
      _attributes: data,
    });
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.vale,
      key: 'valesdedespensa:ValesDeDespensa',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
