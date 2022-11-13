<template>
	<div>
		<div>日志管理界面</div>
		<button @click="getWebLog()">获取日志</button>
	</div>
</template>

<script>
	import { BASE_URL } from '@/utils/request.js';
	export default {
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
