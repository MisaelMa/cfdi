import { commandSync } from 'execa';
import * as execa from 'execa';

import { getOsComandBin } from '../utils';

import { CliShare } from './cliShare';

/**
 *
 */
class X509 extends CliShare {
  public commandline = '';

  public commandlineArray: string[] = [];

  public command = 'x509';

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
   *help
   */
  public help(): X509 {
    return this;
  }

  /**
   *digest
   */
  public digest(): X509 {
    this.commandline += ` -digest`;
    this.commandlineArray.push(`-digest`);
    return this;
  }

  /**
   *rand
   *
   * @param file
   * file
   */
  public rand(file: string): X509 {
    this.commandline += ` -rand ${file}`;
    this.commandlineArray.push(`-rand ${file}`);
    return this;
  }

  /**
   *writerand
   *
   * @param file
   * file
   */
  public writerand(file: string): X509 {
    this.commandline += ` -writerand ${file}`;
    this.commandlineArray.push(`-writerand ${file}`);
    return this;
  }

  /**
   *engine
   *
   * @param id
   * id
   */
  public engine(id: string | number): X509 {
    this.commandline += ` -engine ${id}`;
    this.commandlineArray.push(`-engine ${id}`);
    return this;
  }

  /**
   *preserve_dates
   */
  public preserve_dates(): X509 {
    // todo validate if use options days
    this.commandline += ` -preserve_dates`;
    this.commandlineArray.push(`-preserve_dates`);
    return this;
  }

  /**
   *text
   */
  public text(): X509 {
    this.commandline += ` -text`;
    this.commandlineArray.push(`-text`);
    return this;
  }

  /**
   *ext
   *
   * @param extensions
   * extensions
   */
  public ext(extensions: string): X509 {
    this.commandline += ` -ext  ${extensions}`;
    this.commandlineArray.push(`-ext  ${extensions}`);
    return this;
  }

  /**
   *certopt
   *
   * @param option
   * option
   */
  public certopt(option: string): X509 {
    this.commandline += ` -certopt  ${option}`;
    this.commandlineArray.push(`-certopt  ${option}`);
    return this;
  }

  /**
   *noout
   */
  public noout(): X509 {
    this.commandline += ` -noout`;
    this.commandlineArray.push(`-noout`);
    return this;
  }

  /**
   *pubkey
   */
  public pubkey(): X509 {
    this.commandline += ` -pubkey`;
    this.commandlineArray.push(`-pubkey`);
    return this;
  }

  /**
   *modulus
   */
  public modulus(): X509 {
    this.commandline += ` -modulus`;
    this.commandlineArray.push(`-modulus`);
    return this;
  }

  /**
   *serial
   */
  public serial(): X509 {
    this.commandline += ` -serial`;
    this.commandlineArray.push(`-serial`);
    return this;
  }

  /**
   *subject_hash
   */
  public subject_hash(): X509 {
    this.commandline += ` -subject_hash`;
    this.commandlineArray.push(`-subject_hash`);
    return this;
  }

  /**
   *issuer_hash
   */
  public issuer_hash(): X509 {
    this.commandline += ` -issuer_hash`;
    this.commandlineArray.push(`-issuer_hash`);
    return this;
  }

  /**
   *ocspid
   */
  public ocspid(): X509 {
    this.commandline += ` -ocspid`;
    this.commandlineArray.push(`-ocspid`);
    return this;
  }

  /**
   *hash
   */
  public hash(): X509 {
    this.commandline += ` -hash`;
    this.commandlineArray.push(`-hash`);
    return this;
  }

  /**
   *subject_hash_old
   */
  public subject_hash_old(): X509 {
    this.commandline += ` -subject_hash_old`;
    this.commandlineArray.push(`-subject_hash_old`);
    return this;
  }

  /**
   *issuer_hash_old
   */
  public issuer_hash_old(): X509 {
    this.commandline += ` -issuer_hash_old`;
    this.commandlineArray.push(`-issuer_hash_old`);
    return this;
  }

  /**
   *subject
   */
  public subject(): X509 {
    this.commandline += ` -subject`;
    this.commandlineArray.push(`-subject`);
    return this;
  }

  /**
   *issuer
   */
  public issuer(): X509 {
    this.commandline += ` -issuer`;
    this.commandlineArray.push(`-issuer`);
    return this;
  }

  /**
   *nameopt
   *
   * @param option
   */
  public nameopt(option: string): X509 {
    this.commandline += ` -nameopt ${option}`;
    this.commandlineArray.push(`-nameopt ${option}`);
    return this;
  }

  /**
   *email
   */
  public email(): X509 {
    this.commandline += ` -email`;
    this.commandlineArray.push(`-email`);
    return this;
  }

  /**
   *ocsp_uri
   */
  public ocsp_uri(): X509 {
    this.commandline += ` -ocsp_uri`;
    this.commandlineArray.push(`-ocsp_uri`);
    return this;
  }

  /**
   *startdate
   */
  public startdate(): X509 {
    this.commandline += ` -startdate`;
    this.commandlineArray.push(`-startdate`);
    return this;
  }

  /**
   *enddate
   */
  public enddate(): X509 {
    this.commandline += ` -enddate`;
    this.commandlineArray.push(`-enddate`);
    return this;
  }

  /**
   *dates
   */
  public dates(): X509 {
    this.commandline += ` -dates`;
    this.commandlineArray.push(`-dates`);
    return this;
  }

