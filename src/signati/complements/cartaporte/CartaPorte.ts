import {XmlCartaPorte, XmlCartaPorteAttribute} from '../../types/Complements/cartaporte.interface';
import {ComplementsReturn} from '../../types/Tags/complements.interface';

export class CartaPorte {
    private cartaporte: XmlCartaPorte = {} as XmlCartaPorte;

    private xmlns: string = 'http://www.sat.gob.mx/CartaPorte';
    private xmlnskey: string = 'cartaporte';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/CartaPorte',
        'http://www.sat.gob.mx/sitio_internet/cfd/CartaPorte/CartaPorte.xsd'
    ];

    constructor(attributes: XmlCartaPorteAttribute) {
        this.cartaporte = {
            _attributes: attributes,
        } as XmlCartaPorte;
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'cartaporte:CartaPorte',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.cartaporte,
        };
    }
}
