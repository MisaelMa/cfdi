import {
  XmlDoctoRelAttributes,
  XmlDoctoRelacionado,
  XmlImpuestosDR,
  XmlRetencionDRAttributes,
  XmlTrasladoDRAttributes,
} from './types/pago20.interface';

/**
 *
 */
export class Pago20Relacionado {
  private doctoRelacionado: XmlDoctoRelacionado = {} as XmlDoctoRelacionado
  private static instance: Pago20Relacionado;

  static getInstance(): Pago20Relacionado {
    if (!Pago20Relacionado.instance) {
      Pago20Relacionado.instance = new Pago20Relacionado();
    }
    return Pago20Relacionado.instance;
  }
  /**
   *relacion
   *
   * @param data
   */
  setRelacion({
    doc,
    retencionDR,
    trasladoDR,
  }: {
    doc: XmlDoctoRelAttributes;
    retencionDR?: XmlRetencionDRAttributes[];
    trasladoDR?: XmlTrasladoDRAttributes[];
  }): void {
    const docR: XmlDoctoRelacionado = {
      _attributes: doc,
    };
    if (retencionDR || trasladoDR) {
      docR['pago20:ImpuestosDR'] = {} as XmlImpuestosDR;
    }

    const retsDR = docR['pago20:ImpuestosDR'];
    if (retsDR) {
      if (retencionDR) {
        if (!retsDR['pago20:RetencionesDR']) {
          retsDR['pago20:RetencionesDR'] = {
            'pago20:RetencionDR': [],
          };
        }
        for (const retDR of retencionDR) {
          retsDR['pago20:RetencionesDR']['pago20:RetencionDR'].push({
            _attributes: retDR,
          });
        }
      }
      if (trasladoDR) {
        if (!retsDR['pago20:TrasladosDR']) {
          retsDR['pago20:TrasladosDR'] = {
            'pago20:TrasladoDR': [],
          };
        }
        for (const trsDR of trasladoDR) {
          retsDR['pago20:TrasladosDR']['pago20:TrasladoDR'].push({
            _attributes: trsDR,
          });
        }
      }
    }
    this.doctoRelacionado = docR;
  }

  /**
   *getRelations
   */
  getRelation(): XmlDoctoRelacionado {
    return this.doctoRelacionado;
  }
}
