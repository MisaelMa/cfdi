import { XmlObrasarte, XmlObrasarteAttributes } from '../../types/Complements/obrasarte/obrasarte.interface';
import { ComplementsReturn } from '../../types';

export class ObrasArte {
    private obra: XmlObrasarte = {} as XmlObrasarte;

    private xmlns: string = 'http://www.sat.gob.mx/arteantiguedades';
    private xmlnskey: string = 'obrasarte';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/arteantiguedades',
        'http://www.sat.gob.mx/sitio_internet/cfd/arteantiguedades/obrasarteantiguedades.xsd',
    ];

    constructor(data: XmlObrasarteAttributes) {
        this.obra = {
            _attributes: data
        }
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'obrasarte:obrasarteantiguedades',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.obra,
        };
    }
}
