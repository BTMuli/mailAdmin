import { defineStore } from 'pinia';
import {
	getPort,
	getStatus,
	portChange,
	startServer,
	stopServer,
} from '@/api/server.js';

// The store to manage the server
const useServerStore = defineStore('serverStore', {
	state() {
		return {
			// The SMTP server status && port
			smtpServer: {
				name: 'smtp',
				status: '',
				port: '',
			},
			// The POP3 server status && port
			pop3Server: {
				name: 'pop3',
				status: '',
				port: '',
			},
		};
	},
	actions: {
		/**
		 * @description: Set SMTP && POP3 server status && port
		 * @param server
		 * @return {{port: string, name: string, status: string}|({port: string, name: string, status: string}|{port: string, name: string, status: string})[]}
		 */
		getServerInfo(server) {
			console.log('getServerInfo.server', server);
			let res;
			if (server === 'smtp') {
				res = this.smtpServer;
			} else if (server === 'pop3') {
				res = this.pop3Server;
			} else if (server === 'all') {
				res = [this.smtpServer, this.pop3Server];
			}
			console.log('getServerInfo.res', res);
			return res;
		},
		/**
		 * @description: Set SMTP server status && port
		 * @param server smtp || pop3
		 * @param status start || stop
		 * @param port port number
		 * @return {Promise<void>} void
		 */
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
		/**
		 * @description: Flush SMTP && POP3 server status
		 * @param server smtp || pop3
		 * @return {Promise<void>} void
		 */
		async flushServerInfo(server) {
			await console.log('flushServerInfo.server', server);
			let resStatus = (await getStatus(server)).data;
			await console.log(
				'flushServerInfo.resStatus.running',
				resStatus.running
			);
			let resPort = (await getPort(server)).data;
			await console.log('flushServerInfo.resPort.port', resPort.port);
			await this.setServerInfo(server, resStatus.running, resPort.port);
		},
		/**
		 * @description: Change SMTP && POP3 server
		 * @param serverType smtp || pop3
		 * @param target start || stop || port
		 * @return {Promise<void>} void
		 */
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
