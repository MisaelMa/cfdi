'use strict';
import * as fs from 'fs';

export class FileSystem {
  /**
   *
   * @param action
   */
  static manageDirectoryTemp(action: string) {
    const dir = './tmp';
    if (!fs.existsSync(dir)) {
      if (action === 'create') {
        fs.mkdirSync(dir);
      }
    } else {
      if (action === 'delete') {
        this.deleteFolderRecursive(dir);
      }
    }
  }

  /**
   *
   * @param path
   */
  static deleteFolderRecursive(path: string) {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach((file, index) => {
        const curPath = path + '/' + file;
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
   *
   * @returns {string}
   */
  static generateNameTemp() {
    const fileNameTemp = Date.now();
    return fileNameTemp.toString();
  }

  /**
   *
   * @param file
   * @returns {*}
   */
  static readFileSync(file: string) {
    return fs.readFileSync(file, 'utf8');
  }
}
