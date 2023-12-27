<script setup>
const links = [
	{ name: "Главная", path: "/" },
	{ name: "Обо мне", path: "/about" },
	{ name: "Портфолио", path: "/portfolio" },
];
</script>

<template>
	<div class="wrapper">
		<router-link to="/">
			<div class="logo">
				<img src="/img/logo/logo.png" alt="logo" />
				<h1 class="logo text">DVLPR</h1>
			</div>
		</router-link>

		<nav>
			<ul class="nav">
				<li v-for="link in links" :key="link.name">
					<router-link :to="link.path">
						{{ link.name }}
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>
<style>
.wrapper {
	margin-top: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.logo {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	&.text {
		font-size: 36px;
		font-weight: 700;
	}
}

.nav {
	display: flex;
	gap: 100px;
	font-weight: 700;
}
.router-link-active {
	color: #d3b714;
}
</style>
