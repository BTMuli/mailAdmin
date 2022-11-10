import { defineStore } from 'pinia';

const useServerStore = defineStore('serverStore', {
	state() {
		return {
			smtpList: [],
			pop3List: [],
		};
	},
	actions: {
		getSmtpList() {},
		getPop3List() {},
	},
	persist: true,
});
