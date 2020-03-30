import {
    XmlLeyendaAttributes,
    XmlLeyendasFiscales,
    XmlLeyFisAttributes
} from '../../types/Complements/leyendasFiscales/leyendasFiscales.com';
import { ComplementsReturn } from '../../types';

export class LeyendaFisc {
    private leyendafiscal: XmlLeyendasFiscales = {} as XmlLeyendasFiscales
    private xmlns: string = 'http://www.sat.gob.mx/ine';
    private xmlnskey: string = 'ine';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/ine',
        'http://www.sat.gob.mx/sitio_internet/cfd/ine/ine11.xsd',
    ];

    constructor(data: XmlLeyFisAttributes = {version: '1.0'}) {
        this.leyendafiscal = {
            _attributes: data
        } as XmlLeyendasFiscales
    }

    public leyenda(data: XmlLeyendaAttributes) {
        if (!this.leyendafiscal['leyendasFisc:Leyenda']) {
            this.leyendafiscal['leyendasFisc:Leyenda'] = []
        }
        this.leyendafiscal['leyendasFisc:Leyenda'].push({
            _attributes: data
        })
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'ine:INE',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.leyendafiscal,
        };
    }
}
