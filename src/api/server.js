import { request } from '@/utils/request.js';
import useAppStore from '@/store/modules/app.js';

// Server api paths
const SMTP_PATH = '/mail/smtp';
const POP_PATH = '/mail/pop3';

/**
 * @description: Get SMTP && POP3 server status
 * @param server smtp || pop3
 * @return {Promise<*|undefined>} server status
 */
export function getStatus(server) {
	const appStore = useAppStore();
	if (server === 'smtp') {
		return request({
			method: 'get',
			url: SMTP_PATH + '/status',
			data: appStore.token,
		});
	} else if (server === 'pop3') {
		return request({
			method: 'get',
			url: POP_PATH + '/status',
			data: appStore.token,
		});
	}
}

/**
 * @description: Get SMTP && POP3 server port
 * @param server smtp || pop3
 * @return {Promise<*|undefined>} server port
 */
export function getPort(server) {
	const appStore = useAppStore();
	if (server === 'smtp') {
		return request({
			method: 'get',
			url: SMTP_PATH + '/port',
			data: appStore.token,
		});
	} else if (server === 'pop3') {
		return request({
			method: 'get',
			url: POP_PATH + '/port',
			data: appStore.token,
		});
	}
}

/**
 * @description: Start SMTP && POP3 server
 * @param server smtp || pop3
 * @return {Promise<*|undefined>} server status
 */
export function startServer(server) {
	const appStore = useAppStore();
	if (server === 'smtp') {
		return request({
			method: 'get',
			url: SMTP_PATH + '/start',
			data: appStore.token,
		});
	} else if (server === 'pop3') {
		return request({
			method: 'get',
			url: POP_PATH + '/start',
			data: appStore.token,
		});
	}
}

/**
 * @description: Stop SMTP && POP3 server
 * @param server smtp || pop3
 * @return {Promise<*|undefined>} server status
 */
export function stopServer(server) {
	const appStore = useAppStore();
	if (server === 'smtp') {
		return request({
			method: 'get',
			url: SMTP_PATH + '/stop',
			data: appStore.token,
		});
	} else if (server === 'pop3') {
		return request({
			method: 'get',
			url: POP_PATH + '/stop',
			data: appStore.token,
		});
	}
}

/**
 * @description: Change SMTP && POP3 server port
 * @param server smtp || pop3
 * @param port new port
 * @return {Promise<*|undefined>} server status
 */
export function portChange(server, port) {
	const appStore = useAppStore();
	if (server === 'smtp') {
		return request({
			method: 'post',
			url: SMTP_PATH + '/port',
			data: {
				token: appStore.token,
				port: port,
			},
		});
	} else if (server === 'pop3') {
		return request({
			method: 'post',
			url: POP_PATH + '/port',
			data: {
				token: appStore.token,
				port: port,
			},
		});
	}
}
