<script setup>
import Portfolio from "./Portfolio.vue";

defineProps({
	items: Array,
});
</script>
<template>
	<div class="wrapper__portfolio" v-auto-animate>
		<Portfolio
			v-for="item in items"
			:key="item.id"
			:title="item.title"
			:body="item.body"
			:image="item.image"
			:technology="item.technology"
			:stack="item.stack"
			:stack-list="item.stackList"
			:category="item.category"
			:apple-img="item.id === 1 || item.id == 6 ? item.appleImg : ''"
			:google-img="item.id === 1 || item.id == 6 ? item.googleImg : ''"
			:git-hub-img="item.gitHubImg"
			:href-apple="item.hrefApple"
			:href-git="item.hrefGit"
			:href-google="item.hrefGoogle"
		/>
	</div>
</template>

<style lang="scss" scoped>
.wrapper__portfolio {
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
}
</style>
