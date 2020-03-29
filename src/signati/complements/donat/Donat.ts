import { XmlDonat, XmlDonatAttributes } from '../../Interface/Complements/donatarias.interface';
import { ComplementsReturn } from '../../Interface';

export class Donat {
    private donat: XmlDonat = {} as XmlDonat
    private xmlns: string = 'http://www.sat.gob.mx/donat';
    private xmlnskey: string = 'donat';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/donat',
        'http://www.sat.gob.mx/sitio_internet/cfd/donat/donat11.xsd',
    ];

    constructor(data: XmlDonatAttributes) {
        this.donat = {
            _attributes: data
        }
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'donat:Donatarias',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.donat,
        };
    }
}
