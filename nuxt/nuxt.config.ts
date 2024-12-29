// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    ych: {
      baseUrl: 'https://ych.commishes.com',
      user: '/user/history/dech.json'
    }
  },

  future: {
    compatibilityVersion: 4
  },

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],

      link: [
        { rel: 'icon', type: 'image/webp', href: '/favicon.webp' },
      ]
    },

    pageTransition: {
      name: 'page',
      mode: 'in-out',
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  routeRules: {
    '/portfolio': {
      isr: true
    }
  },

  nitro: {
    prerender: {
      routes: [
        '/'
      ]
    }
  },

  modules: ['@nuxtjs/tailwindcss']
})