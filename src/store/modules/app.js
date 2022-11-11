import { defineStore } from 'pinia';
import { login, register, updateInfo } from '@/api/user.js';

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
		setInfo(data) {
			console.log('setInfo.data', data);
			this.token = data.token;
			this.nickname = data.nickname;
			if (data.username) {
				this.username = data.username;
			}
		},
		setNickName(nickname) {
			console.log('setNickName.nickname', nickname);
			this.nickname = nickname;
		},
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
		async registerAuth(data) {
			await console.log('registerAuth.data', data);
			let postRes = await register(data);
			await console.log('registerAuth.postRes', postRes);
			await this.setInfo(data);
			// todo 注册校验
			return true;
		},
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
