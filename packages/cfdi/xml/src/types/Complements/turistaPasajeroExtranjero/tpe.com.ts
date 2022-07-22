import { tipoTransito, Via } from "./tpe.enum";

export interface XmlTpe {
    _attributes: XmlTpeAttributes;
    'tpe:datosTransito': XmlTpeDatosTransito
}

export interface XmlTpeAttributes {
    version: string;
    fechadeTransito: string; // aaaa-mm-ddThh:mm:ss
    tipoTransito: tipoTransito
}

export interface XmlTpeDatosTransito {
    _attributes: XmlTpeDTransAttributes
}

export interface XmlTpeDTransAttributes {
    Via: Via;
    TipoId: string;
    NumeroId: string;
    Nacionalidad: string;
    EmpresaTransporte: string;
    IdTransporte?: string
}
