interface Currency {
    plural: string;
    singular: string;
    centPlural: string;
    centSingular: string;
}
export declare class NumeroALetras {
    private Unidades;
    private Decenas;
    private DecenasY;
    private Centenas;
    private Seccion;
    private Miles;
    private Millones;
    NumeroALetras(num: number, curr: Currency): string;
}
export {};
