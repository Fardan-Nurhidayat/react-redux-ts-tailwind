import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-tsconfig-paths'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss() , tsConfigPaths()],
  resolve : {
    alias: {
      '@': '/src',
      '@/components': '/src/components',
      '@/pages': '/src/pages',
      '@/assets': '/src/assets',
      '@/utils': '/src/utils',
      '@/hooks': '/src/hooks',
      '@/store': '/src/store',
      '@/types': '/src/types',
      '@/services': '/src/services',
      '@/constants': '/src/constants',
      '@/styles': '/src/styles',
      '@/config': '/src/config',
    }
  }
})
