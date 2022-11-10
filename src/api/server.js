import { request } from '@/utils/request.js';

const SMTP_PATH = '/mail/smtp';
const POP_PATH = '/mail/pop3';

export function startServer(options) {
	if (options.server === 'smtp') {
		return request({
			method: 'get',
			url: SMTP_PATH + '/start',
			data: options.token,
		});
	} else if (options.server === 'pop3') {
		return request({
			method: 'get',
			url: POP_PATH + '/start',
			data: options.token,
		});
	}
}

export function stopServer(options) {
	if (options.server === 'smtp') {
		return request({
			method: 'get',
			url: SMTP_PATH + '/stop',
			data: options.token,
		});
	} else if (options.server === 'pop3') {
		return request({
			method: 'get',
			url: POP_PATH + '/stop',
			data: options.token,
		});
	}
}

export function portChange(options) {
	if (options.server === 'smtp') {
		return request({
			method: 'post',
			url: SMTP_PATH + '/port',
			data: {
				token: options.token,
				port: options.port,
			},
		});
	} else if (options.server === 'pop3') {
		return request({
			method: 'post',
			url: POP_PATH + '/port',
			data: {
				token: options.token,
				port: options.port,
			},
		});
	}
}
