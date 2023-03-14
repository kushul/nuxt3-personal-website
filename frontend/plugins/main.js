import Vue from 'vue'
import util from '../assets/mixins/utils'
Vue.mixin({
    methods: {
        formatThumbnailImages(param, size) {
            return util.formatThumbnailImages(param, size)
        },
        formatBodyImages(param) {
            return util.formatBodyImages(param)
        },
        replaceWithAbsolute(param) {
            return util.replaceWithAbsolute(param)
        }
    }
})