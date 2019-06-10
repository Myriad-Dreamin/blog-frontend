/*jshint esversion: 6 */

<template>
    <el-container>
        <el-header>
            <navi-bar></navi-bar>
        </el-header>
        <el-main>
            <el-row>
                <div style="height: 180px; width:100%;"></div>
            </el-row>
            <el-row>
                <el-col :offset="2" :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
                    <el-row>
                        <el-col class="recom"
                            v-for='(recommend, index) in recommend_list' :key="index"
                        >
                            <el-divider v-if='index !== 0'></el-divider>
                            <audio-s v-bind:recommand="recommend"></audio-s>

                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            
            <el-row>
                <div style="height: 200px; width:100%;"></div>
            </el-row>
        </el-main>
    </el-container>
</template>

<style scoped>
    .recom /deep/ .el-divider {
        margin: 0;
    }
</style>


<script>
import MainNavibar from '@/components/navibars/MainNavibar.vue';
import AudioS from '@/components/player/Audio.vue';

export default {
    name: 'Articles',
    mounted() {
        this.axios.get('https://myriaddreamin.com:10777/api/musical').then((response) =>  {
            this.recommend_list = response.data;
        });
    },
    data () {
        return {
            recommend_list: []
        };
    },
    components: {
        'navi-bar': MainNavibar,
        'audio-s': AudioS
    }
};
</script>

<style module="mucss">
    .mbox {
        height: 100%;
        width: 0;
    }
</style>
