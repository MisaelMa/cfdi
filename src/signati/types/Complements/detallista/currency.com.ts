import { XmlTextData } from './detallista-common.com';

export interface XmlCurrency {
    _attributes: XmlCurrencyAttributes;
    'detallista:currencyFunction': XmlCurrencyFunction;
    'detallista:rateOfChange': XmlTextData;
}

export interface XmlCurrencyAttributes {
    currencyISOCode: ISOCode;
}

export interface XmlCurrencyFunction {
    _text: CuFun
}

export enum CuFun {
    BILLING_CURRENCY = 'BILLING_CURRENCY',
    PRICE_CURRENCY = 'PRICE_CURRENCY',
    PAYMENT_CURRENCY = 'PAYMENT_CURRENCY'
}

export enum ISOCode {
    MXN = 'MXN',
    XEU = 'XEU',
    USD = 'USD'
}
