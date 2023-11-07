<template>
	<div id="banner">
		<div class="content grid wide row">
			<div class="banner_left l-8">
				<div class="banner_left--intro">
					<p>Welcome to my portfolio</p>
					<div class="banner_left--intro-title">
						<VueTypewriterEffect
							:strings="['Hi! I\'m Minh', 'I\'m a Web Developer']"
						/>
					</div>
					<p>
						I'm a professional in the field of Web Developing. My portfolio
						showcases my expertise in various areas of Web Developing. I have
						worked with clients from different industries and have delivered
						exceptional results. This website is a reflection of my work and
						capabilities. Please feel free to browse through my projects and
						contact me for any inquiries or collaborations.
					</p>
				</div>
			</div>
			<div class="banner_right l-4">
				<img src="../assets/img/header-img.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
import VueTypewriterEffect from "vue-typewriter-effect";
export default {
	components: {
		VueTypewriterEffect,
	},
};
</script>

<style lang="scss">
#banner {
	background-image: url("../assets/img/banner-bg.png");
	background-position: top center;
	background-size: cover;
	background-repeat: no-repeat;
	padding-top: 50%;
	position: relative;
	> .content {
		position: absolute;
		top: 20%;
		left: 0;
		right: 0;
		.banner_left--intro {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			p {
				display: block;
				animation: 1s ease-out 0s 1 slideInFromBottom;
				&:first-child {
					color: var(--white);
					font-size: 24px;
				}
			}
			.banner_left--intro-title {
				font-size: 80px;
				font-weight: 500;
				line-height: normal;
				color: var(--white);
				display: flex;
				flex-wrap: nowrap;
				#typewriter {
					animation: 1s linear slideInFromBottom;
				}
			}
		}
		.banner_right {
			-webkit-transform: scaleX(-1);
			transform: scaleX(-1);
			img {
				animation: float 3.5s ease-in-out infinite;
			}
		}
	}
}
</style>
