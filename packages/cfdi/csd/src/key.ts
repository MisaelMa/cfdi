import * as fs from 'fs';

import { pkcs8 } from '@clir/openssl';

/**
 *
 */
class Key {
  /**
   *getKey
   *
   * @param keyfile
   * string
   * @param password
   * string
   */
  public getKey(
    keyfile: string,
    password: string
  ): { privateKeyPem: string; privatekey: string } {
    const cli = pkcs8
      .inform('DER')
      .in(keyfile)
      .outform('PEM')
      .passin(`pass:${password}`);
    try {
      // const keyPem = commandSync(`${getOsComandBin()} pkcs8 -inform DER -in ${keyfile} -outform PEM -passin pass:${password}`).stdout;

      const keyPem = cli.run();
      const privateKey = {
        privateKeyPem: keyPem,
        privatekey: keyPem.replace(/(-+[^-]+-+)/g, '').replace(/\s+/g, ''),
      };
      return privateKey;
    } catch (e) {
      const keyPem = cli.cli();
      throw new Error(keyPem);
    }
  }

  /**
   *generaKeyPem
   *
   * @param filePathKey
   * string
   * @param outputpath
   * outputpath
   */
  public generaKeyPem(filePathKey: string, outputpath: string): string {
    return filePathKey + outputpath;
  }

  /**
   *getKeyPem
   *
   * @param keyfile
   * string
   * @param title
   * bolean
   */
  public async getKeyPem(keyfile: string, title = false): Promise<string> {
    try {
      const pem = await fs.readFileSync(keyfile);
      // tslint:disable-next-line:no-shadowed-variable
      let key = pem.toString('ascii');
      if (title) {
        key = key.replace(/(-+[^-]+-+)/g, '');
        key = key.replace(/\s+/g, '');
      }
      return key;
    } catch (e) {
      throw new Error('getKeyPem');
    }
  }
}

export const key = new Key();
