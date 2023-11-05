<template>
	<div id="nav" ref="navBar">
		<div class="content grid wide">
			<div class="nav_left">
				<img src="../assets/img/logo.svg" alt="Logo" />
			</div>
			<div class="nav_right">
				<div class="nav_right--items">
					<ul>
						<li
							v-for="(item, index) in items"
							:key="item.name"
							:class="item.active ? 'active' : ''"
							@click="setActive(index)"
						>
							<router-link :to="item.to">{{ item.name }}</router-link>
						</li>
					</ul>
				</div>
				<div class="nav_right--socials">
					<ul>
						<li v-for="social in socials" :key="social.name">
							<a href="#">
								<font-awesome-icon :icon="social.icon_classes" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted, ref } from "vue";
import navbar from "../data/nav_bar.yml";

export default {
	setup() {
		const items = ref(navbar.data.items);
		const socials = ref(navbar.data.socials);
		const navBar = ref(null);

		const setActive = (clickedIndex) =>
			items.value.forEach((item, index) => {
				if (clickedIndex === index && item.active) return;
				else if (clickedIndex === index && !item.active) item.active = true;
				else item.active = false;
			});

		onMounted(() => {
			window.addEventListener("scroll", () => {
				let curr = window.pageYOffset;
				if (!curr && !navBar.value.classList.contains("collapsed")) return;
				else if (curr > 0) {
					navBar.value.classList.add("collapsed");
				} else {
					navBar.value.classList.remove("collapsed");
				}
			});
		});
		return { items, socials, navBar, setActive };
	},
};
</script>

<style lang="scss">
#nav {
	position: fixed;
	top: 1%;
	left: 0;
	right: 0;
	z-index: 99;
	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 0;
		.nav_left {
			line-height: 100%;
		}
		.nav_right {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width: 50%;
			.nav_right--items {
				ul {
					li {
						position: relative;
						a {
							color: var(--grey);
							padding: 10px 20px;
							&::after {
								content: "";
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								filter: blur(2rem);
								background: var(--white);
								opacity: 0;
								transition: opacity 0.3s ease;
							}
							&:hover::after {
								opacity: 0.5;
								cursor: pointer;
							}
						}
					}
					li.active {
						a {
							color: var(--white);
						}
					}
				}
			}
			.nav_right--socials {
				ul {
					li {
						padding: 10px;
						a {
							color: var(--white);
							border-radius: 50%;
							padding: 10px;
							width: 42px;
							height: 42px;
							display: flex;
							align-items: center;
							justify-content: center;
							transition: box-shadow 0.3s;
							&:hover {
								box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.4);
								color: #fff;
							}
						}
						a:has(.fa-facebook-f) {
							background: linear-gradient(#2599fe, #2a64dd);
						}
						a:has(.fa-instagram) {
							background: linear-gradient(
								120deg,
								#731dfc 0,
								#f726cb 40%,
								#f9904c 60%
							);
						}
						a:has(.fa-linkedin-in) {
							background: #1650b6;
						}
					}
				}
			}
		}
	}
	ul {
		display: flex;
		li {
			a {
				display: block;
			}
		}
	}
}
#nav.collapsed {
	top: 0;
	background: var(--black);
}
</style>
