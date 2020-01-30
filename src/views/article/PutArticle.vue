/*jshint esversion: 6 */

<template>
    <div class="back-body">
        <div class="back-wrap">
            <navi-bar></navi-bar>
            <div>put article</div>
        </div>
    </div>
</template>

<script>
    import BackNavibar from '@/components/navibars/BackNavibar';

    export default {
        name: 'PostArticle',
        mounted() {
        },
        data() {
            return {
                msg: 'Post Article',
            };
        },
        methods: {
            linkToArticle(articleId) {
                this.$router.push({name: 'Article', params: {id: articleId}});
            }
        },
        components: {
            'navi-bar': BackNavibar
        }
    };
</script>

<style scoped src="../../assets/css/background.css"></style>


<style scoped src="../../assets/css/articles/article_index_body.css"></style>
<style scoped src="../../assets/css/articles/article_index_box.css"></style>

