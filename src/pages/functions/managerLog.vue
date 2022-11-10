<template>
	<div>
		<top-nav />
		<sidebar />
		<div class="right_area">日志管理界面</div>
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
