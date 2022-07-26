import { XmlTextData } from '@cfdi/xml/src/types/Complements/detallista/detallista-common.com';

export interface XmlPaymentTerms {
    _attributes?: XmlPayTermsAttributes
    'detallista:netPayment': XmlNetPayment;
    'detallista:discountPayment': XmlDiscountPayment
}

export interface XmlDiscountPayment {
    _attributes: XmlDisPayAttributes;
    'detallista:percentage': XmlTextData[]
}

export interface XmlDisPayAttributes {
    discountType: DiscountType
}

export enum DiscountType {
    ALLOWANCE_BY_PAYMENT_ON_TIME = 'ALLOWANCE_BY_PAYMENT_ON_TIME',
    SANCTION = 'SANCTION'
}

export interface XmlPayTermsAttributes {
    paymentTermsEvent: PayTermsEvent;
    PaymentTermsRelationTime: PayTermsRelTime;
}

export enum PayTermsEvent {
    DATE_OF_INVOICE = 'DATE_OF_INVOICE',
    EFFECTIVE_DATE = 'EFFECTIVE_DATE'
}

export enum PayTermsRelTime {
    REFERENCE_AFTER = 'REFERENCE_AFTER'
}

export interface XmlNetPayment {
    _attributes: XmlNetPayAttributes
    'detallista:paymentTimePeriod': XmlPaymentTimePeriod[]
}

export interface XmlNetPayAttributes {
    netPaymentTermsType: NetPayTermsType
}

export enum NetPayTermsType {
    BASIC_NET = 'BASIC_NET',
    END_OF_MONTH = 'END_OF_MONTH',
    BASIC_DISCOUNT_OFFERED = 'BASIC_DISCOUNT_OFFERED'
}

export interface XmlPaymentTimePeriod {
    'detallista:timePeriodDue': XmlTimePeriodDue
}

export interface XmlTimePeriodDue {
    _attributes: XmlTimePerDueAttributes
    'detallista:value': XmlTextData;
}

export interface XmlTimePerDueAttributes {
    timePeriod: TimePeriod
}

export enum TimePeriod {
    DAYS = 'DAYS'
}
