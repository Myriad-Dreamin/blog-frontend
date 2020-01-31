/*jshint esversion: 6 */

<template>
    <div class="back-body">
        <div class="back-wrap">
            <navi-bar></navi-bar>
            <div class="index_box">
                <div class="title"><p>Post a new song</p></div>
                <el-form label-position="right" label-width="9em" :model="music">
                    <el-form-item label="Title">
                        <el-input v-model="music.title"></el-input>
                    </el-form-item>
                    <el-form-item label="Category">
                        <el-input v-model="music.category"></el-input>
                    </el-form-item>
                    <el-form-item label="Intro">
                        <el-input v-model="music.intro"></el-input>
                    </el-form-item>
                    <el-form-item label="Publish At">
                        <el-col :span="12">
                            <el-date-picker type="date" placeholder="Select Date" v-model="music.published_at"
                                            class="el-date-picker"></el-date-picker>
                        </el-col>
                        <el-col class="date-line" :span="1">-</el-col>
                        <el-col :span="11">
                            <el-time-picker placeholder="Select Time" v-model="music.published_at"
                                            class="el-time-picker"></el-time-picker>
                        </el-col>
                    </el-form-item>
                </el-form>
                <div class="button-container">
                    <el-button v-on:click="submit" style="margin: 0 auto; width: 30vw" type="primary">Submit</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BackNavibar from '@/components/navibars/BackNavibar';

    export default {
        name: 'PostMusic',
        mounted() {
        },
        data() {
            return {
                msg: 'Post Music',
                music: {},
            };
        },
        components: {
            'navi-bar': BackNavibar
        }
    };
</script>

<style scoped>
    .title {
        text-align: center;
        margin: 10px 0 60px 0;
        font-size: 22px;
        font-family: 'Source Han Serif CN', 'Source Han Sans CN', 'Source Han Serif SC', source-han-serif-sc, 'Noto Serif CJK SC', Helvetica, Tahoma, "Microsoft YaHei", '-apple-system', 'SF UI Display', 'PingFang SC', 'Hiragino Sans GB', 'WenQuanYi Micro Hei', Arial, sans-serif;
    }

    .index_box {
        /*width: 80%;*/
        margin: 25px 10% 25px 10%;
        padding: 30px 10vh;
        top: 0;
    }

    .el-date-picker, .el-time-picker {
        width: 100%;
    }

    .date-line, .button-container {
        text-align: center;
    }
</style>

<style scoped src="../../assets/css/background.css"></style>
<style scoped src="../../assets/css/articles/article_index_body.css"></style>
<style scoped src="../../assets/css/purewhite/index_box.css"></style>


