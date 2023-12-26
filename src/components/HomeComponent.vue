<script setup></script>

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
		</div>
		<img class="home__img" src="/img/home/comp-home.svg" alt="" />
	</div>
</template>

<style>
.home {
	margin-top: 40px;
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
</style>
