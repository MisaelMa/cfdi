import { getOsComandBin } from '../utils';

import { CliShare } from './cliShare';

/**
 *
 */
class X509 extends CliShare {
  public commandline: string[] = [];

  public command = 'x509';

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
   *help
   */
  public help(): X509 {
    return this;
  }

  /**
   *digest
   */
  public digest(): X509 {
    this.commandline.push(`-digest`);
    return this;
  }

  /**
   *rand
   *
   * @param file
   * file
   */
  public rand(file: string): X509 {
    this.commandline.push(`-rand ${file}`);
    return this;
  }

  /**
   *writerand
   *
   * @param file
   * file
   */
  public writerand(file: string): X509 {
    this.commandline.push(`-writerand ${file}`);
    return this;
  }

  /**
   *engine
   *
   * @param id
   * id
   */
  public engine(id: string | number): X509 {
    this.commandline.push(`-engine ${id}`);
    return this;
  }

  /**
   *preserve_dates
   */
  public preserve_dates(): X509 {
    // todo validate if use options days
    this.commandline.push(`-preserve_dates`);
    return this;
  }

  /**
   *text
   */
  public text(): X509 {
    this.commandline.push(`-text`);
    return this;
  }

  /**
   *ext
   *
   * @param extensions
   * extensions
   */
  public ext(extensions: string): X509 {
    this.commandline.push(`-ext  ${extensions}`);
    return this;
  }

  /**
   *certopt
   *
   * @param option
   * option
   */
  public certopt(option: string): X509 {
    this.commandline.push(`-certopt  ${option}`);
    return this;
  }

  /**
   *noout
   */
  public noout(): X509 {
    this.commandline.push(`-noout`);
    return this;
  }

  /**
   *pubkey
   */
  public pubkey(): X509 {
    this.commandline.push(`-pubkey`);
    return this;
  }

  /**
   *modulus
   */
  public modulus(): X509 {
    this.commandline.push(`-modulus`);
    return this;
  }

  /**
   *serial
   */
  public serial(): X509 {
    this.commandline.push(`-serial`);
    return this;
  }

  /**
   *subject_hash
   */
  public subject_hash(): X509 {
    this.commandline.push(`-subject_hash`);
    return this;
  }

  /**
   *issuer_hash
   */
  public issuer_hash(): X509 {
    this.commandline.push(`-issuer_hash`);
    return this;
  }

  /**
   *ocspid
   */
  public ocspid(): X509 {
    this.commandline.push(`-ocspid`);
    return this;
  }

  /**
   *hash
   */
  public hash(): X509 {
    this.commandline.push(`-hash`);
    return this;
  }

  /**
   *subject_hash_old
   */
  public subject_hash_old(): X509 {
    this.commandline.push(`-subject_hash_old`);
    return this;
  }

  /**
   *issuer_hash_old
   */
  public issuer_hash_old(): X509 {
    this.commandline.push(`-issuer_hash_old`);
    return this;
  }

  /**
   *subject
   */
  public subject(): X509 {
    this.commandline.push(`-subject`);
    return this;
  }

  /**
   *issuer
   */
  public issuer(): X509 {
    this.commandline.push(`-issuer`);
    return this;
  }

  /**
   *nameopt
   *
   * @param option
   */
  public nameopt(option: string): X509 {
    this.commandline.push(`-nameopt ${option}`);
    return this;
  }

  /**
   *email
   */
  public email(): X509 {
    this.commandline.push(`-email`);
    return this;
  }

  /**
   *ocsp_uri
   */
  public ocsp_uri(): X509 {
    this.commandline.push(`-ocsp_uri`);
    return this;
  }

  /**
   *startdate
   */
  public startdate(): X509 {
    this.commandline.push(`-startdate`);
    return this;
  }

  /**
   *enddate
   */
  public enddate(): X509 {
    this.commandline.push(`-enddate`);
    return this;
  }

