<template>
	<div class="top_title">
		<div class="title_left">
			<div class="left_title">用户列表</div>
			<img
				src="@/static/svg/refresh.svg"
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
		<el-table :data="getUsersInfo()" border>
			<el-table-column prop="nickname" label="用户名"></el-table-column>
			<el-table-column prop="username" label="邮箱"></el-table-column>
			<el-table-column
				prop="authority"
				label="状态(0：普通，1：管理员，2：封禁)"
			></el-table-column>
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
						type="primary"
						@click="updateUser(scope.row)"
					>
						Update
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
				input: '',
			};
		},
		methods: {
			searchUser() {
				//todo 搜索用户 wontfix
				console.log(this.input);
			},
			createUser() {
				const userStore = useUserStore();
				// 多行信息输入弹窗
				this.$prompt('请输入用户名', '创建用户', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				})
					.then(({ value }) => {
						let username = value;
						this.$prompt('请输入密码', '创建用户', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
						})
							.then(({ value }) => {
								let password = value;
								this.$prompt('请输入邮箱', '创建用户', {
									confirmButtonText: '确定',
									cancelButtonText: '取消',
								})
									.then(({ value }) => {
										let data = {
											nickname: username,
											password: password,
											username: value,
										};
										console.log(data);
										userStore.createUser(data);
									})
									.catch(() => {
										this.$message({
											type: 'info',
											message: '取消创建',
										});
									});
							})
							.catch(() => {
								this.$message({
									type: 'info',
									message: '取消创建',
								});
							});
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '取消创建',
						});
					});
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
				await this.$message({
					type: 'success',
					message: '刷新成功',
				});
			},
			async disableUser(username) {
				await console.log('userManage.disableUser.username', username);
				await this.$confirm('此操作将封禁该用户, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				})
					.then(async () => {
						const userStore = useUserStore();
						await userStore.transferUser('disable', username);
						await this.$message({
							type: 'success',
							message: '封禁成功!',
						});
						await this.flushUsersInfo();
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '已取消封禁',
						});
					});
				const userStore = useUserStore();
				await userStore.transferUser('disable', username);
			},
			async enableUser(username) {
				await console.log('userManage.enableUser.username', username);
				await this.$confirm('此操作将启用该用户, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				})
					.then(async () => {
						const userStore = useUserStore();
						await userStore.transferUser('enable', username);
						await this.flushUsersInfo();
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '已取消启用',
						});
					});
			},
			async deleteUser(username) {
				await console.log('userManage.deleteUser.username', username);
				await this.$confirm(
					'此操作将永久删除该用户, 是否继续?',
					'提示',
					{
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning',
					}
				)
					.then(async () => {
						const userStore = useUserStore();
						await userStore.transferUser('delete', username);
						await this.$message({
							type: 'success',
							message: '删除成功!',
						});
						await this.flushUsersInfo();
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '已取消删除',
						});
					});
			},
			async updateUser(data) {
				await console.log('userManage.updateUser.data', data);
				// 弹窗
				await this.$prompt('请输入新昵称', '修改昵称', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				})
					.then(async ({ value }) => {
						console.log(value);
						const userStore = useUserStore();
						let sendData = {
							username: data.username,
							nickname: value,
							password: data.password,
						};
						await console.log(
							'userManage.updateUser.sendData',
							sendData
						);
						await userStore.updateUserInfo(sendData);
						await this.$message({
							type: 'success',
							message: '修改成功',
						});
						await this.flushUsersInfo();
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '取消修改',
						});
					});
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
