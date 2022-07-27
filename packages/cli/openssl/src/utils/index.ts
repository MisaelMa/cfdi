import * as fs from 'fs';
import * as os from 'os';

export function getOsComandBin(): string {
    if (os.platform() === 'win32') {
        return 'openssl.exe';
        /*if (os.arch() == 'ia32') {
          var chilkat = require('@chilkat/ck-node11-win-ia32');
        } else {
          var chilkat = require('@chilkat/ck-node11-win64');
        }*/
    } else if (os.platform() === 'linux') {
        return 'openssl';
        /*if (os.arch() == 'arm') {
          var chilkat = require('@chilkat/ck-node11-arm');
        } else if (os.arch() == 'x86') {
          var chilkat = require('@chilkat/ck-node11-linux32');
        } else {
          var chilkat = require('@chilkat/ck-node11-linux64');
        }*/
    } else if (os.platform() === 'darwin') {
        return 'openssl';
        // var chilkat = require('@chilkat/ck-node11-macosx');
    }
    return 'openssl';
}

export function readFileSync(file: string) {
    return fs.readFileSync(file, 'utf8');
}
