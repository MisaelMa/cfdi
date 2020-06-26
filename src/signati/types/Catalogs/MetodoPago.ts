export enum MetodoPago {
    PAGO_EN_UNA_EXHIBICION = 'PUE',
    PAGO_EN_PARCIALIDADES_DIFERIDO = 'PPD'
};

export type MetodoPagoType = 'PUE' | 'PPD';

export const MetodoPagoList = [
    {value: 'PUE', label: 'Pago en una sola exhibición'},
    {value: 'PPD', label: 'Pago en parcialidades o diferido'},
]