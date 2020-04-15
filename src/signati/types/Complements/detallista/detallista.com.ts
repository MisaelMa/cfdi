import { XmlReqForPayId } from './reqForPayId.com';
import {
    XmlBuyer,
    XmlCustoms,
    XmlDeliveryNote, XmlInvoiceCreator,
    XmlOrderIdCom,
    XmlReferenceIdentification, XmlSeller,
    XmlShipTo, XmlSpecialInstruction, XmlTotalAllowanceCharge, XmlTotalAmount
} from './detallista-common.com';
import { XmlCurrency } from './currency.com';
import { XmlPaymentTerms } from './paymentTerms.com';
import { XmlAllowanceCharge } from './allowanceCharge.com';

export interface XmlDetaAttributes {
    type: string;
    contentVersion: string;
    documentStructureVersion: string
    documentStatus: string;
}

export interface XmlDetallista {
    _attributes: XmlDetaAttributes
    'detallista:requestForPaymentIdentification': XmlReqForPayId;
    'detallista:specialInstruction': XmlSpecialInstruction;
    'detallista:orderIdentification': XmlOrderIdCom;
    'detallista:AdditionalInformation': XmlReferenceIdentification;
    'detallista:DeliveryNote': XmlDeliveryNote;
    'detallista:buyer': XmlBuyer;
    'detallista:seller': XmlSeller;
    'detallista:shipTo': XmlShipTo;
    'detallista:InvoiceCreator': XmlInvoiceCreator;
    'detallista:Customs': XmlCustoms;
    'detallista:currency': XmlCurrency;
    'detallista:paymentTerms': XmlPaymentTerms;
    'detallista:shipmentDetail'?: XmlShipmentDetail;
    'detallista:allowanceCharge': XmlAllowanceCharge;
    'detallista:lineItem': any;
    'detallista:totalAmount': XmlTotalAmount;
    'detallista:TotalAllowanceCharge': XmlTotalAllowanceCharge;
}

export interface XmlShipmentDetail {
}
