/*jshint esversion: 6 */

<template>
    <div class="fullHeight" style="width: 100vw">
        <div class="back-body left-box" style="width: 40%">
            <div class="back-wrap">
            </div>
        </div>
        <div class="title-container" style="position: absolute">
            <div class="content title" style="margin-top: 40vh;">
                <router-link :to="articlesIndices.list"><span style="color: white">Dreamin's </span><span>Blog</span></router-link>
            </div>
        </div>
        <div class="right-box" style="width: 60%">
            <el-row>
                <el-col :span="8">
                    <div class="placer"></div>
                </el-col>
                <el-col :span="1">
                    <div class="x-divider"></div>
                </el-col>
                <el-col :span="15">
                    <el-row>
                        <el-col :span="8">
                            <div class="content">
                                <div class="links">
                                    <div class="lnk">
                                        <router-link :to="articlesIndices.list">Articles</router-link>
                                    </div>
                                    <div class="lnk">
                                        <router-link to="/picture">Picture</router-link>
                                    </div>
                                    <div class="lnk">
                                        <router-link to="/musics">Music</router-link>
                                    </div>
                                    <div class="lnk">
                                        <a href="https://github.com/Myriad-Dreamin">Code</a>
                                    </div>
                                    <div class="lnk">
                                        <router-link to="/rose">Mashyumaro</router-link>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="2"><div class="placer"></div></el-col>
                        <el-col :span="14">
                            <div class="content">
                                <div class="links">
                                    <div class="desc">
                                        <span>Myriad Dreamin日常乱写的博客</span>
                                    </div>
                                    <div class="desc">
                                        <span>Myriad Dreamin平时收集的色图</span>
                                    </div>
                                    <div class="desc">
                                        <span>Myriad Dreamin觉得不错的音乐</span>
                                    </div>
                                    <div class="desc">
                                        <span>蒟蒻Myriad Dreamin的代码仓库</span>
                                    </div>
                                    <div class="desc">
                                        <span>写棉花糖给笨蛋Myriad Dreamin</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
<!--                    <div style="margin: 0 100px">-->
<!--                        Twitter, Netease, Github, Mailto Icon-->
<!--                    </div>-->
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import articlesIndices from "@/router/article";


    export default {
        name: 'Main',
        data() {
            return {
                msg: 'Myriad Dreamin Blog',
                articlesIndices,
            };
        }
    };
</script>

<style scoped src="../assets/css/main_view.css"></style>
<style scoped src="../assets/css/background.css"></style>
