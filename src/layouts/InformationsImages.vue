<script setup>
import Images from '../assets';

defineProps({
  img: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="space-y-2">
    <img :src="img" :alt="alt" class="rounded-2xl">
    <a :href="url" class="flex items-center gap-2 text-sm text-dark-pink/70 hover:text-dark-pink transition">
      <img :src="Images.LINK" alt="">
      {{ text }}
    </a>
  </div>
</template>