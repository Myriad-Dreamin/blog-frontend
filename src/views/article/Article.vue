/*jshint esversion: 6 */

<template>
    <div>
        <navi-bar></navi-bar>
        <div class="margin-left-10 margin-right-10" style="background-color: rgba(255, 255, 255, 0.6);">
            <div class="margin-left-15 margin-right-15"> 
                <div :class="header_box.header_box" >
                    <div class="clear" style="padding: 25px"></div>
                    <div :class="header_box.container">
                        <span :class="header_box.title">
                            <a v-on:click="linkToArticle(article.id)">{{ article.title }}</a>
                        </span>
                        <span :class="header_box.tagbox">
                            <a :class="header_box.category">Category: {{ article.category }}</a>
                        </span>
                    </div>
                    <div class="clear" style="padding: 12.5px"></div>
                    <div :class="header_box.container">
                        <span :class="header_box.tagbox">
                            <a :class="header_box.timetag">Publish at: {{ article.published_at }} UTC+0</a>
                        </span>
                        <span :class="header_box.tagbox">
                            <a :class="header_box.timetag">Update at: {{ article.updated_at }} UTC+0</a>
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

export default {
    name: 'Articles',
    mounted() {
        this.axios.get('https://myriaddreamin.com:10777/api/article/' + this.$route.params.id.toString()).then(response =>  {
            this.article = response.data;
            window.MathJax.Hub.Config({
                showProcessingMessages: true,
                messageStyle: 'none',
                // elements: document.getElementsByClassName('markdown-body'),
                extensions: ['tex2jax.js'],
                jax: ['input/TeX', 'output/HTML-CSS'],
                tex2jax: {
                    inlineMath:  [ ['$', '$'] ],
                    displayMath: [ ['$$','$$'] ],
                    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre','code','a'],
                    ignoreClass:'comment-content'
                },
                'HTML-CSS': {
                    availableFonts: ['STIX','TeX'],
                    showMathMenu: false
                }
            });
            setTimeout(()=>{
                window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
            }, 1);
        });
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            article: {
                'title': '',
                'id': 666,
                'category': '',
                'publishe_at': '',
                'intro': '',
                'content': '$ab$',
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

<style module="header_box">
    @import '../../assets/css/articles/article_header_box.css';
</style>

<style scoped>
    @import '../../assets/css/articles/markdown.css';
</style>