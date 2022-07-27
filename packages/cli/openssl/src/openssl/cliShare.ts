import * as execa from 'execa';
import {commandSync} from 'execa';
import {getOsComandBin} from '../utils';

export class CliShare {
    public commandline = '';
    public commandlineArray: string[] = [];
    public command = '';
    public opensslBin = '';

    constructor() {
        this.opensslBin = getOsComandBin();
        this.commandline = this.opensslBin;
    }
    public inform(options: 'DER' | 'PEM') {
        this.commandline += ` -inform ${options}`;
        this.commandlineArray.push(`-inform ${options}`);
        return this;
    }

    public outform(options: 'DER' | 'PEM') {
        this.commandline += ` -outform  ${options}`;
        this.commandlineArray.push(`-outform ${options}`);
        return this;
    }

    public in(filename: string) {
        this.commandline += ` -in  ${filename}`;
        this.commandlineArray.push(`-in ${filename}`);
        return this;
    }
   // todo https://www.openssl.org/docs/man1.1.1/man1/openssl.html
    public passin(arg: string) {
        this.commandline += ` -passin ${arg}`;
        this.commandlineArray.push(`-passin ${arg}`);
        return this;
    }

    public passout(arg: string) {
        this.commandline += ` -passout ${arg}`;
        this.commandlineArray.push(`-passout ${arg}`);
        return this;
    }

    public out(filename: string) {
        this.commandline += ` -out ${filename}`;
        this.commandlineArray.push(`-out ${filename}`);
        return this;
    }

    public run(options?: execa.SyncOptions): string {
        try {
            const cli = this.commandline
            this.commandline = this.opensslBin + ' '+ this.command;
            const saxonProc = commandSync(cli, options).stdout;
            return saxonProc;
        } catch (e) {
            throw new Error(e.message);

        }
    }

    public cli(): string {
        try {
            const cp = this.commandline
            this.commandline = this.opensslBin + ' '+ this.command;
            return cp
        } catch (e) {
            throw new Error(e.message);

        }
    }

    public cliArray(): string[] {
        try {
            const cp = [...this.commandlineArray]
            this.commandlineArray = []
            return cp;
        } catch (e) {
            throw new Error(e.message);

        }
    }
}