import { getOsComandBin } from '../utils';

import { CliShare } from './cliShare';

/**
 *
 */
class Pkcs8 extends CliShare {
  public commandline: string[] = [];

  public command = 'pkcs8';

  public opensslBin = '';

  /**
   *constructor
   */
  constructor() {
    super();
    this.opensslBin = getOsComandBin();
    this.commandline.push(this.opensslBin);
    this.commandline.push(this.command);
  }

  /**
   *topk8
   */
  public topk8(): Pkcs8 {
    this.commandline.push(`-topk8`);
    return this;
  }

  /**
   *traditional
   */
  public traditional(): Pkcs8 {
    this.commandline.push(`-traditional`);
    return this;
  }

  /**
   *iter
   *
   * @param count
   * count
   */
  public iter(count: number): Pkcs8 {
    this.commandline.push(`-iter ${count}`);
    return this;
  }

  /**
   *nocrypt
   */
  public nocrypt(): Pkcs8 {
    this.commandline.push(`-nocrypt`);
    return this;
  }

  /**
   *rand
   *
   * @param file
   * file
   */
  public rand(file: string): Pkcs8 {
    this.commandline.push(`-rand ${file}`);
    return this;
  }
}
export const pkcs8 = new Pkcs8();
