<template>
	<view>
		<div class="left_bg">
			<image src="/src/static/image/login.png" />
		</div>
		<div class="right_login">
			<el-form ref="loginForm" class="login_form" size="large">
				<div class="login_title">邮件系统管理员登录</div>
				<el-form-item label="邮箱">
					<el-input v-model="mail" />
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="password" type="password" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="webLogin()">
						登录
					</el-button>
				</el-form-item>
			</el-form>
		</div>
	</view>
</template>

<script>
	import useAppStore from '@/store/modules/app.js';

	export default {
		data() {
			return {
				mail: '',
				password: '',
			};
		},
		methods: {
			async webLogin() {
				let formData = {
					username: this.mail,
					password: this.password,
				};
				console.log('Login.Vue.formData', formData);
				const appStore = useAppStore();
				let loginRes = await appStore.loginAuth(formData);
				console.log('Login.Vue.loginRes', loginRes);
				if (loginRes === true) {
					await this.$router.replace('/home');
				}
			},
		},
	};
</script>

<style scoped>
	.left_bg {
		width: 50vw;
		height: 100vh;
		position: fixed;
	}

	.right_login {
		width: 50vw;
		height: 100vh;
		float: right;
		text-align: center;
	}

	.login_title {
		text-align: center;
		font-size: large;
		font-weight: bolder;
		padding: 50px;
	}

	.login_form {
		display: inline-block;
		padding: 25vh 50px;
	}
</style>
