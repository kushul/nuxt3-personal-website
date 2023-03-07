<template>
    <div class="bg-background-primary text-copy-primary flex min-h-screen flex-col content-wrapper font-display">
        <MenuSection />
        <!-- <input type="checkbox" class="theme-switch" v-model="darkmode" /> -->
        <nuxt class="flex-grow" />
        <FooterSection />
    </div>
</template>

<script setup>

export default {
    computed: {
        darkmode: {
            get: function () {
                // return this.$store.getters['getDarkMode']
            },
            set: function (value) {
                // this.$store.dispatch('setDarkMode', value)
            }
        }
    },
    mounted() {
        // this.$store.dispatch('checkDarkMode')s
    },
    data() {
        return {
            theme: 'theme-light'
        }
    },
    created() {
        this.$store.dispatch('initGhost')
        this.storeTheme()
    },
    methods: {
        updateTheme(val) {
            this.theme = val
        },
        storeTheme(val) {
            this.theme = val
        }
    }
}
</script>

<style lang="scss">
[class^='gb-']:not(.gb-base-icon) {
    font-family: Nunito, sans-serif !important;
}

:root {
    /* color-scheme: light dark; */
}

.container {
    @apply px-4;
}

@screen sm {
    .container {
        @apply px-0;
    }
}
</style>
