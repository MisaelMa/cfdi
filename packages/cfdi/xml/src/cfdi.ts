import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import { cer, key } from '@cfdi/csd';
import { Transform } from '@signati/saxon';
import { js2xml } from 'xml-js';

import { XmlCdfi } from './types/tags/xmlCdfi.interface';
import { Options } from './types/types';
import {
  ComprobanteAttr,
} from './types/tags/comprobante.interface';
import { FileSystem } from './utils/FileSystem';
import { Comprobante } from './tags/Comprobante';

/**
 *
 */
export class CFDI extends Comprobante {

  private debug = false;

  /**
   *constructor
   *
   * @param attr
   * Comprobante
   * @param options
   *Options;
   */
  constructor(attr: ComprobanteAttr, options: Options = { debug: false }) {
    super(attr, options)
    const { debug = false } = options;
    this.debug = debug;
  }

  /**
   * certificar
   *
   * @param {string} cerpath
   * string
   */
  public certificar(cerpath: string): CFDI | any {
    try {
      cer.setFile(cerpath)
      this.xml[this.tc]._attributes.NoCertificado = cer.getNoCer();
      this.xml[this.tc]._attributes.Certificado = cer.getPem({ begin: true });
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
        // openssl dgst -sha256 -sign account.key -out signature.sha256 signature.b64
        key.setFile(keyfile, password);
        const sello = key.signatureHexForge(cadenaOriginal)
        resolve(sello)
        //await sign.update(cadenaOriginal);
        // resolve(sign.sign(keyPem.privateKeyPem, 'base64'));
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
