<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false
  },
  logo: {
    type: Boolean,
    required: false
  }
});
</script>

<template>
  <div class="p-6 w-full flex flex-col items-center text-center text-green gap-y-5 mt-8">
    <img v-if="logo" class="logo" src="../assets/img/logo.jpg" :alt="title" />
    <h1 v-else class="text-6xl">{{ title }}</h1>
    <h2 v-if="subtitle" class="text-2xl">{{ subtitle }}</h2>
    <!-- <button class="bg-green text-white hover:bg-yellow hover:text-black transition rounded-lg px-5 py-3">Bouton</button> -->
  </div>
</template>