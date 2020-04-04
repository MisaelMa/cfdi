export interface XmlGceh {
    _attributes: XmlGcehAttributes,
    'gceh:Erogacion': XmlGcehErogacion[]
}

export interface XmlGcehAttributes {
    Version: string
    NumeroContrato: string;
    AreaContractual?: string;
}

export interface XmlGcehErogacion {
    _attributes: XmlGcehErogacionAttributes
    'gceh:DocumentoRelacionado': XmlEroDocRela[];
    'gceh:Actividades': XmlEroAct[];
    'gceh:CentroCostos': XmlEroCenCost[]
}

export interface XmlGcehErogacionAttributes {
    TipoErogacion: string;
    MontocuErogacion: string;
    Porcentaje: string;
}

export interface XmlEroDocRela {
    _attributes: XmlEroDocRelaAttributes
}

export interface XmlEroDocRelaAttributes {
    OrigenErogacion: string;
    FolioFiscalVinculado?: string;
    RFCProveedor?: string;
    MontoTotalIVA: string;
    MontoRetencionISR?: string;
    MontoRetencionIVA?: string;
    MontoRetencionOtrosImpuestos?: string;
    NumeroPedimentoVinculado?: string;
    ClavePedimentoVinculado?: string;
    ClavePagoPedimentoVinculado?: string;
    MontoIVAPedimento?: string;
    OtrosImpuestosPagadosPedimento?: string;
    FechaFolioFiscalVinculado: string;
    Mes: string;
    MontoTotalErogaciones: string;
}

export interface XmlEroAct {
    _attributes: XmlEroActAttributes;
    'gceh:SubActividades': XmlEroSubAct[]
}

export interface XmlEroActAttributes {
    ActividadRelacionada?: string;
}

export interface XmlEroSubAct {
    _attributes: XmlEroSubActAttributes
    'gceh:Tareas': XmlEroSubActTareas[]
}

export interface XmlEroSubActAttributes {
    SubActividadRelacionada?: string;
}

export interface XmlEroSubActTareas {
    _attributes: XmlEroSubActTaAttributes
}

export interface XmlEroSubActTaAttributes {
    TareaRelacionada?: string;
}

export interface XmlEroCenCost {
    _attributes: XmlEroCenCostAttributes
    'gceh:Yacimientos': XmlEroCenCostYacimientos[]
}

export interface XmlEroCenCostAttributes {
    Campo?: string;
}

export interface XmlEroCenCostYacimientos {
    _attributes: XmlEroCenCostYacAttributes;
    'gceh:Pozos': XmlEroCenCostYaciPozos[]
}

export interface XmlEroCenCostYacAttributes {
    Yacimiento?: string;
}

export interface XmlEroCenCostYaciPozos {
    _attributes: XmlEroCenCostYaciPoAttributes
}

export interface XmlEroCenCostYaciPoAttributes {
    Pozo?: string;
}
