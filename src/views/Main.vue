/*jshint esversion: 6 */

<template>
    <div :class="[aaa.flexCenter, , aaa.positionRef, aaa.fullHeight, aaa.body_full]">

        <div :class="aaa.content">
            <div :class="[aaa.title, aaa.mBMd]">
                <router-link to="/articles">Dreamin's Blog</router-link>
            </div>

            <div :class="aaa.links">
                <a href="https://laravel.com/docs">Docs</a>
                <router-link to="/articles">Articles</router-link>
                <router-link to="/picture">Picture</router-link>
                <router-link to="/secretlove">Mashmallo</router-link>
                <a href="https://github.com/Myriad-Dreamin">Code</a>
                <a href="https://github.com/Myriad-Dreamin/blog">GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
        };

    }
};
</script>

<style lang="css" module="aaa">
    @import '../assets/css/main_view.css';
</style>

