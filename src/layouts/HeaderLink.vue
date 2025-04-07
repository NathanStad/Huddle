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
  <router-link :to="url" class="hover:text-green-hover transition">
    {{ text }}
  </router-link>
</template>