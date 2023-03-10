<template>
<div class="home-main-intro container mx-auto">
    <HomeMainIntro />
    <div class="bg-background-secondary pb-16">
        <h1 class="title">Skills & Expertise</h1>
        <h2 class="subtitle">
          A list of skills and technology i have been experienced.
        </h2>
        <div class="main-tagline-container container mx-auto">
          <div
            class="tagline-wrapper"
            v-bind:style="{
              'grid-area': tagline.gridarea,
              'justify-content': tagline.justify,
              'align-items': tagline.align,
            }"
            v-for="(tagline, index) in taglines"
            :key="index"
          >
            <div
              class="tagline-item md:w-32 md:h-32 sm:w-24 sm:h-24 w-16 h-16"
              :class="tagline.color"
            >
              <h2
                class="
                  font-serif
                  tracking-normal
                  leading-none
                  text-copy-primary
                  md:text-xl
                  sm:text-sm
                  text-xs text-fade
                  font-bold
                "
              >
                {{ tagline.text }}
              </h2>
              <img
                class="md:w-20 sm:w-12 w-8"
                src="findImage(tagline.image)"
                alt="creative"
              />
            </div>
          </div>
          <HomeMainTagline />
        </div>
      </div>
    <div class="pb-12 pt-4 map-container">
    <HomeMap />
    </div>
</div>
</template>
<script setup lang="ts">
// const runtimeConfig = useRuntimeConfig()
interface ITagline {
  text: string
  image: string
  gridarea: string
  justify: string
  align: string
  color: string
}
const taglines: ITagline[] = [
  {
    text: 'A11Y',
    image: 'accessibility.svg',
    gridarea: 'a',
    justify: 'flex-end',
    align: 'flex-end',
    color: 'bg-indigo-500',
  },
  {
    text: 'Drupal9',
    image: 'drupal.svg',
    gridarea: 'b',
    justify: 'center',
    align: 'flex-end',
    color: 'bg-blue-500',
  },
  {
    text: 'UI/UX',
    image: 'design.svg',
    gridarea: 'c',
    justify: 'flex-start',
    align: 'flex-end',
    color: 'bg-purple-500',
  },
  {
    text: 'Git',
    image: 'git.svg',
    gridarea: 'd',
    justify: 'flex-end',
    align: 'center',
    color: 'bg-red-500',
  },
  {
    text: 'Responsive',
    image: 'responsive.svg',
    gridarea: 'f',
    justify: 'flex-start',
    align: 'center',
    color: 'bg-pink-500',
  },
  {
    text: 'Javascript',
    image: 'javascript.svg',
    gridarea: 'h',
    justify: 'flex-end',
    align: 'flex-start',
    color: 'bg-yellow-600',
  },
  {
    text: 'Vuejs',
    image: 'vuejs.svg',
    gridarea: 'i',
    justify: 'center',
    align: 'flex-start',
    color: 'bg-green-500',
  },
  {
    text: 'CSS',
    image: 'css.svg',
    gridarea: 'j',
    justify: 'flex-start',
    align: 'flex-start',
    color: 'bg-orange-500',
  },
]

// function findImage(string: name) {
//   if (name) {
//     const result = require(`~/assets/images/icon/${name}`)
//     return result
//   }
// }

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