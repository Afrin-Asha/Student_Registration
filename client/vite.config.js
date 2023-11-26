import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      '/api': {
        target: 'http://localhost:5000',
       //insted of adding in  pakage.json depency  proxy localhost
       a//as we are using vite if not we need to add this inside pakage.jon 
      }
    }
  }
})
