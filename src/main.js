/*jshint esversion: 6 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import axios from 'axios';
import VueAxios from 'vue-axios';
import {ElementUIPlugin} from '@/plugin/element_ui';

import { Validator, install as VeeValidate } from 'vee-validate/dist/vee-validate.minimal.esm.js';
import { required, min, max } from 'vee-validate/dist/rules.esm.js';
import veeEn from 'vee-validate/dist/locale/en';

// import 'element-ui/lib/theme-chalk/index.css';

import store from './store/index.js';
import router from './router';
import {getBackendPath} from '@/module/global';
import {authInterceptor} from '@/module/backend';
import {MathJaxRender} from '@/plugin/mathjax';
import {PrismRender} from '@/plugin/prism';


axios.defaults.baseURL = getBackendPath();
axios.interceptors.request.use(authInterceptor.onFullFilled, authInterceptor.onRejected);

for (let plugin of [
    MathJaxRender,
    PrismRender,
]) {
    plugin.init();
}
Vue.use(VueAxios, axios);
ElementUIPlugin.Use(Vue);

const veeValidateConfig = {
    errorBagName: 'errorBags', // change if property conflicts.
    fieldsBagName: 'fieldBags',
};

// Add the rules you need.
Validator.extend('required', required);
Validator.extend('min', min);
Validator.extend('max', max);

// Merge the messages.
Validator.localize('en', veeEn);

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
