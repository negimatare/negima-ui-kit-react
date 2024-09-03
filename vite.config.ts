import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const urlResolver = (url: string | URL) => fileURLToPath(new URL(url, import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@negima/react-components', replacement: urlResolver('./src/common/index.ts') },
      { find: '@negima/react-contexts', replacement: urlResolver('./src/contexts/index.ts') },
      { find: '@negima/react-configs', replacement: urlResolver('./src/lib/configs/index.ts') },
      { find: '@negima/react-providers', replacement: urlResolver('./src/lib/providers/index.ts') },
      { find: '@negima/react-redux', replacement: urlResolver('./src/lib/redux/index.ts') },
      { find: '@negima/react-services', replacement: urlResolver('./src/lib/services/index.ts') },
      { find: '@negima/react-utilities', replacement: urlResolver('./src/lib/utils/index.ts') }
    ]
  },
  server: {
    port: 3000,
    open: true
  }
});