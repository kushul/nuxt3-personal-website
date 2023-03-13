<template>
    <div class="
          bg-background-invert
          text-copy-invert
          flex
          justify-center
          items-center
          text-sm
          sm:py-6
          py-3
          mt-2
          tracking-wide
          w-full
        ">
        <div class="text-copy-invert mx-4 font-bold text-sm flex text-sm tagline">
            © 2022
            <span class="sm:block hidden ml-1">| KUSHUL SOOMAREE</span>
        </div>

        <ul class="menu flex justify-end">
            <li class="kush-footer-item">
                <!-- <nuxt-link :to="{ name: 'blog' }">Blogs</nuxt-link> -->
            </li>
            <li class="kush-footer-item">
                <!-- <nuxt-link :to="{ name: 'events' }">Events</nuxt-link> -->
            </li>
            <li class="kush-footer-item">
                <!-- <nuxt-link :to="{ name: 'projects' }">Projects</nuxt-link> -->
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        url: {
            get() {
                return this.$store.state.ghostUrl
            },
        },
    },
}
</script>

<style scoped lang="scss">
.footer-wrapper {
    display: grid;
}

.logo {}

/* purgecss start ignore */

.kush-footer-item {
    margin: 0;
    padding: 0;
    @apply mx-2 font-bold;

    a {
        transition: all 0.2s ease-in-out;
        @apply border-b-2 border-copy-invert;

        &:hover {
            @apply text-green-500 border-green-500;
        }
    }
}

.nuxt-link-exact-active {
    border-bottom: 2px solid #48bb78 !important;
    color: #48bb78 !important;
}

@screen sm {
    .kush-footer-item {
        @apply mx-4;
    }
}

@media (max-width: 480px) {
    .tagline {
        position: relative;
        bottom: -3px;
    }
}

/* purgecss end ignore */
</style>
