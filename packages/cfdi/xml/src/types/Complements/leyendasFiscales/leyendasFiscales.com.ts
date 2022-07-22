export interface XmlLeyendasFiscales {
    _attributes: XmlLeyFisAttributes
    'leyendasFisc:Leyenda': XmlLeyenda[]
}

export interface XmlLeyFisAttributes {
    version: string;
}

export interface XmlLeyenda {
    _attributes: XmlLeyendaAttributes
}

export interface XmlLeyendaAttributes {
    disposicionFiscal?: string
    norma?: string;
    textoLeyenda: string;
}
