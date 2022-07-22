export enum TipoComprobante {
  INGRESO = 'I',
  EGRESO = 'E',
  TRASLADO = 'T',
  PAGO = 'P',
  NOMINA = 'N',
}

export type TypeComprobante = 'I' | 'E' | 'T' | 'P' | 'N';

export const TipoComprobanteList = [
  {
    label: 'Ingreso',
    value: 'I',
  },
  { label: 'Egreso', value: 'E' },
  {
    label: 'Translado',
    value: 'T',
  },
  {
    label: 'Nómina',
    value: 'N',
  },
  {
    label: 'Pago',
    value: 'P',
  },
];
