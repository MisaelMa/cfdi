import { XmlDivisas, XmlDivisasAttributes } from '../../types/Complements/divisas/divisas.com';
import { ComplementsReturn } from '../../types';

export class Divisas {
    private divisa: XmlDivisas = {} as XmlDivisas
    private xmlns: string = 'http://www.sat.gob.mx/divisas';
    private xmlnskey: string = 'divisas';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/divisas',
        'http://www.sat.gob.mx/sitio_internet/cfd/divisas/divisas.xsd',
    ];

    constructor(data: XmlDivisasAttributes) {
        this.divisa = {
            _attributes: data
        }
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'divisas:Divisas',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.divisa,
        };
    }

}
