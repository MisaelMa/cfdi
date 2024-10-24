import { Schema } from '../src';
import path from 'path';

const schema = Schema.of();
const files = path.join(
  path.resolve(
    __dirname,
    '..',
    '..',
    '..',
    'cfdi',
    'schema',
    'src',
    'files',
    'schema'
  )
);
schema.setConfig({
  debug: false,
  path: files,
});

export { schema };