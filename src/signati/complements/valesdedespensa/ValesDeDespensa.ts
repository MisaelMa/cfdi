import {
    XmlValesAttributes, XmlValesConceptAttributes,
    XmlValesDeDespensa,
} from '../../types/Complements/valesdedespensa/valesdedespensa.com';
import { ComplementsReturn } from '../../types';

export class ValesDeDespensa {
    private vale: XmlValesDeDespensa = {} as XmlValesDeDespensa;
    private xmlns: string = 'http://www.sat.gob.mx/valesdedespensa';
    private xmlnskey: string = 'valesdedespensa';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/valesdedespensa',
        'http://www.sat.gob.mx/sitio_internet/cfd/valesdedespensa/valesdedespensa.xsd',
    ];

    constructor(data: XmlValesAttributes) {
        this.vale = {
            _attributes: data
        } as XmlValesDeDespensa
    }

    public concepto(data: XmlValesConceptAttributes) {
        if (!this.vale['valesdedespensa:Conceptos']) {
            this.vale['valesdedespensa:Conceptos'] = {
                'valesdedespensa:Concepto': []
            }
        }
        this.vale['valesdedespensa:Conceptos']['valesdedespensa:Concepto'].push({
            _attributes: data
        })
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'valesdedespensa:ValesDeDespensa',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.vale,
        };
    }
}
