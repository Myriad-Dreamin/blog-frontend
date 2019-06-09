/*jshint esversion: 6 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import axios from 'axios';
import VueAxios from 'vue-axios';
import VeeValidate from 'vee-validate';

import MydToken from './views/auth/Helper.vue';
import store from './store/index.js';
import router from './router';


axios.interceptors.request.use(function (config) {
    if (MydToken.getToken()) {
        config.headers.Authorization = 'Bearer ' + MydToken.getToken();
    }
    return config;
}, function(error) {
    return Promise.reject(error);
});


Vue.use(VueAxios, axios);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

Vue.directive('highlight',function () {
    let blocks = document.querySelectorAll('pre code');
    [].forEach.call(blocks, window.hljs.highlightBlock);
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
