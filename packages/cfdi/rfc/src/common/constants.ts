export const RFC_REGEXP = /^([A-ZÑ\x26]{3,4})([0-9]{6})([A-Z0-9]{3})$/;
export const INVALID_FORMAT_ERROR = 'INVALID_FORMAT';
export const INVALID_DATE_ERROR = 'INVALID_DATE';
export const INVALID_VERIFICATION_DIGIT_ERROR = 'INVALID_VERIFICATION_DIGIT';
export const FORBIDDEN_WORD_ERROR = 'FORBIDDEN_WORD';
export const RFC_TYPE_FOR_LENGTH: { [key: string]: string } = {
  '12': 'company',
  '13': 'person'
};
export const SPECIAL_CASES: { [key: string]: string } = {
  'XEXX010101000': 'foreign',
  'XAXX010101000': 'generic'
};
export const FORBIDDEN_WORD = [
  "BUEI",
  "BUEY",
  "CACA",
  "CACO",
  "CAGA",
  "CAGO",
  "CAKA",
  "CAKO",
  "COGE",
  "COJA",
  "COJE",
  "COJI",
  "COJO",
  "CULO",
  "FETO",
  "GUEY",
  "JOTO",
  "KACA",
  "KACO",
  "KAGA",
  "KAGO",
  "KOGE",
  "KOJO",
  "KAKA",
  "KULO",
  "MAME",
  "MAMO",
  "MEAR",
  "MEAS",
  "MEON",
  "MION",
  "MOCO",
  "MULA",
  "PEDA",
  "PEDO",
  "PENE",
  "PUTA",
  "PUTO",
  "QULO",
  "RATA",
  "RUIN"
]
