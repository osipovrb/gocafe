// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  colorMode: {
    preference: 'light'
  },
  modules: [
    '@nuxthq/ui'
  ],
  css: [
    '@/assets/css/main.css',
  ]
})
