// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/icon", "@nuxt/image", "@nuxtjs/tailwindcss", "@nuxt/content"],
    css: ["~/assets/css/main.css"],
    app: {
        head: {
            title: "Studio Arquiteto",
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
                },
            ],
        },
    },
});
