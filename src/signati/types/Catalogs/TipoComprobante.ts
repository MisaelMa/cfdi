export enum TipoComprobante {
    INGRESO = 'I',
    EGRESO = 'E',
    TRASLADO = 'T',
    PAGO = 'P',
    NOMINA = 'N'
}

export type TypeComprobante = 'I' | 'E' | 'T' | 'P' | 'N';

export const TipoComprobanteList = [
    {
        value: 'I',
        label: 'Ingreso'
    },
    {
        value: 'E',
        label: 'Egreso'
    },
    {
        value: 'T',
        label: 'Translado'
    },
    {
        value: 'N',
        label: 'Nómina'
    },
    {
        value: 'P',
        label: 'Pago'
    },
]

