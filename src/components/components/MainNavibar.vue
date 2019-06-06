/*jshint esversion: 6 */

<template>
    <div :class="navigator.navigator">
		<ul>
            <router-link to="/" tag="li"><a>Home</a></router-link>
            <router-link to="/articles" tag="li"><a>Article</a></router-link>
			<li><a href="https://github.com/Myriad-Dreamin">Code</a></li>
            <router-link to="/secretlove" tag="li"><a>Marshmello</a></router-link>
            <router-link to="/chocolate" tag="li"><a>Chocolate</a></router-link>
            <router-link to="/musical" tag="li"><a>Favorites</a></router-link>
		</ul>
        <div class="clear"></div>
    </div>
</template>

<script>
export default {
    name: 'Navibar',
    data () {
        return {
            msg: 'navibar'
        };
    }
};
</script>

<style module="navigator">
    @import '../../assets/css/navigator.css';
</style>
