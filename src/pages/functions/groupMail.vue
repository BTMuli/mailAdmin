<template>
	<div>
		<div class="top_title">群发邮件</div>
		<el-form ref="mailForm" size="large" v-model="mailForm">
			<el-form-item required>
				<el-select
					v-model="mailForm.users"
					placeholder="请选择收件人"
					multiple
				>
					<el-option
						v-for="item in getUsersList()"
						:key="item.username"
						:label="item.nickname"
						:value="item.username"
					/>
				</el-select>
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
	import { toRaw } from 'vue';
  import useAppStore from "@/store/modules/app.js";

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
			sendMail() {
        let appStore = useAppStore();
        let formData = {
          from: appStore.username,
					users: toRaw(this.mailForm.users),
					title: this.mailForm.title,
					content: this.mailForm.content,
				};
				console.log(formData);
				const userStore = useUserStore();
				let sendData = {
					users: formData.users,
					content: this.transMail(formData),
				};
				console.log(sendData);
				userStore.sendGroupMail(sendData);
			},
			transMail(mailData) {
				let res = '';
				res += 'from: ' + mailData.from + '\n';
				res += 'to: ' + mailData.users + '\n';
				res += 'subject: ' + mailData.title + '\n\n';
				res += mailData.content;
				return res;
			},
			getUsersList() {
				const userStore = useUserStore();
				return userStore.getUsersInfo();
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
