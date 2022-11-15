import { createRouter, createWebHashHistory } from 'vue-router';

// 引入路由配置
const routes = [
	// 首页
	{
		path: '/register',
		name: 'register',
		component: () => import('@/pages/register/register.vue'),
	},
	// 主页
	{
		path: '/home',
		name: 'home',
		component: () => import('@/pages/home/home.vue'),
	},
	// 登录
	{
		path: '/',
		name: 'login',
		component: () => import('@/pages/login/login.vue'),
	},
	// 群发邮件
	{
		path: '/mail',
		name: 'groupMail',
		component: () => import('@/pages/functions/groupMail.vue'),
	},
	// 日志获取
	{
		path: '/log',
		name: 'logManage',
		component: () => import('@/pages/functions/logManage.vue'),
	},
	// 服务器管理
	{
		path: '/server',
		name: 'serverManage',
		component: () => import('@/pages/functions/serverManage.vue'),
	},
	// 用户管理
	{
		path: '/user',
		name: 'userManage',
		component: () => import('@/pages/functions/userManage.vue'),
	},
];

// 创建路由
const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
});

export default router;
