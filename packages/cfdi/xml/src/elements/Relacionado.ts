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
    Schema.of().cfdi.relacionados.validate(typeRelation);
    this.relacionada._attributes = typeRelation;
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
    const relation = { UUID: uuid };
    Schema.of().cfdi.relacionado.validate(relation);
    this.relacionada['cfdi:CfdiRelacionado'].push({
      _attributes: relation
    });
  }

  /**
   *getRelation
   */
  getRelation(): XmlRelacionados {
    return this.relacionada;
  }

  toJson(): XmlRelacionados {
    return this.relacionada;
  }
}
