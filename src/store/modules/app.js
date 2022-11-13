import { defineStore } from 'pinia';
import { login, register, updateInfo } from '@/api/user.js';

// The store to save the user info
const useAppStore = defineStore('appStore', {
	state() {
		return {
			username: '',
			password: '',
			token: '',
			nickname: '',
		};
	},
	actions: {
		/**
		 * @description: Set user info
		 * @param data user info
		 */
		setInfo(data) {
			console.log('setInfo.data', data);
			this.token = data.token;
			this.nickname = data.nickname;
			if (data.username) {
				this.username = data.username;
			}
		},
		/**
		 * @description: Set user's nickname
		 * @param nickname new nickname
		 */
		setNickName(nickname) {
			console.log('setNickName.nickname', nickname);
			this.nickname = nickname;
		},
		/**
		 * @description: Login
		 * @param data username, password
		 * @return {Promise<boolean>} login result
		 */
		async loginAuth(data) {
			await console.log('loginAuth.data', data);
			let postRes = await login(data);
			await console.log('loginAuth.postRes', postRes);
			if (postRes !== {}) {
				await this.setInfo(postRes);
				return true;
			}
			return false;
		},
		/**
		 * @description: Register
		 * @param data username, nickname, password
		 * @return {Promise<boolean>} register result
		 */
		async registerAuth(data) {
			await console.log('registerAuth.data', data);
			let postRes = await register(data);
			await console.log('registerAuth.postRes', postRes);
			await this.setInfo(data);
			return true;
		},
		/**
		 * @description: Update user's nickname
		 * @param nickname new nickname
		 * @return {Promise<boolean>} update result
		 * @todo need to be used
		 */
		async updateInfo(nickname) {
			await console.log('updateInfo.nickname', nickname);
			let postRes = await updateInfo(nickname);
			await console.log('updateInfo.postRes', postRes);
			await this.setNickName(nickname);
			return true;
		},
	},
	persist: true,
});

export default useAppStore;
