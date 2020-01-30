/*jshint esversion: 6 */

<template>
    <div class="back-body">
        <div class="back-wrap">
            <navi-bar></navi-bar>
            <div>post music</div>
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
            };
        },
        components: {
            'navi-bar': BackNavibar
        }
    };
</script>

<style scoped src="../../assets/css/background.css"></style>


<style scoped src="../../assets/css/articles/article_index_body.css"></style>
<style scoped src="../../assets/css/articles/article_index_box.css"></style>


