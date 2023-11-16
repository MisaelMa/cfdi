import {
  CFDIAttributes,
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
import { Structure } from '../utils/structure';
import { schemaBuild } from '../utils/XmlHelp';

export class Comprobante {
  protected xml: XmlCdfi = {} as XmlCdfi;
  protected tc: TagComprobante = 'cfdi:Comprobante';
  protected version = '4.0';
  protected tags: Structure;
  protected XMLSchema = 'http://www.w3.org/2001/XMLSchema-instance';
  protected cfd = 'http://www.sat.gob.mx/cfd/4';
  protected locations = [
    'http://www.sat.gob.mx/cfd/4',
    'http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd',
  ];

  protected xslt: XsltSheet;
  schema = Schema.of();
  constructor(
    options: Options = {
      debug: false,
      xslt: { xslt3: false },
      schema: { path: '' },
    } as Options
  ) {
    this.schema.setConfig({
      path: options.schema?.path,
    });
    const { xslt, customTags = {} } = options;
    this.xslt = xslt;
    this.tags = new Structure(customTags);
    this.tc = this.tags.tagXml('cfdi:Comprobante');
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
    this.xml[this.tc]._attributes[`xmlns:${xmlnsKey}`] = xmlns;
  }

  /**
   *addSchemaLocation
   *
   * @param locations
   * string[]
   */
  protected addSchemaLocation(locations: string[]): void {
    if (!this.xml[this.tc]._attributes['xsi:schemaLocation']) {
      this.xml[this.tc]._attributes['xsi:schemaLocation'] = '';
    }
    const schemaLocation = schemaBuild(locations);
    this.xml[this.tc]._attributes['xsi:schemaLocation'] += ` ${schemaLocation}`;
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

  public setAttributes(attr: CFDIAttributes): void {
    const attribute = attr;
    this.xmlns(attribute.xmlns || { cfdi: this.cfd, xsi: this.XMLSchema });
    this.addSchemaLocation(attribute.schemaLocation || this.locations);
    if (attribute.xmlns) {
      delete attribute.xmlns;
    }
    attribute.schemaLocation && delete attribute.schemaLocation;
    this.xml['cfdi:Comprobante']._attributes = {
      ...this.xml[this.tc]._attributes,
      ...{ Version: this.version },
      ...attribute,
      SubTotal: Number(attribute.SubTotal),
      Descuento: Number(attribute.Descuento),
      Total: Number(attribute.Total),
    };
    const comprobante = this.schema.cfdi.comprobante;

    ['Sello', 'NoCertificado', 'Certificado'].forEach((prop) => {
      const index = comprobante.schema.required.find((d) => d === prop);
      if (index !== -1) {
        comprobante.schema.required.splice(index, 1);
        comprobante.schemaEnv.schema.required.splice(index, 1);
      }
    });
    comprobante.schema.properties.NoCertificado = {
      description: '',
      type: 'string',
    };
    comprobante.schemaEnv.schema.properties.NoCertificado = {
      description: '',
      type: 'string',
    };

    comprobante.schemaEnv.validate(this.xml['cfdi:Comprobante']._attributes);
    console.log('ss', comprobante.schemaEnv.validate?.errors);
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
    Año: string;
  }): void {
    this.xml[this.tc] = {
      'cfdi:InformacionGlobal': {
        _attributes: payload,
      },
      ...this.xml[this.tc],
    };
  }

  /**
   *relacionados
   *
   * @param relationCfdi
   * Relacionado
   */
  public relacionados(relationCfdi: Relacionado): void {
    this.xml[this.tc] = {
      'cfdi:CfdiRelacionados': relationCfdi.getRelation(),
      ...this.xml[this.tc],
    };
  }

  /**
   *emisor
   *
   * @param emisor
   * Emisor
   */
  public emisor(emisor: Emisor): void {
    this.xml[this.tc]['cfdi:Emisor'] = emisor.emisor;
  }

  /**
   *receptor
   *
   * @param receptor
   * Receptor
   */
  public receptor(receptor: Receptor): void {
    this.xml[this.tc]['cfdi:Receptor'] = receptor.receptor;
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
    if (this.tags.isActive) {
      if (!this.xml[this.tc]['cfdi:Conceptos']) {
        this.xml[this.tc]['cfdi:Conceptos'] = {
          'cfdi:Concepto': [],
        };
      }
      this.xml[this.tc]['cfdi:Conceptos']['cfdi:Concepto'].push(
        concept.getConcept()
      );
    } else {
      this.xml[this.tc]['cfdi:Conceptos']['cfdi:Concepto'].push(
        concept.getConcept()
      );
    }
  }

  /**
   *impuesto
   *
   * @param impuesto
   * Impuestos
   */
  public impuesto(impuesto: Impuestos): void {
    this.xml[this.tc]['cfdi:Impuestos'] = impuesto.impuesto;
  }

  /**
   *complemento
   *
   * @param complements
   * ComlementType
   */
  public async complemento(complements: ComlementType): Promise<void> {
    if (!this.xml[this.tc]['cfdi:Complemento']) {
      this.xml[this.tc]['cfdi:Complemento'] = {} as XmlComplements;
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
    this.xml[this.tc] = {
      _attributes: {} as XmlComprobanteAttributes,
      'cfdi:Emisor': {},
      'cfdi:Receptor': {},
    } as XmlComprobante;

    this.xml['cfdi:Comprobante']['cfdi:Conceptos'] = {
      'cfdi:Concepto': [],
    } as XmlConcepto;
  }
}
