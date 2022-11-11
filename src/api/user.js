import { request } from '@/utils/request.js';
import useAppStore from '@/store/modules/app.js';

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

export function register(options) {
	return request({
		method: 'post',
		url: USER_PATH + '/register',
		data: {
			username: options.username,
			nickname: options.nickname,
			password: options.password,
		},
	});
}

export function updateInfo(nickname) {
	const appStore = useAppStore();
	return request({
		method: 'post',
		url: USER_PATH + '/update',
		data: {
			nickname: nickname,
			token: appStore.token,
		},
	});
}

export function getUsers() {
	const appStore = useAppStore();
	return request({
		method: 'get',
		url: USER_PATH + '/all',
		data: {
			token: appStore.token,
		},
	});
}

export function disableUser(username) {
	const appStore = useAppStore();
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
	const appStore = useAppStore();
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
	const appStore = useAppStore();
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
	const appStore = useAppStore();
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

// todo 群发是发所有用户还是选中的部分用户?
export function groupSend(options) {
	const appStore = useAppStore();
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
