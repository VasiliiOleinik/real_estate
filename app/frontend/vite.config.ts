import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 400,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        inlineDynamicImports: true,
        chunkFileNames: 'bundle.js',
        entryFileNames: 'bundle.js',
        dir: '../../public',
      },
      external: new RegExp('/*.test.*'),
    },
  },
  server: {
    port: 8899,
  },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //   },
  // },
})
