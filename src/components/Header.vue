<script setup>
const links = ["/blog", "/agenda", "mentorat", "shepredicts", "informations"];
const linkNames = ["Blog", "Agenda", "Mentorats et Formations", "ShePredicts", "Informations"];
</script>

<template>
  <header class="flex items-center justify-between gap-5 bg-pink text-green p-5">
    <router-link to="/" class="mx-2 text-classic hover:text-green-hover transition">
      Accueil
    </router-link>
    <div class="flex items-center gap-5">
      <router-link v-for="(link, index) in links" :key="index" :to="link"
        class="text-classic hover:text-green-hover transition">
        {{ linkNames[index] }}
      </router-link>
    </div>
    <router-link to="/profil" class="mx-2 text-classic hover:text-green-hover transition">
      Profil
    </router-link>
  </header>
</template>