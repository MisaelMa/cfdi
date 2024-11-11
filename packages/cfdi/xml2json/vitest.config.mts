import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  test: {
    reporters: ['default'],
    coverage: {
      include: ['src/**/*.ts'],
      exclude: ['**/node_modules/**', '**/test/**'], // Excluir node_modules y la carpeta de tests
    },
    alias: {
      '@cfdi/xsd': resolve(__dirname, '../xsd/src'),
      '@cfdi/complementos': resolve(__dirname, '../complementos/src'),
      '@cfdi/csd': resolve(__dirname, '../csd/src'),
      '@cfdi/2json': resolve(__dirname, '../xml2json/src'),
      '@cfdi/utils': resolve(__dirname, '../utils/src'),
      '@saxon-he/cli': resolve(__dirname, '../../clir/saxon-he/src'),
    },
  },
  plugins: [
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@cfdi/xsd': resolve(__dirname, '../xsd/src'),
      '@cfdi/complementos': resolve(__dirname, '../complementos/src'),
      '@cfdi/csd': resolve(__dirname, '../csd/src'),
      '@cfdi/2json': resolve(__dirname, '../xml2json/src'),
      '@saxon-he/cli': resolve(__dirname, '../../clir/saxon-he/src'),
      '@cfdi/utils': resolve(__dirname, '../utils/src'),
    },
  },
});
