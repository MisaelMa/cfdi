import { AnyValidateFunction, SchemaObject } from 'ajv/dist/core';

import { JSV } from '../JSV';
import { Schemakey } from '../types/key-schema';
import { ValidateXSD } from './validate';

export class Comprobante extends ValidateXSD {
  protected static instance: Comprobante;
  private comprobanteInit!: AnyValidateFunction;
  private keyInitSchema = 'comprobante-init.json';
  private override_required = ['Sello', 'NoCertificado', 'Certificado'];
  constructor(key: Schemakey) {
    super(key);
    const schemaInit = { ...(this.schema.schema as unknown as any) };
    this.schemaInitBuild(schemaInit);
  }

  public static of(key: Schemakey): Comprobante {
    if (!Comprobante.instance) {
      Comprobante.instance = new Comprobante(key);
    }
    return Comprobante.instance;
  }
  get errorsInit() {
    return this.comprobanteInit.errors;
  }

  public validateInit(data: Record<string, any>) {
    const valid = this.comprobanteInit(data);
    console.log(`[KEY] => ${this.key}`, this.errors);

    return valid;
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
