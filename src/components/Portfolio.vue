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
	hrefApple: String,
	hrefGoogle: String,
	hrefGit: String,
});
</script>

<template>
	<!-- <div class="wrapper__portfolio" v-auto-animate> -->
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
		<div class="card__img">
			<li>
				<a :href="hrefGit" target="_blank"
					><img class="card__img git" :src="gitHubImg" alt=""
				/></a>
				<a :href="hrefApple" target="_blank">
					<img class="card__img apple" :src="appleImg" alt="" />
				</a>
				<a :href="hrefGoogle" target="_blank"
					><img class="card__img google" :src="googleImg" alt=""
				/></a>
			</li>
		</div>
	</div>
	<!-- </div> -->
</template>

<style>
.card {
	margin: 0 auto;
	/* width: 480px; */
	/* height: 100%; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: normal;
	gap: 40px;
	background-color: #0e2a47;
	border: 1px solid #138dc5;
	border-radius: 20px;
	cursor: pointer;
	box-shadow: 5px 5px 5px #138dc5;

	img {
		border-radius: 20px 20px 0 0;
	}
}

.card__title {
	/* flex: 1; */
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

.card__img {
	padding-bottom: 20px;
	li {
		display: flex;
		gap: 40px;
		padding-left: 20px;
		a {
			width: 34px;
		}
	}
	&.apple,
	.git,
	.google {
		transition: scale 0.3s ease-in;

		&:hover {
			scale: 1.1;
		}
	}
}
</style>
