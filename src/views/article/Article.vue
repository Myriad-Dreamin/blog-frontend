/*jshint esversion: 6 */

<template>
    <div>
        <navi-bar></navi-bar>
        <div class="margin-left-10 margin-right-10" style="background-color: rgba(255, 255, 255, 0.6);">
            <div class="margin-left-15 margin-right-15">
                <div class="header_box">
                    <div class="clear" style="padding: 25px"></div>
                    <div class="container">
                        <span class="title">
                            <a v-on:click="linkToArticle(article.id)">{{ article.title }}</a>
                        </span>
                        <span class="tagbox">
                            <a class="category">Category: {{ article.category }}</a>
                        </span>
                    </div>
                    <div class="clear" style="padding: 13px"></div>
                    <div class="container">
                        <span class="tagbox">
                            <a class="timetag">Publish at: {{ article.published_at }} UTC+0</a>
                        </span>
                        <span class="tagbox">
                            <a class="timetag">Update at: {{ article.updated_at }} UTC+0</a>
                        </span>
                    </div>
                </div>
                <div id="toRended" class="markdown-body" v-html="article.content" v-highlight>
                    {{ article.content }}
                </div>
            </div>
        </div>
        <div style="height: 200px; width:100%;"></div>
    </div>
</template>

<script>
    import MainNavibar from '@/components/navibars/MainNavibar.vue';
    import {getBackendPath} from "@/module/global";
    import {mdParser} from "@/plugin/kramed";
    import {MathJaxRender} from "@/plugin/mathjax";

    export default {
        name: 'Articles',
        async mounted() {
            console.log(mdParser);

            let response = await this.axios.get(
                getBackendPath() + '/v1/article/' + this.$route.params.id.toString());
            if (response.status !== 200 || response.data.code !== 0) {
                console.log(response);
                return;
            }

            this.article = response.data.article;
            response = await this.axios.get(
                getBackendPath() + '/v1/articles/' + this.$route.params.id.toString() + ".md");
            if (response.status !== 200) {
                console.log(response);
                return;
            }
            this.$set(this.article, 'content', mdParser(response.data));
            MathJaxRender.rerender();
        },
        data() {
            return {
                msg: 'Show Article Details',
                article: {
                    title: '',
                    id: 666,
                    category: '',
                    published_at: '',
                    updated_at: '',
                    intro: '',
                    content: '',
                }
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

<style scoped src="../../assets/css/articles/article_header_box.css"></style>
<style scoped src="../../assets/css/articles/markdown.css"></style>
