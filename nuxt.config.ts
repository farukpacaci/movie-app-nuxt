// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui',
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/color-mode"
  ],
  runtimeConfig: {
    public: {
      // You should set the TMDB API URL in the environment variable NUXT_PUBLIC_TMDB_API_URL
      tmdbBaseUrl: process.env.NUXT_PUBLIC_TMDB_API_URL || 'https://api.themoviedb.org/3',
      // You must set the TMDB API key in the environment variable NUXT_PUBLIC_TMDB_API_KEY
      tmdbApiKey: process.env.NUXT_PUBLIC_TMDB_API_KEY || '',
      // You should set the TMDB image URL in the environment variable NUXT_PUBLIC_TMDB_IMAGE_URL
      tmdbImageUrl: process.env.NUXT_PUBLIC_TMDB_IMAGE_URL || 'https://image.tmdb.org/t/p/original'
    }
  },
  image: {
    providers: {
      tmdb: {
        name: 'tmdb',
        provider: '~/providers/image/tmdb.ts',
        options: {
          baseURL: "https://image.tmdb.org/t/p/original",
        }
      }
    }
  },
})