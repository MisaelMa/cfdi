import { XmlAllowanceCharge } from './allowanceCharge.com';
import { XmlLineItem } from './lineItem.com';
import { XmlPaymentTerms } from './paymentTerms.com';
import { XmlCurrency } from './currency.com';
import {
  XmlAdditionalInformation,
  XmlBuyer,
  XmlCustoms,
  XmlDeliveryNote,
  XmlInvoiceCreator,
  XmlOrderIdCom,
  XmlReqForPayId,
  XmlSeller,
  XmlShipTo,
  XmlSpecialInstruction,
  XmlTotalAllowanceCharge,
  XmlTotalAmount,
} from './detallista-common.com';

export interface XmlDetaAttributes {
  type: string;
  contentVersion: string;
  documentStructureVersion: string;
  documentStatus: string;
}

export interface XmlDetallista
  extends XmlCustoms,
  XmlAdditionalInformation,
  XmlAllowanceCharge {
  _attributes: XmlDetaAttributes;
  'detallista:requestForPaymentIdentification': XmlReqForPayId;
  'detallista:specialInstruction': XmlSpecialInstruction;
  'detallista:orderIdentification': XmlOrderIdCom;
  'detallista:DeliveryNote': XmlDeliveryNote;
  'detallista:buyer': XmlBuyer;
  'detallista:seller': XmlSeller;
  'detallista:shipTo': XmlShipTo;
  'detallista:InvoiceCreator': XmlInvoiceCreator;
  'detallista:currency': XmlCurrency;
  'detallista:paymentTerms': XmlPaymentTerms;
  'detallista:shipmentDetail'?: XmlShipmentDetail;
  'detallista:lineItem': XmlLineItem;
  'detallista:totalAmount': XmlTotalAmount;
  'detallista:TotalAllowanceCharge': XmlTotalAllowanceCharge;
}

export interface XmlShipmentDetail { }
