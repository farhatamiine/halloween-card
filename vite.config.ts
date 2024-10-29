import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),Icons({
    compiler: 'jsx',
    jsx: 'react',
  }),],
})
