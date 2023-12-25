<script setup>
const links = [
	{ name: "Главная", path: "/" },
	{ name: "Обо мне", path: "/about" },
	{ name: "Навыки", path: "/skills" },
	{ name: "Портфолио", path: "/portfolio" },
];
</script>

<template>
	<div class="mt-2 flex items-center justify-between">
		<router-link to="/">
			<div class="flex items-center justify-between gap-3">
				<img src="/img/logo/logo.png" alt="logo" />
				<h1 class="text-primary text-2xl font-bold">DVLPR</h1>
			</div>
		</router-link>

		<nav>
			<ul class="flex gap-20">
				<li v-for="link in links" :key="link.name">
					<router-link
						:to="link.path"
						class="transition duration-300 hover:text-yellow-400"
					>
						{{ link.name }}
					</router-link>
				</li>
				<!-- <li>
					<router-link to="/about">Обо мне</router-link>
				</li>
				<li>
					<router-link to="/skills">Навыки</router-link>
				</li>
				<li>
					<router-link to="/portfolio">Портфолио</router-link>
				</li> -->
			</ul>
		</nav>
	</div>
</template>
