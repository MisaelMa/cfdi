import { commandSync, SyncOptions } from 'execa';
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
  const cli = `xslt3 -s:${pathXmlFile} -xsl:${pathXlstFile}`;

  try {
    const data = commandSync(cli, options).stdout;
    return data
  } catch (e) {
    throw new Error(`${cli}`)
  }
}
