import {
    XmlSpeiBeneficiarioAttributes,
    XmlSpeiOrdenanteAttributes,
    XmlSpeiTercero,
    XmlSpeiTerceroAttributes
} from '../../types/Complements/spei/spei.com';

export class SpeiTercero {
    private tercero: XmlSpeiTercero = {} as XmlSpeiTercero

    constructor(data: XmlSpeiTerceroAttributes) {
        this.tercero = {
            _attributes: data
        } as XmlSpeiTercero
    }

    public ordenante(data: XmlSpeiOrdenanteAttributes) {
        this.tercero['spei:Ordenante'] = {
            _attributes: data
        }
    }

    public beneficiario(data: XmlSpeiBeneficiarioAttributes) {
        this.tercero['spei:Beneficiario'] = {
            _attributes: data
        }
    }

    getTercero() {
        return this.tercero
    }
}
