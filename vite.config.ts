import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { copyFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const copyPublicPlugin = () => ({
  name: 'copy-public-safe',
  closeBundle() {
    const publicDir = 'public';
    const outDir = 'dist';

    const copyRecursive = (src: string, dest: string) => {
      try {
        const entries = readdirSync(src);

        if (!existsSync(dest)) {
          mkdirSync(dest, { recursive: true });
        }

        for (const entry of entries) {
          if (entry.includes(' copy')) continue;

          const srcPath = join(src, entry);
          const destPath = join(dest, entry);

          try {
            const stat = statSync(srcPath);
            if (stat.isDirectory()) {
              copyRecursive(srcPath, destPath);
            } else {
              copyFileSync(srcPath, destPath);
            }
          } catch (err) {
            console.warn(`Skipping ${entry}: ${err}`);
          }
        }
      } catch (err) {
        console.error('Error copying public files:', err);
      }
    };

    copyRecursive(publicDir, outDir);
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyPublicPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    copyPublicDir: false
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false
  }
});
