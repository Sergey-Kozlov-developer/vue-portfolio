<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import PortfolioListComponent from "@/components/PortfolioListComponent.vue";

const items = ref([]);

const fetchItems = async () => {
	try {
		const { data } = await axios.get(
			"https://fd4d461b14a0efc6.mokky.dev/items"
		);

		items.value = data;
	} catch (error) {
		console.log(error);
	}
};

onMounted(fetchItems);
</script>

<template>
	<div class="wrapper__portfolio">
		<PortfolioListComponent :items="items" />
	</div>
</template>

<style lang="scss">
.wrapper__portfolio {
	margin-top: 60px;
}
</style>
