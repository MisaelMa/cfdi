import * as fs from 'fs';

/**
 *
 */
export class FileSystem {
  /**
   *manageDirectoryTemp
   *
   * @param action
   * string
   */
  public static manageDirectoryTemp(action: string): void {
    const dir = './tmp';
    if (!fs.existsSync(dir)) {
      if (action === 'create') {
        fs.mkdirSync(dir);
      }
    } else if (action === 'delete') {
      this.deleteFolderRecursive(dir);
    }
  }

  /**
   *deleteFolderRecursive
   *
   * @param path
   * string
   */
  public static deleteFolderRecursive(path: string): void {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(file => {
        const curPath = `${path}/${file}`;
        if (fs.lstatSync(curPath).isDirectory()) {
          this.deleteFolderRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  }

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
}
