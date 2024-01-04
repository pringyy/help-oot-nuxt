export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss',  'nuxt-delay-hydration'],
  delayHydration: {
    mode: 'mount',
  },
  routeRules: {
    "/": { prerender: true },
    "/*": { prerender: false },
  },
}) 
