import { defineStore } from 'pinia';
import {
	getPort,
	getStatus,
	portChange,
	startServer,
	stopServer,
} from '@/api/server.js';

const useServerStore = defineStore('serverStore', {
	state() {
		return {
			// 运行状态 running stopped
			smtpServer: {
				status: '',
				port: '',
			},
			pop3Server: {
				status: '',
				port: '',
			},
		};
	},
	actions: {
		getServerInfo(server) {
			console.log('getServerInfo.server', server);
			if (server === 'smtp') {
				return this.smtpServer;
			} else if (server === 'pop3') {
				return this.pop3Server;
			}
		},
		async setServerInfo(server, status, port) {
			await console.log(
				'setServerInfo[server,status,port]',
				server,
				status,
				port
			);
			if (server === 'smtp') {
				this.smtpServer.status = status;
				this.smtpServer.port = port;
			} else if (server === 'pop3') {
				this.pop3Server.status = status;
				this.pop3Server.port = port;
			}
		},
		async flushServerInfo(server) {
			await console.log('flushServerInfo.server', server);
			let resStatus = await getStatus(server);
			await console.log('flushServerInfo.resStatus', resStatus);
			let resPort = await getPort(server);
			await console.log('flushServerInfo.resPort', resPort);
			await this.setServerInfo(server, resStatus, resPort);
		},
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

export default useServerStore;
