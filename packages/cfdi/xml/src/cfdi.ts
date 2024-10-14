import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import { cer, key } from '@cfdi/csd';

import { CFDIAttributes } from './types/tags/comprobante.interface';
import { Comprobante } from './tags/Comprobante';
import { FileSystem } from './utils/FileSystem';
import { Options } from './types/types';
import { Transform } from '@clir/saxon-he';
import { XmlCdfi } from './types/tags/xmlCdfi.interface';
import { getOriginalString } from './utils/XmlHelp';
import { js2xml } from 'xml-js';

/**
 *
 */
export class CFDI extends Comprobante {
  private debug = false;
  private _sello: string = '';
  private _cadenaOriginal: string = '';

  /**
   *constructor
   *
   * @param attr
   * Comprobante
   * @param options
   *Options;
   */
  constructor(
    options: Options = { debug: false, xslt: { xslt3: false } } as Options
  ) {
    super(options);
    const { debug = false } = options;
    this.debug = debug;
    this._cadenaOriginal = '';
    this._sello = '';
  }

  /**
   * certificar
   *
   * @param {string} cerpath
   * string
   */
  public certificar(cerpath: string): CFDI | any {
    try {
      cer.setFile(cerpath);
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
    const cadena = await this.generarCadenaOriginal();
    const sello = await this.generarSello(cadena, keyfile, password);
    this._cadenaOriginal = cadena;
    this._sello = sello;
    this.xml['cfdi:Comprobante']._attributes.Sello = sello;
  }

  /**
   *getJsonCdfi
   */
  public getJsonCdfi(): XmlCdfi {
    return this.xml;
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
  private async generarCadenaOriginal(): Promise<string> {
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
        let cadena: string = '';

        if (this.xslt.xslt3) {
          //console.time('saxon');
          cadena = (await getOriginalString(
            fullPath,
            String(this.xslt.path)
          )) as string;
          //console.timeEnd('saxon');
        } else {
          const transform = new Transform();
          //console.time('saxon cli 2');
          cadena = transform
            .s(fullPath)
            .xsl(String(this.xslt.path))
            .warnings('silent')
            .run();
          //console.timeEnd('saxon cli');
        }

        if (this.debug) {
          console.log('xslt =>', this.xslt);
          console.log('cadena original =>', cadena);
        }
        fs.unlinkSync(fullPath);
        // @ts-ignore
        resolve(cadena);
      } catch (e) {
        if (this.debug) {
          console.log({
            method: 'getCadenaOriginal',
            // @ts-ignore
            error: e.message || e || 'error desconosido',
          });
        }
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
  private generarSello(
    cadenaOriginal: string,
    keyfile: string,
    password: string
  ): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        // const key = pem.toString('utf8');
        // openssl dgst -sha256 -sign account.key -out signature.sha256 signature.b64
        key.setFile(keyfile, password);
        const sello = key.signatureHexForge(cadenaOriginal);
        resolve(sello);
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

  public get sello(): string {
    return this._sello;
  }

  public get cadenaOriginal(): string {
    return this._cadenaOriginal;
  }

  public setDebug(debug: boolean): void {
    this.debug = debug;
  }
}
