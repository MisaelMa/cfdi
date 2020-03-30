import {
    XmlPago10Impuesto,
    XmlPagoImptoAttributes,
    XmlPagoRetencionAttributes, XmlPagoTranladoAttributes
} from '../../types/Complements/pago10.interface';

export class Pago10Impuestos {
    private impuesto: XmlPago10Impuesto = {} as XmlPago10Impuesto

    constructor(data: XmlPagoImptoAttributes) {
        this.impuesto._attributes = data
    }

    retenciones(data: XmlPagoRetencionAttributes) {
        if (!this.impuesto['pago10:Retenciones']) {
            this.impuesto['pago10:Retenciones'] = {
                'pago10:Retencion': []
            }
        }
        this.impuesto['pago10:Retenciones']['pago10:Retencion'].push({
            _attributes: data
        })
    }

    traslados(data: XmlPagoTranladoAttributes) {
        if (!this.impuesto['pago10:Traslados']) {
            this.impuesto['pago10:Traslados'] = {
                'pago10:Traslado': []
            }
        }
        this.impuesto['pago10:Traslados']['pago10:Traslado'].push({
            _attributes: data
        })
    }

    getImpuesto() {
        return this.impuesto
    }
}
