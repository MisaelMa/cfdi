export enum UseCFDI {
    ADQUISICION_MERCANCIAS = 'G01',
    DEVOLUCIONES_DESCUENTOS_BONIFICACIONES = 'G02',
    GASTOS_EN_GENERAL = 'G03',
    CONSTRUCCIONES = 'I01',
    MOBILIARIO_Y_EQUIPO_DE_OFICINA = 'I02',
    EQUIPO_DE_TRANSPORTE = 'I03',
    EQUIPO_DE_COMPUTO = 'I04',
    DADOS_TROQUELES_HERRAMENTAL = 'I05',
    COMUNICACIONES_TELEFONICAS = 'I06',
    COMUNICACIONES_SATELITALES = 'I07',
    OTRA_MAQUINARIA = 'I08',
    HONORARIOS_MEDICOS = 'D01',
    GASTOS_MEDICOS_POR_INCAPACIDAD = 'D02',
    GASTOS_FUNERALES = 'D03',
    DONATIVOS = 'D04',
    INTERESES_POR_CREDITOS_HIPOTECARIOS = 'D05',
    APORTACIONES_VOLUNTARIAS_SAR = 'D06',
    PRIMA_SEGUROS_GASTOS_MEDICOS = 'D07',
    GASTOS_TRANSPORTACION_ESCOLAR = 'D08',
    CUENTAS_AHORRO_PENSIONES = 'D09',
    SERVICIOS_EDUCATIVOS = 'D10',
    POR_DEFINIR = 'P01'
};

export type UseCFDIType = 'G01' | 'G02' | 'G03' | 'I01' | 'I02' | 'I03' | 'I04' | 'I05' | 'I06' |
    'I07' | 'I08' | 'D01' | 'D02' | 'D03' | 'D04' | 'D05' | 'D06' | 'D07' |
    'D08' | 'D09' | 'D10' | 'P01'

export const usoCFDIList = [
    {
        value: 'G01',
        label: 'Adquisición de mercancias'
    },
    {
        value: 'G02',
        label: 'Devoluciones, descuentos o bonificaciones'
    },
    {
        value: 'G03',
        label: 'Gastos en general'
    },
    {
        value: 'I01',
        label: 'Construcciones'
    },
    {
        value: 'I02',
        label: 'Mobilario y equipo de oficina por inversiones'
    },
    {
        value: 'I03',
        label: 'Equipo de transporte'
    },
    {
        value: 'I04',
        label: 'Equipo de computo y accesorios'
    },
    {
        value: 'I05',
        label: 'Dados, troqueles, moldes, matrices y herramental'
    },
    {
        value: 'I06',
        label: 'Comunicaciones telefónicas'
    },
    {
        value: 'I07',
        label: 'Comunicaciones satelitales'
    },
    {
        value: 'I08',
        label: 'Otra maquinaria y equipo'
    },
    {
        value: 'D01',
        label: 'Honorarios médicos, dentales y gastos hospitalarios.'
    },
    {
        value: 'D02',
        label: 'Gastos médicos por incapacidad o discapacidad'
    },
    {
        value: 'D03',
        label: 'Gastos funerales.'
    },
    {
        value: 'D04',
        label: 'Donativos.'
    },
    {
        value: 'D05',
        label: 'Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación).'
    },
    {
        value: 'D06',
        label: 'Aportaciones voluntarias al SAR.'
    },
    {
        value: 'D07',
        label: 'Primas por seguros de gastos médicos.'
    },
    {
        value: 'D08',
        label: 'Gastos de transportación escolar obligatoria.'
    },
    {
        value: 'D09',
        label: 'Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones.'
    },
    {
        value: 'D10',
        label: 'Pagos por servicios educativos (colegiaturas)'
    },
    {
        value: 'P01',
        label: 'Por definir'
    }
]







