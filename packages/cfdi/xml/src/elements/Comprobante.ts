import {
  CFDIComprobante,
  ComprobanteAttributes,
  Options,
  TagComprobante,
  XmlCdfi,
  XmlComprobante,
  XmlComprobanteAttributes,
  XmlConcepto,
  XmlVersion,
  XmlnsLinks,
  XsltSheet,
} from '../types';
import { ComlementType, XmlComplements } from '@cfdi/complementos';

import { Concepto } from './Concepto';
import { Emisor } from './Emisor';
import { Impuestos } from './Impuestos';
import { Receptor } from './Receptor';
import { Relacionado } from './Relacionado';
import { Schema } from '@cfdi/xsd';
import { schemaBuild } from '../utils/XmlHelp';

export class Comprobante {
  protected xml: XmlCdfi = {
    _declaration: { _attributes: { version: '1.0', encoding: 'utf-8' } },
  } as XmlCdfi;
  protected tc: TagComprobante = 'cfdi:Comprobante';
  protected version = '4.0';
  protected XMLSchema = 'http://www.w3.org/2001/XMLSchema-instance';
  protected cfd = 'http://www.sat.gob.mx/cfd/4';
  protected locations = [
    'http://www.sat.gob.mx/cfd/4',
    'http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd',
  ];

  schema = Schema.of();
  constructor(options?: Options) {
    const { debug, schema } = options || { debug: false };
    this.schema.setConfig({
      debug: debug,
      path: schema?.path,
    });
    this.restartCfdi();
  }

