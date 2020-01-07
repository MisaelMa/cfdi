import {Record} from 'immutable';

type EmisorProps = { rfc: string; nombre: string; regimenFiscal: string; };
type Receptor = { rfc: string; nombre: string; usoCFDI: string; };
const defaultValues: EmisorProps = { rfc: '', nombre: '', regimenFiscal: '' };
const EmisorRecord = Record<EmisorProps>(defaultValues);