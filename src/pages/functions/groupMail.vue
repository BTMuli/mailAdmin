<template>
	<div>
		<div class="top_title">群发邮件</div>
		<el-form ref="mailForm" size="large" v-model="mailForm">
			<el-form-item required>
				<el-input
					v-model="mailForm.receiver"
					placeholder="请输入收件人"
				/>
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
					content: null,
				},
			};
		},
		methods: {
			async sendMail() {
        // todo 根数实际情况修改
				let formData = {
					users: this.mailForm.users,
          title: this.mailForm.title,
					content: this.mailForm.content,
				};
				console.log(formData);
				const userStore = useUserStore();
        let sendData = this.transMail(formData);
        await userStore.sendGroupMail(sendData);
			},
      transContent2Ascii(content) {
        let ascii = '';
        for (let i = 0; i < content.length; i++) {
          ascii += content.charCodeAt(i).toString(16);
        }
        return ascii;
      },
      // todo 根据实际情况修改
      transMail(mailData) {
        let res = '';
        res += 'from: example@mail.com\n';
        res += 'to: ' + mailData.users + '\n';
        res += 'subject: ' + mailData.title + '\n\n';
        res += this.transContent2Ascii(mailData.content);
        return res;
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
