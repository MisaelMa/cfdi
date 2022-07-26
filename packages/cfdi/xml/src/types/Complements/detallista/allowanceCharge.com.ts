import { XmlSpecialServicesType, XmlTextData } from '@cfdi/xml/src/types/Complements/detallista/detallista-common.com';

export interface XmlAllowanceCharge {
  'detallista:allowanceCharge': XmlMonetaryAmountOrPercentage;
}

export interface XmlMonetaryAmountOrPercentage extends XmlSpecialServicesType {
  _attributes: XmlAllowChargeAttributes;
  'detallista:monetaryAmountOrPercentage': XmlRate;
}

export interface XmlAllowChargeAttributes {
  allowanceChargeType: AllowanceChargeType;
  settlementType: SettlementType;
  sequenceNumber: string;
}

export enum AllowanceChargeType {
  ALLOWANCE_GLOBAL = 'ALLOWANCE_GLOBAL',
  CHARGE_GLOBAL = 'CHARGE_GLOBAL',
}

export enum SettlementType {
  BILL_BACK = 'BILL_BACK',
  OFF_INVOICE = 'OFF_INVOICE',
}

export interface XmlRate {
  'detallista:rate': XmlPercentage;
}

export interface XmlPercentage {
  _attributes: XmlRateAttributes;
  'detallista:percentage': XmlTextData[];
}

export interface XmlRateAttributes {
  base: Base;
}

export enum Base {
  INVOICE_VALUE = 'INVOICE_VALUE',
}
