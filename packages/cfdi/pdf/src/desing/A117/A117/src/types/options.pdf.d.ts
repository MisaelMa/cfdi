export interface OptionsPdf {
    logo?: string | Logo;
    lugarExpedicion?: string;
}
export interface Logo {
    width: number | string;
    image: string;
    height: number | string;
}
