<template>
	<div class="top_title">
		<div class="title_left">
			<div class="left_title">用户列表</div>
			<img
				src="src/static/svg/refresh.svg"
				class="left_icon"
				@click="flushUsersInfo()"
				alt="刷新数据"
			/>
		</div>
		<div class="title_right">
			<el-input
				v-model="input"
				placeholder="搜索用户"
				class="right_search"
			/>
			<el-button
				@click="searchUser()"
				type="primary"
				class="right_button"
			>
				搜索
			</el-button>
			<el-button
				type="primary"
				@click="createUser()"
				class="right_button"
			>
				创建用户
			</el-button>
		</div>
		<!-- todo 正式上线时，需要将这个表格的数据从本地获取改为从后端获取 -->
		<el-table :data="usersInfo" border>
			<el-table-column prop="username" label="用户名"></el-table-column>
			<el-table-column prop="email" label="邮箱"></el-table-column>
			<!-- todo 获取状态渲染不同的颜色 -->
			<el-table-column prop="status" label="状态"></el-table-column>
			<!-- todo 功能校验 -->
			<el-table-column label="操作">
				<template #default="scope">
					<el-button
						size="small"
						type="primary"
						@click="enableUser(scope.row.username)"
					>
						Enable
					</el-button>
					<el-button
						size="small"
						type="danger"
						@click="disableUser(scope.row.username)"
					>
						Disable
					</el-button>
					<el-button
						size="small"
						type="error"
						@click="deleteUser(scope.row.username)"
					>
						Delete
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import useUserStore from '@/store/modules/user.js';
	export default {
		data() {
			return {
				usersInfo: this.getUsersInfo(),
				input: '',
			};
		},
		methods: {
			searchUser() {
				//todo 搜索用户 wontfix
				console.log(this.input);
			},
			createUser() {
				// todo 弹窗跳出信息填写，然后调用createUser
				const userStore = useUserStore();
				let userInfo = {
					username: 'test',
					password: 'test',
				};
				userStore.createUser(userInfo);
			},
			getUsersInfo() {
				const userStore = useUserStore();
				console.log(
					'userManage.getUsersInfo.userStore.getUsersInfo',
					userStore.userList
				);
				return userStore.getUsersInfo();
			},
			async flushUsersInfo() {
				const userStore = useUserStore();
				await console.log(
					'userManage.flushUsersInfo.userStore.flushUsersInfo'
				);
				await userStore.flushUsersInfo();
			},
			async disableUser(username) {
				await console.log('userManage.disableUser.username', username);
				const userStore = useUserStore();
				await userStore.transferUser('disable', username);
			},
			async enableUser(username) {
				await console.log('userManage.enableUser.username', username);
				const userStore = useUserStore();
				await userStore.transferUser('enable', username);
			},
			async deleteUser(username) {
				await console.log('userManage.deleteUser.username', username);
				const userStore = useUserStore();
				await userStore.transferUser('delete', username);
			},
		},
	};
</script>

<style scoped>
	.top_title {
		height: 50px;
		padding: 10px;
	}

	.title_left {
		height: 50px;
		float: left;
		text-align: left;
	}

	.left_title {
		font-size: 30px;
		font-weight: normal;
		margin-top: 10px;
		display: inline-block;
	}

	/* todo animation */
	.left_icon {
		width: 40px;
		height: 40px;
		float: right;
		padding-top: 5px;
	}

	.title_right {
		float: right;
		height: 50px;
	}

	.right_search {
		float: left;
		width: 200px;
		margin: 9px 20px;
	}

	.right_button {
		float: left;
		margin: 9px 20px;
	}
</style>
