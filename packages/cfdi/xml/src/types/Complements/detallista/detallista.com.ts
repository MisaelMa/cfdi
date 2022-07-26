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
} from '@cfdi/xml/src/types/Complements/detallista/detallista-common.com';
import { XmlCurrency } from '@cfdi/xml/src/types/Complements/detallista/currency.com';
import { XmlPaymentTerms } from '@cfdi/xml/src/types/Complements/detallista/paymentTerms.com';
import { XmlAllowanceCharge } from '@cfdi/xml/src/types/Complements/detallista/allowanceCharge.com';
import { XmlLineItem } from '@cfdi/xml/src/types/Complements/detallista/lineItem.com';

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
