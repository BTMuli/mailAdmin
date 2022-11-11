<template>
	<div>
		<top-nav />
		<sidebar />
		<div class="right_container">
			<div>用户管理界面</div>
			<button @click="flushUsersInfo()">获取用户数据</button>
			<div>
				<div v-for="user in usersInfo">
					<ul>
						<li>authority：{{ user.authority }}</li>
						<li>avatarURL：{{ user.avatarURL }}</li>
						<li>createDate：{{ user.createDate }}</li>
						<li>id：{{ user.id }}</li>
						<li>nickname：{{ user.nickname }}</li>
						<li>password：{{ user.password }}</li>
						<li>phoneNumber：{{ user.phoneNumber }}</li>
						<li>username：{{ user.username }}</li>
					</ul>
					<button @click="disableUser(user.username)">
						disableUser
					</button>
					<button @click="enableUser(user.username)">
						enableUser
					</button>
					<button @click="deleteUser(user.username)">
						deleteUser
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/sidebar.vue';
	import TopNav from '@/components/topnav.vue';
	import useUserStore from '@/store/modules/user.js';
	export default {
		components: { TopNav, Sidebar },
		data() {
			return {
				usersInfo: this.getUsersInfo(),
			};
		},
		methods: {
			getUsersInfo() {
				const userStore = useUserStore();
				console.log(
					'userManager.getUsersInfo.userStore.getUsersInfo',
					userStore.userList
				);
				return userStore.getUsersInfo();
			},
			async flushUsersInfo() {
				const userStore = useUserStore();
				await console.log(
					'userManager.flushUsersInfo.userStore.flushUsersInfo'
				);
				await userStore.flushUsersInfo();
			},
			async disableUser(username) {
				await console.log('userManager.disableUser.username', username);
				const userStore = useUserStore();
				await userStore.transferUser('disable', username);
			},
			async enableUser(username) {
				await console.log('userManager.disableUser.username', username);
				const userStore = useUserStore();
				await userStore.transferUser('enable', username);
			},
			async deleteUser(username) {
				await console.log('userManager.disableUser.username', username);
				const userStore = useUserStore();
				await userStore.transferUser('delete', username);
			},
		},
	};
</script>

<style scoped></style>
