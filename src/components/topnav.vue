<template>
	<div>
		<div class="top_bar">
			<div class="nav_left">
				<!-- todo 纸飞机图标 -->
				<image src="svg/plane.svg" />
				<text>邮件系统</text>
			</div>
			<div class="nav_right">一堆图标</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'topNav',
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.nav_left {
		position: fixed;
	}

	.nav_right {
		float: right;
	}
</style>
