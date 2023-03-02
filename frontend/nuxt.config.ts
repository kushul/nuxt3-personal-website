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
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;700&display=swap' }]
        }
    },
    css: [

        '@/assets/scss/main.scss',
    ],
})