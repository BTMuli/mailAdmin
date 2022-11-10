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
		async getUsersInfo() {
			let getRes = await getUsers();
			await console.log(getRes.data);
			await this.setUsers(getRes.data);
		},
		async transferUser(operaType, username) {
			if (operaType === 'enable') {
				let postRes = await enableUser(username);
				await console.log(postRes);
			} else if (operaType === 'disable') {
				let postRes = await disableUser(username);
				await console.log(postRes);
			} else if (operaType === 'delete') {
				let postRes = await deleteUser(username);
				await console.log(postRes);
			} else {
				let postRes = 'userStore.transferUser';
				await console.log(postRes);
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
