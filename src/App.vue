<template>
	<view
		v-show="
			this.$route.path !== loginPath && this.$route.path !== registerPath
		"
	>
		<!-- 布局容器 -->
		<el-container>
			<!-- 顶部导航栏 -->
			<el-header>
				<!-- 顶部导航栏组件 -->
				<top-nav />
			</el-header>
			<!-- 侧边栏 -->
			<el-container>
				<el-aside width="200px">
					<!-- 侧边栏导航组件 -->
					<sidebar />
				</el-aside>
				<!-- 主体内容 -->
				<el-main class="right_container">
					<div class="right_main">
						<!-- 路由视图 -->
						<router-view />
					</div>
				</el-main>
			</el-container>
		</el-container>
	</view>
	<view
		v-show="
			this.$route.path === loginPath || this.$route.path === registerPath
		"
	>
		<router-view />
	</view>
</template>

<script>
	// 引入顶部导航栏组件
	import TopNav from '@/components/topnav.vue';
	// 引入侧边栏组件
	import Sidebar from '@/components/sidebar.vue';

	export default {
		name: 'app',
		components: { TopNav, Sidebar },
		data() {
			return {
				loginPath: '/',
				registerPath: '/register',
			};
		},
		methods: {},
	};
</script>

<style scoped></style>
