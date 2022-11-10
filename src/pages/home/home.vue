<template>
	<top-nav />
	<sidebar />
	<div>首页</div>
</template>

<script>
	import Sidebar from '@/components/sidebar.vue';
	import TopNav from '@/components/topnav.vue';
	export default {
		components: { TopNav, Sidebar },
	};
</script>

<style scoped></style>
