<template>
	<div>
		<top-nav />
		<sidebar />
		<div class="right_container">
			<div>服务管理界面</div>
			<div>
				<div>STMP</div>
				<div>运行状态: {{ getWebServer('smtp').status }}</div>
				<div>运行端口: {{ getWebServer('smtp').port }}</div>
				<input v-model="readPort.smtp" placeholder="输入端口号" />
				<button @click="flushWebServer('smtp')">刷新</button>
				<button @click="changeWebServer('smtp', 'start')">
					启动服务
				</button>
				<button @click="changeWebServer('smtp', 'stop')">
					关闭服务
				</button>
				<button @click="changeWebServer('smtp', this.readPort.smtp)">
					更改端口至 {{ readPort.smtp }}
				</button>
			</div>
			<div>
				<div>POP3</div>
				<div>运行状态: {{ getWebServer('pop3').status }}</div>
				<div>运行端口: {{ getWebServer('pop3').port }}</div>
				<input v-model="readPort.pop3" placeholder="输入端口号" />
				<button @click="flushWebServer('pop3')">刷新</button>
				<button @click="changeWebServer('pop3', 'start')">
					启动服务
				</button>
				<button @click="changeWebServer('pop3', 'stop')">
					关闭服务
				</button>
				<button @click="changeWebServer('pop3', this.readPort.smtp)">
					更改端口至 {{ readPort.pop3 }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/sidebar.vue';
	import TopNav from '@/components/topnav.vue';
	import useServerStore from '@/store/modules/server.js';
	export default {
		components: { TopNav, Sidebar },
		data() {
			return {
				readPort: {
					smtp: '',
					pop3: '',
				},
				smtp: this.getWebServer('smtp'),
				pop: this.getWebServer('pop3'),
			};
		},
		methods: {
			getWebServer(server) {
				const serverStore = useServerStore();
				console.log('serverManager.Vue.getWebServer.server', server);
				let serverRes = serverStore.getServerInfo(server);
				console.log(
					'serverManager.Vue.getWebServer.serverRes',
					serverRes
				);
				return serverRes;
			},
			flushWebServer(server) {
				const serverStore = useServerStore();
				console.log('serverManager.Vue.flushWebServer.server', server);
				let serverRes = serverStore.flushServerInfo(server);
				console.log(
					'serverManager.Vue.flushWebServer.serverRes',
					serverRes
				);
				return serverRes;
			},
			changeWebServer(server, target) {
				const serverStore = useServerStore();
				console.log(
					'serverManager.Vue.changeWebServer[server,target]',
					server,
					target
				);
				let serverRes = serverStore.changeServer(server, target);
				console.log(
					'serverManager.Vue.changeWebServer.serverRes',
					serverRes
				);
				return serverRes;
			},
		},
	};
</script>

<style scoped></style>
