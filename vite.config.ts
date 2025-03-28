import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{ 
    cors:{
      origin:'https://prod.spline.design'
    }
  },
  optimizeDeps: {
    include: ['@splinetool/react-spline']
  }
})
