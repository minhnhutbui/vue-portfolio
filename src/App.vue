<template>
	<NavBar />
	<Banner />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Banner from "./components/Banner.vue";
export default {
	name: "App",
	components: {
		NavBar,
		Banner,
	},
};
</script>

<style>
@import "./assets/css/App.css";
@import "./assets/css/grid.css";
</style>
