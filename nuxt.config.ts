// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    }
})
