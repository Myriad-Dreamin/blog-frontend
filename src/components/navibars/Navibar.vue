/*jshint esversion: 6 */

<template>
    <div class="navigator">
        <ul>
            <li v-for="(refer, index) in refers" :key="index">
                <a v-on:click="linkTo(refer)">{{ refer.text }}</a>
            </li>
            <li class="right">
                <a v-on:click="linkTo(lr)">{{ lr.text }}</a>
            </li>
        </ul>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: 'Navibar',
        data() {
            return {
                backendTarget: {
                    'linker': '/backstage',
                    'text': 'Backend',
                    'type': 0,
                },
                loginTarget: {
                    'linker': '/login',
                    'text': 'Login',
                    'type': 0,
                }
            }
        },
        computed: {
            lr() {
                return this.$store.state.authenticated ? this.backendTarget : this.loginTarget;
            }
        },
        methods: {
            linkTo(refer) {
                if (refer.type === 0) {
                    this.$router.push(refer.linker);
                } else {
                    window.location.href = refer.linker;
                }
            }
        },
        props: ['refers']
    };
</script>

<style scoped src="../../assets/css/navigator.css"></style>
