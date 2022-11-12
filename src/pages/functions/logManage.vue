<template>
	<div>
		<top-nav />
		<sidebar />
		<div class="right_container">
			<div>日志管理界面</div>
			<button @click="getWebLog()">获取日志</button>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/sidebar.vue';
	import TopNav from '@/components/topnav.vue';
	import useAppStore from '@/store/modules/app.js';
	export default {
		components: { TopNav, Sidebar },
		methods: {
			async getWebLog() {
				const appStore = useAppStore();
				await console.log('logManage.Vue.getWebLog');
				await appStore.getLog();
			},
		},
	};
</script>

<style scoped></style>
