// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss', 'nuxt-icon','@nuxtjs/ionic','@nuxtjs/supabase'
    ],
    // @ts-ignore
    runtimeConfig:{
        apiSecret: "",
        public:{
            owaKey: process.env.NUXT_OWA_KEY
        }
    }
})
