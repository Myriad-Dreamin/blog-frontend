/*jshint esversion: 6 */

<template>
    <div>
        <navi-bar v-bind:refers="refers"></navi-bar>
        <div>qwq</div>
    </div>
</template>

<script>
import Navibar from './Navibar.vue';
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
                    'linker': '/rose',
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
                },
                {
                    'linker': '/mass/article',
                    'text': 'Mass Article',
                    'type': 0,
                },
                {
                    'linker': '/mass/music',
                    'text': 'Mass Music',
                    'type': 0,
                },
                {
                    'linker': '/mass/picture',
                    'text': 'Mass Picture',
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
