/*jshint esversion: 6 */

<template>
    <div>
        <navi-bar></navi-bar>
        <div :class="$style.article_index_body">
            <div style="height: 50px; width:100%;"></div>
            <div :class="$style.index_box" v-for="article in articles" :key="article.id">
                <div :class="$style.title">
                    <a v-on:click="linkToArticle(article.id)">{{ article.title }}</a>
                </div>
                <div :class="$style.tagbox">
                    <a :class="$style.category">Category: {{ article.category }}</a>
                </div>
                <div :class="$style.tagbox">
                    <a :class="$style.timetag">Publish at: {{ article.published_at }}</a>
                </div>
                <div :class="$style.intro">
                    <a>{{ article.intro }}</a>
                </div>
            </div>
        </div>
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

<style lang="css" module>
    @import '../../assets/css/articles/article_index_body.css';
    @import '../../assets/css/articles/article_index_box.css';
</style>