  /**
   *dates
   */
  public dates(): X509 {
    this.commandline.push(`-dates`);
    return this;
  }

  /**
   *checkend
   *
   * @param num
   * num
   */
  public checkend(num: string | number): X509 {
    this.commandline.push(`-checkend ${num}`);
    return this;
  }

  /**
   *fingerprint
   */
  public fingerprint(): X509 {
    this.commandline.push(`-fingerprint`);
    return this;
  }

  /**
   * C
   */
  public C(): X509 {
    this.commandline.push(`-C`);
    return this;
  }

  /**
   *trustout
   */
  public trustout(): X509 {
    this.commandline.push(`-trustout`);
    return this;
  }

  /**
   *setalias
   *
   * @param arg
   * arg
   */
  public setalias(arg: string): X509 {
    this.commandline.push(`-setalias ${arg}`);
    return this;
  }

  /**
   *alias
   */
  public alias(): X509 {
    this.commandline.push(`-alias`);
    return this;
  }

  /**
   *clrtrust
   */
  public clrtrust(): X509 {
    this.commandline.push(`-clrtrust`);
    return this;
  }

  /**
   *clrreject
   */
  public clrreject(): X509 {
    this.commandline.push(`-clrreject`);
    return this;
  }

  /**
   *addtrust
   *
   * @param arg
   * arg
   */
  public addtrust(arg: string): X509 {
    this.commandline.push(`-addtrust ${arg}`);
    return this;
  }

  /**
   *addreject
   *
   * @param arg
   * arg
   */
  public addreject(arg: string): X509 {
    this.commandline.push(`-addreject ${arg}`);
    return this;
  }

  /**
   *purpose
   */
  public purpose(): X509 {
    this.commandline.push(`-purpose`);
    return this;
  }

  /**
   *sigopt
   *
   * @param arg
   * arg
   */
  public sigopt(): X509 {
    // todo
    return this;
  }

  /**
   *clrext
   */
  public clrext(): X509 {
    this.commandline.push(`-clrext`);
    return this;
  }

  /**
   *keyform
   *
   * @param options
   * options
   */
  public keyform(options: 'DER' | 'PEM' | 'ENGINE'): X509 {
    this.commandline.push(`-keyform ${options}`);
    return this;
  }

  /**
   *days
   *
   * @param arg
   * arg
   */
  public days(arg: string): X509 {
    this.commandline.push(`-days ${arg}`);
    return this;
  }

  /**
   *x509toreq
   */
  public x509toreq(): X509 {
    this.commandline.push(`-x509toreq`);
    return this;
  }

  /**
   *req
   */
  public req(): X509 {
    this.commandline.push(`-req`);
    return this;
  }

  /**
   *set_serial
   *
   * @param n
   * n
   */
  public set_serial(n: string): X509 {
    this.commandline.push(`-set_serial ${n}`);
    return this;
  }

  /**
   *CA
   *
   * @param filename
   * filename
   */
  public CA(filename: string): X509 {
    this.commandline.push(`-CA ${filename}`);
    return this;
  }

  /**
   *CAkey
   *
   * @param filename
   * filename
   */
  public CAkey(filename: string): X509 {
    this.commandline.push(`-CAkey ${filename}`);
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
    this.commandline.push(`-CAserial ${filename}`);
    return this;
  }

  /**
   *CAcreateserial
   */
  public CAcreateserial(): X509 {
    this.commandline.push(`-CAcreateserial`);
    return this;
  }

  /**
   *extfile
   *
   * @param filename
   * filename
   */
  public extfile(filename: string): X509 {
    this.commandline.push(`-extfile ${filename}`);
    return this;
  }

  /**
   *extensions
   *
   * @param section
   * section
   */
  public extensions(section: string): X509 {
    this.commandline.push(`-extensions ${section}`);
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
    this.commandline.push(`-force_pubkey ${key}`);
    return this;
  }
}

export const x509 = new X509();
