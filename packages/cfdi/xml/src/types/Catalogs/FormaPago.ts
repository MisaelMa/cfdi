export enum FormaPago {
  EFECTIVO = '01',
  CHEQUE_NOMINATIVO = '02',
  TRANSFERENCIA_ELECTRONICA = '03',
  TARJETA_DE_CREDITO = '04',
  MONEDERO_ELECTRONICO = '05',
  DINERO_ELECTRONICO = '06',
  VALES_DE_DESPENSA = '08',
  DACION_EN_PAGO = '12',
  SUBROGACION = '13',
  CONSIGNACION = '14',
  CONDONACION = '15',
  COMPENSACION = '17',
  NOVACION = '23',
  CONFUSION = '24',
  REMISION_DE_DEUDA = '25',
  PRESCRIPCION_O_CADUCIDAD = '26',
  A_SATISFACCION_DEL_ACREEDOR = '27',
  TARJETA_DE_DEBITO = '28',
  TARJETA_DE_SERVICIOS = '29',
  POR_DEFINIR = '99',
}

export type FormaPagoType =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '08'
  | '12'
  | '13'
  | '14'
  | '15'
  | '17'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31'
  | '99';

export const FormaPagoList = [
  { label: 'Efectivo', value: '01' },
  { label: 'Cheque nominativo', value: '02' },
  { label: 'Transferencia electrónica de fondos', value: '03' },
  { label: 'Tarjeta de crédito', value: '04' },
  { label: 'Monedero electrónico', value: '05' },
  { label: 'Dinero electrónico', value: '06' },
  { label: 'Vales de despensa', value: '08' },
  { label: 'Dación en pago', value: '12' },
  { label: 'Pago por subrogación', value: '13' },
  { label: 'Pago por consignación', value: '14' },
  { label: 'Condonación', value: '15' },
  { label: 'Compensación', value: '17' },
  { label: 'Novación', value: '23' },
  { label: 'Confusión', value: '24' },
  { label: 'Remisión de deuda', value: '25' },
  { label: 'Prescripción o caducidad', value: '26' },
  { label: 'A satisfacción del acreedor', value: '27' },
  { label: 'Tarjeta de débito', value: '28' },
  { label: 'Tarjeta de servicios', value: '29' },
  { label: 'Por definir', value: '99' },
];

export enum ExportacionEnum {
  NoAplica = '01',
  Definitiva = '02',
  Temporal = '03',
}
export type ExportacionType = '01' | '02' | '03';
export const exportacion = [
  {
    descripcion: 'No aplica',
    value: '01',
  },
  {
    descripcion: 'Definitiva',
    value: '02',
  },
  {
    descripcion: 'Temporal',
    value: '03',
  },
];
