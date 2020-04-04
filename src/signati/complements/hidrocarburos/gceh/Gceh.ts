import { XmlGceh, XmlGcehAttributes } from '../../../types/Complements/hidrocarburos/gceh/gceh.com';
import { ComplementsReturn } from '../../../types';
import { Erogacion } from './Erogacion.gceh';

export class Gceh {
    private gceh: XmlGceh = {} as XmlGceh

    private xmlns: string = 'http://www.sat.gob.mx/GastosHidrocarburos10';
    private xmlnskey: string = 'gceh';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/GastosHidrocarburos10',
        'http://www.sat.gob.mx/sitio_internet/cfd/GastosHidrocarburos10/GastosHidrocarburos10.xsd'
    ];

    constructor(data: XmlGcehAttributes) {
        this.gceh._attributes = data
    }

    public erogacion(ero: Erogacion) {
        if (!this.gceh['gceh:Erogacion']) {
            this.gceh['gceh:Erogacion'] = []
        }
        this.gceh['gceh:Erogacion'].push(ero.getErogacion())
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'gceh:GastosHidrocarburos',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.gceh,
        };
    }
}
