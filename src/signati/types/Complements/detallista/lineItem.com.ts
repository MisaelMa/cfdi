import { XmlAllowanceCharge } from './allowanceCharge.com';
import { XmlAdditionalInformation, XmlCustoms } from './detallista-common.com';

export interface XmlLineItem extends XmlAllowanceCharge, XmlCustoms, XmlAdditionalInformation {
    _attributes: XmlLineItemAttributes;
    'tradeItemIdentification': string;
    'alternateTradeItemIdentification': string;
    'tradeItemDescriptionInformation': string;
    'invoicedQuantity': string;
    'aditionalQuantity': string;
    'grossPrice': string;
    'netPrice': string;
    'LogisticUnits': string;
    'palletInformation': string;
    'extendedAttributes': string;
    'tradeItemTaxInformation': string;
    'totalLineAmount': string;


}

export interface XmlLineItemAttributes {
    type: string;
    number: string;
}
