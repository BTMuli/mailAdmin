<!-- 侧边栏导航组件 -->
<template>
	<div class="left_bar">
		<el-menu
			class="el_menu"
			background-color="#fff"
			text-color="#000"
			active-text-color="#fff"
			:default-active="$route.path"
			:router="true"
		>
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
		data() {
			return {};
		},
		methods: {},
	};
</script>

<style scoped>
	:deep(.is-active) {
		background-color: rgba(91, 133, 253, 1) !important;
	}

	.el_menu {
		width: 100%;
		height: 100%;
		border-right: 1px solid #e4e7ed;
	}
</style>
