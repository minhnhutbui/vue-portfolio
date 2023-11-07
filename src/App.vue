<template>
	<NavBar />
	<router-view />
	<Footer />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
	name: "App",
	components: {
		NavBar,
		Footer,
	},
};
</script>

<style>
@import "./assets/css/App.css";
@import "./assets/css/grid.css";
</style>
