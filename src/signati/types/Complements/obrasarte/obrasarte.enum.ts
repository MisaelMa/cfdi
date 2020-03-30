export enum TiposDeBien {
    Pinturas = '01',
    Grabados = '02',
    Esculturas = '03',
    Otros = '04'
}

export const TiposDeBienList = [
    {value: '01', label: 'Pinturas'},
    {value: '02', label: 'Grabados'},
    {value: '03', label: 'Esculturas'},
    {value: '04', label: 'Otros'}
]

export enum TituloAdquirido {
    Compra = '01',
    Donacion = '02',
    Herencia = '03',
    Legado = '04',
    Otros = '05'
}

export const TituloAdquiridoList = [
    {value: '01', label: 'Compra'},
    {value: '02', label: 'Donacion'},
    {value: '03', label: 'Herencia'},
    {value: '04', label: 'Legado'},
    {value: '05', label: 'Otros'}
]

export enum CaracteristicaObraPieza {
    Firmadas = '01',
    Fechadas = '02',
    Enmarcadas = '03',
    Armelladas = '04',
    Alambrados = '05',
    NumeroDeSerie = '06',
    DosMasCaracteristicasAnteriores = '07'
}

export const CaracteristicaObraPiezaList = [
    {value: '01', label: 'Firmadas'},
    {value: '02', label: 'Fechadas'},
    {value: '03', label: 'Enmarcadas'},
    {value: '04', label: 'Armelladas'},
    {value: '05', label: 'Alambrados'},
    {value: '06', label: 'NumeroDeSerie'},
    {value: '07', label: 'Dos o Mas de las caracteristicas anterioes'}
]
