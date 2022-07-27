import * as execa from 'execa';
import { commandSync } from 'execa';

import { getOsComandBin } from '../utils';

/**
 * CliShare
 */
export class CliShare {
  public commandline = '';

  public commandlineArray: string[] = [];

  public command = '';

  public opensslBin = '';

  /**
   *constructor
   */
  constructor() {
    this.opensslBin = getOsComandBin();
    this.commandline = this.opensslBin;
  }

  /**
   *inform
   *
   * @param options
   * options
   * 'DER' | 'PEM'
   */
  public inform(options: 'DER' | 'PEM'): CliShare {
    this.commandline += ` -inform ${options}`;
    this.commandlineArray.push(`-inform ${options}`);
    return this;
  }

  /**
   *outform
   *
   * @param options
   * options
   */
  public outform(options: 'DER' | 'PEM'): CliShare {
    this.commandline += ` -outform  ${options}`;
    this.commandlineArray.push(`-outform ${options}`);
    return this;
  }

  /**
   *in
   *
   * @param filename
   * filename
   */
  public in(filename: string): CliShare {
    this.commandline += ` -in  ${filename}`;
    this.commandlineArray.push(`-in ${filename}`);
    return this;
  }

  // todo https://www.openssl.org/docs/man1.1.1/man1/openssl.html
  /**
   *passin
   *
   * @param arg
   * arg
   */
  public passin(arg: string): CliShare {
    this.commandline += ` -passin ${arg}`;
    this.commandlineArray.push(`-passin ${arg}`);
    return this;
  }

  /**
   *passout
   *
   * @param arg
   * arg
   */
  public passout(arg: string): CliShare {
    this.commandline += ` -passout ${arg}`;
    this.commandlineArray.push(`-passout ${arg}`);
    return this;
  }

  /**
   *out
   *
   * @param filename
   * filename
   */
  public out(filename: string): CliShare {
    this.commandline += ` -out ${filename}`;
    this.commandlineArray.push(`-out ${filename}`);
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
      const cli = this.commandline;
      this.commandline = `${this.opensslBin} ${this.command}`;
      const saxonProc = commandSync(cli, options).stdout;
      return saxonProc;
    } catch (e) {
      throw new Error('run');
    }
  }

  /**
   *cli
   */
  public cli(): string | Error {
    try {
      const cp = this.commandline;
      this.commandline = `${this.opensslBin} ${this.command}`;
      return cp;
    } catch (e) {
      throw new Error('cli');
    }
  }

  /**
   *cliArray
   */
  public cliArray(): string[] {
    try {
      const cp = [...this.commandlineArray];
      this.commandlineArray = [];
      return cp;
    } catch (e) {
      throw new Error('cliArray');
    }
  }
}
