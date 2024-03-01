export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/saas/main.scss'],

  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: '@use "@/assets/saas/_mixin.scss" as *;'
        }
      }
    }
  },

  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },

  modules: [
    '@pinia/nuxt',
  ],

})
