<template>
	<div class="top_bar">
		<div class="nav_left">
			<img src="/src/static/svg/plane.svg" alt="纸飞机图标" />
			<div class="title">邮件系统</div>
		</div>
		<div class="nav_right">一堆图标</div>
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

	.nav_left img {
		width: 40px;
		height: 40px;
		margin: 20px 10px 20px 20px;
		position: absolute;
	}

	.title {
		font-size: 20px;
		font-weight: normal;
		left: 80px;
		top: 30px;
		width: 100px;
		position: absolute;
	}

	.nav_right {
		float: right;
	}
</style>
