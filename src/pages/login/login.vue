<template>
	<view>
		<div class="left_bg">
			<image src="/src/static/image/login.png" />
		</div>
		<div class="right_login">
			<el-form
				ref="loginForm"
				title="邮件服务器管理系统"
				class="login_form"
				size="large"
			>
				<div class="login_title">邮件系统管理员登录</div>
				<el-form-item label="账号">
					<el-input v-model="account" />
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
	import { systemLogin } from '@/api/app.js';

	export default {
		data() {
			return {
				account: '',
				password: '',
			};
		},
		methods: {
			async webLogin() {
				let formData = {
					account: this.account,
					password: this.password,
				};
				console.log(formData);
				// todo req.login
				let postRes = await systemLogin(formData);
				console.log(postRes);
				if (postRes) {
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
