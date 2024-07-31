import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
  }
})
