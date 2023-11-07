<template>
	<footer id="footer">
		<div class="grid wide">
			<div class="row footer_left">
				<div class="col l-12" v-for="item in items" :key="item.id">
					{{ item.text }}
				</div>
			</div>
			<div class="row footer_right">
				<div class="col" v-for="contact in contacts" :key="contact.id">
					<span>{{ contact.action }}</span>
					<span>{{ contact.detail }}</span>
					<ul v-if="contact.details" class="icon">
						<li v-for="detail in contact.details" :key="detail.name">
							<a href="">
								<font-awesome-icon :icon="detail.icon_classes" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import { ref } from "vue";
import footer from "../data/footer.yml";

export default {
	setup() {
		const items = ref(footer.data.items);
		const contacts = ref(footer.data.contacts);
		return { items, contacts };
	},
};
</script>

<style lang="scss">
#footer {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	font-size: 14px;
	font-weight: 100;
	animation: 1s linear slideInFromBottom;
	& > div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.footer_left {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.footer_right {
			display: flex;
			> div {
				display: flex;
				flex-direction: column;
				align-items: center;
				.icon {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 100%;
					li {
						padding: 0 8px;
						a {
							text-decoration: none;
							display: flex;
							align-items: center;
							justify-content: center;
							color: var(--white);
							border-radius: 5px;
							box-shadow: none;
							width: 20px;
							height: 20px;
						}
					}
				}
			}
		}
	}
}
</style>
