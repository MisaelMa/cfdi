import Ajv, { ValidateFunction } from 'ajv';
import { existsSync, readFileSync, writeFileSync } from 'fs';

import { AnyValidateFunction } from 'ajv/dist/types';
import { JTDDataType } from 'ajv/dist/types/jtd-schema';
import { Schemakey } from './types/key-schema';

export default class Schema {
  private static instance: Schema;
  private ajv: Ajv;
  private isLoad = false;
  private validate!: ValidateFunction;
  private pathSchema = '';
  private schemaKeys: string[] = [];
  constructor() {
    this.ajv = new Ajv();
  }

  public static of(): Schema {
    if (!Schema.instance) {
      Schema.instance = new Schema();
    }
    return Schema.instance;
  }
  setConfig(options: any) {
    const { path } = options;
    this.pathSchema = path;
    this.loadFiles();
  }

  private getContentFile(file: string) {
    const data = JSON.parse(readFileSync(file, 'utf8'));
    return data;
  }
  private loadFiles() {
    const cfdi = this.getContentFile(`${this.pathSchema}/cfdi.json`);
    const catalogos = cfdi.catalogos;
    const comprobante = cfdi.comprobante;
    const complementos = cfdi.complementos;

    this.loadData(catalogos);
    this.loadData(comprobante);
    this.loadData(complementos);
    this.buildKeys();
  }

  private loadData(schemas: Record<string, any>[]) {
    schemas.forEach((schema) => {
      this.schemaKeys.push(schema.key);
      if (
        !this.ajv.getSchema(schema.key) &&
        schema.key !== 'COMPROBANTE_CONCEPTOS_CONCEPTO_INFORMACIONADUANERA'
      ) {
        this.ajv.addSchema(
          this.getContentFile(
            `${this.pathSchema}/${schema.path}/${schema.name}.json`
          ),
          schema.key
        );
      }
    });
  }

  private getAjv() {
    return this.ajv;
  }
  private getSchema(key: Schemakey): AnyValidateFunction {
    return this.getAjv().getSchema(key) as AnyValidateFunction;
  }

  public get cfdi() {
    return {
      comprobante: this.getSchema(Schemakey.COMPROBANTE),
      informacionGlobal: this.getSchema(Schemakey.INFORMACIONGLOBAL),
      emisor: this.getSchema(Schemakey.EMISOR),
      receptor: this.getSchema(Schemakey.RECEPTOR),
      relacionado: this.getSchema(Schemakey.CFDIRELACIONADOS_CFDIRELACIONADO),
      relacionados: this.getSchema(Schemakey.CFDIRELACIONADOS),
      impuestos: this.getSchema(Schemakey.IMPUESTOS),
      traslado: this.getSchema(Schemakey.IMPUESTOS_TRASLADOS_TRASLADO),
      retencion: this.getSchema(Schemakey.IMPUESTOS_RETENCIONES_RETENCION),
      addenda: this.getSchema(Schemakey.ADDENDA),
    };
  }

  public concepto() {
    return {
      concepto: this.getSchema(Schemakey.CONCEPTO),
      parte: this.getSchema(Schemakey.CONCEPTO_PARTE),
      parteInformacionAduanera: this.getSchema(
        Schemakey.CONCEPTO_PARTE_INFORMACIONADUANERA
      ),
      cuentaPredial: this.getSchema(Schemakey.CONCEPTO_CUENTAPREDIAL),
      informacionAduanera: this.getSchema(
        Schemakey.CONCEPTO_INFORMACIONADUANERA
      ),
      traslado: this.getSchema(Schemakey.CONCEPTO_IMPUESTOS_TRASLADOS_TRASLADO),
      retencion: this.getSchema(
        Schemakey.CONCEPTO_IMPUESTOS_RETENCIONES_RETENCION
      ),
    };
  }

  private buildKeys() {
    const text: string[] = [];

    this.schemaKeys.forEach((key) => {
      const line = `${this.nameConst(key)} = '${key}',`;
      text.push(line);
    });
    /* console.log(`
    export enum Schemakey {
      ${text.join('\n')}
    }
    `); */
  }

  private nameConst(text: string) {
    return text
      .replace('COMPROBANTE_', '')
      .replace('CONCEPTOS_', '')
      .replace('CATALOGOS_', '');
  }
}
