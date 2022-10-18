import { execaCommandSync, SyncOptions } from 'execa';
// @ts-ignore
import pathModule from 'node_modules-path';
// @ts-ignore
import saxon from 'saxon-js';
// @ts-ignore
import xslt3 from 'xslt3';
import path from 'path';
/**
 *schema
 *
 * @param locations
 */
export const schema = (locations: string[]): string => {
  const schemaL = locations.join(' ');
  return ` ${schemaL}`;
};

export const getOriginalString = (pathXmlFile: string, pathXlstFile: string, options?: SyncOptions) => {

  const binaryPath = path.resolve(`${pathModule("xslt3")}/xslt3/node_modules/.bin/xslt3`)
  const cli = `${binaryPath} -s:${pathXmlFile} -xsl:${pathXlstFile}`;
  try {
    // console.log(cli);

    const data = execaCommandSync(cli, options).stdout;
    //console.log(data)
    return data
  } catch (e) {
    console.log(e)
    // throw new Error(`${cli}`)
  }
}
