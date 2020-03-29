import { XmlDoctoRelacionado, XmlDoctoRelAttributes } from '../../Interface/Complements/pago10.interface';

export class Pago10Relacionado {
    private doctoRelacionado: XmlDoctoRelacionado[] = []

    relacion(data: XmlDoctoRelAttributes) {
        const doc: XmlDoctoRelacionado = {
            _attributes: data
        }
        this.doctoRelacionado.push(doc)
    }

    getRelations() {
        return this.doctoRelacionado
    }
}
