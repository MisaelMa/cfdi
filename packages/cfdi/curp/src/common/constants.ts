export const REGEX_CURP = /[A-Z][AEIXOU][A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM](AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z][0-9]/;
export const INVALID_FORMAT_ERROR = 'INVALID_FORMAT';
export const INVALID_DATE_ERROR = 'INVALID_DATE';
export const INVALID_STATE_ERROR = 'INVALID_STATE';
export const INVALID_CHECK_DIGIT_ERROR = 'INVALID_CHECK_DIGIT';
export const FORBIDDEN_WORD_ERROR = 'FORBIDDEN_WORD';
export const birthdayFormatFromRenapo = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/g;
export const birthday = '$3-$2-$1T12:00:00.000Z';

export const FORBIDDEN_WORDS = [
  "BACA",
  "BAKA",
  "BUEI",
  "BUEY",
  "CACA",
  "CACO",
  "CAGA",
  "CAGO",
  "CAKA",
  "CAKO",
  "COGE",
  "COGI",
  "COJA",
  "COJE",
  "COJI",
  "COJO",
  "COLA",
  "CULO",
  "FALO",
  "FETO",
  "GETA",
  "GUEI",
  "GUEY",
  "JETA",
  "JOTO",
  "KACA",
  "KACO",
  "KAGA",
  "KAGO",
  "KAKA",
  "KAKO",
  "KOGE",
  "KOGI",
  "KOJA",
  "KOJE",
  "KOJI",
  "KOJO",
  "KOLA",
  "KULO",
  "LILO",
  "LOCA",
  "LOCO",
  "LOKA",
  "LOKO",
  "MAME",
  "MAMO",
  "MEAR",
  "MEAS",
  "MEON",
  "MIAR",
  "MION",
  "MOCO",
  "MOKO",
  "MULA",
  "MULO",
  "NACA",
  "NACO",
  "PEDA",
  "PEDO",
  "PENE",
  "PIPI",
  "PITO",
  "POPO",
  "PUTA",
  "PUTO",
  "QULO",
  "RATA",
  "ROBA",
  "ROBE",
  "ROBO",
  "RUIN",
  "SENO",
  "TETA",
  "VACA",
  "VAGA",
  "VAGO",
  "VAKA",
  "VUEI",
  "VUEY",
  "WUEI",
  "WUEY"
]

export const STATE = [
  'AS', // AGUASCALIENTES
  'BC', // BAJA CALIFORNIA
  'BS', // BAJA CALIFORNIA SUR
  'CC', // CAMPECHE
  'CL', // COAHUILA
  'CM', // COLIMA
  'CS', // CHIAPAS
  'CH', // CHIHUAHUA
  'DF', // DISTRITO FEDERAL
  'DG', // DURANGO
  'GT', // GUANAJUATO
  'GR', // GUERRERO
  'HG', // HIDALGO
  'JC', // JALISCO
  'MC', // MÉXICO
  'MN', // MICHOACÁN
  'MS', // MORELOS
  'NT', // NAYARIT
  'NL', // NUEVO LE”N
  'OC', // OAXACA
  'PL', // PUEBLA
  'QT', // QUERÉTARO
  'QR', // QUINTANA ROO
  'SP', // SAN LUIS POTOSÍ
  'SL', // SINALOA
  'SR', // SONORA
  'TC', // TABASCO
  'TS', // TAMAULIPAS
  'TL', // TLAXCALA
  'VZ', // VERACRUZ
  'YN', // YUCATÁN
  'ZS', // ZACATECAS
  'NE', // NACIDO EN EL EXTRANJERO
];
