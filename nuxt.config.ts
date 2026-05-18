// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  plugins: ["~/plugins/preline.client.ts",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/supabase", "@nuxtjs/sitemap"],
  supabase: { redirect: false },
  site: {
    url: 'https://ditanrs.my.id',
    name: 'Dita Nur Sabila',
  },
})
