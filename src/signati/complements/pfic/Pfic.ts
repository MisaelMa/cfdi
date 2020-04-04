import { XmlPfic, XmlPficAttributes } from '../../types/Complements/pfic/pfic.com';
import { ComplementsReturn } from '../../types';

export class Pfic {
    private pfic: XmlPfic = {} as XmlPfic;
    private xmlns: string = 'http://www.sat.gob.mx/pfic';
    private xmlnskey: string = 'pfic';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/pfic',
        'http://www.sat.gob.mx/sitio_internet/cfd/pfic/pfic.xsd'
    ];

    constructor(data: XmlPficAttributes) {
        this.pfic = {
            _attributes: data
        }
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'pfic:PFintegranteCoordinado',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.pfic,
        };
    }
}
