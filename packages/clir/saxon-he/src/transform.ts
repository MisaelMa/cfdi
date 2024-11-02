import { CliShare } from './cli-share';
import { existsSync } from 'fs';
import { platform } from 'os';

/**
 *
 */
export class Transform extends CliShare {
  public commandline = '';

  public commandlineArray: string[] = [];

  public saxonBin = '';

  /**
   *constructor
   */
  constructor() {
    super();
    this.saxonBin = this.getOS();
    this.commandline = this.saxonBin;
  }

  /**
   *a
   *
   * @param options
   * options
   */
  public a(options: 'on' | 'off'): Transform {
    this.commandline += ` -a:${options}`;
    this.commandlineArray.push(`-a:${options}`);
    return this;
  }

  /**
   *ea
   *
   * @param options
   * options
   */
  public ea(options: 'on' | 'off'): Transform {
    this.commandline += ` -ea:${options}`;
    this.commandlineArray.push(`-ea:${options}`);
    return this;
  }

  /**
   *explain
   *
   * @param filename
   * string
   */
  public explain(filename: string): Transform {
    this.commandline += ` -explain:${filename}`;
    this.commandlineArray.push(`-explain:${filename}`);
    return this;
  }

  /**
   *export
   *
   * @param filename
   * string
   */
  public export(filename: string): Transform {
    this.commandline += ` -export:${filename}`;
    this.commandlineArray.push(`-export:${filename}`);
    return this;
  }

  /**
   *im
   *
   * @param modename
   * string
   */
  public im(modename: string): Transform {
    this.commandline += ` -im:${modename}`;
    this.commandlineArray.push(`-im:${modename}`);
    return this;
  }

  /**
   *it
   *
   * @param template
   * string
   */
  public it(template: string): Transform {
    this.commandline += ` -it:${template}`;
    this.commandlineArray.push(`-it:${template}`);
    return this;
  }

  /**
   *jit
   *
   * @param options
   * 'on' | 'off'
   */
  public jit(options: 'on' | 'off'): Transform {
    this.commandline += ` -jit:${options}`;
    this.commandlineArray.push(`-jit:${options}`);
    return this;
  }

  /**
   *lib
   *
   * @param filenames
   *string
   */
  public lib(filenames: string): Transform {
    this.commandline += ` -lib:${filenames}`;
    this.commandlineArray.push(`-lib:${filenames}`);
    return this;
  }

  /**
   *license
   *
   * @param options
   * options
   */
  public license(options: 'on' | 'off'): Transform {
    this.commandline += ` -license:${options}`;
    this.commandlineArray.push(`-license:${options}`);
    return this;
  }

  /**
   *m
   *
   * @param classname
   * string
   */
  public m(classname: string): Transform {
    this.commandline += ` -m:${classname}`;
    this.commandlineArray.push(`-m:${classname}`);
    return this;
  }

  /**
   *nogo
   */
  public nogo(): Transform {
    this.commandline += ` -nogo`;
    this.commandlineArray.push(`-nogo`);
    return this;
  }

  /**
   *ns
   *
   * @param options
   * 'uri' | '##any' | '##html5'
   */
  public ns(options: 'uri' | '##any' | '##html5'): Transform {
    this.commandline += ` -ns:${options}`;
    this.commandlineArray.push(`-ns:${options}`);
    return this;
  }

  /**
   *or
   *
   * @param classname
   * string
   */
  public or(classname: string): Transform {
    this.commandline += ` -or:${classname}`;
    this.commandlineArray.push(`-or:${classname}`);
    return this;
  }

  /**
   *relocate
   *
   * @param options
   * 'on' | 'off'
   */
  public relocate(options: 'on' | 'off'): Transform {
    this.commandline += ` -relocate:${options}`;
    this.commandlineArray.push(`-relocate:${options}`);
    return this;
  }

  /**
   *target
   *
   * @param target
   * target
   */
  public target(target: 'EE' | 'PE' | 'HE' | 'JS'): Transform {
    this.commandline += ` -target:${target}`;
    this.commandlineArray.push(`-target:${target}`);
    return this;
  }

  /**
   *threads
   *
   * @param N
   * number
   */
  public threads(N: number): Transform {
    // todo only -S is activate
    this.commandline += ` -threads:${N}`;
    this.commandlineArray.push(`-threads:${N}`);
    return this;
  }

  /**
   *warnings
   *
   * @param validation
   * 'silent' | 'recover' | 'fatal'
   */
  public warnings(validation: 'silent' | 'recover' | 'fatal'): Transform {
    this.commandline += ` -warnings:${validation}`;
    this.commandlineArray.push(`-warnings:${validation}`);
    return this;
  }

  /**
   * xsl
   *
   * @param filename
   * string
   */
  public xsl(filename: string): Transform {
    if (!existsSync(filename)) {
      throw new Error(
        'No se puede encontrar el archivo para la cadena original!.'
      );
    }
    this.commandline += ` -xsl:${filename}`;
    this.commandlineArray.push(`-xsl:${filename}`);
    return this;
  }

  /**
   *y
   *
   * @param filename
   * string
   */
  public y(filename: string): Transform {
    this.commandline += ` -y:${filename}`;
    this.commandlineArray.push(`-y:${filename}`);
    return this;
  }

  /**
   *params
   *
   */
  public params(): Transform {
    // todo
    return this;
  }

  /**
   *string
   */
  private getOS(): string {
    if (platform() === 'win32') {
      return 'transform.exe';
    }
    if (platform() === 'linux') {
      return 'saxon-xslt';
    }
    if (platform() === 'darwin') {
      return 'transform';
    }
    return 'transform';
  }
}
