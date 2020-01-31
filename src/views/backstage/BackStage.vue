/*jshint esversion: 6 */

<template>
    <div>
        <navi-bar></navi-bar>

    </div>
</template>

<script>
import BackNaviBar from '@/components/navibars/BackNavibar';
import {getBackendPath} from "@/module/global";
export default {
    name: 'BackStage',
    mounted() {

        this.axios.get(getBackendPath() + '/v1/article-list?page=1&page_size=1000').then((response) =>  {
            this.articles = response.data;
        });
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            articles: [
                {
                    'title': '',
                    'id': 0,
                    'category': '',
                    'publishe_at': '',
                    'intro': '',
                }
            ]
        };
    },
    methods: {
        linkToArticle(articleId) {
            this.$router.push({name: 'Article', params: {id: articleId}});
        }
    },
    components: {
        'navi-bar': BackNaviBar
    }
};
</script>
