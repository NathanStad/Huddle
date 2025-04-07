<script setup>
import Images from '../assets';

const props = defineProps({
  logo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true
  },
  cta: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="flex flex-col gap-3 items-center text-center text-dark-pink">
    <div class="rounded-full bg-pink p-4">
      <img :src="logo" :alt="`Logo ${title}`" class="w-5">
    </div>
    <p class="font-berlin text-xl">{{ title }}</p>
    <p>{{ subtitle }}</p>
    <router-link :to="cta.url"
      class="flex items-center gap-2 text-pink2 font-medium cursor-pointer hover:brightness-75 transition">
      {{ cta.text }}
      <img :src="Images.ARROW" alt="">
    </router-link>
  </div>
</template>