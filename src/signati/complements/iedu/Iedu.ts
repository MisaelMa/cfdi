import {XmlIedu, XmlIeduAttribute} from '../../Interface/Complements/iedu.interface';
import {ComplementsReturn, XmlComplementsConcepts} from '../../Interface/Tags/complements.interface';

export class Iedu {
    private iued: XmlIedu = {} as XmlIedu;

    private xmlns: string = 'http://www.sat.gob.mx/iedu';
    private xmlnskey: string = 'iedu';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/iedu',
        'http://www.sat.gob.mx/sitio_internet/cfd/iedu/iedu.xsd'
    ];

    constructor(attributes: XmlIeduAttribute) {
        this.iued = {
            _attributes: attributes,
        } as XmlIedu;
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'iedu:instEducativas',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.iued,
        };
    }
}
