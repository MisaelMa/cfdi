import { AnyValidateFunction, ErrorObject, SchemaObject } from 'ajv/dist/core';

import { DataValidationCxt } from 'ajv/dist/types';
import { JSV } from '../JSV';
import { Schemakey } from '../types/key-schema';

export class ValidateXSD {
  private static instances: Map<Schemakey, ValidateXSD> = new Map();

  protected schema!: AnyValidateFunction;
  protected key!: Schemakey;

  constructor(key: Schemakey) {
    this.setSchema(key);
  }

  protected setSchema(key: Schemakey) {
    this.key = key;
    this.schema = JSV.of().getSchema(key);
  }

  public static of(key: Schemakey): ValidateXSD {
    if (!ValidateXSD.instances.has(key)) {
      ValidateXSD.instances.set(key, new ValidateXSD(key));
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
    const valid = this.schema(data, dataCxt);
    if (!valid) {
      console.log(
        `[KEY] => ${this.key}`,
        data,
        JSON.stringify(this.errors, null, 2)
      );
    } else {
      console.log(`[PASS] => ${this.key}`);
    }
    return valid;
  }
}
