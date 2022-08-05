/* eslint sort-keys: 0 */
export const RegimenFiscalList = [
  {
    descripcion: 'General de Ley Personas Morales',
    endingDate: '',
    personType: {
      fisica: 'No',
      moral: 'Sí',
    },
    startDate: '12/11/2016',
    value: 601,
  },
  {
    descripcion: 'Personas Morales con Fines no Lucrativos',
    endingDate: '',
    personType: {
      fisica: 'No',
      moral: 'Sí',
    },
    startDate: '12/11/2016',
    value: 603,
  },
  {
    value: 605,
    descripcion: 'Sueldos y Salarios e Ingresos Asimilados a Salarios',
    personType: {
      fisica: 'Sí',
      moral: 'No',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 606,
    descripcion: 'Arrendamiento',
    personType: {
      fisica: 'Sí',
      moral: 'No',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 607,
    descripcion: 'Régimen de Enajenación o Adquisición de Bienes',
    personType: {
      fisica: 'No',
      moral: 'Sí',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 608,
    descripcion: 'Demás ingresos',
    personType: {
      fisica: 'Sí',
      moral: 'No',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 609,
    descripcion: 'Consolidación',
    personType: {
      fisica: 'No',
      moral: 'Sí',
    },
    startDate: '12/11/2016',
    endingDate: '31/12/2019',
  },
  {
    value: 610,
    descripcion:
      'Residentes en el Extranjero sin Establecimiento Permanente en México',
    personType: {
      fisica: 'Sí',
      moral: 'Sí',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 611,
    descripcion: 'Ingresos por Dividendos (socios y accionistas)',
    personType: {
      fisica: 'Sí',
      moral: 'No',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 612,
    descripcion:
      'Personas Físicas con Actividades Empresariales y Profesionales',
    personType: {
      fisica: 'Sí',
      moral: 'No',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 614,
    descripcion: 'Ingresos por intereses',
    personType: {
      fisica: 'Sí',
      moral: 'No',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 615,
    descripcion: 'Régimen de los ingresos por obtención de premios',
    personType: {
      fisica: 'Sí',
      moral: 'No',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 616,
    descripcion: 'Sin obligaciones fiscales',
    personType: {
      fisica: 'Sí',
      moral: 'No',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 620,
    descripcion:
      'Sociedades Cooperativas de Producción que optan por diferir sus ingresos',
    personType: {
      fisica: 'No',
      moral: 'Sí',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 621,
    descripcion: 'Incorporación Fiscal',
    personType: {
      fisica: 'Sí',
      moral: 'No',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 622,
    descripcion: 'Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras',
    personType: {
      fisica: 'Sí',
      moral: 'Sí',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 623,
    descripcion: 'Opcional para Grupos de Sociedades',
    personType: {
      fisica: 'No',
      moral: 'Sí',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 624,
    descripcion: 'Coordinados',
    personType: {
      fisica: 'No',
      moral: 'Sí',
    },
    startDate: '12/11/2016',
    endingDate: '',
  },
  {
    value: 625,
    descripcion:
      'Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas',
    personType: {
      fisica: 'Sí',
      moral: 'No',
    },
    startDate: '01/06/2020',
    endingDate: '',
  },
  {
    value: 628,
    descripcion: 'Hidrocarburos',
    personType: {
      fisica: 'No',
      moral: 'Sí',
    },
    startDate: '01/01/2024',
    endingDate: '',
  },
  {
    value: 629,
    descripcion:
      'De los Regímenes Fiscales Preferentes y de las Empresas Multinacionales',
    personType: {
      fisica: 'Sí',
      moral: 'No',
    },
    startDate: '01/01/2024',
    endingDate: '',
  },
  {
    value: 630,
    descripcion: 'Enajenación de acciones en bolsa de valores',
    personType: {
      fisica: 'Sí',
      moral: 'No',
    },
    startDate: '01/01/2024',
    endingDate: '',
  },
];
export type RegimenFiscalType =
  | '601'
  | '603'
  | '605'
  | '606'
  | '607'
  | '608'
  | '609'
  | '610'
  | '611'
  | '612'
  | '614'
  | '615'
  | '616'
  | '620'
  | '621'
  | '622'
  | '623'
  | '624'
  | '625'
  | '628'
  | '629'
  | '630';
