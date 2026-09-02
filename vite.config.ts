import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: [
      'localhost',
      'neritic-unlikeably-towanda.ngrok-free.dev',
    ],
  },
})