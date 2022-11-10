import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/home',
		name: 'home',
		component: () => import('@/pages/home/home.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/pages/login/login.vue'),
	},
	{
		path: '/mail',
		name: 'groupMail',
		component: () => import('@/pages/functions/groupMail.vue'),
	},
	{
		path: '/log',
		name: 'managerLog',
		component: () => import('@/pages/functions/managerLog.vue'),
	},
	{
		path: '/server',
		name: 'serverManager',
		component: () => import('@/pages/functions/serverManager.vue'),
	},
	{
		path: '/user',
		name: 'userManager',
		component: () => import('@/pages/functions/userManager.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
});

export default router;
