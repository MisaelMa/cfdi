import { describe, expect, it, test } from 'vitest';
import { XmlToJson } from '../src'
import path from 'path';

const files_path = path.resolve(__dirname, '..', '..', '..', 'files','xml');
console.log(files_path)
describe('xml to json', () => {
  it('works', () => {
    const json = XmlToJson(path.resolve(files_path,'5E2D6AFF-2DD7-43D1-83D3-14C1ACA396D9.xml'))
    console.log(JSON.stringify(json, null, 2))
  });
});
