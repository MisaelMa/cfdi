import {
    XmlIne,
    XmlIneAttribute, XmlIneContabilidadAttribute,
    XmlIneEntidad,
    XmlIneEntidadAttribute,
} from '../../Interface/Complements/ine.interface';
import {ComplementsReturn} from '../../Interface';

/*
* https://www.sat.gob.mx/consulta/09695/genera-tus-facturas-con-el-complemento-del-ine-version-1.1
* */
export class Ine {
    private ine: XmlIne = {} as XmlIne;
    private xmlns: string = 'http://www.sat.gob.mx/ine';
    private xmlnskey: string = 'ine';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/ine',
        'http://www.sat.gob.mx/sitio_internet/cfd/ine/ine11.xsd',
    ];

    constructor(attributes: XmlIneAttribute) {
        this.ine._attributes = attributes;
    }

    async Entidad(attributes: XmlIneEntidadAttribute) {
        if (!this.ine['ine:Entidad']) {
            this.ine['ine:Entidad'] = {} as XmlIneEntidad;
        }
        this.ine['ine:Entidad']._attributes = attributes;
    }

    async Contabilidad(attributes: XmlIneContabilidadAttribute) {
        if (this.ine['ine:Entidad']) {
            this.ine['ine:Entidad']['ine:Contabilidad'] = {
                _attributes: attributes,
            };
        } else {
            throw new Error('agrega entidad primero');
        }
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'ine:INE',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.ine,
        };
    }
}
