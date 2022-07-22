export enum MetodoPago {
  PAGO_EN_UNA_EXHIBICION = 'PUE',
  PAGO_EN_PARCIALIDADES_DIFERIDO = 'PPD',
}

export type MetodoPagoType = 'PUE' | 'PPD';

export const MetodoPagoList = [
  { label: 'Pago en una sola exhibición', value: 'PUE' },
  { label: 'Pago en parcialidades o diferido', value: 'PPD' },
];
