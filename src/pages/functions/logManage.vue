<template>
	<div>
		<div class="top_title">日志管理界面</div>
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

<style scoped>
	.top_title {
		height: 50px;
		padding: 10px;
		text-align: left;
		font-size: 30px;
		font-weight: normal;
		margin-top: 10px;
		display: inline-block;
	}
</style>
