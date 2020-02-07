/*jshint esversion: 6 */

<template>
    <div :class="viewDividerBody">
        <el-drawer
            :visible.sync="viewSetting"
            :with-header="false"
            direction="ttb">
            <el-button v-on:click="changeTransparentBackgroundState"></el-button>
        </el-drawer>

        <div :class="articleBackBody">
            <div :class="articleWrapClass">
                <div style="min-height: 60vh">
                    <el-row v-show="isShow">
                        <el-col :span="3">
                            <div class="placer"></div>
                        </el-col>
                        <el-col :span="20" class="article-crumb">
                            <span>Home</span> &gt;
                            <span>Article</span> &gt;
                            <span>{{article.category}}</span>
                            <i class="el-icon-setting article-setting-button" v-on:click="flipSetting"></i>
                        </el-col>
                        <el-col :span="1"></el-col>
                    </el-row>
                    <el-row v-show="isShow">
                        <el-col :span="2">
                            <div class="placer"></div>
                        </el-col>
                        <el-col :span="20">
                            <div class="article-title">
                                <a>{{ article.title }}</a>
                            </div>
                            <el-divider></el-divider>
                        </el-col>
                        <el-col :span="2"></el-col>
                    </el-row>
                    <el-row v-show="isShow" style="margin: 20px 0;">
                        <el-col :span="3">
                            <div class="placer"></div>
                        </el-col>
                        <el-col :span="18">
                            <span>{{article.intro}}</span>
                        </el-col>
                        <el-col :span="3"></el-col>
                    </el-row>
                    <el-row v-show="isShow">
                        <el-col :span="2">
                            <div class="placer"></div>
                        </el-col>
                        <el-col :span="20">
                            <el-divider></el-divider>
                        </el-col>
                        <el-col :span="2"></el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="image-body">
            <div :class="windowWrapClass" class="back-window">

            </div>
        </div>

        <div :class="articleBackBody">
            <div :class="articleWrapClass">
                <el-row v-show="isShow">
                    <el-col :span="2">
                        <div class="placer"></div>
                    </el-col>
                    <el-col :span="20">
                        <el-row v-show="isShow">
                            <el-col :span="1">
                                <div class="placer"></div>
                            </el-col>
                            <el-col :span="22">
                                <div id="toRended" class="markdown-body" v-html="article.content" v-highlight>
                                    {{ article.content }}
                                </div>
                            </el-col>
                            <el-col :span="1"></el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="2"></el-col>
                </el-row>
            </div>
        </div>
        <div :class="articleBackBody">
            <div :class="articleWrapClass" class="back-footer">

            </div>
        </div>
    </div>
</template>

<script>
    import MainNavibar from '@/components/navibars/MainNavibar.vue';
    import {client} from "@/module/global";
    import {mdParser} from "@/plugin/kramed";
    import {MathJaxRender} from "@/plugin/mathjax";
    import {FLIP_TRANSPARENT_BACKGROUND_STATE} from "@/store/MutationTypes";

    export default {
        name: 'Articles',
        mounted() {
            this.load().catch((err) => {
                console.log(err);
            });
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
                },
                isShow: false,
                viewSetting: false,
            };
        },
        computed: {
            articleBackBody() {
                return this.$store.state.config.transparentBackground ? "image-body" : "pure-body"
            },
            articleWrapClass() {
                return this.$store.state.config.transparentBackground ? "article-wrap" : ""
            },
            windowWrapClass() {
                return this.$store.state.config.transparentBackground ? "no-wrap" : "image-wrap"
            },
            viewDividerBody() {
                return this.$store.state.config.transparentBackground ? "black-divider" : ""
            },
        },
        methods: {
            linkToArticle(articleId) {
                this.$router.push({name: 'Article', params: {id: articleId}});
            },

            flipSetting() {
                this.viewSetting = !this.viewSetting;
            },

            changeTransparentBackgroundState() {
                this.$store.commit(FLIP_TRANSPARENT_BACKGROUND_STATE);
            },
            async load() {
                let data = await client.article.get(this.$route.params.id);
                this.article = data.article;

                data = await client.article.getContent(this.$route.params.id);
                this.$set(this.article, 'content', mdParser(data));

                this.isShow = true;
                MathJaxRender.render();
            }
        },
        components: {
            'navi-bar': MainNavibar
        }
    };
</script>

<style scoped src="../../assets/css/articles/article.css"></style>

<style scoped src="../../assets/css/articles/article_header_box.css"></style>
<style scoped src="../../assets/css/articles/markdown.css"></style>
<style scoped src="../../assets/css/background.css"></style>
<style src="../../assets/css/prism-one-dark.css"></style>

<style scoped>
    .back-window {
        min-height: 40vh;
    }
    .back-footer {
        min-height: 10vh;
    }
    .pure-body {
        /*box-shadow: 0 0 3px #777777;*/
    }
</style>
