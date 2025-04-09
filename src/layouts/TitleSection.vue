<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <section class="flex justify-start items-center relative h-screen titleImage px-5 mb-15" :style="{
    '--bg-image': `url(${img})`
  }">
    <div class="flex flex-col items-start text-start gap-1 self-end pb-10 z-50">
      <p :class="`text-${color} font-bold text-base`">{{ type }}</p>
      <p class="text-white font-berlin text-4xl">{{ title }}</p>
      <p class="text-white text-2xl italic">{{ subtitle }}</p>
      <p class="text-white text-base">{{ text }}</p>
    </div>
  </section>
</template>