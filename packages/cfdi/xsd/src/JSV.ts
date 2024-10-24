import Ajv, { AnySchema } from 'ajv';

import { AnyValidateFunction } from 'ajv/dist/core';

export class JSV {
  private static instance: JSV;
  private ajv: Ajv;

  private constructor() {
    // Inicializar Ajv aquí según tus necesidades
    this.ajv = new Ajv({ strict: false, strictRequired: false });
  }

  public static of(): JSV {
    if (!JSV.instance) {
      JSV.instance = new JSV();
    }
    return JSV.instance;
  }

  public addSchema(
    schema: AnySchema | AnySchema[], // If array is passed, `key` will be ignored
    key: string, // Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
    _meta?: boolean, // true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
    _validateSchema?: boolean | 'log'
  ): Ajv {
    if (!this.getSchema(key)) {
      return this.ajv.addSchema(schema, key, _meta, _validateSchema);
    }
    console.log(`[ADD_SCHEMA]: KEY EXIST ${key}`);

    return this.ajv;
  }
  public getSchema(keyRef: string) {
    return this.ajv.getSchema(keyRef) as AnyValidateFunction;
  }
}
