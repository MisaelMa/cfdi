import {
    XmlIeeh,
    XmlIeehAttributes,
    XmlIeehDocRelaAttributes
} from '../../../types/Complements/hidrocarburos/ieeh/ieeh.com';
import { ComplementsReturn } from '../../../types';

export class Ieeh {
    private ieeh: XmlIeeh = {} as XmlIeeh;
    private xmlns: string = 'http://www.sat.gob.mx/IngresosHidrocarburos10';
    private xmlnskey: string = 'ieeh';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/IngresosHidrocarburos10',
        'http://www.sat.gob.mx/sitio_internet/cfd/IngresosHidrocarburos10/IngresosHidrocarburos.xsd'
    ];

    constructor(data: XmlIeehAttributes) {
        this.ieeh._attributes = data;
    }

    docRelacionado(data: XmlIeehDocRelaAttributes) {
        if (!this.ieeh['ieeh:DocumentoRelacionado']) {
            this.ieeh['ieeh:DocumentoRelacionado'] = []
        }
        this.ieeh['ieeh:DocumentoRelacionado'].push({
            _attributes: data
        })
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'ieeh:IngresosHidrocarburos',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.ieeh,
        };
    }
}
