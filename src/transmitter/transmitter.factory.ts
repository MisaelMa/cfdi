import { Record } from 'immutable'

// Estructura de tipos

/**
 * Tipo de objecto de un Emisor en la factura, Español
 */
export type PropsEmisor = { rfc: string; nombre: string; regimenFiscal: string; };

/**
 * Tipo de objecto de un Emisor en la factura, Inglés
 */
export type PropsTransmitter = { rfc: string; name: string; taxRegime: string; };

/**
 * Tipo de objeto para un Receptor en la factura, Español
 */
type PropsReceptor = { rfc: string; nombre: string; usoCFDI: string; };

/**
 * Tipo de objeto para un Receptor en la factura, Inglés
 */
type PropsReceiver = { rfc: string; name: string; useCFDI: string };

// Valores por Default

/**
 * Valores por default de un emisor, Español
 */
const defaultValuesEmisor: PropsEmisor = { rfc: '', nombre: '', regimenFiscal: '' };

/**
 * Valores por default de un emisor, Inglés
 */
const defaultValuesTransmitter: PropsTransmitter = { rfc: '', name: '', taxRegime: '' };

// Funciones Constructoras


/**
 * Función constructora del objeto emisor, Español
 * @param defaultValues
 * @constructor
 */
export const FactoryRecordEmisor = (defaultValues: PropsEmisor = defaultValuesEmisor) => Record<PropsEmisor>(defaultValues);

/**
 * Función constructora del objeto emisor, Inglés
 * @param defaultValues
 * @constructor
 */
export const FactoryRecordTransmitter = (defaultValues: PropsTransmitter = defaultValuesTransmitter) => Record<PropsTransmitter>(defaultValues);

export function FactoryRecordBuildTransmitter<T>(defaultValues: T) {
    return Record<T>(defaultValues);
}
