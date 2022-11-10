import { request } from '@/utils/request.js';
import useAppStore from '@/store/modules/app.js';

const appStore = useAppStore();

const SMTP_PATH = '/mail/smtp';
const POP_PATH = '/mail/pop3';

export function startServer(server) {
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

export function stopServer(server) {
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

export function portChange(server, port) {
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
