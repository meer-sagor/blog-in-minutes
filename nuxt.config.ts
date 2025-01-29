// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // '@nuxtjs/supabase',
  modules: ['@nuxtjs/tailwindcss','@nuxt/image', 'shadcn-nuxt', '@nuxt/icon'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  }
})
