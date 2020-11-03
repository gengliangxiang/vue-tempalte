import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	// 首页
	{
		path: '/',
		name: 'home',
		alias: '/home',
		// exact: true,
		component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
	},
	// 登录
	{
		path: '/login',
		name: 'login',
		component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
	},
];

const router = new VueRouter({
	//   mode: isDev ? 'hash' : 'history',
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
