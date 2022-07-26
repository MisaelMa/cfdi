import {
  XmlDoctoRelacionado,
  XmlDoctoRelAttributes,
} from '../../types/complements/pago10.interface';

/**
 *
 */
export class Pago10Relacionado {
  private doctoRelacionado: XmlDoctoRelacionado[] = [];

  /**
   *relacion
   *
   * @param data
   */
  relacion(data: XmlDoctoRelAttributes): void {
    const doc: XmlDoctoRelacionado = {
      _attributes: data,
    };
    this.doctoRelacionado.push(doc);
  }

  /**
   *getRelations
   */
  getRelations(): XmlDoctoRelacionado[] {
    return this.doctoRelacionado;
  }
}
