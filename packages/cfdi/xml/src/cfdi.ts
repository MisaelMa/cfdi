import fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import { cer, key } from '@cfdi/csd';

import { Comprobante } from './elements/Comprobante';
import { FileSystem } from './utils/FileSystem';
import { Options, XsltSheet } from './types/types';
import { Transform } from '@clir/saxon-he';
import { XmlCdfi } from './types/xmlCdfi.interface';
import xmlJS from 'xml-js';

/**
 *
 */
export class CFDI extends Comprobante {
  private _sello: string = '';
  private _cadenaOriginal: string = '';
  protected xslt?: XsltSheet | null = null;
  private debug = false;

  /**
   *constructor
   *
   * @param attr
   * Comprobante
   * @param options
   *Options;
   */
  constructor(options?: Options) {
    super(options);
    this.xslt = options?.xslt;
    this._cadenaOriginal = '';
    this._sello = '';
    this.setDebug(Boolean(options?.debug));
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
      this.xml['cfdi:Comprobante']._attributes.NoCertificado = cer.getNoCer();
      this.xml['cfdi:Comprobante']._attributes.Certificado = cer.getPem({
        begin: true,
      });
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
    const options = { compact: true, ignoreComment: true, spaces: 4 };
    const cfdi = await xmlJS.js2xml({ ...this.xml }, options);
    this.restartCfdi();
    return cfdi;
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
   *getCadenaOriginal
   */
  async generarCadenaOriginal(): Promise<string> {
  
    if (!this.xslt) {
      throw new Error(
        '¡Ups! Direcction Not Found Extensible Stylesheet Language Transformation'
      );
    }
      try {
        const fullPath = FileSystem.getTmpFullPath(FileSystem.generateNameTemp());
        const options = { compact: true, ignoreComment: true, spaces: 4 };
        const result = xmlJS.js2xml(this.xml, options);

        fs.writeFileSync(fullPath, result, 'utf8');
        let cadena: string = '';

        const transform = new Transform();
        //console.time('saxon cli 2');
        cadena = transform
          .s(fullPath)
          .xsl(String(this.xslt.path))
          .warnings('silent')
          .run();
        //console.timeEnd('saxon cli');

        if (this.debug) {
          console.log('xslt =>', this.xslt);
          console.log('cadena original =>', cadena);
        }
        fs.unlinkSync(fullPath);
        return cadena;
      } catch (e: any) {
        if (this.debug) {
          console.log({
            method: 'getCadenaOriginal',
            // @ts-ignore
            error: e.message
          });
        }
        return e
      }
    
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
  public generarSello(
    cadenaOriginal: string,
    keyfile: string,
    password: string
  ): string | any {
      try {
        // const key = pem.toString('utf8');
        // openssl dgst -sha256 -sign account.key -out signature.sha256 signature.b64
        key.setFile(keyfile, password);
        const sello =  key.signatureHexForge(cadenaOriginal);
        return sello;
        //await sign.update(cadenaOriginal);
        // resolve(sign.sign(keyPem.privateKeyPem, 'base64'));
      } catch (e) {
         if (this.debug) {
          console.log({
            method: 'getSello',
            error: e,
          });
        }
        return e 
      }
    
  }

  public get sello(): string {
    return this._sello;
  }

  public get cadenaOriginal(): string {
    return this._cadenaOriginal;
  }

  get isBebug(): boolean {
    return this.debug;
  }

  public setDebug(debug: boolean): void {
    this.debug = debug;
  }
}
