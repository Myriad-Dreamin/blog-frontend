/*jshint esversion: 6 */

import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store/index.js';
import {tokenState} from "@/store/token/token";

import mainIndex from "@/router/main";
import articlesIndices from "@/router/articles";
import authIndices from "@/router/auth";

// import Musics from '@/views/musical/Musics';

Vue.use(Router);

const routes = [
    mainIndex,
    ...articlesIndices,
    ...authIndices,
    {
        path: '/musics',
        name: 'Music',
        component: () => import('@/views/musical/Musics'),
        meta: {
            requireAuth: false,
        }
    },
];

// for (let index of routes) {
//     index.type = 0;
// }

const router = new Router({
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (store.state.authenticated || tokenState.get()) {
            return next();
        } else {
            return next({'path': '/login'});
        }
    }
    return next();
});


export default router;
