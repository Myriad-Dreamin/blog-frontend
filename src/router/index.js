/*jshint esversion: 6 */

import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/Main';

import Articles from '@/views/article/Articles';
import Article from '@/views/article/Article';

import Musicals from '@/views/musical/Musicindex';

import Register from '@/views/auth/Register';
import Login from '@/views/auth/Login';
import BackStage from '@/views/backstage/BackStage';


import store from '@/store/index.js';
import myd_token from '@/views/auth/Helper';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
            meta: {
                requireAuth: false,
            }
        },
        {
            path: '/articles',
            name: 'Articles',
            component: Articles,
            meta: {
                requireAuth: false,
            }
        },
        {
            path: '/articles/:id',
            name: 'Article',
            component: Article,
            meta: {
                requireAuth: false,
            }
        },
        {
            path: '/musical',
            name: 'Musical',
            component: Musicals,
            meta: {
                requireAuth: false,
            }
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {
                requireAuth: false,
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                requireAuth: false,
            }
        },
        {
            path: '/backstage',
            name: 'BackStage',
            component: BackStage,
            meta: {
                requireAuth: true,
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (store.state.authenticated || myd_token.getToken()) {
            return next();
        } else {
            return next({'path': '/login'});
        }
    }
    return next();
});



export default router;