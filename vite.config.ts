import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    // distフォルダに出力
    outDir: resolve(__dirname, 'dist'),
    // 存在しないときはフォルダを作成する
    emptyOutDir: true,
    rollupOptions: {
      // entry pointがあるindex.htmlのパス
      input: {
        '': resolve(__dirname, 'index.html'),
      },
      // bundle.jsを差し替えする
      output: {
        entryFileNames: `assets/[name]/bundle.js`,
      },
    },
  },
  test: {
    // ここに Vitest 用の設定を書き込んでいく
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
})
