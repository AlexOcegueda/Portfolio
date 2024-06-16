import { defineConfig } from 'astro/config';

export default defineConfig({

    site: 'https://ocegueda.netlify.app/',

    publicDir: 'public',

    srcDir: 'src',

    typescript: {
    strict: true
    },

    vite: {
    server: {
      port: 3000,
      open: true
    }
    },

    build: {
    outDir: 'dist'
    },

    integrations: [
    ]
});
