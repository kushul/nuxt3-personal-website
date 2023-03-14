<template>
    <div>
        <vue-timeline-update v-for="(project, index) in projects" :key="index"
            :title="project.title" :description="project.description" :thumbnail="'/images/projects/' + project.thumbnail"
            :category="project.role" :icon="project.icon" :color="project.color" :animation="true"
            :animation-duration="1500" :animation-container="project.role" :is-last="true" class="timeline-container">
            <div class="tech-wrapper">
                <div v-for="(tech, index) in project.tech" :key="index" class="tech">{{ tech }}</div>
            </div>
            <div class="sm:text-right text-center">
                <a :href="project.url" target="_blank" class="website-link sm:mr-8 mr-0">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Visit website &rarr;
                </a>
            </div>
        </vue-timeline-update>
    </div>
</template>

<script>
import projects from '../static/content/projects'
export default {
    data() {
        return {
            projects: projects
        }
    },
    methods: {
        getDate(date) {
            // return new Date(date)
        }
    }
}
</script>

<style lang="scss">
.timeline-container {
    .gb-vue-timeline-update__bullet {
        box-shadow: 0 2px 5px 0 #18191a !important;
    }

    .gb-vue-timeline-update__slot {
        margin-top: 10px !important;
    }

    .gb-base-badge {
        color: #fff;
        @apply font-medium;
    }

    .gb-vue-timeline-update__right {
        margin-bottom: 20px;
        padding-bottom: 0 !important;
    }

    .gb-vue-timeline-update__thumbnail {
        width: 100%;
    }
}

.dark-mode {
    .timeline-container {
        .gb-vue-timeline-update__right {
            border-bottom: 2px dashed #90cdf4;
        }

        .gb-vue-timeline-update__title,
        .gb-base-icon {
            @apply text-gray-300;
        }

        .gb-vue-timeline-update__ago {
            color: #a9c7df !important;
        }

        .gb-vue-timeline-update__thumbnail {
            border-color: #e2e8f0 !important;
            box-shadow: 0 1px 5px 0 #e2e8f0 !important;
        }

        .gb-vue-timeline-update__line {
            background: linear-gradient(#90cdf4 50%, rgba(49, 61, 79, 0)) !important;
        }
    }
}

.light-mode {
    .timeline-container {
        .gb-vue-timeline-update__right {
            border-bottom: 2px dashed #2a4365;
        }

        .gb-vue-timeline-update__title,
        .gb-base-icon,
        .gb-vue-timeline-update__ago {
            @apply text-gray-800;
        }

        .gb-vue-timeline-update__ago {
            color: #2d3748 !important;
        }

        .gb-vue-timeline-update__thumbnail {
            border-color: #2a4365 !important;
            box-shadow: 0 1px 5px 0 #2a4365 !important;
        }

        .gb-vue-timeline-update__line {
            background: linear-gradient(#2a4365 50%, rgba(49, 61, 79, 0)) !important;
        }

        .gb-vue-timeline-update__description {
            color: #2a4365 !important;
        }
    }
}

.sepia-mode {
    .timeline-container {
        .gb-vue-timeline-update__right {
            border-bottom: 2px dashed #d69e2e;
        }

        .gb-vue-timeline-update__title,
        .gb-base-icon {
            @apply text-yellow-900;
        }

        .gb-vue-timeline-update__ago {
            color: #744210 !important;
        }

        .gb-vue-timeline-update__line {
            background: linear-gradient(#d69e2e 50%, rgba(49, 61, 79, 0)) !important;
        }

        .gb-vue-timeline-update__thumbnail {
            border-color: #d69e2e !important;
            box-shadow: 0 1px 5px 0 #d69e2e !important;
        }

        .gb-vue-timeline-update__description {
            color: #9c4221 !important;
        }
    }
}

.tech-wrapper {
    @apply flex text-sm text-copy-primary;

    .tech {
        display: inline-block;
    }

    .tech::after {
        content: '/';
        margin: 0 10px;
    }

    .tech:last-child::after {
        content: ' ';
    }
}

.website-link {
    position: relative;
    text-decoration: none !important;
    padding: 10px 30px;
    // text-transform: uppercase;
    overflow: hidden;
    letter-spacing: 5px;
    color: var(--green) !important;
    transition: 0.2s;
    display: inline-block;
    cursor: pointer;

    @apply text-lg my-4 font-semibold;

    &:hover {
        color: #fff !important;
        background: var(--green) !important;
        -webkit-text-fill-color: initial !important;
        box-shadow: 0 0 10px var(--green), 0 0 20px var(--green),
            0 0 40px var(--green);
        transition-delay: 1s;
        cursor: pointer;

        span {
            cursor: pointer;

            &:nth-child(1) {
                left: 100%;
                transition: 1s;
            }

            &:nth-child(2) {
                top: 100%;
                transition: 1s;
                transition-delay: 0.25s;
            }

            &:nth-child(3) {
                right: 100%;
                transition: 1s;
                transition-delay: 0.5s;
            }

            &:nth-child(4) {
                bottom: 100%;
                transition: 1s;
                transition-delay: 0.75s;
            }
        }
    }

    span {
        position: absolute;
        display: block;
        cursor: pointer;

        &:nth-child(1) {
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--green));
        }

        &:nth-child(2) {
            top: -100%;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg, transparent, var(--green));
        }

        &:nth-child(3) {
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(270deg, transparent, var(--green));
        }

        &:nth-child(4) {
            bottom: -100%;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(360deg, transparent, var(--green));
        }
    }
}</style>