import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '@/pages/login/login.vue';

const login = Login;

const routes = [
	{
		path: '/login',
		name: 'login',
		component: login,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
});

export default router;
