import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths'; // only if you are using custom tsconfig paths
import { viteTestConfig } from '@recreando/vite'
export default defineConfig({
  test: {
    alias:{
      ...viteTestConfig.test?.alias
    }
  },
  plugins: [tsconfigPaths()], // only if you are using custom tsconfig paths
  resolve: {
    alias: {
      ...viteTestConfig.resolve?.alias
    }
  }
});
