import { XmlText } from './detallista-common.com';

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

