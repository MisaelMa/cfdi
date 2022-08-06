import { FORBIDDEN_WORD, RFC_REGEXP, RFC_TYPE_FOR_LENGTH, SPECIAL_CASES } from "./common/constants";
import { checkDigit } from "./utils/checkDigit";

export const getType = (rfc: string) => SPECIAL_CASES[rfc] || RFC_TYPE_FOR_LENGTH[rfc.length];
export const hasForbiddenWords = (rfc: string) => {
  const prefix = (rfc || '').slice(0, 4);
  return FORBIDDEN_WORD.includes(prefix);
};
const parseInput = (input: string) => {
  return String(input)
    .trim()
    .toUpperCase()
    .replace(/[^0-9A-ZÑ\x26]/g, '');
};

const validateDate = (rfc: string) => {
  const dateStr = rfc.slice(0, -3).slice(-6);
  const year = dateStr.slice(0, 2);
  const month = dateStr.slice(2, 4);
  const day = dateStr.slice(4, 6);
  const date = new Date(`20${year}-${month}-${day}`);
  return !isNaN(date.getTime());
};

const validateVerificationDigit = (rfc: string) => {
  const digit = rfc.slice(-1);
  const expected = checkDigit(rfc);
  return expected === digit;
};
export const validate = (input: string) => {
  const curp = parseInput(input)
  const result = {
    isValid: false,
    type: "",
    rfc: curp || ''
  };
  const hasValidFormat = RFC_REGEXP.test(curp);
  if (hasValidFormat && validateDate(curp) && validateVerificationDigit(curp) && !hasForbiddenWords(curp)) {
    result.isValid = true
    result.type = getType(curp)
  }
  return result
}
