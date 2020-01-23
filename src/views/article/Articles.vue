/*jshint esversion: 6 */

<template>
    <div class="back-body">
        <div class="back-wrap">
            <navi-bar></navi-bar>
            <div class="article_index_body">
                <div style="height: 50px; width:100%;"></div>
                <div class="index_box" v-for="article in articles" :key="article.id">
                    <div class="title">
                        <a v-on:click="linkToArticle(article.id)">{{ article.title }}</a>
                    </div>
                    <div class="tagbox">
                        <a class="category">Category: {{ article.category }}</a>
                    </div>
                    <div class="tagbox">
                        <a class="timetag">Publish at: {{ article.published_at }}</a>
                    </div>
                    <div class="intro">
                        <a>{{ article.intro }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MainNavibar from '@/components/navibars/MainNavibar.vue';
    import {getBackendPath} from "@/module/global";

    export default {
        name: 'Articles',
        mounted() {

            this.axios.get(getBackendPath() + '/v1/article-list?page=1&page_size=1000').then((response) => {
                if (response.data.code === 0) {
                    this.articles = response.data.articles.reverse();
                } else {
                    console.log(response.data);
                }
            });
        },
        data() {
            return {
                msg: 'List Articles',
                articles: [
                    {
                        'title': '',
                        'id': 0,
                        'category': '',
                        'published_at': '',
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
            'navi-bar': MainNavibar
        }
    };
</script>

<style scoped src="../../assets/css/background.css"></style>
<style scoped src="../../assets/css/articles/article_index_body.css"></style>
<style scoped src="../../assets/css/articles/article_index_box.css"></style>


