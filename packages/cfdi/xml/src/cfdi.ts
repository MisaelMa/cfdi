import * as crypto from 'crypto';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import { cer, key } from '@signati/openssl';
import { Transform } from '@signati/saxon';
import { js2xml } from 'xml-js';

import { Concepts } from './tags/Concepts';
import { Emisor } from './tags/Emisor';
import { Impuestos } from './tags/Impuestos';
import { Receptor } from './tags/Receptor';
import { FileSystem } from './utils/FileSystem';
import { Relacionado } from './tags/Relacionado';
import {
  ComlementType,
  XmlComplements,
} from './types/Tags/complements.interface';
import {
  Comprobante,
  XmlComprobante,
  XmlComprobanteAttributes,
  XmlnsLinks,
} from './types/Tags/comprobante.interface';
import { XmlConcepto } from './types/Tags/concepts.interface';
import { XmlCdfi, XmlVersion } from './types/Tags/xmlCdfi.interface';
import { Structure } from './utils/structure';
import { schema } from './utils/XmlHelp';
import { TagComprobante } from './types';
import { Options } from './types/types';

/**
 *
 */
export class CFDI {
  private xml: XmlCdfi = {} as XmlCdfi;

  private debug = false;

  private version = '4.0';

  private tags: Structure;

  private tc: TagComprobante = 'cfdi:Comprobante';

  private XMLSchema = 'http://www.w3.org/2001/XMLSchema-instance';

  private cfd = 'http://www.sat.gob.mx/cfd/4';

  private locations = [
    'http://www.sat.gob.mx/cfd/4',
    'http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd',
  ];

  private xslt: string | null = null;

  /**
   *constructor
   *
   * @param attr
   * Comprobante
   * @param options
   *Options;
   */
  constructor(attr: Comprobante, options: Options = { debug: false }) {
    const attribute = attr;
    const { debug = false, xslt, customTags = {} } = options;
    xslt && (this.xslt = xslt);
    this.tags = new Structure(customTags);
    this.tc = this.tags.tagXml('cfdi:Comprobante');
    this.debug = debug;
    this.restartCfdi();
    this.xmlns(attribute.xmlns || { cfdi: this.cfd, xsi: this.XMLSchema });
    this.addSchemaLocation(attribute.schemaLocation || this.locations);
    if (attribute.xmlns) {
      delete attribute.xmlns;
    }
    attribute.schemaLocation && delete attribute.schemaLocation;
    this.xml[this.tc]._attributes = {
      ...this.xml[this.tc]._attributes,
      ...{ Version: this.version },
      ...attribute,
    };
  }

