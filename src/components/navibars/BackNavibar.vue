/*jshint esversion: 6 */

<template>
    <div>
        <navi-bar v-bind:refers="refers"></navi-bar>
    </div>
</template>

<script>
import Navibar from './Navibar.vue';
import {articlesIndices} from "@/router/article";
import {musicsIndices} from "@/router/musics";
export default {
    name: 'BackNavibar',
    data () {
        return {
            refers: [
                {
                    'linker': '/',
                    'text': 'Home',
                    'type': 0,
                },
                {
                    'linker': articlesIndices.post.path,
                    'text': 'PostArticle',
                    'type': 0,
                },
                {
                    'linker': articlesIndices.put.path,
                    'text': 'PutArticle',
                    'type': 0,
                },
                {
                    'linker': musicsIndices.post.path,
                    'text': 'PostMusic',
                    'type': 0,
                },
                {
                    'linker': musicsIndices.put.path,
                    'text': 'PutMusic',
                    'type': 0,
                },
            ]
        };
    },
    components: {
        'navi-bar': Navibar
    }
};
</script>
