export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api'
        }
    },
    app: {
        head: {
            title: process.env.npm_package_author || 'Kushul Soomaree',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: process.env.npm_package_description || ''
                }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;700&display=swap' }]
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: [
        '@/assets/css/screen.scss',
        '@/assets/scss/main.scss',
        // '@/assets/css/tailwind.css',
    ],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    colorMode: {
        preference: 'dark', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        // cookie: {
        //   key: 'nuxt-color-mode',
        //   options: {
        //     path: nuxt.options.router.base // https://nuxtjs.org/api/configuration-router#base
        //   }
        // }
    },
    postcss: {
        plugins: {
            'postcss-color-function': {},
            'postcss-url': false,
            tailwindcss: 'tailwind.config.js',
            'postcss-nested': {},
            'postcss-hexrgba': {}
        },
    },
})