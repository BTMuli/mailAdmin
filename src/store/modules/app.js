import { defineStore } from 'pinia';
import { login } from '@/api/user.js';

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
			await this.setInfo(postRes.data);
			return this.token !== '';
		},
	},
	persist: true,
});

export default useAppStore;
