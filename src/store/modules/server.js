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
				status: '',
				port: '',
			},
			// The POP3 server status && port
			pop3Server: {
				status: '',
				port: '',
			},
		};
	},
	actions: {
		/**
		 * @description: Get SMTP server status && port
		 * @param server smtp || pop3
		 * @return {{port: string, status: string}} server status && port
		 */
		getServerInfo(server) {
			console.log('getServerInfo.server', server);
			if (server === 'smtp') {
				return this.smtpServer;
			} else if (server === 'pop3') {
				return this.pop3Server;
			}
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
			let resStatus = await getStatus(server);
			await console.log('flushServerInfo.resStatus', resStatus);
			let resPort = await getPort(server);
			await console.log('flushServerInfo.resPort', resPort);
			await this.setServerInfo(server, resStatus, resPort);
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
