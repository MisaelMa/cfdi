import  fs from 'fs';
import  os from 'os';
import  path from 'path';
/**
 *
 */
export class FileSystem {


 

  /**
   *generateNameTemp
   *
   * @returns {string}
   */
  public static generateNameTemp(): string {
    const fileNameTemp = Date.now();
    return fileNameTemp.toString();
  }

  /**
   *readFileSync
   *
   * @param file
   * string
   */
  public static readFileSync(file: string): any {
    return fs.readFileSync(file, 'utf8');
  }

  public static getTmpFullPath(name: string): string {
    return path.join(os.tmpdir(), `${name}.xml`);
  }
}
