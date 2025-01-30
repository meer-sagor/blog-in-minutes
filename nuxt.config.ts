// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico'
        }
      ],
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss','@nuxt/image', 'shadcn-nuxt', '@nuxt/icon'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  supabase: {
    redirect: false
  },
  image:{
    provider: 'ipx'
  },
  experimental:{
    typedPages: true
  }
})
