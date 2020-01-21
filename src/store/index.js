/*jshint esversion: 6 */

import Vue from 'vue';
import Vuex from 'vuex';

import AuthAdmin from './module/auth.js';
import Login from './module/Login.js';


Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        authenticated: false,
        name: '',
        email: '',
    },
    modules: {
        AuthAdmin,
        Login
    },
    strict: true
});

