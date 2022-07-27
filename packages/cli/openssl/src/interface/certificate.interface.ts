/* tslint:disable */
export interface Cer {
    cer: string;
    nocer: string;
}

export interface AnyKey {
    [key: string]: any
}

export interface OptionsSsl {
    keyfile: any;
    pass: string;
}

export interface Certificate {
    certificate: string;
    cerPem: string
}
