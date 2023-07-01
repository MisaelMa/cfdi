import { XmlCdfi } from '@signati/core';
import { readFileSync } from 'fs';
import { xml2js } from 'xml-js';

export function XmlToJson(xmlPath: string): XmlCdfi {
  const stringXml = readFileSync(xmlPath, 'utf8');
  const options = {
    ignoreComment: true,
    alwaysChildren: true,
    compact: true,
    /* elementNameFn: (val: string, parentElement: any) => {
         let value = val;
         console.log(parentElement)
         if (parentElement === 'cfdi:Complemento') {
             const tags = ['tfd:']
             for (const tag of tags) {
                 value = value.replace(tag, '').toLocaleLowerCase();
             }
         } else {
             value = value.replace('cfdi:', '').toLocaleLowerCase()
         }
         return value
     }*/
  };
  const json = xml2js(stringXml, options) as unknown;
  return json as XmlCdfi;
}
