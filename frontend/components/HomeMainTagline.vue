<template>
    <div class="main-image-wrapper relative flex items-center justify-center">
        <img class="md:h-56 md:w-56 sm:w-40 sm:h-40 w-20 h-20 mx-auto rounded-full object-cover"
            src="~/assets/images/kushul_cartoon.jpg" alt="kushul soomaree cartoon picture" />
        <div class="works__pulse-bg"></div>
        <div class="works__pulse-bg"></div>
        <div class="dots dots-top">
            <div class="dots__dot vertical" v-for="index in 6" :key="index"></div>
        </div>
        <div class="dots dots-bottom">
            <div class="dots__dot vertical" v-for="index in 6" :key="index"></div>
        </div>
        <div class="dots dots-left-top">
            <div class="dots__dot horizontal" v-for="index in 16" :key="index"></div>
        </div>
        <div class="dots dots-right-top">
            <div class="dots__dot horizontal" v-for="index in 16" :key="index"></div>
        </div>
        <div class="dots dots-right">
            <div class="dots__dot horizontal" v-for="index in 10" :key="index"></div>
        </div>
        <div class="dots dots-left">
            <div class="dots__dot horizontal" v-for="index in 12" :key="index"></div>
        </div>
        <div class="dots dots-right-bottom">
            <div class="dots__dot horizontal" v-for="index in 16" :key="index"></div>
        </div>
        <div class="dots dots-left-bottom">
            <div class="dots__dot horizontal" v-for="index in 16" :key="index"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main-image-wrapper {
    animation: bounce 2s infinite;
    grid-area: e;
    position: relative;
}

.image-fade {
    width: 30%;
}

.works__pulse-bg {
    animation: pulse 2s infinite;
    width: 150px;
    height: 150px;
    position: absolute;
    border-radius: 100%;
    opacity: 0.8;
    z-index: -1;

    @apply border-solid border-green-600 border-2;
}

.works__pulse-bg+.works__pulse-bg {
    width: 140px;
    height: 140px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
}

.dots {
    position: absolute;
    display: flex;
    z-index: -1;
}

.dots-top,
.dots-bottom {
    flex-direction: column;
}

.dots-top {
    top: -30%;
}

.dots-left-top {
    left: -25%;
    top: -10%;
    transform: rotate(-320deg);
}

.dots-right-top {
    right: -25%;
    top: -10%;
    transform: rotate(-40deg);
}

.dots-right-bottom {
    right: -25%;
    bottom: -10%;
    transform: rotate(40deg);
}

.dots-left-bottom {
    left: -25%;
    bottom: -10%;
    transform: rotate(320deg);
}

.dots-bottom {
    bottom: -30%;
}

.dots-right {
    right: -15%;
}

.dots-left {
    left: -15%;
}

.dots__dot {
    width: 5px;
    height: 5px;
    margin: 5px;
    display: inline-block;
    border-radius: 99px;

    @apply bg-green-600;

    &.vertical {
        animation: moveInOutY 0.35s linear infinite;
    }

    &.horizontal {
        animation: moveInOutX 0.35s linear infinite;
    }
}

@media (max-width: 768px) {
    .dots-left-top {
        left: -90%;
    }

    .dots-right-top {
        right: -90%;
    }

    .dots-left {
        left: -70%;
    }

    .dots-right {
        right: -70%;
    }

    .dots-left-bottom {
        left: -90%;
    }

    .dots-right-bottom {
        right: -90%;
    }

    .dots-top {
        top: -50%;
    }

    .dots-bottom {
        bottom: -50%;
    }
}

@media (max-width: 640px) {
    .works__pulse-bg {
        width: 100px;
        height: 100px;
    }

    .works__pulse-bg+.works__pulse-bg {
        width: 90px;
        height: 90px;
    }

    .dots__dot {
        width: 2px;
        height: 2px;
        margin: 3px;
    }

    .dots-left-top {
        left: -35%;
    }

    .dots-right-top {
        right: -35%;
    }

    .dots-left {
        left: -25%;
    }

    .dots-right {
        right: -25%;
    }

    .dots-left-bottom {
        left: -35%;
    }

    .dots-right-bottom {
        right: -35%;
    }

    .dots-top {
        top: -50%;
    }

    .dots-bottom {
        bottom: -50%;
    }
}

@media (max-width: 450px) {
    .dots-left-top {
        left: -70%;
    }

    .dots-right-top {
        right: -70%;
    }

    .dots-left {
        left: -70%;
    }

    .dots-right {
        right: -70%;
    }

    .dots-left-bottom {
        left: -70%;
    }

    .dots-right-bottom {
        right: -70%;
    }

    .dots-top {
        top: -50%;
    }

    .dots-bottom {
        bottom: -50%;
    }
}

@media (max-width: 400px) {
    .dots-left-top {
        left: -100%;
    }

    .dots-right-top {
        right: -100%;
    }

    .dots-left {
        left: -70%;
    }

    .dots-right {
        right: -70%;
    }

    .dots-left-bottom {
        left: -100%;
    }

    .dots-right-bottom {
        right: -100%;
    }

    .dots-top {
        top: -50%;
    }

    .dots-bottom {
        bottom: -50%;
    }
}</style>