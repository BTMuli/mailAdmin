<template>
	<view>
		<div class="left_bg">
			<image src="/src/static/image/login.png" />
		</div>
		<div class="right_register">
			<el-form ref="registerForm" class="register_form" size="large">
				<div class="register_title">邮件系统管理员注册</div>
				<el-form-item label="昵称">
					<el-input v-model="nickname" />
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input v-model="mail" />
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="password" type="password" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="webRegister()">
						注册
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
				nickname: '',
			};
		},
		methods: {
			async webRegister() {
				let formData = {
					username: this.mail,
					nickname: this.nickname,
					password: this.password,
				};
				await console.log('Register.Vue.formData', formData);
				const appStore = useAppStore();
				let registerRes = await appStore.registerAuth(formData);
				await console.log('Register.Vue.registerRes', registerRes);
				// todo 加个跳转弹窗
				if (registerRes) {
					await this.$router.replace('/login');
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

	.right_register {
		width: 50vw;
		height: 100vh;
		float: right;
		text-align: center;
	}

	.register_title {
		text-align: center;
		font-size: large;
		font-weight: bolder;
		padding: 50px;
	}

	.register_form {
		display: inline-block;
		padding: 25vh 50px;
	}
</style>
