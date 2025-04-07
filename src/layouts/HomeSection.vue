<script setup>
import Images from '../assets';
import PinkButton from './PinkButton.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: Object,
    required: false
  },
  button: {
    type: Object,
    required: false
  }
});
</script>

<template>
  <section class="flex flex-col gap-4">
    <h2 class="font-berlin text-3xl">{{ title }}</h2>
    <h3 class="text-xl">{{ subtitle }}</h3>
    <h4>
      {{ description }}
    </h4>

    <router-link v-if="link" :to="link.url"
      class="flex items-center gap-3 text-pink2 font-medium cursor-pointer hover:brightness-75 transition">
      {{ link.text }} <img :src="Images.ARROW" alt="">
    </router-link>

    <PinkButton v-if="button" :url="button.url">
      <span class="font-medium">{{ button.text }}</span>
    </PinkButton>

    <slot />
  </section>
</template>