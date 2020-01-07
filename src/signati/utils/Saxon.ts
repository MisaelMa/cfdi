import * as fs from 'fs';
import { terminal } from './Terminal';

export function SaxonProc(stylepath: string, xmlpath: string): Promise<any> {
  return new Promise(async (resolve, reject) => {

    try {
      if (!fs.existsSync(stylepath)) {
        reject('No se puede encontrar el archivo para la cadena original!.');
        return;
      }
    } catch (e) {
      reject('No se puede encontrar el archivo para la cadena original!.');
      return;
    }

    try {
      const args = [`-s:${xmlpath}`, `-xsl:${stylepath}`, '-warnings:silent'];
      const saxon = await terminal('saxon', args);
      resolve(saxon);
    } catch (e) {
      reject(e);
    }
  });
}
