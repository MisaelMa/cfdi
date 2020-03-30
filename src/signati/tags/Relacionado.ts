import {
  XmlRelacionado,
  XmlRelacionadoAttributes, XmlRelacionados,
  XmlRelacionadosAttributes,
} from '../types/Tags/comprobante.interface';

export class Relacionado {
  private relacionada = {} as XmlRelacionados;

  constructor(typeRelation: XmlRelacionadosAttributes) {
    this.relacionada._attributes = typeRelation;
  }

  addRelation(uuid: string) {
    if (!this.relacionada['cfdi:CfdiRelacionado']) {
      this.relacionada['cfdi:CfdiRelacionado'] = [];
    }
    this.relacionada['cfdi:CfdiRelacionado'].push({ _attributes: { UUID: uuid } });
  }

  getRelation(): XmlRelacionados {
    return this.relacionada;
  }
}
