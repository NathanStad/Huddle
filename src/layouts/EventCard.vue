<script setup>
import Images from '../assets';

const props = defineProps({
  eventData: {
    type: Object,
    required: true
  },
});
</script>

<template>
  <section
    class="grid grid-cols-[1fr_2fr] gap-2 w-full cursor-pointer bg-pink2/20 border border-pink2 px-2 py-2 rounded-2xl"
    @click="$router.push(`/agenda/${eventData._id}`)">
    <img :src="eventData.image" :alt="eventData.title" class="rounded-xl h-full object-cover">

    <div class="flex flex-col gap-2">
      <span class="text-pink2 capitalize">{{ eventData.theme }}</span>

      <h2>{{ eventData.title }}</h2>

      <div class="flex items-center gap-2 text-xs">
        <img :src="Images.LOCATION" alt="Location icon">
        <span>{{ eventData.building }}</span>
      </div>

      <div class="flex items-center gap-2 text-xs">
        <img :src="Images.DURATION" alt="Location icon">
        <span>{{ eventData.date }}</span>
      </div>
    </div>
  </section>
</template>