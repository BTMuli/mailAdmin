import { request } from '@/utils/request.js';
import useAppStore from '@/store/modules/app.js';

const appStore = useAppStore();
const USER_PATH = '/mail/user';

export function login(options) {
	return request({
		method: 'post',
		url: USER_PATH + '/login',
		data: {
			username: options.username,
			password: options.password,
		},
	});
}

export function getUsers() {
	return request({
		method: 'get',
		url: USER_PATH + '/all',
		data: {
			token: appStore.token,
		},
	});
}

export function disableUser(username) {
	return request({
		method: 'post',
		url: USER_PATH + '/disable',
		data: {
			token: appStore.token,
			username: username,
		},
	});
}

export function enableUser(username) {
	return request({
		method: 'post',
		url: USER_PATH + '/enable',
		data: {
			token: appStore.token,
			username: username,
		},
	});
}

export function deleteUser(username) {
	return request({
		method: 'post',
		url: USER_PATH + '/delete',
		data: {
			token: appStore.token,
			username: username,
		},
	});
}

export function createUser(options) {
	return request({
		method: 'post',
		url: USER_PATH + '/create',
		data: {
			token: appStore.token,
			username: options.username,
			password: options.password,
		},
	});
}

export function groupSend(options) {
	return request({
		method: 'get',
		uel: USER_PATH + '/group',
		data: {
			token: appStore.token,
			users: options.users,
			content: options.content,
		},
	});
}
