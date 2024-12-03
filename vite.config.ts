import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, exclude: ["**/*.stories.tsx", "**/*.stories.ts", "**/*.test.tsx", "src/components/ui/**"], rollupTypes: false}, ),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  },
  build: { 
    lib: { 
      entry: './src/index.ts', 
      name: 'sullair-ui', 
      fileName: (format) => `sullair-ui.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
      
    },
    
    rollupOptions: { 
      external: Object.keys(peerDependencies), 
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM', antd: "antd"  } } 
    }
  },
})
