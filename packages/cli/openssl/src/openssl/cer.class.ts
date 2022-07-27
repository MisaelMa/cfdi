import moment = require('moment');
import {pki} from 'node-forge';
import {AnyKey} from '../interface/certificate.interface';
import {readFileSync} from '../utils';
import {x509} from './x509';

class Cer {
    public async generaCerPem(filePathCer: string, outputpath: string) {
        return 1;
    }

    public getCer(cerpath: string): {
        cer: string;
        nocer: string;
    } {
        return {
            cer: this.getCertificate(cerpath).certificate,
            nocer: this.getNoCer(cerpath)
        };
    }

    public getCertificate(cerFile: string): { certificate: string; cerPem: string } {
        try {
            // const pem = commandSync(`${getOsComandBin()} x509 -inform DER -in ${cer} -outform PEM`).stdout
            const pem = x509.inform('DER').in(cerFile).outform('PEM').run();
            const cerPem = {
                cerPem: pem,
                certificate: pem.replace(/(-+[^-]+-+)/g, '').replace(/\s+/g, '')
            }
            return cerPem

        } catch (e) {
            return e.message
        }
    }

    public getNoCer(cerFile: string): string {
        try {

            const pem = x509.inform('DER').in(cerFile).outform('PEM').run();
            // @ts-ignore
            const serialNumber = pki.certificateFromPem(pem).serialNumber.match(/.{1,2}/g).map((v) => {
                return String.fromCharCode(parseInt(v, 16));
            }).join('');
            return serialNumber;
        } catch (e) {
            return e.message
        }
    }

    public async agetCerPem(cerpempath: string) {
        return 1;
    }

    public async getCerFile(cerfile: string) {
        return 1;
    }

