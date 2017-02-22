import Vue from 'vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from 'components/app-root'

// Hack needed for now (vue-resource uses document)
// https://github.com/pagekit/vue-resource/issues/455
if (typeof window !== 'undefined') {
    Vue.use(require('vue-resource'))
}

sync(store, router)

const app = new Vue({
    store,
    router,
    ...App
})

export {
    app,
    router,
    store
}