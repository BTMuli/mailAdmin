<template>
	<div>
		<top-nav />
		<sidebar />
		<div class="right_container">
			<div>服务管理界面</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/sidebar.vue';
	import TopNav from '@/components/topnav.vue';
	export default {
		components: { TopNav, Sidebar },
	};
</script>

<style scoped></style>
