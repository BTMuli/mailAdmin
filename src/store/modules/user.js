import { defineStore } from 'pinia';
import {
	createUser,
	deleteUser,
	disableUser,
	enableUser,
	getUsers,
	groupSend,
} from '@/api/user.js';

const useUserStore = defineStore('userStore', {
	state() {
		return {
			userList: [],
		};
	},
	actions: {
		setUsers(data) {
			this.userList = data;
		},
		getUsersInfo() {
			return this.userList;
		},
		async flushUsersInfo() {
			console.log('getUsersInfo');
			let getRes = await getUsers();
			console.log('getUsersInfo.getRes.users', getRes.users);
			await this.setUsers(getRes.users);
			console.log('userStore.userList', this.userList);
		},
		async transferUser(operaType, username) {
			console.log('transferUser.data', operaType, username);
			if (operaType === 'enable') {
				let postRes = await enableUser(username);
				await console.log('transferUser.enableUser.postRes', postRes);
			} else if (operaType === 'disable') {
				let postRes = await disableUser(username);
				await console.log('transferUser.disableUser.postRes', postRes);
			} else if (operaType === 'delete') {
				let postRes = await deleteUser(username);
				await console.log('transferUser.deleteUser.postRes', postRes);
			} else {
				let postRes = 'userStore.transferUser';
				await console.log('transferUser.default.postRes', postRes);
			}
		},
		async createUser(data) {
			let sendMsg = {
				username: data.username,
				password: data.password,
			};
			let getRes = await createUser(sendMsg);
			await console.log(getRes);
		},
		async sendGroupMail(data) {
			let sendMsg = {
				users: data.users,
				content: data.content,
			};
			let getRes = await groupSend(sendMsg);
			await console.log(getRes);
		},
	},
	persist: true,
});

export default useUserStore;
