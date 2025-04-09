<script setup>
const props = defineProps({
  theme: {
    type: String,
    required: true
  },
  textColor: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
});
</script>

<template>
  <p :class="`font-semibold text-lg mb-5 text-${textColor}`">{{ theme }}</p>

  <div class="space-y-5">
    <h1 class="text-4xl font-semibold leading-12">{{ title }}</h1>
    <h2 class="text-2xl font-medium leading-8">{{ subtitle }}</h2>
    <h3 class="text-base mb-10">{{ content }}</h3>
  </div>
</template>

<style scoped></style>