/*jshint esversion: 6 */

<template>
    <div :class="viewDividerBody">
        <el-drawer
            :visible.sync="viewSetting"
            :with-header="false"
            direction="ttb">
            <el-button v-on:click="changeTransparentBackgroundState"></el-button>
        </el-drawer>

        <div :class="viewClassBody">
            <div :class="viewClassWrap">
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
        <div v-show="isShow" class="back-body">
            <div :class="viewClassWrapColor" style="height: 40vh">

            </div>
        </div>

        <div :class="viewClassBody">
            <div :class="viewClassWrap">
                <el-row v-show="isShow" style="box-shadow: 0 0 3px #777777;">
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
        <div v-show="isShow" class="back-body">
            <div :class="viewClassWrapColor" style="height: 40vh">

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
            viewClassBody() {
                console.log(this.$store.state.config.transparentBackground);
                return this.$store.state.config.transparentBackground ? "back-body" : ""
            },
            viewClassWrap() {
                console.log(this.$store.state.config.transparentBackground);
                return this.$store.state.config.transparentBackground ? "article-wrap" : ""
            },
            viewClassWrapColor() {
                console.log(this.$store.state.config.transparentBackground);
                return this.$store.state.config.transparentBackground ? "article-wrap" : "back-wrap"
            },
            viewDividerBody() {
                console.log(this.$store.state.config.transparentBackground);
                return this.$store.state.config.transparentBackground ? "black-divider" : ""
            }
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
                console.log(this.$store.state.config.transparentBackground);
            },
            async load() {
                let data = await client.article.get(this.$route.params.id);
                this.article = data.article;

                data = await client.article.getContent(this.$route.params.id);
                this.$set(this.article, 'content', mdParser(data));

                this.isShow = true;
                MathJaxRender.rerender();
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

