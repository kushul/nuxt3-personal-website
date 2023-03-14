import VueTimeline from "@growthbunker/vuetimeline";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueTimeline, {
    })

})