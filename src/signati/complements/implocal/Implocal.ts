import {
    XmlImplocal,
    XmlImplocalAttributes,
    XmlRetencionesLocales, XmlRetLocalAttributes, XmlTrasLocalAttributes
} from '../../types/Complements/implocal/implocal.com';
import { ComplementsReturn } from '../../types';

export class Implocal {
    private implocal: XmlImplocal = {} as XmlImplocal;
    private xmlns: string = 'http://www.sat.gob.mx/implocal';
    private xmlnskey: string = 'implocal';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/implocal',
        'http://www.sat.gob.mx/sitio_internet/cfd/implocal/implocal.xsd'

    ];

    constructor(data: XmlImplocalAttributes) {
        this.implocal._attributes = data
    }

    public retenciones(data: XmlRetLocalAttributes) {
        if (!this.implocal['implocal:RetencionesLocales']) {
            this.implocal['implocal:RetencionesLocales'] = []
        }
        this.implocal['implocal:RetencionesLocales'].push({
            _attributes: data
        })
    }

    public traslados(data: XmlTrasLocalAttributes) {
        if (!this.implocal['implocal:TrasladosLocales']) {
            this.implocal['implocal:TrasladosLocales'] = []
        }
        this.implocal['implocal:TrasladosLocales'].push({
            _attributes: data
        })
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'iedu:instEducativas',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.implocal,
        };
    }
}
