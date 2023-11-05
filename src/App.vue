<template>
	<NavBar />
	<Banner />
	<Skills />
	<Projects />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Banner from "./components/Banner.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
export default {
	name: "App",
	components: {
		NavBar,
		Banner,
		Skills,
		Projects,
	},
};
</script>

<style>
@import "./assets/css/App.css";
@import "./assets/css/grid.css";
</style>
