import { ComplementsReturn } from 'src/types/tags/complements.interface';
interface ConfigComplemento {
  xmlns: string;
  key: string;
  xsd: string;
}

export abstract class Complemento<T = any> {
  public complemento: T = {} as T;
  private xmlns: string;
  private key: string;
  private schemaLocation: string[] = [];
  private xmlnskey: string;
  constructor(config: ConfigComplemento) {
    const { key, xmlns, xsd } = config;
    this.xmlns = xmlns;
    this.key = key;
    this.xmlnskey = this.key.split(':')[0];
    this.schemaLocation.push(xmlns);
    this.schemaLocation.push(xsd);
  }

  public getComplement(): ComplementsReturn<T> {
    return {
      complement: this.complemento,
      key: this.key,
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
