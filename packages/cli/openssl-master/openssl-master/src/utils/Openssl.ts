import * as fs from 'fs';
import * as moment from 'moment';
import {pki} from 'node-forge';
import * as os from 'os';
import {AnyKey, OptionsSsl} from '../interface/certificate.interface';


class Openssl {
    public opensslbin: string = 'openssl';
        /*



    public async getPubkeyCerPem(cerpempath: string, title: boolean = false) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-pubkey'];
            let pem: string = await terminal(this.opensslbin, opensslpms);
            if (title) {
                pem = pem.replace(/(-+[^-]+-+)/g, '');
                pem = pem.replace(/\s+/g, '');
            }
            return pem;
        } catch (e) {
            return e.message;
        }
    }

    public async getSerialCerPem(cerpempath: string) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-serial'];
            let text: string = await terminal(this.opensslbin, opensslpms);
            text = text.replace('serial=', '').replace(/^\s+/g, '').replace(/\s+$/g, '');
            return text;
        } catch (e) {
            return e.message;
        }
    }

    public async getModulesCerPem(cerpempath: string) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-modulus'];
            let text: string = await terminal(this.opensslbin, opensslpms);
            text = text.replace('Modulus=', '').replace(/^\s+/g, '').replace(/\s+$/g, '');
            return text;
        } catch (e) {
            return e.message;
        }
    }
    */
}

export const openssl = new Openssl();
