import { XmlRelacionados, XmlRelacionadosAttributes } from '../types';

import { Schema } from '@cfdi/xsd';

/**
 *
 */
export class Relacionado {
  private relacionada = {} as XmlRelacionados;

  /**
   * constructor
   *
   * @param typeRelation
   * XmlRelacionadosAttributes
   */
  constructor(typeRelation: XmlRelacionadosAttributes) {
    this.relacionada._attributes = typeRelation;
    Schema.of().cfdi.relacionados.validate(typeRelation);
  }

  /**
   *addRelation
   *
   * @param uuid
   * string
   */
  addRelation(uuid: string): void {
    if (!this.relacionada['cfdi:CfdiRelacionado']) {
      this.relacionada['cfdi:CfdiRelacionado'] = [];
    }
    this.relacionada['cfdi:CfdiRelacionado'].push({
      _attributes: { UUID: uuid },
    });
  }

  /**
   *getRelation
   */
  getRelation(): XmlRelacionados {
    return this.relacionada;
  }
}
