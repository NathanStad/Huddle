<script setup>
import { onMounted } from 'vue';
import Plyr from 'plyr';

const props = defineProps({
  podcastData: {
    type: Object,
    required: true
  },
});

onMounted(() => {
  Array.from(document.querySelectorAll('.js-player')).map((p) => new Plyr(p));
});
</script>

<template>
  <section class="bg-[#FFFEEF] border-2 border-yellow rounded-2xl p-5 text-dark-pink">
    <div class="flex items-start gap-3">
      <p class="font-medium text-gold text-sm mb-10">Ep. {{ podcastData.number.toString().padStart(2, '0') }} - {{
        podcastData.theme }}</p>
      <img v-if="podcastData.image" :src="podcastData.image" :alt="podcastData.title"
        class="rounded-full object-cover aspect-square w-15">
    </div>
    <h2 class="font-semibold text-lg mb-2">{{ podcastData.title }}</h2>
    <p class="text-xs font-medium mb-5">with {{ podcastData.guest }} from
      <span class="italic">{{ podcastData.author }}</span>
    </p>
    <p class="mb-3">{{ podcastData.description }}</p>
    <audio controls class="js-player w-full bg-gold rounded-xl"
      :data-plyr-config="JSON.stringify({ controls: ['play', 'progress', 'current-time', 'settings'], invertTime: false })">
      <source :src="podcastData.audio" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </section>
</template>