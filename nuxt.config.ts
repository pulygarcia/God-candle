// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  app: {
    head: {
      title: 'GodCandle by Puly',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  }
})