  /**
   *xmlns
   *
   * @param xmlns
   * XmlnsLinks
   */
  protected xmlns(xmlns: XmlnsLinks): void {
    if (!xmlns.xsi) {
      this.addXmlns('xsi', this.XMLSchema);
    }
    if (!xmlns.cfdi) {
      this.addXmlns('cfdi', this.cfd);
    }

    for (const xmln in xmlns) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this.addXmlns(xmln, xmlns[xmln]);
    }
  }

  /**
   *addXmlns
   *
   * @param xmlnsKey
   * string
   * @param xmlns
   * string
   */
  protected addXmlns(xmlnsKey: string, xmlns: string): void {
    this.xml['cfdi:Comprobante']._attributes[`xmlns:${xmlnsKey}`] = xmlns;
  }

  /**
   *addSchemaLocation
   *
   * @param locations
   * string[]
   */
  protected addSchemaLocation(locations: string[]): void {
    if (!this.xml['cfdi:Comprobante']._attributes['xsi:schemaLocation']) {
      this.xml['cfdi:Comprobante']._attributes['xsi:schemaLocation'] = '';
    }
    const schemaLocation = schemaBuild(locations);
    this.xml['cfdi:Comprobante']._attributes[
      'xsi:schemaLocation'
    ] += `${schemaLocation}`;
  }

  /**
   *setAttributesXml
   *
   * @param attr
   * XmlVersion
   */
  public setAttributesXml(attr: XmlVersion = {} as XmlVersion): void {
    const { version = '1.0', encoding = 'utf-8' } = attr;
    this.xml._declaration._attributes = {
      version,
      // eslint-disable-next-line sort-keys
      encoding,
    };
  }

  public setAttributes(attr: ComprobanteAttributes): void {
    const attribute = attr;
    this.xmlns(attribute.xmlns || { cfdi: this.cfd, xsi: this.XMLSchema });
    this.addSchemaLocation(attribute.schemaLocation || this.locations);
    if (attribute.xmlns) {
      delete attribute.xmlns;
    }
    attribute.schemaLocation && delete attribute.schemaLocation;
  }

  public comprobante(attribute: CFDIComprobante): void {
    this.xml['cfdi:Comprobante']._attributes = {
      ...this.xml['cfdi:Comprobante']._attributes,
      ...{ Version: this.version },
      ...attribute,
      SubTotal: Number(attribute.SubTotal),
      Descuento: Number(attribute.Descuento),
      Total: Number(attribute.Total),
    };
    const comprobante = this.schema.cfdi.comprobante;
    comprobante.validateInit(this.xml['cfdi:Comprobante']._attributes);
  }
  /**
   *informacionGlobal
   *
   * @param payload
   * informacionGlobal
   * @param payload.Periodicidad
   * string
   * @param payload.Meses
   * string
   * @param payload.Año
   * string
   */
  public informacionGlobal(payload: {
    Periodicidad: string;
    Meses: string;
    Año: string | number;
  }): void {
    this.schema.cfdi.informacionGlobal.validate(payload);
    this.xml['cfdi:Comprobante'] = {
      'cfdi:InformacionGlobal': {
        _attributes: payload,
      },
      ...this.xml['cfdi:Comprobante'],
    };
  }

  /**
   *relacionados
   *
   * @param relationCfdi
   * Relacionado
   */
  public relacionados(relationCfdi: Relacionado): void {
    this.xml['cfdi:Comprobante'] = {
      'cfdi:CfdiRelacionados': relationCfdi.getRelation(),
      ...this.xml['cfdi:Comprobante'],
    };
  }

  /**
   *emisor
   *
   * @param emisor
   * Emisor
   */
  public emisor(emisor: Emisor): void {
    this.xml['cfdi:Comprobante']['cfdi:Emisor'] = emisor.emisor;
  }

  /**
   *receptor
   *
   * @param receptor
   * Receptor
   */
  public receptor(receptor: Receptor): void {
    this.xml['cfdi:Comprobante']['cfdi:Receptor'] = receptor.receptor;
  }

  /**
   *concepto
   *
   * @param concept
   * Concepts
   */
  public concepto(concept: Concepto): void {
    if (concept.isComplement()) {
      const properties = concept.getComplementProperties();
      this.addXmlns(properties.xmlnskey, properties.xmlns);
      this.addSchemaLocation(properties.schemaLocation);
    }

    if (!this.xml['cfdi:Comprobante']['cfdi:Conceptos']) {
      this.xml['cfdi:Comprobante']['cfdi:Conceptos'] = {
        'cfdi:Concepto': [],
      };
    }

    this.xml['cfdi:Comprobante']['cfdi:Conceptos']['cfdi:Concepto'].push(
      concept.getConcept()
    );
  }

  /**
   *impuesto
   *
   * @param impuesto
   * Impuestos
   */
  public impuesto(impuesto: Impuestos): void {
    this.xml['cfdi:Comprobante']['cfdi:Impuestos'] = impuesto.impuesto;
  }

  /**
   *complemento
   *
   * @param complements
   * ComlementType
   */
  public async complemento(complements: ComlementType): Promise<void> {
    if (!this.xml['cfdi:Comprobante']['cfdi:Complemento']) {
      this.xml['cfdi:Comprobante']['cfdi:Complemento'] = {} as XmlComplements;
    }
    const complement = await complements.getComplement();
    this.addXmlns(complement.xmlnskey, complement.xmlns);
    this.addSchemaLocation(complement.schemaLocation);
    if (
      this.xml['cfdi:Comprobante'] &&
      this.xml['cfdi:Comprobante']['cfdi:Complemento']
    ) {
      this.xml['cfdi:Comprobante']['cfdi:Complemento'][complement.key] =
        complement.complement;
    }
  }

  protected restartCfdi(): void {
    this.xml = {
      _declaration: {
        _attributes: {
          version: '1.0',
          encoding: 'utf-8',
        },
      },
    } as XmlCdfi;
    this.xml['cfdi:Comprobante'] = {
      _attributes: {} as XmlComprobanteAttributes,
      'cfdi:Emisor': {},
      'cfdi:Receptor': {},
    } as XmlComprobante;

    this.xml['cfdi:Comprobante']['cfdi:Conceptos'] = {
      'cfdi:Concepto': [],
    } as XmlConcepto;
  }
}
