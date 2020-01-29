/*jshint esversion: 6 */

<template>
    <div class="back-body">
        <div class="back-wrap">
            <navi-bar></navi-bar>
            <div class="article_index_body">
                <div style="height: 50px; width:100%;"></div>
                <el-row>
                    <el-col class="recom" v-for='(recommend, index) in musics' :key="index">
                        <el-divider v-if='index !== 0'></el-divider>
                        <audio-s v-bind:recommand="recommend"></audio-s>

                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
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
        name: 'Musics',
        mounted() {

            // this.axios.get(getBackendPath() + '/v1/music-list?page=1&page_size=1000').then((response) => {
            //     if (response.data.code === 0) {
            //         this.musics = response.data.musics.reverse();
            //     } else {
            //         console.log(response.data);
            //     }
            // });
        },
        data() {
            return {
                msg: 'List Musics',
                musics: [
                    {
                        "recommand_type": 0,
                        "category": "Traversal",
                        "name": "BLADE (satella Remix)",
                        "artist": "MAYA AKAI",
                        "track": "VIOLET",
                        "ref": "1365389564",
                        "comment": "某人推荐的qwq",
                    },
                    {
                        "recommand_type": 0,
                        "category": "Ejection",
                        "name": "Rainbow",
                        "artist": "DJ DiA/KO3",
                        "track": "Rainbow",
                        "ref": "1321385678",
                        "comment": "no response",
                    },
                    {
                        "recommand_type": 0,
                        "category": "Happystyle",
                        "name": "Trapped",
                        "artist": "Neilio/Miss Judged",
                        "track": "Trapped",
                        "ref": "32619803",
                        "comment": "no response",
                    },
                    {
                        "recommand_type": 0,
                        "category": "Tsuioku",
                        "name": "Traces of Pain - 伤痕",
                        "artist": "Eric Chiryoku",
                        "track": "The Beginning - 重新开始",
                        "ref": "1365275521",
                        "comment": "偶然遇见的，感觉还不错~|For HigHwind",
                    },
                    {
                        "recommand_type": 0,
                        "category": "Cluster",
                        "name": "The Void",
                        "artist": "月代彩",
                        "track": "fig.3: wave",
                        "ref": "477992821",
                        "comment": "no response|For Tan",
                    },
                    {
                        "recommand_type": 0,
                        "category": "Psychotonic",
                        "name": "Too Young to Die",
                        "artist": "polaritia",
                        "track": "SPRING 2019",
                        "ref": "1367532920",
                        "comment": "orz",
                    }
                ]
            };
        },
        methods: {
            linkToMusic(musicId) {
                this.$router.push({name: 'Music', params: {id: musicId}});
            }
        },
        components: {
            'navi-bar': MainNavibar,
            'audio-s': AudioS,
        }
    };
</script>

<style scoped src="../../assets/css/background.css"></style>
<style scoped src="../../assets/css/articles/article_index_body.css"></style>
<style scoped src="../../assets/css/articles/article_index_box.css"></style>


