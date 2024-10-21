import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
export default defineConfig({
  test: {
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
    },
  },
});
