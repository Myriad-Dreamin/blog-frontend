/*jshint esversion: 6 */

<template>
    <navi-bar v-bind:refers="refers"></navi-bar>
</template>

<script>
import Navibar from './Navibar.vue';
export default {
    name: 'MainNavibar',
    data () {
        return {
            refers: [
                {
                    'linker': '/',
                    'text': 'Home',
                    'type': 0,
                },
                {
                    'linker': '/articles',
                    'text': 'Article',
                    'type': 0,
                },
                {
                    'linker': 'https://github.com/Myriad-Dreamin',
                    'text': 'Code',
                    'type': 1,
                },
                {
                    'linker': '/secretlove',
                    'text': 'Marshmello',
                    'type': 0,
                },
                {
                    'linker': '/chocolate',
                    'text': 'Chocolate',
                    'type': 0,
                },
                {
                    'linker': '/musical',
                    'text': 'Favorites',
                    'type': 0,
                }
            ]
        };
    },
    components: {
        'navi-bar': Navibar
    }
};
</script>
