import { CliShare } from './cli-share';
/**
 *
 */
export class Query extends CliShare {
  public commandline = '';

  public commandlineArray: string[] = [];

  public saxonBin = '';

  /**
   *constructor
   */
  constructor(options: {binary?: string}) {
    super();
    const { binary } = options || {}
    this.saxonBin =  binary || this.getOS();
    this.commandline = this.saxonBin;
  }

  /**
   *backup
   *
   * @param options
   * 'on' | 'off
   */
  public backup(options: 'on' | 'off'): Query {
    this.commandline += ` -a:${options}`;
    this.commandlineArray.push(`-a:${options}`);
    return this;
  }

  /**
   *config
   *
   * @param filenames
   * string
   */
  public config(filenames: string): Query {
    this.commandline += ` -config:${filenames}`;
    this.commandlineArray.push(`-config:${filenames}`);
    return this;
  }

  /**
   *mr
   *
   * @param classname
   * string
   */
  public mr(classname: string): Query {
    this.commandline += ` -mr:${classname}`;
    this.commandlineArray.push(`-mr:${classname}`);
    return this;
  }

  /**
   *projection
   *
   * @param options
   * 'on' | 'off'
   */
  public projection(options: 'on' | 'off'): Query {
    this.commandline += ` -projection:${options}`;
    this.commandlineArray.push(`-projection:${options}`);
    return this;
  }

  /**
   *queryfile
   *
   * @param queryfile
   * q
   */
  public q(queryfile: string): Query {
    this.commandline += ` -q:${queryfile}`;
    this.commandlineArray.push(`-q:${queryfile}`);
    return this;
  }

  /**
   *qs
   *
   * @param querystring
   * string
   */
  public qs(querystring: string): Query {
    this.commandline += ` -qs:${querystring}`;
    this.commandlineArray.push(`-qs:${querystring}`);
    return this;
  }

  /**
   *stream
   *
   * @param options
   * 'on' | 'off'
   */
  public stream(options: 'on' | 'off'): Query {
    this.commandline += ` -stream:${options}`;
    this.commandlineArray.push(`-stream:${options}`);
    return this;
  }

  /**
   *update
   *
   * @param options
   * 'on' | 'off' | 'discard'
   */
  public update(options: 'on' | 'off' | 'discard'): Query {
    this.commandline += ` -update:${options}`;
    this.commandlineArray.push(`-update:${options}`);
    return this;
  }

  /**
   *wrap
   */
  public wrap(): Query {
    this.commandline += ` -wrap`;
    this.commandlineArray.push(`-wrap`);
    return this;
  }

  /**
   *getOS
   */
  private getOS(): string {  
    return 'query';
  }
}
