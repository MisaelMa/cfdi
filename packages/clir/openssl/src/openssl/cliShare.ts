import * as execa from 'execa';
import { commandSync } from 'execa';

import { getOsComandBin } from '../utils';

/**
 * CliShare
 */
export class CliShare {
  public commandline: string[] = [];

  public command = '';

  public opensslBin = '';

  /**
   *constructor
   */
  constructor() {
    this.opensslBin = getOsComandBin();
    this.commandline.push(this.opensslBin);
  }

  /**
   *inform
   *
   * @param options
   * options
   * 'DER' | 'PEM'
   */
  public inform(options: 'DER' | 'PEM'): this {
    this.commandline.push(`-inform ${options}`);
    return this;
  }

  /**
   *outform
   *
   * @param options
   * options
   */
  public outform(options: 'DER' | 'PEM'): this {
    this.commandline.push(`-outform ${options}`);
    return this;
  }

  /**
   *in
   *
   * @param filename
   * filename
   */
  public in(filename: string): this {
    this.commandline.push(`-in ${filename}`);
    return this;
  }

  // todo https://www.openssl.org/docs/man1.1.1/man1/openssl.html
  /**
   *passin
   *
   * @param arg
   * arg
   */
  public passin(arg: string): this {
    this.commandline.push(`-passin ${arg}`);
    return this;
  }

  /**
   *passout
   *
   * @param arg
   * arg
   */
  public passout(arg: string): this {
    this.commandline.push(`-passout ${arg}`);
    return this;
  }

  /**
   *out
   *
   * @param filename
   * filename
   */
  public out(filename: string): this {
    this.commandline.push(`-out ${filename}`);
    return this;
  }

  /**
   *run
   *
   * @param options
   * options
   */
  public run(options?: execa.SyncOptions): string {
    try {
      const cli = this.commandline.join(' ');
      this.commandline = [this.commandline[0], this.commandline[1]];
      const openssl = commandSync(cli, options).stdout;
      return openssl;
    } catch (e) {
      throw new Error('run');
    }
  }

  /**
   *cli
   */
  public cli(): string {
    try {
      const cli = this.commandline.join(' ');
      this.commandline = [this.commandline[0], this.commandline[1]];
      return cli;
    } catch (e) {
      throw new Error('cli');
    }
  }
}
