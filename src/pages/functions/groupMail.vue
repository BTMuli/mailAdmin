<template>
	<div>
		<div class="top_title">群发邮件</div>
		<el-form ref="mailForm" size="large" v-model="mailForm">
			<el-form-item required>
				<el-input v-model="mailForm.users" placeholder="请输入收件人，以 ; 分隔" />
			</el-form-item>
			<el-form-item required>
				<el-input v-model="mailForm.title" placeholder="请输入主题" />
			</el-form-item>
			<el-form-item required>
				<el-input
					v-model="mailForm.content"
					placeholder="请输入内容"
					type="textarea"
				/>
			</el-form-item>
			<el-button type="primary" @click="sendMail()">发送</el-button>
		</el-form>
	</div>
</template>

<script>
	import useUserStore from '@/store/modules/user.js';

	export default {
		data() {
			return {
				mailForm: {
					users: [],
					title: '',
					content: '',
				},
			};
		},
		methods: {
			async sendMail() {
				let formData = {
					users: await this.getUsers(this.mailForm.users),
					title: this.mailForm.title,
					content: this.mailForm.content,
				};
				await console.log(formData);
				const userStore = useUserStore();
				let sendData = {
					users: formData.users,
					content: await this.transMail(formData),
				};
				await console.log(sendData);
				await userStore.sendGroupMail(sendData);
			},
			async transMail(mailData) {
				let res = '';
        // todo from 需要改成管理员邮箱
				res += 'from: example@mail.com\n';
				res += 'to: ' + mailData.users + '\n';
				res += 'subject: ' + mailData.title + '\n\n';
				res += mailData.content;
				return res;
			},
      async getUsers(users) {
        return users.split(';');
      },
		},
	};
</script>

<style scoped>
	.top_title {
		height: 50px;
		padding: 10px;
		text-align: left;
		font-size: 30px;
		font-weight: normal;
		margin-top: 10px;
		display: inline-block;
	}
</style>
