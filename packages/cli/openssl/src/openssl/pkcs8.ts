import {commandSync} from 'execa';
import {getOsComandBin} from '../utils';
import {CliShare} from './cliShare';
class Pkcs8 extends CliShare {
    public commandline = '';
    public commandlineArray: string[] = [];
    public command = 'pkcs8';
    public opensslBin = '';

    constructor() {
        super();
        this.opensslBin = getOsComandBin();
        this.commandline = this.opensslBin + ' '+ this.command;
    }

    public topk8() {
        this.commandline += ` -topk8`;
        this.commandlineArray.push(`-topk8`);
        return this;
    }

    public traditional() {
        this.commandline += ` -traditional`;
        this.commandlineArray.push(`-traditional`);
        return this;
    }

    public iter(count: number) {
        this.commandline += ` -iter ${count}`;
        this.commandlineArray.push(`-iter ${count}`);
        return this;
    }

    public nocrypt() {
        this.commandline += ` -nocrypt`;
        this.commandlineArray.push(`-nocrypt`);
        return this;
    }

    public rand(file: string) {
        this.commandline += ` -rand ${file}`;
        this.commandlineArray.push(`-rand ${file}`);
        return this;
    }
}
export const pkcs8 = new Pkcs8()