<script setup>
import NavigationView from "./views/NavigationView.vue";
</script>

<template>
	<div class="container" v-auto-animate>
		<NavigationView />
		<router-view></router-view>
	</div>
</template>
