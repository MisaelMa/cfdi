import * as fs from 'fs';
import {pkcs8} from './pkcs8';

class Key {

    public async getKey(keyfile: string, password: string): Promise<{ privateKeyPem: string, privatekey: string }> {
        try {
            // const keyPem = commandSync(`${getOsComandBin()} pkcs8 -inform DER -in ${keyfile} -outform PEM -passin pass:${password}`).stdout;
            const keyPem = pkcs8.inform('DER').in(keyfile).outform('PEM').passin('pass:' + password).run();
            const privateKey = {
                privateKeyPem: keyPem,
                privatekey: keyPem.replace(/(-+[^-]+-+)/g, '').replace(/\s+/g, '')
            }
            return privateKey
        } catch (e) {
            return e.message
        }
    }

    public async generaKeyPem(filePathKey: string, outputpath: string) {
        return 1;
    }

    public async getKeyPem(keyfile: string, title: boolean = false) {
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
            return e.message;
        }
    }
}

export const key = new Key()
