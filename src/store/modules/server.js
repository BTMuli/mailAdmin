import { defineStore } from 'pinia';
import { portChange, startServer, stopServer } from '@/api/server.js';

const useServerStore = defineStore('serverStore', {
	state() {
		return {
			// 运行状态 running stopped
			smtpServer: {
				status: '',
				port: '',
			},
			pop3List: {
				status: '',
				port: '',
			},
		};
	},
	actions: {
		getSmtpServer() {
			// todo 发请求获取状态，返回运行状态跟端口
		},
		getPop3Server() {},
		// target start|stop|port
		async changeServer(serverType, target) {
			if (serverType in ['smtp', 'pop3']) {
				if (target === 'start') {
					await startServer(serverType);
				} else if (target === 'stop') {
					await stopServer(serverType);
				} else {
					await portChange(serverType, target);
				}
			}
		},
	},
	persist: true,
});
