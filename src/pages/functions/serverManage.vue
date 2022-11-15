<template>
	<div>
		<div class="top_title">服务管理界面</div>
		<el-table :data="getServersInfo()" border>
			<el-table-column prop="name" label="服务名称"></el-table-column>
			<el-table-column prop="port" label="端口"></el-table-column>
			<el-table-column prop="status" label="服务状态"></el-table-column>
			<el-table-column label="操作">
				<template #default="scope">
					<el-button
						size="small"
						type="primary"
						@click="changeWebServer(scope.row.name, 'start')"
					>
						Start
					</el-button>
					<el-button
						size="small"
						type="danger"
						@click="changeWebServer(scope.row.name, 'stop')"
					>
						Stop
					</el-button>
					<el-button
						size="small"
						type="info"
						@click="flushWebServer(scope.row.name)"
					>
						Flush
					</el-button>
					<el-button
						size="small"
						type="error"
						@click="changePort(scope.row.name)"
					>
						ChangePort
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import useServerStore from '@/store/modules/server.js';
	export default {
		data() {
			return {};
		},
		methods: {
			changePort(server) {
				// 弹窗
				this.$prompt('请输入新的端口号', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputPattern: /^\d{1,5}$/,
					inputErrorMessage: '端口号为1-5位数字',
				})
					.then(({ value }) => {
						this.$message({
							type: 'success',
							message: `你的端口号为: ${value}`,
						});
						this.changeWebServer(server, value);
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '取消输入',
						});
					});
			},
			getServersInfo() {
				const serverStore = useServerStore();
				let serverRes = serverStore.getServerInfo('all');
				console.log(
					'serverManage.Vue.getServersInfo.serverRes',
					serverRes
				);
				return serverRes;
			},
			async flushWebServer(server) {
				const serverStore = useServerStore();
				await console.log(
					'serverManage.Vue.flushWebServer.server',
					server
				);
				let serverRes = await serverStore.flushServerInfo(server);
				await console.log(
					'serverManage.Vue.flushWebServer.serverRes',
					serverRes
				);
				return serverRes;
			},
			async changeWebServer(server, target) {
				const serverStore = useServerStore();
				await console.log(
					'serverManage.Vue.changeWebServer[server,target]',
					server,
					target
				);
				let serverRes =await serverStore.changeServer(server, target);
				await console.log(
					'serverManage.Vue.changeWebServer.serverRes',
					serverRes
				);
        await this.flushWebServer(server);
				return serverRes;
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
