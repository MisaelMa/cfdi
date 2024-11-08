import {
  XmlAdditionalInformation,
  XmlAmount,
  XmlCustoms,
  XmlTextData,
} from './detallista-common.com';
import { XmlAllowanceCharge } from './allowanceCharge.com';

export interface XmlLineItem
  extends XmlAllowanceCharge,
  XmlCustoms,
  XmlAdditionalInformation {
  _attributes: XmlLineItemAttributes;
  'detallista:tradeItemIdentification': XmlGtin;
  'detallista:alternateTradeItemIdentification': XmlAlternateTradeItemId;
  'detallista:tradeItemDescriptionInformation': XmlTradeItemDescriptionInformation;
  'detallista:invoicedQuantity': XmlTextData[];
  'detallista:aditionalQuantity': XmlAditionalQuantity;
  'detallista:grossPrice': XmlAmount;
  'detallista:netPrice': XmlAmount;
  'detallista:LogisticUnits': XmlLogisticUnits;
  'detallista:palletInformation': XmlPalletInformation;
  'detallista:extendedAttributes': XmlLotNumber;
  'detallista:tradeItemTaxInformation': XmlTradeItemTaxInformation;
  'detallista:totalLineAmount': XmlTotalLineAmount;
}

export interface XmlTotalLineAmount {
  'detallista:grossAmount': XmlAmount;
  'detallista:netAmount': XmlAmount;
}

export interface XmlTradeItemTaxInformation {
  'detallista:taxTypeDescription': taxTypeDescription;
  'detallista:referenceNumber': XmlTextData;
  'detallista:taxCategory': XmlTaxCategory;
  'detallista:tradeItemTaxAmount': XmlTradeItemTaxAmount;
}

export interface XmlTradeItemTaxAmount {
  'detallista:taxPercentage': XmlTextData;
  'detallista:taxAmount': XmlTextData;
}

export interface XmlTaxCategory {
  _text: TypeTaxCategory;
}

export enum TypeTaxCategory {
  TRANSFERIDO = 'TRANSFERIDO',
  RETENIDO = 'RETENIDO',
}

export interface taxTypeDescription {
  _text: TypeDescription;
}

export enum TypeDescription {
  GST = 'GST',
  VAT = 'VAT',
  LAC = 'LAC',
  AAA = 'AAA',
  ADD = 'ADD',
  FRE = 'FRE',
  LOC = 'LOC',
  STT = 'STT',
  OTH = 'OTH',
}

export interface XmlLotNumber {
  'detallista:lotNumber': XmlLotNumberProperty;
}

export interface XmlLotNumberProperty extends XmlTextData {
  _attributes: XmlLotNumberAttributes;
}

export interface XmlLotNumberAttributes {
  productionDate: string; // date validad
}

export interface XmlPalletInformation {
  'detallista:palletQuantity': XmlTextData[];
  'detallista:description': XmlDescription;
  'detallista:transport': XmlMethodOfPayment;
}

export interface XmlMethodOfPayment {
  'detallista:methodOfPayment': XmlTextData[];
}

export interface XmlDescription extends XmlTextData {
  _attributes: XmlDescriptionAttributes;
}

export interface XmlDescriptionAttributes {
  type: TypeDescription;
}

export enum TypeDescription {
  EXCHANGE_PALLETS = 'EXCHANGE_PALLETS',
  RETURN_PALLETS = 'RETURN_PALLETS',
  PALLET_80x100 = 'PALLET_80x100',
  CASE = 'CASE',
  BOX = 'BOX',
}

export interface XmlLineItemAttributes {
  type: string;
  number: string;
}

export interface XmlGtin {
  'detallista:gtin': XmlTextData[];
}

export interface XmlAlternateTradeItemId extends XmlTextData {
  _attributes: XmlAlterTradeItemIdAttributes;
}

export interface XmlAlterTradeItemIdAttributes {
  type: string;
}

export interface XmlTradeItemDescriptionInformation {
  _attributes: XmlTraItemDesInfAttributes;
  'detallista:longText': XmlTextData;
}

export interface XmlTraItemDesInfAttributes {
  language: Lang;
}

export enum Lang {
  ES = 'ES',
  EN = 'EN',
}

export interface XmlAditionalQuantity extends XmlTextData {
  _attributes: XmlAditQuanAttributes;
}

export interface XmlAditQuanAttributes {
  QuantityType: QuantityType;
}

export enum QuantityType {
  NUM_CONSUMER_UNITS = 'NUM_CONSUMER_UNITS',
  FREE_GOODS = 'FREE_GOODS',
}

export interface XmlLogisticUnits {
  'detallista:serialShippingContainerCode': XmlSerialShippingContainerCode;
}

export interface XmlSerialShippingContainerCode extends XmlTextData {
  _attributes: XmlSerialShipContCodeAttribute;
}

export interface XmlSerialShipContCodeAttribute {
  type: string;
}
