<script setup>
import { ref } from 'vue';

const textColor = ref('');

const props = defineProps({
  blogData: {
    type: Object,
    required: true
  },
});

switch (props.blogData.type) {
  case 'news':
    textColor.value = 'text-green';
    break;
  case 'article':
    textColor.value = 'text-pink2';
    break;
  case 'podcast':
    textColor.value = 'text-yellow';
    break;
}
</script>

<template>
  <section class="flex flex-col gap-4 py-10">
    <img :src="blogData.img" :alt="blogData.title" class="rounded-2xl">
    <p :class="`${textColor} text-sm font-semibold`">{{ blogData.author }} • {{ blogData.date }}</p>
    <h2 class="font-semibold text-xl">{{ blogData.title }}</h2>
    <h3 class="font-medium">{{ blogData.content }}</h3>
    <ul class="flex gap-2">
      <li v-for="tag in blogData.tags" class="text-xs border px-2 py-1 rounded-full">{{ tag }}</li>
    </ul>
  </section>

  <!-- <div class="border border-green" /> -->
</template>