import { defineStore } from 'pinia';
import { login, register } from '@/api/user.js';

const useAppStore = defineStore('appStore', {
	state() {
		return {
			token: '',
			nickname: '',
		};
	},
	actions: {
		setInfo(data) {
			this.token = data.token;
			this.nickname = data.nickname;
		},
		async loginAuth(data) {
			let postRes = await login(data);
			await console.log('loginAuth.postRes', postRes);
			await this.setInfo(postRes.data);
			return this.token !== '';
		},
		async registerAuth(data) {
			let postRes = await register(data);
			await console.log('registerAuth.postRes', postRes);
			await this.setInfo(postRes.data);
			return this.token !== '';
		},
	},
	persist: true,
});

export default useAppStore;
