import { AnyValidateFunction, ErrorObject, SchemaObject } from 'ajv/dist/core';

import { DataValidationCxt } from 'ajv/dist/types';
import { JSV } from '../JSV';
import { Schemakey } from '../types/key-schema';

export class ValidateXSD {
  private static instances: Map<Schemakey, ValidateXSD> = new Map();
  private debug: boolean = false;
  protected schema!: AnyValidateFunction;
  protected key!: Schemakey;

  constructor(key: Schemakey, debug: boolean = false) {
    this.setSchema(key);
    this.debug = debug;
  }

  protected setSchema(key: Schemakey) {
    this.key = key;
    this.schema = JSV.of().getSchema(key);
  }

  public static of(key: Schemakey, debug: boolean = false): ValidateXSD {
    if (!ValidateXSD.instances.has(key)) {
      ValidateXSD.instances.set(key, new ValidateXSD(key, debug));
    }
    const instance = ValidateXSD.instances.get(key)!;
    instance.setSchema(key);
    return instance;
  }

  get errors() {
    return this.schema?.errors;
  }

  public validate(data: Record<string, any>, dataCxt?: DataValidationCxt) {
    if (!this.schema) return true;
    return this.validateSchema(this.schema, data, dataCxt);
  }

  public validateSchema(
    schema: AnyValidateFunction,
    data: Record<string, any>,
    dataCxt?: DataValidationCxt
  ) {
    const valid = schema(data, dataCxt);
    if (!valid) {
      if (this.debug)
        console.log(
          `[KEY] => ${this.key}`,
          data,
          JSON.stringify(this.errors, null, 2)
        );
    } else {
      if (this.debug) console.log(`[PASS] => ${this.key}`);
    }
    return valid;
  }
}
