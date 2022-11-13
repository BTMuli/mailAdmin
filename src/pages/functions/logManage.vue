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
	import { BASE_URL } from '@/utils/request.js';
	export default {
		components: { TopNav, Sidebar },
		data() {
			return {
				logUrl: BASE_URL + '/mail/log/get',
			};
		},
		methods: {
			getWebLog() {
				window.open(this.logUrl);
			},
		},
	};
</script>

<style scoped></style>
