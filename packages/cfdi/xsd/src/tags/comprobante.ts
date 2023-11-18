import { AnyValidateFunction, SchemaObject } from 'ajv/dist/core';

import { JSV } from '../JSV';

export class Comprobante {
  private comprobante: AnyValidateFunction;
  private comprobanteInit!: AnyValidateFunction;
  private schema: SchemaObject = {};
  private keyInitSchema = 'comprobante-init.json';
  private override_required = ['Sello', 'NoCertificado', 'Certificado'];
  constructor(comprobante: AnyValidateFunction) {
    this.comprobante = comprobante;
    this.schema = { ...(comprobante.schema as unknown as any) };
    this.schemaInit();
  }
  get errors() {
    return this.comprobante.errors;
  }

  get errorsInit() {
    return this.comprobanteInit.errors;
  }
  public validate(data: Record<string, any>) {
    return this.comprobante(data);
  }

  public validateInit(data: Record<string, any>) {
    return this.comprobanteInit(data);
  }
  private schemaInit() {
    this.schema.$id = this.keyInitSchema;
    this.override_required.forEach((item) => {
      const index = this.schema.required.find((p: string) => p === item);
      if (index !== -1) {
        this.schema.required.splice(index, 1);
      }
    });
    this.schema.properties.NoCertificado = {
      description: '',
      type: 'string',
    };
    JSV.of().addSchema(this.schema, this.keyInitSchema);
    this.comprobanteInit = JSV.of().getSchema(this.keyInitSchema);
  }
}
