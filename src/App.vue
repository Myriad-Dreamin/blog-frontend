/*jshint esversion: 6 */

<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    };
</script>

<style>
    @import './assets/css/main.css';
</style>

<style scoped>

    #app {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    #app /deep/ .el-main {
        padding: 0;
    }

    #app /deep/ .el-header {
        padding: 0;
    }
</style>
