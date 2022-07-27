import { getOsComandBin } from '../utils';

import { CliShare } from './cliShare';

/**
 *
 */
class Pkcs8 extends CliShare {
  public commandline = '';

  public commandlineArray: string[] = [];

  public command = 'pkcs8';

  public opensslBin = '';

  /**
   *constructor
   */
  constructor() {
    super();
    this.opensslBin = getOsComandBin();
    this.commandline = `${this.opensslBin} ${this.command}`;
  }

  /**
   *topk8
   */
  public topk8(): Pkcs8 {
    this.commandline += ` -topk8`;
    this.commandlineArray.push(`-topk8`);
    return this;
  }

  /**
   *traditional
   */
  public traditional(): Pkcs8 {
    this.commandline += ` -traditional`;
    this.commandlineArray.push(`-traditional`);
    return this;
  }

  /**
   *iter
   *
   * @param count
   * count
   */
  public iter(count: number): Pkcs8 {
    this.commandline += ` -iter ${count}`;
    this.commandlineArray.push(`-iter ${count}`);
    return this;
  }

  /**
   *nocrypt
   */
  public nocrypt(): Pkcs8 {
    this.commandline += ` -nocrypt`;
    this.commandlineArray.push(`-nocrypt`);
    return this;
  }

  /**
   *rand
   *
   * @param file
   * file
   */
  public rand(file: string): Pkcs8 {
    this.commandline += ` -rand ${file}`;
    this.commandlineArray.push(`-rand ${file}`);
    return this;
  }
}
export const pkcs8 = new Pkcs8();
