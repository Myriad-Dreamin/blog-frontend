/*jshint esversion: 6 */

import Vue from 'vue';
import Vuex from 'vuex';

import AuthAdmin from './modules/adminstatus/AuthAdmin.js';
import Login from './modules/adminstatus/Login.js';


Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        AuthAdmin,
        Login
    },
    strict: true
});

