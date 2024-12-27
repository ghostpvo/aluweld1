// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ["@/assets/style/global.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern',
                    additionalData: '@use "@/assets/style/variables.scss" as *; @use "@/assets/style/mixins.scss" as *;',
                },
            },
        },
    },
    modules: ["nuxt-icons"],
})
