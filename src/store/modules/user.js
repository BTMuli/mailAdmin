import { defineStore } from 'pinia';
import {
	createUser,
	deleteUser,
	disableUser,
	enableUser,
	getUsers,
	groupSend, updateInfo,
} from '@/api/user.js';

// The store to manage the user
const useUserStore = defineStore('userStore', {
	state() {
		return {
			// The user list
			userList: [],
		};
	},
	actions: {
		/**
		 * @description: Set user list
		 * @param data
		 */
		setUsers(data) {
			this.userList = data;
		},
		/**
		 * @description: Get user list
		 * @return []
		 */
		getUsersInfo() {
			return this.userList;
		},
		/**
		 * @description: Flush user list
		 * @return {Promise<void>}
		 */
		async flushUsersInfo() {
			console.log('getUsersInfo');
			let getRes = (await getUsers()).data;
			console.log('getUsersInfo.getRes.users', getRes.users);
			await this.setUsers(getRes.users);
			console.log('userStore.userList', this.userList);
		},
		/**
		 * @description: Transfer user includes delete, disable, enable
		 * @param operaType delete || disable || enable
		 * @param username user's username
		 * @return {Promise<void>} user info
		 */
		async transferUser(operaType, username) {
			console.log('transferUser.data', operaType, username);
			if (operaType === 'enable') {
				let reqRes = await enableUser(username);
				await console.log('transferUser.enableUser.reqRes', reqRes);
			} else if (operaType === 'disable') {
				let reqRes = await disableUser(username);
				await console.log('transferUser.disableUser.reqRes', reqRes);
			} else if (operaType === 'delete') {
				let reqRes = await deleteUser(username);
				await console.log('transferUser.deleteUser.reqRes', reqRes);
			} else {
				let reqRes = 'userStore.transferUser';
				await console.log('transferUser.default.reqRes', reqRes);
			}
		},
		/**
		 * @description: Create user
		 * @param data user's info
		 * @return {Promise<void>} user info
		 * @todo need to verify the function
		 */
		async createUser(data) {
			await console.log('createUser.data', data);
			let sendMsg = {
				username: data.username,
				password: data.password,
				nickname: data.nickname,
			};
			await console.log('createUser.sendMsg', sendMsg);
			let getRes = await createUser(sendMsg);
			await console.log(getRes);
		},
		/**
		 * @description: Group send message
		 * @param data message's info
		 * @return {Promise<void>} message info
		 * @todo need to verify the function
		 */
		async sendGroupMail(data) {
			let sendMsg = {
				users: data.users,
				content: data.content,
			};
			let getRes = await groupSend(sendMsg);
			await console.log(getRes);
		},
		/**
		 * @description: Update user's info
		 * @param data user's info
		 * @return {Promise<void>} user info
		 */
		async updateUserInfo(data) {
			await console.log('updateUser.data', data);
			let sendData = {
				username: data.username,
				nickname: data.nickname,
				password: data.password,
			};
			await console.log('updateUser.sendData', sendData);
			await updateInfo(data);
		}
	},
	persist: true,
});

export default useUserStore;
