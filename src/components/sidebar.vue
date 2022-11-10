<template>
	<div>
		<el-menu id="navMenu" :router="true" unique-opened>
			<el-menu-item index="/user">管理用户</el-menu-item>
			<el-menu-item index="/server">管理服务</el-menu-item>
			<el-menu-item index="/mail">群发邮件</el-menu-item>
			<el-menu-item index="/log">管理日志</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: 'sidebar',
		data() {},
		methods: {},
	};
</script>

<style scoped>
	#navMenu {
		width: 15vw;
		height: 100%;
		position: fixed;
	}
</style>
