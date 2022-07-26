import { tipoOperacion } from '@cfdi/xml/src/types/Complements/divisas/divisas.enum';

export interface XmlDivisas {
    _attributes: XmlDivisasAttributes
}

export interface XmlDivisasAttributes {
    version: string
    tipoOperacion: tipoOperacion
}
