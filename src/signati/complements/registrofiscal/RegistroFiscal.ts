import { XmlRegistrofiscal, XmlRegistrofiscalAttributes } from '../../types/Complements/registrofiscal.interface';
import { ComplementsReturn } from '../../types';

export default class RegistroFiscal {
    private registrofiscal: XmlRegistrofiscal = {} as XmlRegistrofiscal;

    private xmlns: string = 'http://www.sat.gob.mx/registrofiscal';
    private xmlnskey: string = 'registrofiscal';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/registrofiscal',
        'http://www.sat.gob.mx/sitio_internet/cfd/cfdiregistrofiscal/cfdiregistrofiscal.xsd'
    ];

    constructor(data: XmlRegistrofiscalAttributes = {Version: '1.0', Folio: ''}) {
        if (data.Folio.length !== 0 || !/^\s+$/.test(data.Folio)) {
            this.registrofiscal = {
                _attributes: data
            }
        }
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'registrofiscal:CFDIRegistroFiscal',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.registrofiscal,
        };
    }
}
