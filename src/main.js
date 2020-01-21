/*jshint esversion: 6 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import axios from 'axios';
import VueAxios from 'vue-axios';
import VeeValidate from 'vee-validate';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './store/index.js';
import router from './router';
import {tokenState} from "@/store/token/token";
import {getBackendPath} from "@/module/global";
import {authInterceptor} from "@/module/backend";

axios.defaults.baseURL = getBackendPath();


window.MathJax = window.MathJax || {};
window.MathJax.Hub = window.MathJax.Hub || {};
window.MathJax.Hub.Config = window.MathJax.Hub.Config || function () {
    console.log("plugin of MathJax unloaded, check it!");
};

axios.interceptors.request.use(authInterceptor.onFullFilled, authInterceptor.onRejected);


Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

// Vue.directive('highlight', function () {
//     let blocks = document.querySelectorAll('pre code');
//     [].forEach.call(blocks, window.hljs.highlightBlock);
// });

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
