import {
    XmlDoctoRelacionado,
    XmlPago10,
    XmlPago10Attributes, XmlPago10Impuesto,
    XmlPagos10,
    XmlPagos10Attributes
} from '../../types/Complements/pago10.interface';
import { ComplementsReturn, XmlIneAttribute } from '../../types';

export class Pago10 {
    private pago10: XmlPagos10 = {} as XmlPagos10;
    private xmlns: string = 'http://www.sat.gob.mx/Pagos';
    private xmlnskey: string = 'pago10';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/Pagos',
        'http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos10.xsd',
    ];

    constructor(attributes: XmlPagos10Attributes) {
        this.pago10._attributes = attributes;
    }

    pago(pago: {
        data: XmlPago10Attributes,
        relacionado?: XmlDoctoRelacionado[],
        impuestos?: XmlPago10Impuesto[]
    }) {
        if (!this.pago10['pago10:Pago']) {
            this.pago10['pago10:Pago'] = []
        }
        const setPago: XmlPago10 = {} as XmlPago10;
        setPago._attributes = pago.data;
        pago.relacionado ? setPago['pago10:DoctoRelacionado'] = pago.relacionado : null;
        pago.impuestos ? setPago['pago10:Impuestos'] = pago.impuestos : null;
        this.pago10['pago10:Pago'].push(setPago)
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'pago10:Pagos',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.pago10,
        };
    }
}
