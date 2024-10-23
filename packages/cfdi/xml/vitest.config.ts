import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
export default defineConfig({
  test: {
    reporters: ['html','default']
     /* reporters: ['html', 'default'],
     outputFile: './test-output.json' */
    // Aquí puedes incluir configuraciones específicas para Vitest
  },
  plugins: [
    tsconfigPaths(),
     {
      name: 'vite-plugin-alias',
      configureServer(server) {
        server.watcher.add(resolve(__dirname, '../xsd/src'));
      }
    }
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
