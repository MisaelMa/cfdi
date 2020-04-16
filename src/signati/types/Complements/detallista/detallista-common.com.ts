export interface XmlText {
    'detallista:text': XmlTextData[]
}

export interface XmlAdditionalInformation {
    'detallista:AdditionalInformation': XmlReferenceIdentification;
}

export interface XmlReferenceIdentification {
    'detallista:referenceIdentification': XmlRefId[];
}

export interface XmlReferenceDate {
    'detallista:ReferenceDate': XmlTextData[];
}

export interface XmlGln {
    'detallista:gln': XmlTextData[]
}

export interface XmlAlternatePartyIdentification {
    'detallista:alternatePartyIdentification': XmlAlternatePartyIdAttribute[]
}

export interface XmlNameAndAddress {
    'detallista:nameAndAddress': XmlNameAddress
}

export interface XmlNameAddress {
    'detallista:name': XmlTextData;
    'detallista:streetAddressOne': XmlTextData;
    'detallista:city': XmlTextData;
    'detallista:postalCode': XmlTextData;
}

export interface XmlSpecialServicesType {
    'detallista:specialServicesType': XmlSpecialServices[]
}

export interface XmlAmount {
    'detallista:Amount': XmlTextData[]
}


export enum SpeSerType {
    AA = 'AA',
    AJ = 'AJ',
    ADO = 'ADO',
    ADT = 'ADT',
    ADS = 'ADS',
    ABZ = 'ABZ',
    DA = 'DA',
    EAA = 'EAA',
    PI = 'PI',
    TAE = 'TAE',
    SAB = 'SAB',
    RAA = 'RAA',
    PAD = 'PAD',
    FG = 'FG',
    FA = 'FA',
    TD = 'TD',
    TS = 'TS',
    TX = 'TX',
    TZ = 'TZ',
    ZZZ = 'ZZZ',
    VAB = 'VAB',
    UM = 'UM',
    DI = 'DI',
    CAC = 'CAC',
    COD = 'COD',
    EAB = 'EAB',
    FC = 'FC',
    FI = 'FI',
    HD = 'HD',
    QD = 'QD',
}

export interface XmlSpecialServices {
    _text: SpeSerType
}

export interface XmlAlternatePartyIdAttribute {
    type: AlterPartyId
}

export enum AlterPartyId {
    TN = 'TN',
    SELLER_ASSIGNED_IDENTIFIER_FOR_A_PARTY = 'SELLER_ASSIGNED_IDENTIFIER_FOR_A_PARTY',
    IEPS_REFERENCE = 'IEPS_REFERENCE',
    VA = 'VA',
    IA = 'IA'
}

export interface XmlRefId extends XmlTextData { // detallista:referenceIdentification
    _attributes?: XmlRefIdAttributes
}

export interface XmlRefIdAttributes {
    type: XmlRefIdType;
}

export enum XmlRefIdType {
    AAE = 'AAE',
    CK = 'CK',
    ACE = 'ACE',
    ATZ = 'ATZ',
    DQ = 'DQ',
    IV = 'IV',
    ON = 'ON',
    AWR = 'AWR'
}

export interface XmlTextData {
    _text: string
}

export interface XmlOrderIdCom extends XmlReferenceIdentification, XmlReferenceDate {
}

export interface XmlDeliveryNote extends XmlReferenceIdentification, XmlReferenceDate {
}

export interface XmlShipTo extends XmlGln, XmlNameAndAddress {
}

export interface XmlInvoiceCreator extends XmlGln, XmlAlternatePartyIdentification, XmlNameAndAddress {
}

export interface XmlCustoms {
    'detallista:Customs': XmlCustomsProperti;
}

export interface XmlCustomsProperti extends XmlGln {

}

export interface XmlTotalAmount extends XmlAmount {
}

export interface XmlSeller extends XmlGln, XmlAlternatePartyIdentification {

}

export interface XmlTotalAllowanceCharge extends XmlSpecialServicesType, XmlAmount {
    _attributes: XmlTotalAllowChargeAttributes
}

export interface XmlTotalAllowChargeAttributes {
    allowanceOrChargeType: AllowanceOrChargeType
}

export enum AllowanceOrChargeType {
    ALLOWANCE = 'ALLOWANCE',
    CHARGE = 'CHARGE'
}

export interface XmlBuyer extends XmlGln {
    'detallista:contactInformation': XmlPersonOrDepartmentName
}

export interface XmlPersonOrDepartmentName {
    'detallista:personOrDepartmentName': XmlText[]
}

export interface XmlSpecialInstruction extends XmlText {
    _attributes: XmlSpeInsAttributes;
}

export interface XmlSpeInsAttributes {
    code: Code;
}

export enum Code {
    AAB = 'AAB',
    DUT = 'DUT',
    PUR = 'PUR',
    ZZZ = 'ZZZ',
}

export interface XmlReqForPayId {
    'detallista:entityType': XmlReqForPayIdEntityType[]
}

export interface XmlReqForPayIdEntityType {
    _text: EntityType
}

export enum EntityType {
    INVOICE = 'INVOICE',
    DEBIT_NOTE = 'DEBIT_NOTE',
    CREDIT_NOTE = 'CREDIT_NOTE',
    LEASE_RECEIPT = 'LEASE_RECEIPT',
    HONORARY_RECEIPT = 'HONORARY_RECEIPT',
    PARTIAL_INVOICE = 'PARTIAL_INVOICE',
    TRANSPORT_DOCUMENT = 'TRANSPORT_DOCUMENT',
    AUTO_INVOICE = 'AUTO_INVOICE',
}
