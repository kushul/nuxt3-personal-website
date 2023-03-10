<template>
<div class="home-main-intro container mx-auto">
    <HomeMainIntro />
    <div class="pb-12 pt-4 map-container">
    <HomeMap />
    </div>
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
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.main-tagline-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  grid-gap: 35px;
  grid-template-areas: 'a b c' 'd e f' 'h i j';
}

.tagline-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.map-container {
  background: url('../assets/images/map-1.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.text-fade {
  position: absolute;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  text-shadow: #000 1px 0 5px;
  color: #fff;

  transform: translate(-50%, -50%);
}

/* // .title {
//   display: block;
//   font-weight: 300;
//   font-size: 100px;
//   color: #35495e;
//   letter-spacing: 1px;
// }
// .links {
//   padding-top: 15px;
// } */

.button {
  @apply shadow px-5 py-2 inline-block;
}

.tagline-item {
  @apply rounded-full flex justify-center items-center relative text-white;
}

@screen sm {
  .main-tagline-container {
    grid-gap: 60px;
  }
}
</style>