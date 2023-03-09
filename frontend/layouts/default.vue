<template>
    <div class="bg-background-primary text-copy-primary flex min-h-screen flex-col content-wrapper font-display">
        <MenuSection />
        <!-- <input type="checkbox" class="theme-switch" v-model="darkmode" /> -->
        <nuxt class="flex-grow" />
        <FooterSection />
    </div>
</template>

<script setup>


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
