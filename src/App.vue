<script setup>
import NavigationView from "./views/NavigationView.vue";
</script>

<template>
	<div class="container mx-auto">
		<NavigationView />
		<router-view></router-view>
	</div>
</template>
