export enum Impuesto {
    IVA = 'IVA',
    IEPS = 'IEPS',
    ISR = 'ISR'
};

export const ImpuestoList = [
    {
        value: '001',
        label: 'ISR'
    },
    {
        value: '002',
        label: 'IVA'
    },
    {
        value: '003',
        label: 'IEPS'
    }
]

export type ImpuestoType = '001' | '002' | '003';
