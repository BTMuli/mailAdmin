import { request } from '@/utils/request.js';
import useAppStore from '@/store/modules/app.js';

// User api paths
const USER_PATH = '/mail/user';

/**
 * @description: Login
 * @param options  username, password
 * @return {Promise<*|undefined>} user info
 */
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

/**
 * @description: Register
 * @param options username, nickname, password
 * @return {Promise<*|undefined>} user info
 */
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

/**
 * @description: Update user's nickname
 * @param nickname new nickname
 * @return {Promise<*|undefined>} user info
 */
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

/**
 * @description: Get users' info
 * @return {Promise<*|undefined>} users' info
 */
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

/**
 * @description: Disable user
 * @param username user's username
 * @return {Promise<*|undefined>} user info
 */
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

/**
 * @description: Enable user
 * @param username user's username
 * @return {Promise<*|undefined>} user info
 */
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

/**
 * @description: Delete user
 * @param username user's username
 * @return {Promise<*|undefined>} user info
 */
export function deleteUser(username) {
	const appStore = useAppStore();
	return request({
		method: 'delete',
		url: USER_PATH + '/delete',
		data: {
			token: appStore.token,
			username: username,
		},
	});
}

/**
 * @description: Create user
 * @param options username, password
 * @return {Promise<*|undefined>} user info
 * @todo: add nickname
 */
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

/**
 * @description: Send email for selected user
 * @param options username, title, content
 * @return {Promise<*|undefined>} user info
 * @todo: need to verify
 */
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
