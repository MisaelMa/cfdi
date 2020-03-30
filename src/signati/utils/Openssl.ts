import * as os from 'os';
import * as moment from 'moment';
import * as fs from 'fs';
import {terminal} from './Terminal';
import {pki} from 'node-forge';
import {FileSystem} from './FileSystem';
import {anyKey} from '../types/Tags/complements.interface';

interface OptionsSsl {
    keyfile: any;
    pass: string;
}

class Openssl {
    public opensslbin: string = 'openssl';

    constructor() {
        this.opensslbin = this.getOS();
    }

    private getOS(): string {
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

    async getKey(options: OptionsSsl, title: boolean = false) {
        try {
            const opensslpms = ['pkcs8', '-inform', 'DER', '-in', `${options.keyfile}`, '-outform', 'PEM', '-passin', `pass:${options.pass}`];
            let key = await terminal(this.opensslbin, opensslpms);
            if (title) {
                key = key.replace(/(-+[^-]+-+)/g, '');
                key = key.replace(/\s+/g, '');
            }
            return key;
        } catch (e) {
            return e.message;
        }

    }

    async getKeyPem(keyfile: string, title: boolean = false) {
        try {
            const pem = await fs.readFileSync(keyfile);
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

    async getCerPem(cerpempath: string, title: boolean = false) {
        try {
            let cerpem = FileSystem.readFileSync(cerpempath);
            if (title) {
                cerpem = cerpem.replace(/(-+[^-]+-+)/g, '');
                cerpem = cerpem.replace(/\s+/g, '');
            }
            return cerpem;
        } catch (e) {
            return e.message;
        }
    }

    async getCer(cerpath: string, title: boolean = false) {
        try {
            const opensslpms = ['x509', '-inform', 'DER', '-in', `${cerpath}`, '-outform', 'PEM'];
            let pem = await terminal(this.opensslbin, opensslpms);
            if (title) {
                pem = pem.replace(/(-+[^-]+-+)/g, '');
                pem = pem.replace(/\s+/g, '');
            }
            return pem;
        } catch (e) {
            return e.message;
        }
    }

    async getNoCer(cerpath: string) {
        try {
            const opensslpms = ['x509', '-inform', 'DER', '-in', `${cerpath}`, '-outform', 'PEM'];
            const pem = await terminal(this.opensslbin, opensslpms);
            // @ts-ignore
            const serialNumber = pki.certificateFromPem(pem).serialNumber.match(/.{1,2}/g).map((v) => {
                return String.fromCharCode(parseInt(v, 16));
            })
                .join('');
            return serialNumber;
        } catch (e) {
            return e.message;
        }
    }

    async getStarDateCerPem(cerpempath: string) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-startdate'];
            // openssl x509 -enddate -noout -in server.crt
            // const opensslpms = ['x509', '-enddate', 'noout', `${cerpempath}`];
            let startDate: string = await terminal(this.opensslbin, opensslpms);
            // console.log(startDate);
            startDate = startDate.replace('notBefore=', '').replace('  ', '');
            const pattOne = new RegExp('([A-z]{3}) ([0-9]{1,2}) ([0-2][0-9]:[0-5][0-9]:[0-5][0-9]) ([0-9]{4})');
            const findregex = startDate.match(pattOne);
            const fecha = findregex ? findregex[2] + '/' + findregex[1] + '/' + findregex[4] : '';
            const staff = findregex ? findregex[3] : '';
            startDate = moment(new Date(fecha)).format('DD/MM/YYYY') + ' ' + staff;
            return startDate;
        } catch (e) {
            return e;
        }
    }

    async getEndDateCerPem(cerpempath: string) {

        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-enddate'];
            let endDate: string = await terminal(this.opensslbin, opensslpms);
            endDate = endDate.replace('notBefore=', '').replace('  ', '');
            const pattOne = new RegExp('([A-z]{3}) ([0-9]{1,2}) ([0-2][0-9]:[0-5][0-9]:[0-5][0-9]) ([0-9]{4})');
            const findregex = endDate.match(pattOne);
            const fecha = findregex ? findregex[2] + '/' + findregex[1] + '/' + findregex[4] : ''; // +' '+ findregex[3]
            const staff = findregex ? findregex[3] : '';
            endDate = moment(new Date(fecha)).format('DD/MM/YYYY') + ' ' + staff[3];
            return endDate;
        } catch (e) {
            return e;
        }
    }

    async getSubjectCerPem(cerpempath: string) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-subject'];
            let text: any = await terminal(this.opensslbin, opensslpms);
            text = text.replace('subject=', '');
            const stringArray = text.split(',');
            const obj: anyKey = {};
            for (const txt of stringArray) {
                const extrac = txt.split('=');
                if (extrac.length === 2) {
                    const key = extrac[0].replace(/^\s+/g, '').replace(/\s+$/g, '');
                    const val = extrac[1].replace(/^\s+/g, '').replace(/\s+$/g, '');
                    // console.log(key+val);
                    obj[key] = val;
                }
            }
            return obj;
        } catch (e) {
            return e.message;
        }
    }

    async getIssuerCerPem(cerpempath: string) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-issuer'];
            let text: string = await terminal(this.opensslbin, opensslpms);
            text = text.replace('issuer=', '');
            const stringArray = text.split(',');
            // console.log(stringArray)
            const obj: anyKey = {};
            for (const txt of stringArray) {
                const extrac = txt.split('=');
                if (extrac.length === 2) {
                    const key = extrac[0].replace(/^\s+/g, '').replace(/\s+$/g, '');
                    const val = extrac[1].replace(/^\s+/g, '').replace(/\s+$/g, '');
                    // console.log(key+val);
                    obj[key] = val;
                }
            }
            return obj;
        } catch (e) {
            return e.message;
        }
    }

    async getPubkeyCerPem(cerpempath: string, title: boolean = false) {
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

    async getSerialCerPem(cerpempath: string) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-serial'];
            let text: string = await terminal(this.opensslbin, opensslpms);
            text = text.replace('serial=', '').replace(/^\s+/g, '').replace(/\s+$/g, '');
            return text;
        } catch (e) {
            return e.message;
        }
    }

    async getModulesCerPem(cerpempath: string) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-modulus'];
            let text: string = await terminal(this.opensslbin, opensslpms);
            text = text.replace('Modulus=', '').replace(/^\s+/g, '').replace(/\s+$/g, '');
            return text;
        } catch (e) {
            return e.message;
        }
    }
}

export const openssl = new Openssl();
