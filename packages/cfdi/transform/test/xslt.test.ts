import { describe, expect, it, TaskContext, test, TestContext } from 'vitest';
import path from 'path';
const files = path.resolve(__dirname, '..', '..', '..', 'files');
const xslt_path = `${files}/4.0/cadenaoriginal.xslt`;
import { ElementCompact, Element, Options, xml2js } from 'xml-js';
import { readFileSync } from 'fs';


describe('xslt', () => {
  it('json', async (context: TaskContext) => {
    const options: Options.XML2JS = {
      ignoreComment: false,
      alwaysChildren: false,
      compact: false,
      ignoreDeclaration: true,
      //elementNameFn: (name: string) => original ? name : name.replace(/^.*:/, '')
  };
  const xml = readFileSync(xslt_path, 'utf8')
  const json = xml2js(xml, options);
  console.log(JSON.stringify(json, null, 2));
  });
});
