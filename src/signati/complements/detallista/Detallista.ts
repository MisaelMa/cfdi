import {XmlDetaAttributes, XmlDetallista} from '../../types';

export class Detallista {
    private detallista: XmlDetallista = {} as XmlDetallista;
    private xmlns: string = 'http://www.sat.gob.mx/detallista';
    private xmlnskey: string = 'detallista';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/detallista',
        'http://www.sat.gob.mx/sitio_internet/cfd/detallista/detallista.xsd',
    ];

    constructor(attributes: XmlDetaAttributes) {
        this.detallista._attributes = attributes;
    }
}
