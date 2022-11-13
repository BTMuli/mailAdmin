<template>
	<div>
		<div>群发邮件界面</div>
		<!-- todo 先测试功能完整性 -->
		<el-form ref="groupForm" size="large">
			<el-form-item label="内容">
				<div class="edit_container"></div>
			</el-form-item>
		</el-form>
		<button @click="sendMail()"></button>
	</div>
</template>

<script>
	import useUserStore from '@/store/modules/user.js';

	export default {
		data() {
			return {
				mailForm: {
					users: [],
					content: null,
					editorOption: {},
				},
			};
		},
		methods: {
			async sendMail() {
				let formData = {
					users: this.mailForm.users,
					content: this.mailForm.content,
				};
				console.log(formData);
				const userStore = useUserStore();
				await userStore.sendGroupMail(formData);
			},
		},
	};
</script>

<style scoped></style>
