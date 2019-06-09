/*jshint esversion: 6 */

<template>
    <div :class="navigator.navigator">
		<ul>
            <li v-for="(refer, index) in refers" :key="index">
                <a v-on:click="linkTo(refer)">{{ refer.text }}</a>
            </li>
		</ul>
        <div class="clear"></div>
    </div>
</template>

<script>
export default {
    name: 'Navibar',
    methods: {
        linkTo(refer) {
            if (refer.type == 0) {
                this.$router.push(refer.linker);
            } else {
                window.location.href = refer.linker;
            }
        }
    },
    props: ['refers']
};
</script>

<style module="navigator">
    @import '../../assets/css/navigator.css';
</style>
