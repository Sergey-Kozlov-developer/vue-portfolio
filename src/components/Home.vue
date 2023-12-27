<script setup>
import { ref } from "vue";

import vue from "@/assets/img/home/vue.svg";
import css3 from "@/assets/img/home/css3.svg";
import firebase from "@/assets/img/home/firebase.svg";
import flutter from "@/assets/img/home/flutter.svg";
import gulp from "@/assets/img/home/gulp.svg";
import html5 from "@/assets/img/home/html5.svg";
import nuxt from "@/assets/img/home/nuxt.svg";
import react from "@/assets/img/home/react.svg";
import redux from "@/assets/img/home/redux.svg";
import sass from "@/assets/img/home/sass.svg";
import tailwind from "@/assets/img/home/tailwindcss.svg";
import git from "@/assets/img/home/git.svg";

// const items = ref(["😐", "😑", "😒", "😕"]);
const items = ref([
	vue,
	css3,
	firebase,
	flutter,
	gulp,
	html5,
	nuxt,
	react,
	redux,
	sass,
	tailwind,
	git,
]);
const removeItem = (toRemove) => {
	items.value = items.value.filter((item) => item !== toRemove);
};
</script>

<template>
	<div class="home">
		<div class="home__text">
			<h3 class="home__text hello">Привет!</h3>
			<h1 class="home__text name">Я Сергей</h1>
			<p class="home__text description">
				Занимаюсь мобильной разработкой, фронтендом.<br />Вам нужно
				мобильное приложение или, может быть, сайт под ключ?<br />
				Тогда свяжитесь со мной
			</p>
			<!-- <button><a href="">GitHub</a></button> -->
			<p class="home__text description">Мой стек технологий:</p>
			<ul class="home__skills" v-auto-animate>
				<li
					class="home__skills item"
					v-for="item in items"
					:key="item"
					@click="removeItem(item)"
				>
					<!-- {{ item }}  -->
					<img :src="item" alt="" />
				</li>
				<!-- <button class="btn">Нажми меня</button> -->
			</ul>
		</div>
		<img class="home__img" src="/img/home/comp-home.svg" alt="" />
	</div>
</template>

<style>
.home {
	padding-top: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 40px;
}

.home__text {
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: auto;
	&.hello {
		font-size: 38px;
		overflow: hidden;
	}
	&.name {
		font-size: 46px;
	}
	&.description {
		font-size: 20px;
		line-height: 40px;
	}
}
.home__img {
	width: 40%;
}
.home__skills {
	padding-top: 20px;
	width: auto;
	display: grid;
	grid-template-columns: auto auto auto auto;
	align-items: center;
	justify-content: space-between;

	row-gap: 50px;

	&.item {
		/* border: 1px solid #138dc5;
		border-radius: 5px; */
		cursor: pointer;
		/* box-shadow: 5px 5px 5px #138dc5; */
		width: 50px;
		height: 50px;
		transition: scale 0.2s ease-in;
		&:hover {
			scale: 1.2;
		}
		img {
			width: 46px;
		}
	}
}
</style>
