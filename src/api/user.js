import { request } from '@/utils/request.js';

const USER_PATH = '/mail/user';

export function login(options) {
	return request({
		method: 'post',
		url: USER_PATH + '/login',
		data: {
			username: options.username,
			password: options.password
		}
	});
}

export function getUsers(options) {
	return request({
		method: 'get',
		url: USER_PATH + '/all',
		data: {
			token: options.token
		}
	});
}

export function disableUser(options) {
	return request({
		method: 'post',
		url: USER_PATH + '/disable',
		data: {
			token: options.token,
			username: options.username
		}
	});
}

export function enableUser(options) {
	return request({
		method: 'post',
		url: USER_PATH + '/enable',
		data: {
			token: options.token,
			username: options.username
		}
	});
}


export function deleteUser(options) {
	return request({
		method: 'post',
		url: USER_PATH + '/delete',
		data: {
			token: options.token,
			username: options.username
		}
	});
}

export function createUser(options) {
	return request({
		method: 'post',
		url: USER_PATH + '/create',
		data: {
			token: options.token,
			username: options.username,
			password: options.password
		}
	});
}