  /**
   *checkend
   *
   * @param num
   * num
   */
  public checkend(num: string | number): X509 {
    this.commandline += ` -checkend ${num}`;
    this.commandlineArray.push(`-checkend ${num}`);
    return this;
  }

  /**
   *fingerprint
   */
  public fingerprint(): X509 {
    this.commandline += ` -fingerprint`;
    this.commandlineArray.push(`-fingerprint`);
    return this;
  }

  /**
   * C
   */
  public C(): X509 {
    this.commandline += ` -C`;
    this.commandlineArray.push(`-C`);
    return this;
  }

  /**
   *trustout
   */
  public trustout(): X509 {
    this.commandline += ` -trustout`;
    this.commandlineArray.push(`-trustout`);
    return this;
  }

  /**
   *setalias
   *
   * @param arg
   * arg
   */
  public setalias(arg: string): X509 {
    this.commandline += ` -setalias ${arg}`;
    this.commandlineArray.push(`-setalias ${arg}`);
    return this;
  }

  /**
   *alias
   */
  public alias(): X509 {
    this.commandline += ` -alias`;
    this.commandlineArray.push(`-alias`);
    return this;
  }

  /**
   *clrtrust
   */
  public clrtrust(): X509 {
    this.commandline += ` -clrtrust`;
    this.commandlineArray.push(`-clrtrust`);
    return this;
  }

  /**
   *clrreject
   */
  public clrreject(): X509 {
    this.commandline += ` -clrreject`;
    this.commandlineArray.push(`-clrreject`);
    return this;
  }

  /**
   *addtrust
   *
   * @param arg
   * arg
   */
  public addtrust(arg: string): X509 {
    this.commandline += ` -addtrust ${arg}`;
    this.commandlineArray.push(`-addtrust ${arg}`);
    return this;
  }

  /**
   *addreject
   *
   * @param arg
   * arg
   */
  public addreject(arg: string): X509 {
    this.commandline += ` -addreject ${arg}`;
    this.commandlineArray.push(`-addreject ${arg}`);
    return this;
  }

  /**
   *purpose
   */
  public purpose(): X509 {
    this.commandline += ` -purpose`;
    this.commandlineArray.push(`-purpose`);
    return this;
  }

  /**
   *sigopt
   *
   * @param arg
   * arg
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public sigopt(arg: string): X509 {
    // todo
    return this;
  }

  /**
   *clrext
   */
  public clrext(): X509 {
    this.commandline += ` -clrext`;
    this.commandlineArray.push(`-clrext`);
    return this;
  }

  /**
   *keyform
   *
   * @param options
   * options
   */
  public keyform(options: 'DER' | 'PEM' | 'ENGINE'): X509 {
    this.commandline += ` -keyform ${options}`;
    this.commandlineArray.push(`-keyform ${options}`);
    return this;
  }

  /**
   *days
   *
   * @param arg
   * arg
   */
  public days(arg: string): X509 {
    this.commandline += ` -days ${arg}`;
    this.commandlineArray.push(`-days ${arg}`);
    return this;
  }

  /**
   *x509toreq
   */
  public x509toreq(): X509 {
    this.commandline += ` -x509toreq`;
    this.commandlineArray.push(`-x509toreq`);
    return this;
  }

  /**
   *req
   */
  public req(): X509 {
    this.commandline += ` -req`;
    this.commandlineArray.push(`-req`);
    return this;
  }

  /**
   *set_serial
   *
   * @param n
   * n
   */
  public set_serial(n: string): X509 {
    this.commandline += ` -set_serial ${n}`;
    this.commandlineArray.push(`-set_serial ${n}`);
    return this;
  }

  /**
   *CA
   *
   * @param filename
   * filename
   */
  public CA(filename: string): X509 {
    this.commandline += ` -CA ${filename}`;
    this.commandlineArray.push(`-CA ${filename}`);
    return this;
  }

  /**
   *CAkey
   *
   * @param filename
   * filename
   */
  public CAkey(filename: string): X509 {
    this.commandline += ` -CAkey ${filename}`;
    this.commandlineArray.push(`-CAkey ${filename}`);
    return this;
  }

  /**
   *
   * CAserial
   *
   * @param filename
   * filename
   */
  public CAserial(filename: string): X509 {
    this.commandline += ` -CAserial ${filename}`;
    this.commandlineArray.push(`-CAserial ${filename}`);
    return this;
  }

  /**
   *CAcreateserial
   */
  public CAcreateserial(): X509 {
    this.commandline += ` -CAcreateserial`;
    this.commandlineArray.push(`-CAcreateserial`);
    return this;
  }

  /**
   *extfile
   *
   * @param filename
   * filename
   */
  public extfile(filename: string): X509 {
    this.commandline += ` -extfile ${filename}`;
    this.commandlineArray.push(`-extfile ${filename}`);
    return this;
  }

  /**
   *extensions
   *
   * @param section
   * section
   */
  public extensions(section: string): X509 {
    this.commandline += ` -extensions ${section}`;
    this.commandlineArray.push(`-extensions ${section}`);
    return this;
  }

  /**
   *force_pubkey
   *
   * @param key
   * key
   * @param key
   */
  public force_pubkey(key: string): X509 {
    this.commandline += ` -force_pubkey ${key}`;
    this.commandlineArray.push(`-force_pubkey ${key}`);
    return this;
  }
}

export const x509 = new X509();
