/*jshint esversion: 6 */

import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Articles from '@/components/Articles';
import Article from '@/components/Article';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/articles',
            name: 'Articles',
            component: Articles
        },
        {
            path: '/articles/:id',
            name: 'Article',
            component: Article
        }
    ]
});
