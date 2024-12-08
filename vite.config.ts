import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import { templateCompilerOptions } from '@tresjs/core'

export default defineConfig({
  plugins: [
    Vue({
      ...templateCompilerOptions,
    }),
    VueDevTools(),
    AutoImport({
      imports: [
        'vue',
        {
          '@vueuse/core': [],
        },
      ],
      dts: 'src/shims/auto-imports.d.ts',
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
