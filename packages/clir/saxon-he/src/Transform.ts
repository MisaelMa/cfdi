import { commandSync } from 'execa'
import { existsSync } from 'fs';
import { platform } from 'os';
import { CliShare } from './cliShare';

export class Transform extends CliShare {
  public commandline = '';
  public commandlineArray: string[] = [];
  public saxonBin: string = '';

  constructor() {
    super();
    this.saxonBin = this.getOS();
    this.commandline = this.saxonBin
  }

  public a(options: 'on' | 'off') {
    this.commandline += ` -a:${options}`;
    this.commandlineArray.push(`-a:${options}`);
    return this;
  }

  public ea(options: 'on' | 'off') {
    this.commandline += ` -ea:${options}`;
    this.commandlineArray.push(`-ea:${options}`);
    return this;
  }



  public explain(filename: any) {
    this.commandline += ` -explain:${filename}`;
    this.commandlineArray.push(`-explain:${filename}`);
    return this;
  }

  public export(filename: any) {
    this.commandline += ` -export:${filename}`;
    this.commandlineArray.push(`-export:${filename}`);
    return this;
  }

  public im(modename: any) {
    this.commandline += ` -im:${modename}`;
    this.commandlineArray.push(`-im:${modename}`);
    return this;
  }

  public it(template: any) {
    this.commandline += ` -it:${template}`;
    this.commandlineArray.push(`-it:${template}`);
    return this;
  }


  public jit(options: 'on' | 'off') {
    this.commandline += ` -jit:${options}`;
    this.commandlineArray.push(`-jit:${options}`);
    return this;
  }


  public lib(filenames: any) {
    this.commandline += ` -lib:${filenames}`;
    this.commandlineArray.push(`-lib:${filenames}`);
    return this;
  }

  public license(options: 'on' | 'off') {
    this.commandline += ` -license:${options}`;
    this.commandlineArray.push(`-license:${options}`);
    return this;
  }

  public m(classname: any) {
    this.commandline += ` -m:${classname}`;
    this.commandlineArray.push(`-m:${classname}`);
    return this;
  }

  public nogo() {
    this.commandline += ` -nogo`;
    this.commandlineArray.push(`-nogo`);
    return this;
  }

  public ns(options: 'uri' | '##any' | '##html5') {
    this.commandline += ` -ns:${options}`;
    this.commandlineArray.push(`-ns:${options}`);
    return this;
  }

  public or(classname: any) {
    this.commandline += ` -or:${classname}`;
    this.commandlineArray.push(`-or:${classname}`);
    return this;
  }

  public relocate(options: 'on' | 'off') {
    this.commandline += ` -relocate:${options}`;
    this.commandlineArray.push(`-relocate:${options}`);
    return this;
  }


  public target(target: 'EE' | 'PE' | 'HE' | 'JS') {
    this.commandline += ` -target:${target}`;
    this.commandlineArray.push(`-target:${target}`);
    return this;
  }


  public threads(N: number) {
    // todo only -S is activate
    this.commandline += ` -threads:${N}`;
    this.commandlineArray.push(`-threads:${N}`);
    return this;
  }




  public warnings(validation: 'silent' | 'recover' | 'fatal') {
    this.commandline += ` -warnings:${validation}`;
    this.commandlineArray.push(`-warnings:${validation}`);
    return this;
  }



  public xsl(filename: string) {
    if (!existsSync(filename)) {
      throw new Error('No se puede encontrar el archivo para la cadena original!.');
    }
    this.commandline += ` -xsl:${filename}`;
    this.commandlineArray.push(`-xsl:${filename}`);
    return this;
  }

  public y(filename: string) {
    this.commandline += ` -y:${filename}`;
    this.commandlineArray.push(`-y:${filename}`);
    return this;
  }


  public params(value: any) {
    // todo
  }



  private getOS(): string {
    if (platform() === 'win32') {
      return 'transform.exe';
    } else if (platform() === 'linux') {
      return 'saxon-xslt';
    } else if (platform() === 'darwin') {
      return 'transform';
      // var chilkat = require('@chilkat/ck-node11-macosx');
    }
    return 'transform';
  }
}
