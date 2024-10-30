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
  },
  plugins: [
    tsconfigPaths(),
    /*  {
      name: 'vite-plugin-alias',
      configureServer(server) {
        server.watcher.add(resolve(__dirname, '../xsd/src'));
      }
    } */
  ],
  resolve: {
    alias: {
      '@cfdi/xsd': resolve(__dirname, '../xsd/src'),
      '@cfdi/complementos': resolve(__dirname, '../complementos/src'),
      '@cfdi/csd': resolve(__dirname, '../csd/src'),
      '@clir/saxon-he': resolve(__dirname, '../../clir/saxon-he/src'),
    },
  },
});
