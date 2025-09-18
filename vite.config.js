import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const tailwindConfig = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss({ config: tailwindConfig })],
})
