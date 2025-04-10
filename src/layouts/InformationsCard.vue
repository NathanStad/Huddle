<script setup>
import InformationsImages from "../layouts/InformationsImages.vue";

const props = defineProps({
  informationData: {
    type: Object,
    required: true
  },
});
</script>

<template>
  <section class="text-dark-pink w-full md:w-1/2 lg:w-1/3">
    <InformationsImages :img="informationData.image" :alt="informationData.imageAlt" :text="informationData.imageDescr"
      :url="informationData.imageUrl" />
  </section>
</template>