import { XmlSpei } from '../../types/Complements/spei/spei.com';
import { ComplementsReturn } from '../../types';
import { SpeiTercero } from './SpeiTercero';

export class Spei {
    private spei: XmlSpei = {} as XmlSpei
    private xmlns: string = 'http://www.sat.gob.mx/spei';
    private xmlnskey: string = 'spei';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/spei',
        'http://www.sat.gob.mx/sitio_internet/cfd/spei/spei.xsd'
    ];


    public tercero(speiTercero: SpeiTercero) {
        if (!this.spei['spei:SPEI_Tercero']) {
            this.spei['spei:SPEI_Tercero'] = []
        }
        this.spei['spei:SPEI_Tercero'].push(speiTercero.getTercero());
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'spei:Complemento_SPEI',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.spei,
        };
    }

}
