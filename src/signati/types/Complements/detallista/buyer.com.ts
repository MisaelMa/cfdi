import { XmlGln, XmlText } from './detallista-common.com';

export interface XmlBuyer extends XmlGln {
    'detallista:contactInformation': XmlPersonOrDepartmentName
}

export interface XmlPersonOrDepartmentName {
    'detallista:personOrDepartmentName': XmlText[]
}
