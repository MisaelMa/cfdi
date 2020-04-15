import { XmlSpecialServicesType, XmlTextData } from './detallista-common.com';

export interface XmlAllowanceCharge extends XmlSpecialServicesType {
    _attributes: XmlAllowChargeAttributes;
    'detallista:monetaryAmountOrPercentage': XmlMonetaryAmountOrPercentage;
}

export interface XmlAllowChargeAttributes {
    allowanceChargeType: AllowanceChargeType;
    settlementType: SettlementType;
    sequenceNumber: string;
}

export enum AllowanceChargeType {
    ALLOWANCE_GLOBAL = 'ALLOWANCE_GLOBAL',
    CHARGE_GLOBAL = 'CHARGE_GLOBAL'
}

export enum SettlementType {
    BILL_BACK = 'BILL_BACK',
    OFF_INVOICE = 'OFF_INVOICE'
}


export interface XmlMonetaryAmountOrPercentage {
    'detallista:rate': XmlRate
}

export interface XmlRate {
    _attributes: XmlRateAttributes
    'detallista:percentage': XmlTextData[]
}

export interface XmlRateAttributes {
    base: Base;
}

export enum Base {
    INVOICE_VALUE = 'INVOICE_VALUE'
}
