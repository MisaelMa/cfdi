export enum Impuesto {
  ISR = '001',
  IVA = '002',
  IEPS = '003',
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
