export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  vite: {
    ssr: {
      noExternal: ['@mdx-js/loader'],
    },
    plugins: [
      {
        name: 'mdx',
        enforce: 'pre',
        apply: 'load',
        transform(src, id) {
          if (id.endsWith('.mdx')) {
            return `import {mdx} from '@mdx-js/react';${mdx.sync(src)}`;
          }
        },
      },
    ],
  },
}) 
