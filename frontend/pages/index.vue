<template>
<div class="home-main-intro container mx-auto">
    <HomeMainIntro />
</div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>