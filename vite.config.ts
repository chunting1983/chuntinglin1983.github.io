
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Increase the chunk size warning limit to 1000kB (1MB) as suggested by the build logs
    // for single-page applications with significant static content.
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunking strategy to separate large data from the main application logic
        manualChunks(id) {
          if (id.includes('constants.tsx')) {
            return 'content-data';
          }
        }
      }
    }
  }
});
