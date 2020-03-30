import { XmlPagoenespecie, XmlPagoenespecieAttributes } from '../../types/Complements/pagoenespecie/pagoenespecie.com';
import { ComplementsReturn } from '../../types';

export class PagoEnEspecie {
    private specie: XmlPagoenespecie = {} as XmlPagoenespecie
    private xmlns: string = 'http://www.sat.gob.mx/pagoenespecie';
    private xmlnskey: string = 'pagoenespecie';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/pagoenespecie',
        'http://www.sat.gob.mx/sitio_internet/cfd/pagoenespecie/pagoenespecie.xsd'
    ];

    constructor(data: XmlPagoenespecieAttributes) {
        this.specie = {
            _attributes: data
        }
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'pagoenespecie:PagoEnEspecie',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.specie,
        };
    }
}
