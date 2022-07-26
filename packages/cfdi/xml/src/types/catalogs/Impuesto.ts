export enum Impuesto {
  IVA = 'IVA',
  IEPS = 'IEPS',
  ISR = 'ISR',
}

export const ImpuestoList = [
  {
    label: 'ISR',
    value: '001',
  },
  {
    label: 'IVA',
    value: '002',
  },
  {
    label: 'IEPS',
    value: '003',
  },
];

export type ImpuestoType = '001' | '002' | '003';
