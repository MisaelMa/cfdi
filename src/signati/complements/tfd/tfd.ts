import { XmlTfd, XmlTfdAttributes } from '../../types/Complements/tfd/tfd.com';
import { ComplementsReturn } from '../../types';

export class Tfd {
    private tfd: XmlTfd = {} as XmlTfd

    private xmlns: string = 'http://www.sat.gob.mx/TimbreFiscalDigital';
    private xmlnskey: string = 'tfd';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/TimbreFiscalDigital',
        'http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd'
    ];

    constructor(data: XmlTfdAttributes) {
        this.tfd = {
            _attributes: data
        }
    }


    public getComplement(): ComplementsReturn {
        return {
            key: 'tfd:TimbreFiscalDigital',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.tfd,
        };
    }
}
