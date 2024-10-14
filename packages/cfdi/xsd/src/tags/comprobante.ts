import { AnyValidateFunction, SchemaObject } from 'ajv/dist/core';

import { JSV } from '../JSV';
import { Schemakey } from '../types/key-schema';
import { ValidateXSD } from './validate';
/**
 * 
 * @class Comprobante
 * override_required properties
 * 'Sello', 'NoCertificado', 'Certificado'
 * we make them unnecessary
 */
export class Comprobante extends ValidateXSD {
  protected static instance: Comprobante;
  private comprobanteInit!: AnyValidateFunction;
  private keyInitSchema = 'comprobante-init.json';
  private override_required = ['Sello', 'NoCertificado', 'Certificado'];
  constructor(key: Schemakey, debug: boolean = false) {
    super(key, debug);
    const schema = this.schema?.schema as unknown as any;
    const schemaInit = { required: [], properties: {}, ...schema };
    this.schemaInitBuild(schemaInit);
  }

  public static of(key: Schemakey, debug: boolean = false): Comprobante {
    if (!Comprobante.instance) {
      Comprobante.instance = new Comprobante(key, debug);
    }
    return Comprobante.instance;
  }
  get errorsInit() {
    return this.comprobanteInit.errors;
  }

  public validateInit(data: Record<string, any>) {
    return this.validateSchema(this.comprobanteInit, data);
  }
  private schemaInitBuild(schemaInit: Record<string, any>) {
    schemaInit.$id = this.keyInitSchema;
    this.override_required.forEach((item) => {
      const index = schemaInit.required.find((p: string) => p === item);
      if (index !== -1) {
        schemaInit.required.splice(index, 1);
      }
    });
    schemaInit.properties.NoCertificado = {
      description: '',
      type: 'string',
    };
    JSV.of().addSchema(schemaInit, this.keyInitSchema);
    this.comprobanteInit = JSV.of().getSchema(this.keyInitSchema);
  }
}
