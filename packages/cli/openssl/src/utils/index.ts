import * as fs from 'fs';
import * as os from 'os';

/**
 *getOsComandBin
 */
export function getOsComandBin(): string {
  if (os.platform() === 'win32') {
    return 'openssl.exe';
    /* if (os.arch() == 'ia32') {
          var chilkat = require('@chilkat/ck-node11-win-ia32');
        } else {
          var chilkat = require('@chilkat/ck-node11-win64');
        } */
  }
  if (os.platform() === 'linux') {
    return 'openssl';
  }
  if (os.platform() === 'darwin') {
    return 'openssl';
  }
  return 'openssl';
}

/**
 *readFileSync
 *
 * @param file
 * file
 */
export function readFileSync(file: string): string {
  return fs.readFileSync(file, 'utf8');
}