  /**
   *xmlns
   *
   * @param xmlns
   * XmlnsLinks
   */
  private xmlns(xmlns: XmlnsLinks): void {
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
  private addXmlns(xmlnsKey: string, xmlns: string): void {
    this.xml[this.tc]._attributes[`xmlns:${xmlnsKey}`] = xmlns;
  }

  /**
   *addSchemaLocation
   *
   * @param locations
   * string[]
   */
  private addSchemaLocation(locations: string[]): void {
    if (!this.xml[this.tc]._attributes['xsi:schemaLocation']) {
      this.xml[this.tc]._attributes['xsi:schemaLocation'] = '';
    }
    const schemaLocation = schema(locations);
    this.xml[this.tc]._attributes['xsi:schemaLocation'] += ` ${schemaLocation}`;
  }

  /**
   *setAttributesXml
   *
   * @param attr
   * XmlVersion
   */
  public setAttributesXml(attr: XmlVersion = {} as XmlVersion): void {
    const { encoding = 'utf-8', version = '1.0' } = attr;
    this.xml._declaration._attributes = {
      version,
      // eslint-disable-next-line sort-keys
      encoding,
    };
  }

  /** @Deprecated* */
  /**
   *setAttributesComprobantes
   *
   * @param attribute
   * Comprobante
   */
  public setAttributesComprobantes(attribute: Comprobante): void {
    this.xml[this.tc]._attributes = {
      ...this.xml[this.tc]._attributes,
      ...{ Version: this.version },
      ...attribute,
    };
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
  public concepto(concept: Concepts): void {
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

  /**
   * certificar
   *
   * @param {string} cerpath
   * string
   */
  public certificar(cerpath: string): CFDI | any {
    try {
      const certi = cer.getCer(cerpath); // . await certificate.getCer(cerpath);
      this.xml[this.tc]._attributes.NoCertificado = certi.nocer;
      this.xml[this.tc]._attributes.Certificado = certi.cer;
      return this;
    } catch (e) {
      if (this.debug) {
        console.log({
          method: 'certificar',
          error: e,
        });
      }
      return e;
    }
  }

  /**
   * sellar
   *
   * @param {string} keyfile
   * string
   * @param {string} password
   * string
   */
  public async sellar(keyfile: string, password: string): Promise<void> {
    const cadena = await this.getCadenaOriginal();
    const sello = await this.getSello(cadena, keyfile, password);
    this.xml['cfdi:Comprobante']._attributes.Sello = sello;
  }

  /**
   *getJsonCdfi
   */
  public async getJsonCdfi(): Promise<XmlCdfi> {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.xml);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   *getXmlCdfi
   */
  public async getXmlCdfi(): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const options = { compact: true, ignoreComment: true, spaces: 4 };
        const cfdi = await js2xml({ ...this.xml }, options);
        this.restartCfdi();
        resolve(cfdi);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   *saveFile
   *
   * @param file
   * string
   * @param pathSave
   * string
   * @param name
   * string
   */
  public saveFile(file: string, pathSave: string, name: string): boolean {
    try {
      const fullPath = `${pathSave}${name}.xml`;
      fs.writeFileSync(fullPath, Buffer.from(file, 'base64'), 'utf8');
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   *restartCfdi
   */
  private restartCfdi(): void {
    this.xml = {
      _declaration: {
        _attributes: {
          encoding: 'utf-8',
          version: '1.0',
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

  /**
   *getCadenaOriginal
   */
  private async getCadenaOriginal(): Promise<string> {
    if (!this.xslt) {
      throw new Error(
        '¡Ups! Direcction Not Found Extensible Stylesheet Language Transformation'
      );
    }
    return new Promise<string>(async (resolve, reject) => {
      try {
        const fullPath = path.join(
          os.tmpdir(),
          `${FileSystem.generateNameTemp()}.xml`
        );
        const options = { compact: true, ignoreComment: true, spaces: 4 };
        const result = js2xml(this.xml, options);
        fs.writeFileSync(fullPath, result, 'utf8');
        const transform = new Transform();
        const cadena = transform
          .s(fullPath)
          .xsl(String(this.xslt))
          .warnings('silent')
          .run();

        if (this.debug) {
          console.log(this.xslt);
          console.log('cadena original =>', cadena);
        }
        fs.unlinkSync(fullPath);
        resolve(cadena);
      } catch (e) {
        console.log({
          method: 'getCadenaOriginal',
          error: e,
        });
        reject(e);
      }
    });
  }

  /**
   *getSello
   *
   * @param cadenaOriginal
   * string
   * @param keyfile
   * string
   * @param password
   * string
   */
  private getSello(
    cadenaOriginal: string,
    keyfile: string,
    password: string
  ): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        // const key = pem.toString('utf8');
        const keyPem = await key.getKey(keyfile, password);
        // console.log(key);
        const sign = await crypto.createSign('RSA-SHA256');
        await sign.update(cadenaOriginal);
        resolve(sign.sign(keyPem.privateKeyPem, 'base64'));
      } catch (e) {
        if (this.debug) {
          console.log({
            method: 'getSello',
            error: e,
          });
        }
        reject(e);
      }
    });
  }
}
