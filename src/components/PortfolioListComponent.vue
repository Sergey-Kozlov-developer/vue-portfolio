<script setup>
import PortfolioComponent from "./PortfolioComponent.vue";

defineProps({
	items: Array,
});
</script>
<template>
	<PortfolioComponent
		v-for="item in items"
		:key="item.id"
		:title="item.title"
		:body="item.body"
		:image="item.image"
		:technology="item.technology"
		:stack="item.stack"
		:stack-list="item.stackList"
		:category="item.category"
	/>
</template>

<style lang="scss" scoped></style>
