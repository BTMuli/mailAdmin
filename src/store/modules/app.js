import { defineStore } from 'pinia';
import { login } from '@/api/user.js';

const useAppStore = defineStore('appStore', {
	state() {
		return {
			token: '',
		};
	},
	actions: {
		setToken(data) {
			this.token = data;
		},
		async loginAuth(data) {
			let postRes = await login(data);
			console.log('appStore.loginAuth', postRes);
			await this.setToken(postRes.token);
		},
	},
	persist: true,
});

export default useAppStore;
