import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
    federation({
      name: "container",
      remotes: {
        mfe1: "http://localhost:3006/assets/remoteEntry.js"
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-redux"
      ],
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false
  },
  preview: {
    port: 3005,
    strictPort: true
  },
  server: {
    port: 3005,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:3005'
  }
})
