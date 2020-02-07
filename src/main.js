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
import {getBackendPath} from "@/module/global";
import {authInterceptor} from "@/module/backend";
import {MathJaxRender} from "@/plugin/mathjax";
import {PrismRender} from "@/plugin/prism";


axios.defaults.baseURL = getBackendPath();
axios.interceptors.request.use(authInterceptor.onFullFilled, authInterceptor.onRejected);

for (let plugin of [
    MathJaxRender,
    PrismRender,
]) {
    plugin.init();
}

const veeValidateConfig = {
    errorBagName: 'errorBags', // change if property conflicts.
    fieldsBagName: 'fieldBags',
};
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(VeeValidate, veeValidateConfig);

Vue.config.productionTip = false;

Vue.directive('highlight', function () {
    let blocks = document.querySelectorAll('pre code');
    [].forEach.call(blocks, PrismRender.render);
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
