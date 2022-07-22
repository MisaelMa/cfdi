export interface XmlIeeh {
    _attributes: XmlIeehAttributes
    'ieeh:DocumentoRelacionado': XmlIeehDocRela[];
}

export interface XmlIeehAttributes {
    Version: string;
    NumeroContrato: string;
    ContraprestacionPagadaOperador: string;
    Porcentaje: string;
}

export interface XmlIeehDocRela {
    _attributes: XmlIeehDocRelaAttributes
}

export interface XmlIeehDocRelaAttributes {
    FolioFiscalVinculado: string;
    FechaFolioFiscalVinculado: string;
    Mes: string;
}
