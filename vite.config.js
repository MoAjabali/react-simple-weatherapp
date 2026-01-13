import { intlayer } from 'vite-intlayer'; // Add the plugin to the Vite plugin list

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
     tailwindcss(),
     react(),
     intlayer(),
    ],
})
