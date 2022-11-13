<template>
	<div class="nav_container">
		<div class="nav_left">
			<img src="/src/static/svg/plane.svg" alt="纸飞机图标" />
			<div class="title">邮件系统</div>
		</div>
		<div class="nav_right">
      <el-card shadow="hover" @click="updateInfo()" class="right_card">{{ username }}</el-card>
			<img src="/src/static/svg/bell-ring.svg" alt="通知" />
			<!-- todo click 事件 -->
			<img src="/src/static/svg/apps.svg" alt="功能" />
			<!-- todo click 事件 -->
			<img
				src="/src/static/svg/user.svg"
				alt="用户"
				@click="updateInfo()"
			/>
		</div>
	</div>
</template>

<script>
	import useAppStore from '@/store/modules/app.js';

	export default {
		name: 'topNav',
		data() {
			return {
				username: this.getUserNickname(),
			};
		},
		methods: {
			getUserNickname() {
				const appStore = useAppStore();
				return appStore.getNickname();
			},
			updateInfo() {
				this.$prompt('请输入新的昵称', '修改昵称', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				})
					.then(async ({ value }) => {
						const appStore = useAppStore();
						await appStore.updateInfo(value);
						this.$message({
							type: 'success',
							message: '修改成功!',
						});
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
	.nav_container {
		padding: 5px 0;
		height: 50px;
	}

	.nav_left {
		float: left;
		height: 100%;
		text-align: left;
		width: 50%;
	}

	.nav_left img {
		width: 40px;
		height: 40px;
		padding: 5px;
		float: left;
	}

	.title {
		font-size: 30px;
		font-weight: normal;
		padding: 5px;
	}

	.nav_right {
		float: right;
		height: 100%;
		text-align: right;
		width: 50%;
	}

	.nav_right img {
		width: 40px;
		height: 40px;
		padding: 5px;
	}


  .right_card {
    display: inline-block;
    height: 40px;
    width: auto;
    right: 40px;
  }
</style>
