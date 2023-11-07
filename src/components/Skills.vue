<template>
	<div id="skills">
		<div class="content grid wide">
			<div class="content_header row">
				<h1 class="header">{{ header }}</h1>
			</div>
			<div class="content_description row">
				<p class="col l-6 description">{{ description }}</p>
			</div>
			<div class="row">
				<div class="col l-4 item" v-for="item in items" :key="item.name">
					<img :src="require(`../assets/img/${item.src}`)" alt="image" />
					<span>{{ item.name }}</span>
					<p>{{ item.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import skills from "../data/skills.yml";

export default {
	setup() {
		const header = ref(skills.data.header);
		const description = ref(skills.data.description);
		const items = ref(skills.data.items);
		return { header, description, items, modules: [Navigation] };
	},
};
</script>

<style lang="scss">
#skills {
	.content {
		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 100px;
			padding: 0 50px;
			animation: 1s ease-out 0s 1 slideInFromLeft;
			p {
				text-align: center;
			}
			img {
				width: 25%;
				aspect-ratio: 1;
			}
			span {
				padding: 20px 0;
			}
		}
	}
}
</style>
