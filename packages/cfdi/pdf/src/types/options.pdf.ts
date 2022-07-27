
export interface OptionsPdf {
    logo?: string | Logo;// base 64
    lugarExpedicion?: string;
}

export interface Logo {
    width: number | string;
    image: string
    height: number | string;
}