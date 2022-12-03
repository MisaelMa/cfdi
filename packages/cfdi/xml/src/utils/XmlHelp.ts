import { SyncOptions, execaCommandSync } from '@esm2cjs/execa';

import path from 'path';
// @ts-ignore
import pathModule from 'node_modules-path';
// @ts-ignore
import saxon from 'saxon-js';
// @ts-ignore
import xslt3 from 'xslt3';

/**
 *schema
 *
 * @param locations
 */
export const schema = (locations: string[]): string => {
  const schemaL = locations.join(' ');
  return ` ${schemaL}`;
};

export const getOriginalString = async (
  pathXmlFile: string,
  pathXlstFile: string,
  options?: SyncOptions
): Promise<string> => {
  const binaryPath = path.resolve(
    `${pathModule('xslt3')}/xslt3/node_modules/.bin/xslt3`
  );
  const cli = `${binaryPath} -s:${pathXmlFile} -xsl:${pathXlstFile}`;
  try {
    const data = execaCommandSync(cli, options).stdout;
    //console.log(data)
    return data.toString();
  } catch (e) {
    throw new Error(`${cli}`);
  }
};
