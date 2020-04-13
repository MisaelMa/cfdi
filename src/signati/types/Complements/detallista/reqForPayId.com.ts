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
