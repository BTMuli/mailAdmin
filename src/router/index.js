import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'index',
		component: () => import('@/pages/register/register.vue'),
	},
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
		name: 'logManage',
		component: () => import('@/pages/functions/logManage.vue'),
	},
	{
		path: '/server',
		name: 'serverManage',
		component: () => import('@/pages/functions/serverManage.vue'),
	},
	{
		path: '/user',
		name: 'userManage',
		component: () => import('@/pages/functions/userManage.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
});

export default router;
