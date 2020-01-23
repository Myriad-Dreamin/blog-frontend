/*jshint esversion: 6 */

import Vue from 'vue';
import Vuex from 'vuex';

import AuthAdmin from './module/auth.js';
// import Login from './module/Login.js';
import Config from './module/config';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
    },
    modules: {
        AuthAdmin,
        // Login,
        config: Config,
    },
    strict: true
});

