import {FactoryRecordTransmitter} from "./transmitter.factory";
import {Attributes, ElementCompact} from "xml-js";


export interface xmlDomiciolioAttributes extends Attributes {
    calle?: string;
    noExterior?: string;
    noInterior?: string;
    colonia?: string;
    localidad?: string;
    municipio?: string;
    estado?: string;
    pais?: string;
    codigoPostal?: string;
}

export interface XmlEmisor extends ElementCompact {
    _attributes?: XmlEmisorAttribute;
    'cfdi:DomicilioFiscal'?: xmlEmisorDomicilioF;
    'cfdi:ExpedidoEn'?: xmlEmisorExpedidoEn;
    'cfdi:RegimenFiscal'?: xmlEmisorRF;
}

export interface XmlEmisorAttribute extends Attributes {
    Rfc?: string;
    Nombre?: string;
    RegimenFiscal?: string;
}

export interface xmlEmisorDomicilioF extends ElementCompact {
    _attributes?: xmlDomiciolioAttributes
}

export interface xmlEmisorExpedidoEn extends ElementCompact {
    _attributes?: xmlDomiciolioAttributes
}

export interface xmlEmisorRF extends ElementCompact {
    _attributes?: xmlEmisorRFAttributes
}

export interface xmlEmisorRFAttributes extends Attributes {
    Regimen?: string;
}


export class Transmitter extends FactoryRecordTransmitter() {
    public setRfc(value: string) {
        return this.set("rfc", value);
    }
    public setName(value: string) {
        return this.set("name", value );
    }
    public setTaxRegime(value: string) {
        return this.set("taxRegime", value);
    }

    public getObjectXML(){
        const transmitter: XmlEmisor = {
            _attributes: {
                RegimenFiscal: this.taxRegime,
                Rfc: this.rfc,
                Nombre: this.name,
            },
            "cfdi:DomicilioFiscal": {
                _attributes: {

                }
            },
            "cfdi:ExpedidoEn": {
                _attributes: {

                }
            },
            "cfdi:RegimenFiscal": {
                _attributes: {

                }
            }
        };
        return transmitter;
    }
    public getXML(){

    }
}
const trans = new Transmitter({ name: 'asas' })
trans.getObjectXML()

export class Emisor {

}
