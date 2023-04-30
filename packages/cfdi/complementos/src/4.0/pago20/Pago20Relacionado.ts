import {
  XmlDoctoRelAttributes,
  XmlDoctoRelacionado,
  XmlImpuestosDR,
  XmlTrasladoDRAttributes,
  XmlRetencionDRAttributes,
} from './types/pago20.interface';

/**
 *
 */
export class PagoRelacionado {
  private doctoRelacionado: XmlDoctoRelacionado[] = [];
  private static instance: PagoRelacionado;

  static getInstance(): PagoRelacionado {
    if (!PagoRelacionado.instance) {
      PagoRelacionado.instance = new PagoRelacionado();
    }
    return PagoRelacionado.instance;
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
    this.doctoRelacionado.push(docR);
  }

  /**
   *getRelations
   */
  getRelations(): XmlDoctoRelacionado[] {
    return this.doctoRelacionado;
  }
}
