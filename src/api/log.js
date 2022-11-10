import { request } from '@/utils/request.js';

const LOG_PATH = '/mail/log/get';

export function getLogInfo() {
	return request({
		method: 'get',
		url: LOG_PATH,
	});
}
