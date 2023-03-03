<template>
    <div class="home-main-intro container mx-auto">
        <div class="left-part-wrapper">
            <div class="profile-image-wrapper">
                <div class="name-wrapper">
                    <h1 data-text="kushul">Kushul</h1>
                    <h1 data-text="Soomaree">Soomaree</h1>
                </div>
                <div class="image-wrapper">
                    <img src="../assets/images/kush-illustration.png" alt="Kushul Soomaree" />
                </div>
            </div>
        </div>
        <div class="right-part-wrapper flex flex-col justify-center">
            <div class="author-job">
                <h3 class="text-base font-semibold">Software Engineer</h3>
            </div>
            <div class="author-title">
                <h4 class="text-xl md:text-2xl lg:text-4xl leading-snug my-4">
                    Based in Mauritius, I'm a Senior Developer, graphic designer &
                    certified Trainer
                </h4>
            </div>
            <div class="author-summary">
                <p class="sm:text-lg text-base">
                    "Design is everywhere. From the dress you're wearing to the smartphone
                    you're holding, it's design."
                </p>
            </div>
            <div class="npx-wrapper mt-4">
                Try
                <span class="
                py-1
                px-2
                text-copy-primary
                bg-background-secondary
                rounded
                cursor-move
                inline-block
              ">npx kushul_soomaree</span>
                on your terminal for a small resume.
            </div>
            <div class="social-media-container">
                <SocialMedia />
            </div>
        </div>
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
</script>

<style lang="scss" scoped>
.home-main-intro {
    height: calc(100vh - 120px);
    overflow: hidden;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 40px;
    grid-template-areas: '👨‍🦰 🍌';
}

.npx-wrapper {
    font-family: var(--font-roboto);

    span {}
}

.left-part-wrapper {
    @apply flex items-end justify-center;
    grid-area: 👨‍🦰;
}

.right-part-wrapper {
    grid-area: 🍌;
}

.name-wrapper {
    position: absolute;
    z-index: -1;

    h1 {
        font-size: 100px;
        letter-spacing: 10px;
        font-weight: 900;
        line-height: 100px;
        font-family: var(--font-oswald);
        animation: flash 3s infinite;

        &:last-child {
            margin-left: 50px;
        }

        // &::before {
        //   content: attr(data-text);
        //   position: absolute;
        //   background: (var(--green));
        //   -webkit-background-clip: text;
        //   color: transparent;
        //   background-size: 50% 90%;
        //   line-height: 0.9;
        //   clip-path: ellipse(120px 120px at -2.54% -9.25%);
        //   animation: swing 5s infinite;
        //   animation-direction: alternate;
        // }
    }
}

@keyframes flash {
    0% {
        text-shadow: 0 0 6px #fff;
    }

    100% {
        text-shadow: 0 0 0px #000;
    }
}

@keyframes swing {
    0% {
        -webkit-clip-path: ellipse(120px 120px at -2.54% -9.25%);
        clip-path: ellipse(120px 120px at -2.54% -9.25%);
    }

    50% {
        -webkit-clip-path: ellipse(120px 120px at 49.66% 64.36%);
        clip-path: ellipse(120px 120px at 49.66% 64.36%);
    }

    100% {
        -webkit-clip-path: ellipse(120px 120px at 102.62% -1.61%);
        clip-path: ellipse(120px 120px at 102.62% -1.61%);
    }
}

@keyframes shine {
    0% {
        background-position: 0;
    }

    60% {
        background-position: 200px;
    }

    100% {
        background-position: 350px;
    }
}

.profile-image-wrapper {
    position: relative;
    z-index: 10;

    .image-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        img {
            width: 60%;
        }
    }
}

.social-media-container {
    margin: 40px 0;
}

.author-title {
    h4 {
        background: linear-gradient(to right,
                var(--text-copy-primary) 0,
                var(--green) 10%,
                var(--text-copy-primary) 20%);
        background-position: 0;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shine 3s infinite linear;
        animation-fill-mode: forwards;
        -webkit-text-size-adjust: none;
        text-decoration: none;
    }
}

.author-job h3 {
    position: relative;
    color: var(--green);

    &::after {
        content: '';
        width: 70px;
        height: 2px;
        position: absolute;
        margin-left: 20px;
        top: 50%;
        background: var(--green);
    }
}

@media (max-width: 1400px) {
    .home-main-intro {
        grid-template-columns: 1fr 1fr;
    }

    .profile-image-wrapper {
        .image-wrapper {
            img {
                width: 50%;
            }
        }
    }

    .name-wrapper {
        padding: 20px;

        h1 {
            font-size: 60px;
            line-height: 70px;
        }
    }
}

@media (max-width: 1024px) {
    .home-main-intro {
        grid-template-columns: 1fr;
        grid-template-areas: '🍌' '👨‍🦰';
    }

    .right-part-wrapper {
        text-align: center;
    }

    .name-wrapper {
        display: none;
    }

    .profile-image-wrapper {
        .image-wrapper {
            justify-content: center;
        }
    }
}

@media (max-width: 600px) {
    .home-main-intro {
        grid-gap: 0;
    }

    .profile-image-wrapper {
        .image-wrapper {
            display: none;
            padding-left: 0;
        }
    }
}

@media (max-width: 960px) and (orientation: landscape) {
    .author-summary {
        display: none;
    }
}</style>