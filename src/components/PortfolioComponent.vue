<script setup>
defineProps({
	id: Number,
	image: String,
	title: String,
	body: String,
	technology: String,
	stack: String,
	stackList: String,
	category: Number,
	appleImg: String,
	gitHubImg: String,
	googleImg: String,
});
</script>

<template>
	<div class="wrapper__portfolio">
		<div class="card">
			<img :src="image" alt="" />
			<div class="card__title">
				<span>{{ title }}</span>
				<p>{{ body }}</p>
			</div>
			<div class="card__description">
				<p class="card__description technology">{{ technology }}</p>
				<p class="card__description stack">{{ stack }}</p>
				<p class="card__description stackList">{{ stackList }}</p>
			</div>
			<!-- <div v-if="id === 1 && id === 2">
				<img :src="appleImg" alt="Apple" />
				<img :src="gitHubImg" alt="GitHub" />
				<img :src="googleImg" alt="Google" />
			</div>
			<div v-else>
				<img :src="gitHubImg" alt="" />
			</div> -->
		</div>
	</div>
</template>

<style>
.wrapper__portfolio {
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
}
.card {
	width: 450px;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 40px;

	background-color: #0e2a47;
	border: 1px solid #138dc5;
	border-radius: 20px;
	cursor: pointer;
	box-shadow: 5px 5px 5px #138dc5;
	transition: scale 0.3s ease-in;

	img {
		border-radius: 20px 20px 0 0;
		height: 50%;
	}

	&:hover {
		scale: 1.1;
	}
}

.card__title {
	text-align: center;
	span {
		font-size: 24px;
		font-weight: 700;
	}
	p {
		padding-top: 10px;
	}
}
.card__description {
	display: flex;
	/* flex: 1; */
	flex-direction: column;
	gap: 5px;
	padding: 0 10px;
	&.technology {
		padding-bottom: 20px;
	}
	&.stack {
		padding-bottom: 20px;
	}
	&.stackList {
		margin-bottom: 60px;
	}
}
</style>
