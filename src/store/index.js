import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

import upload from './modules/upload'
import citypicker from './modules/citypicker'
export default new Vuex.Store({
    modules:{
        upload,
        citypicker
    },
    plugins:[createLogger()]
})