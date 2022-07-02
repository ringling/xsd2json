import { defineNuxtConfig } from 'nuxt'


//import 'vue-highlight-code/dist/style.css';
export default defineNuxtConfig({

  modules: [],
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap' }

      ],

      title: "Masseopdatering"
    }
  }

})
