import { defineConfig } from 'vite';

const appVersion = process.env.APP_VERSION || new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  esbuild: {
    jsxInject: "import React from 'react'",
  },
});
