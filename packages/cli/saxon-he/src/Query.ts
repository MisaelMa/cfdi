import {platform} from "os";
import {CliShare} from "./cliShare";

export class Query extends CliShare {
    public commandline = '';
    public commandlineArray: string[] = [];
    public saxonBin: string = '';

    constructor() {
        super();
        this.saxonBin = this.getOS();
        this.commandline = this.saxonBin
    }

    public backup(options: 'on' | 'off') {
        this.commandline += ` -a:${options}`;
        this.commandlineArray.push(`-a:${options}`);
        return this;
    }

    public config(filenames: any) {
        this.commandline += ` -config:${filenames}`;
        this.commandlineArray.push(`-config:${filenames}`);
        return this;
    }

    public mr(classname: any) {
        this.commandline += ` -mr:${classname}`;
        this.commandlineArray.push(`-mr:${classname}`);
        return this;
    }

    public projection(options: 'on' | 'off') {
        this.commandline += ` -projection:${options}`;
        this.commandlineArray.push(`-projection:${options}`);
        return this;
    }

    public q(queryfile: any) {
        this.commandline += ` -q:${queryfile}`;
        this.commandlineArray.push(`-q:${queryfile}`);
        return this;
    }

    public qs(querystring: any) {
        this.commandline += ` -qs:${querystring}`;
        this.commandlineArray.push(`-qs:${querystring}`);
        return this;
    }

    public stream(options: 'on' | 'off') {
        this.commandline += ` -stream:${options}`;
        this.commandlineArray.push(`-stream:${options}`);
        return this;
    }

    public update(options: 'on' | 'off' | 'discard') {
        this.commandline += ` -update:${options}`;
        this.commandlineArray.push(`-update:${options}`);
        return this;
    }

    public wrap() {
        this.commandline += ` -wrap`;
        this.commandlineArray.push(`-wrap`);
        return this;
    }

    private getOS(): string {
        if (platform() === 'win32') {
            return 'query.exe';
        } else if (platform() === 'linux') {
            return 'saxon-xquery';
        } else if (platform() === 'darwin') {
            return 'saxon-xquery';
            // var chilkat = require('@chilkat/ck-node11-macosx');
        }
        return 'saxon-xquery';
    }
}
