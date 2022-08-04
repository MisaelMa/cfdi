import { TFontDictionary } from "pdfmake/interfaces";

export interface OptionsPdf {
  logo?: string | Logo;// base 64
  lugarExpedicion?: string;
  fonts?: TFontDictionary
}

export interface Logo {
  width: number | string;
  image: string
  height: number | string;
}
