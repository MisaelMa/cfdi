import {XmlIedu, XmlIeduAttribute} from '../../Interface/Complements/iedu.interface';
import {XmlComplementsConcepts} from '../../Interface/Tags/complements.interface';

export class Iedu {
    public iued: XmlComplementsConcepts = {} as XmlComplementsConcepts;

    private xmlns: string = 'http://www.sat.gob.mx/iedu';
    private xmlnskey: string = 'iedu';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/iedu',
        'http://www.sat.gob.mx/sitio_internet/cfd/iedu/iedu.xsd'
    ];

    constructor(attributes: XmlIeduAttribute) {
        this.iued['iedu:instEducativas'] = {
            _attributes: attributes,
        } as XmlIedu;
    }
}
