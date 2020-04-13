export interface XmlText {
    'detallista:text': XmlTextData[]
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
