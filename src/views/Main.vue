/*jshint esversion: 6 */

<template>
    <div class="flexCenter positionRef fullHeight body_full">

        <div class="content">
            <div class="title mBMd">
                <router-link to="/articles">Dreamin's Blog</router-link>
            </div>

            <div class="links">
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
        name: 'Main',
        data() {
            return {
                msg: 'Myriad Dreamin Blog',
            };
        }
    };
</script>

<style scoped src="../assets/css/main_view.css"></style>

