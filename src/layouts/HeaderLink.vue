<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true
  },
});
</script>

<template>
  <router-link :to="url" v-slot="{ isActive }">
    <span :class="[
      'text-lg lg:text-base transition',
      isActive ? 'text-green-hover font-bold' : 'hover:text-green-hover'
    ]">
      {{ text }}
    </span>
  </router-link>
</template>