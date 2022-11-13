<template>
	<div class="nav_container">
		<div class="nav_left">
			<img src="/src/static/svg/plane.svg" alt="纸飞机图标" />
			<div class="title">邮件系统</div>
		</div>
		<div class="nav_right">
			<img src="/src/static/svg/bell-ring.svg" alt="通知" />
			<!-- todo click 事件 -->
			<img src="/src/static/svg/apps.svg" alt="功能" />
			<!-- todo click 事件 -->
			<img src="/src/static/svg/user.svg" alt="用户" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'topNav',
		data() {
			return {};
		},
		methods: {
			// todo
		},
	};
</script>

<style scoped>
	.nav_container {
		padding: 5px 0;
		height: 50px;
	}

	.nav_left {
		float: left;
		height: 100%;
		text-align: left;
		width: 50%;
	}

	.nav_left img {
		width: 40px;
		height: 40px;
		padding: 5px;
		float: left;
	}

	.title {
		font-size: 30px;
		font-weight: normal;
		padding: 5px;
	}

	.nav_right {
		float: right;
		height: 100%;
		text-align: right;
		width: 50%;
	}

	.nav_right img {
		width: 40px;
		height: 40px;
		padding: 5px;
	}
</style>
