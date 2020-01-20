import {XmlConceptoAttributes, XmlConceptoProperties} from '../Interface/Tags/concepts.interface';
import {Impuestos} from './Impuestos';
import {XmlTranRentAttributesProperties} from '../Interface/Tags/impuestos.interface';
import {
    ComlementTypeConcept,
    ComplementProperties,
    ComplementsReturn,
    XmlComplementsConcepts
} from '../Interface/Tags/complements.interface';

export class Concepts {

    private conceptComplemnets: any = [
        {
            key: 'aerolineas:Aerolineas',
            xmlns: 'http://www.sat.gob.mx/terceros',
            xmlnskey: 'terceros',
            schemaLocation: ['http://www.sat.gob.mx/terceros',
                'http://www.sat.gob.mx/sitio_internet/cfd/terceros/terceros11.xsd'],
        },
        {
            key: 'ventavehiculos:VentaVehiculos',
            xmlns: 'http://www.sat.gob.mx/ventavehiculos',
            xmlnskey: 'ventavehiculos',
            schemaLocation: ['http://www.sat.gob.mx/ventavehiculos',
                'http://www.sat.gob.mx/sitio_internet/cfd/ventavehiculos/ventavehiculos11.xsd'],
        },

    ];
    private existComplemnt: boolean = false;
    private complementProperties: ComplementProperties = {} as ComplementProperties;
    private concepto: XmlConceptoProperties = {} as XmlConceptoProperties;
    private impuesto: Impuestos = new Impuestos();


    constructor(concepto: XmlConceptoAttributes) {
        this.existComplemnt = false;
        this.concepto._attributes = concepto;
    }

    public async complemento(data: ComlementTypeConcept) {
        if (!this.concepto['cfdi:ComplementoConcepto']) {
            this.concepto['cfdi:ComplementoConcepto'] = {} as XmlComplementsConcepts;
        }
        this.existComplemnt = true;
        this.complementProperties.key = data.getComplement().key;
        this.complementProperties.xmlns = data.getComplement().xmlns;
        this.complementProperties.xmlnskey = data.getComplement().xmlnskey;
        this.complementProperties.schemaLocation = data.getComplement().schemaLocation;
        this.concepto['cfdi:ComplementoConcepto'][data.getComplement().key] = data.getComplement().complement;
    }

    traslado(traslado: XmlTranRentAttributesProperties): Concepts {
        this.concepto['cfdi:Impuestos'] = this.impuesto.traslados(traslado).impuesto; // = traslado;
        return this;
    }

    retencion(retencion: XmlTranRentAttributesProperties): Concepts {
        this.concepto['cfdi:Impuestos'] = this.impuesto.retenciones(retencion).impuesto; // = traslado;
        return this;
    }

    getConcept(): XmlConceptoProperties {
        const concept = {...this.concepto};
        this.concepto = {} as XmlConceptoProperties;
        console.log(this.concepto)
        return concept;
    }

    isComplement(): boolean {
        return this.existComplemnt;
    }

    getComplementProperties(): ComplementProperties {
        return this.complementProperties;
    }
}
