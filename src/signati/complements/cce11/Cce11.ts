// ComercioExterior11
import {
    XmlCce11,
    XmlCce11Attributes,
    XmlCce11Destinatario,
    XmlCce11DestinatarioAttributes,
    XmlCce11Domicilio,
    XmlCce11DomicilioAttributes,
    XmlCce11Emisor,
    XmlCce11EmisorAttributes, XmlCce11Mercancia, XmlCce11MercanciaAttributes, XmlCce11Mercancias,
    XmlCce11PropietarioAttributes,
    XmlCce11Receptor,
    XmlCce11ReceptorAttributes, XmlCee11DescEspecificasAttributes,
} from '../../types/Complements/cce11.interface';
import {XmlAerolineasAttributes} from '../../types/Complements/aerolineas.interface';
import {ComplementsReturn} from '../../types';

/*
*https://www.sat.gob.mx/consultas/61165/comprobante-de-comercio-exterior
* http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_comercio_exterior.htm
* http://omawww.sat.gob.mx/tramitesyservicios/Paginas/documentos/ComercioExterior11.pdf
*/
export class Cce11 {
    public cce11: XmlCce11 = {} as XmlCce11;
    private xmlns: string = 'http://www.sat.gob.mx/ComercioExterior11';
    private xmlnskey: string = 'cce11';
    private schemaLocation: string[] = [
        'http://www.sat.gob.mx/ComercioExterior11',
        'http://www.sat.gob.mx/sitio_internet/cfd/ComercioExterior11/ComercioExterior11.xsd',
    ];


    constructor(attributes: XmlCce11Attributes) {
        this.cce11._attributes = attributes;
    }

    Emisor(attributes: XmlCce11EmisorAttributes, domicilio?: XmlCce11DomicilioAttributes) {
        if (!this.cce11['cce11:Emisor']) {
            this.cce11['cce11:Emisor'] = {} as XmlCce11Emisor;
        }
        this.cce11['cce11:Emisor']._attributes = attributes;
        if (domicilio) {
            this.cce11['cce11:Emisor']['cce11:Domicilio'] = {
                _attributes: domicilio,
            };
        }
    }

    Receptor(attributes: XmlCce11ReceptorAttributes, domicilio?: XmlCce11DomicilioAttributes) {
        if (!this.cce11['cce11:Receptor']) {
            this.cce11['cce11:Receptor'] = {} as XmlCce11Receptor;
        }
        this.cce11['cce11:Receptor']._attributes = attributes;
        if (domicilio) {
            this.cce11['cce11:Receptor']['cce11:Domicilio'] = {
                _attributes: domicilio,
            };
        }
    }

    Propietario(attributes: XmlCce11PropietarioAttributes) {
        if (!this.cce11['cce11:Propietario']) {
            this.cce11['cce11:Propietario'] = [];
        }
        this.cce11['cce11:Propietario'].push({_attributes: attributes});
    }

    Destinatario(attributes: XmlCce11DestinatarioAttributes, domicilio?: XmlCce11DomicilioAttributes) {
        if (!this.cce11['cce11:Destinatario']) {
            this.cce11['cce11:Destinatario'] = [];
        }
        const des: XmlCce11Destinatario = {
            _attributes: attributes,
        };
        if (domicilio) {
            des['cce11:Domicilio'] = {
                _attributes: domicilio,
            };
        }
        this.cce11['cce11:Destinatario'].push(des);
    }

    Mercancias(mercancia: XmlCce11MercanciaAttributes, especificacion?: XmlCee11DescEspecificasAttributes[]) {
        if (!this.cce11['cce11:Mercancias']) {
            this.cce11['cce11:Mercancias'] = {
                'cce11:Mercancia': [],
            };
        }
        const mercanci: XmlCce11Mercancia = {
            _attributes: mercancia,
        };
        if (especificacion && especificacion.length > 0) {
            if (!mercanci['cce11:DescripcionesEspecificas']) {
                mercanci['cce11:DescripcionesEspecificas'] = [];
            }
            for (const espe of especificacion) {
                mercanci['cce11:DescripcionesEspecificas'].push({_attributes: espe});
            }
        }
        this.cce11['cce11:Mercancias']['cce11:Mercancia'].push(mercanci);
    }

    public getComplement(): ComplementsReturn {
        return {
            key: 'cce11:ComercioExterior',
            xmlns: this.xmlns,
            xmlnskey: this.xmlnskey,
            schemaLocation: this.schemaLocation,
            complement: this.cce11,
        };
    }
}