    public async text(cerFile: string): Promise<string> {
        try {
            return x509.inform('DER').in(cerFile).noout().text().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -text`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async pubkey(cerFile: string): Promise<{ pubkeyData: string; pubkey: string }> {
        try {
            const cli = x509.inform('DER').in(cerFile).noout().pubkey().run()
            // const result = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -pubkey`).stdout;
            const pubkey = {
                pubkey: cli,
                pubkeyData: '',
            }
            pubkey.pubkeyData = cli.replace(/(-+[^-]+-+)/g, '').replace(/\s+/g, '');
            return pubkey;
        } catch (e) {
            return e.message
        }
    }

    public async modulu(cerFile: string): Promise<{ modulus: string }> {
        try {
            // const result = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -modulus`).stdout
            const cli = x509.inform('DER').in(cerFile).noout().modulus().run()
            const modul = {
                modulus: cli.replace('Modulus=', '').replace(/^\s+/g, '').replace(/\s+$/g, '')
            }
            return modul

        } catch (e) {
            return e.message
        }
    }

    public async serial(cerFile: string): Promise<{ serial: string }> {
        try {
            // const result = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -serial`).stdout
            const cli = x509.inform('DER').in(cerFile).noout().serial().run()
            const seria = {
                serial: cli.replace('serial=', '').replace(/^\s+/g, '').replace(/\s+$/g, '')
            }
            return seria;
        } catch (e) {
            return e.message
        }
    }

    public async subjectHash(cerFile: string): Promise<string> {
        try {
            return x509.inform('DER').in(cerFile).noout().subject_hash().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -subject_hash`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async issuerHash(cerFile: string): Promise<string> {
        try {
            return x509.inform('DER').in(cerFile).noout().issuer_hash().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -issuer_hash`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async ocspid(cerFile: string): Promise<string> {
        try {

            return x509.inform('DER').in(cerFile).noout().ocspid().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -ocspid`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async hash(cerFile: string): Promise<string> {
        try {
            return x509.inform('DER').in(cerFile).noout().hash().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -hash`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async subjectHashOld(cerFile: string): Promise<string> {
        try {
            return x509.inform('DER').in(cerFile).noout().subject_hash_old().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -subject_hash_old`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async issuerHashOld(cerFile: string): Promise<string> {
        try {
            return x509.inform('DER').in(cerFile).noout().issuer_hash_old().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -issuer_hash_old`).stdout
        } catch (e) {
            return e.message
        }
    }

    public subject(cerFile: string): AnyKey {
        try {
            let text = x509.inform('DER').in(cerFile).noout().subject().run()
            // let text = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -subject`).stdout
            text = text.replace('subject=', '');
            const stringArray = text.split(',');
            const obj: AnyKey = {};
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
            return e.message
        }
    }

    public async date(file: string, format: string = 'DD/MM/YYYY HH:mm:ss.SSS'): Promise<{ startDate: string, endDate: string }> {
        try {
            // let startDateCer = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -startdate`).stdout
            const DateCer = x509.inform('DER').in(file).noout().startdate().enddate().run();
            const data = DateCer.split('\n');
            let startDate = data[0].replace('notBefore=', '').replace('  ', '');
            let endDate = data[1].replace('notAfter=', '').replace('  ', '');

            const pattOne = new RegExp('([A-z]{3}) ([0-9]{1,2}) ([0-2][0-9]:[0-5][0-9]:[0-5][0-9]) ([0-9]{4})');

            const st = startDate.match(pattOne);
            const stfecha = st ? st[2] + '/' + st[1] + '/' + st[4] : ''; // +' '+ findregex[3]
            const ststaff = st ? st[3] : '';

            startDate = moment(new Date(stfecha + ' ' + ststaff)).format(format)

            const ed = endDate.match(pattOne);
            const edfecha = ed ? ed[2] + '/' + ed[1] + '/' + ed[4] : ''; // +' '+ findregex[3]
            const edstaff = ed ? ed[3] : '';

            endDate = moment(new Date(edfecha + ' ' + edstaff)).format(format)

            return {
                startDate,
                // tslint:disable-next-line:object-literal-sort-keys
                endDate
            };
        } catch (e) {
            return e.message
        }
    }


    public async getSerialCert() {
        return 1;
    }

    public async getFechaVigencia() {
        return 1;
    }

    public async getCerPem(cerpempath: string, title: boolean = false) {
        try {
            let cerpem = readFileSync(cerpempath);
            if (title) {
                cerpem = cerpem.replace(/(-+[^-]+-+)/g, '');
                cerpem = cerpem.replace(/\s+/g, '');
            }
            return cerpem;
        } catch (e) {
            return e.message;
        }
    }

    public issuer(cerFile: string): AnyKey {
        try {
            // let text = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -issuer`, {encoding: 'utf8'}).stdout
            let text = x509.inform('DER').in(cerFile).noout().issuer().run({encoding: 'utf8'})
            text = text.replace('issuer=', '');
            const stringArray = text.split(',');
            // console.log(stringArray)
            const obj: AnyKey = {};
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
            return e.message
        }
    }

    public async email(cerFile: string): Promise<string> {
        try {
            return x509.inform('DER').in(cerFile).noout().email().run();
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -email`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async ocspUri(cerFile: string): Promise<string> {
        try {
            return x509.inform('DER').in(cerFile).noout().ocsp_uri().run();
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -ocsp_uri`).stdout
        } catch (e) {
            return e.message
        }
    }


    public async Dates(cerFile: string): Promise<string> {
        try {
            return x509.inform('DER').in(cerFile).noout().dates().run();
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -dates`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async checkend(cerFile: string, seconds: string | number): Promise<any> {
        try {
            // Certificate will expire El certificado caducará
            // Certificate will not expire El certificado no caducará
            // const check = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -checkend ${seconds}`).stdout
            const check = x509.inform('DER').in(cerFile).noout().checkend(seconds).run();
            return check
        } catch (e) {
            return e.message
        }
    }

    public async fingerPrint(cerFile: string): Promise<any> {
        try {
            // Certificate will expire El certificado caducará
            // Certificate will not expire El certificado no caducará
            // const check = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -fingerprint`).stdout
            const check = x509.inform('DER').in(cerFile).noout().fingerprint().run();
            return check
        } catch (e) {
            return e.message
        }
    }

    public async C(cerFile: string): Promise<any> {
        try {
            // Certificate will expire El certificado caducará
            // Certificate will not expire El certificado no caducará
            // const check = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -C`).stdout
            const check = x509.inform('DER').in(cerFile).noout().C().run();
            return check
        } catch (e) {
            return e.message
        }
    }

    public async validarCertificado() {
        return 1;
    }

    public async generaPFX() {
        return 1;
    }


    public async pareja() {
        return 1;
    }

    public async certificadoBase64(nombreCer: any) {
        return 1;
    }


    //


    // async getStarDateCerPem(cerpempath: string) {
    //     try {
    //         const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-startdate'];
    //         // openssl x509 -enddate -noout -in server.crt
    //         // const opensslpms = ['x509', '-enddate', 'noout', `${cerpempath}`];
    //         let startDate: string = await terminal(this.opensslbin, opensslpms);
    //         // console.log(startDate);
    //         startDate = startDate.replace('notBefore=', '').replace('  ', '');
    //         const pattOne = new RegExp('([A-z]{3}) ([0-9]{1,2}) ([0-2][0-9]:[0-5][0-9]:[0-5][0-9]) ([0-9]{4})');
    //         const findregex = startDate.match(pattOne);
    //         const fecha = findregex ? findregex[2] + '/' + findregex[1] + '/' + findregex[4] : '';
    //         const staff = findregex ? findregex[3] : '';
    //         startDate = moment(new Date(fecha)).format('DD/MM/YYYY') + ' ' + staff;
    //         return startDate;
    //     } catch (e) {
    //         return e;
    //     }
    // }
    //
    // async getEndDateCerPem(cerpempath: string) {
    //
    //     try {
    //         const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-enddate'];
    //         let endDate: string = await terminal(this.opensslbin, opensslpms);
    //         endDate = endDate.replace('notBefore=', '').replace('  ', '');
    //         const pattOne = new RegExp('([A-z]{3}) ([0-9]{1,2}) ([0-2][0-9]:[0-5][0-9]:[0-5][0-9]) ([0-9]{4})');
    //         const findregex = endDate.match(pattOne);
    //         const fecha = findregex ? findregex[2] + '/' + findregex[1] + '/' + findregex[4] : ''; // +' '+ findregex[3]
    //         const staff = findregex ? findregex[3] : '';
    //         endDate = moment(new Date(fecha)).format('DD/MM/YYYY') + ' ' + staff[3];
    //         return endDate;
    //     } catch (e) {
    //         return e;
    //     }
    // }
    //
    // async getSubjectCerPem(cerpempath: string) {
    //     try {
    //         const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-subject'];
    //         let text: any = await terminal(this.opensslbin, opensslpms);
    //         text = text.replace('subject=', '');
    //         const stringArray = text.split(',');
    //         const obj: anyKey = {};
    //         for (const txt of stringArray) {
    //             const extrac = txt.split('=');
    //             if (extrac.length === 2) {
    //                 const key = extrac[0].replace(/^\s+/g, '').replace(/\s+$/g, '');
    //                 const val = extrac[1].replace(/^\s+/g, '').replace(/\s+$/g, '');
    //                 // console.log(key+val);
    //                 obj[key] = val;
    //             }
    //         }
    //         return obj;
    //     } catch (e) {
    //         return e.message;
    //     }
    // }
    //
    // async getIssuerCerPem(cerpempath: string) {
    //     try {
    //         const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-issuer'];
    //         let text: string = await terminal(this.opensslbin, opensslpms);
    //         text = text.replace('issuer=', '');
    //         const stringArray = text.split(',');
    //         // console.log(stringArray)
    //         const obj: anyKey = {};
    //         for (const txt of stringArray) {
    //             const extrac = txt.split('=');
    //             if (extrac.length === 2) {
    //                 const key = extrac[0].replace(/^\s+/g, '').replace(/\s+$/g, '');
    //                 const val = extrac[1].replace(/^\s+/g, '').replace(/\s+$/g, '');
    //                 // console.log(key+val);
    //                 obj[key] = val;
    //             }
    //         }
    //         return obj;
    //     } catch (e) {
    //         return e.message;
    //     }
    // }
    //
    // async getPubkeyCerPem(cerpempath: string, title: boolean = false) {
    //     try {
    //         const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-pubkey'];
    //         let pem: string = await terminal(this.opensslbin, opensslpms);
    //         if (title) {
    //             pem = pem.replace(/(-+[^-]+-+)/g, '');
    //             pem = pem.replace(/\s+/g, '');
    //         }
    //         return pem;
    //     } catch (e) {
    //         return e.message;
    //     }
    // }
    //
    // async getSerialCerPem(cerpempath: string) {
    //     try {
    //         const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-serial'];
    //         let text: string = await terminal(this.opensslbin, opensslpms);
    //         text = text.replace('serial=', '').replace(/^\s+/g, '').replace(/\s+$/g, '');
    //         return text;
    //     } catch (e) {
    //         return e.message;
    //     }
    // }
    //
    // async getModulesCerPem(cerpempath: string) {
    //     try {
    //         const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-modulus'];
    //         let text: string = await terminal(this.opensslbin, opensslpms);
    //         text = text.replace('Modulus=', '').replace(/^\s+/g, '').replace(/\s+$/g, '');
    //         return text;
    //     } catch (e) {
    //         return e.message;
    //     }
    // }
}

export const cer = new Cer();
