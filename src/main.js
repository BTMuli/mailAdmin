import { createSSRApp } from 'vue';
import App from '@/App.vue';
// 引入 Element+
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 引入 Vue-router
import router from '@/router/index.js';

const app = createSSRApp(App);

app.use(router).use(ElementPlus);

app.mount('#app');
