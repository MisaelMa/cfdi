import { XmlReqForPayId } from './reqForPayId.com';
import { XmlSpecialInstruction } from './specialInstruction.com';
import { XmlDeliveryNote, XmlOrderIdCom, XmlReferenceIdentification } from './detallista-common.com';
import { XmlBuyer } from './buyer.com';
import { XmlSeller } from './seller.com';

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
    'detallista:shipTo': any;
    'detallista:InvoiceCreator': any;
    'detallista:Customs': any;
    'detallista:currency': any;
    'detallista:paymentTerms': any;
    'detallista:shipmentDetail': any;
    'detallista:allowanceCharge': any;
    'detallista:lineItem': any;
    'detallista:totalAmount': any;
    'detallista:TotalAllowanceCharge': any;
}
