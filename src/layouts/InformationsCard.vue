<script setup>
import InformationsImages from "../layouts/InformationsImages.vue";
import Images from '../assets';

const props = defineProps({
  informationData: {
    type: Object,
    required: true
  },
});
</script>

<template>
  <section class="space-y-5 text-dark-pink w-full md:w-1/2 lg:w-1/3">
    <h3 class="font-berlin text-2xl">{{ informationData.title }}</h3>

    <h4 class="text-xl">{{ informationData.subtitle }}</h4>

    <ul class="pl-5 list-disc">
      <li v-for="item in informationData.perks" :key="item" class="pl-2">{{ item }}</li>
    </ul>

    <div class="space-y-2 text-sm font-semibold">
      <div class="grid grid-cols-[23px_0.4fr_1fr] gap-2">
        <img :src="Images.LOCATION" alt="Location icon">
        <span>Offered in</span>
        <span class="text-green">{{ informationData.locations.join(", ") }}</span>
      </div>

      <div class="grid grid-cols-[23px_0.4fr_1fr] gap-2">
        <img :src="Images.DURATION" alt="Duration icon">
        <span>Duration</span>
        <span class="text-green">{{ informationData.duration }}</span>
      </div>

      <div class="grid grid-cols-[23px_0.4fr_1fr] gap-2">
        <img :src="Images.COST" alt="Costs icon">
        <span>Cost</span>
        <span class="text-green">{{ informationData.cost }}</span>
      </div>

      <div class="grid grid-cols-[23px_0.4fr_1fr] gap-2">
        <img :src="Images.LEADS_TO" alt="Stars icon">
        <span>Leads to</span>
        <span class="text-green">{{ informationData.leadsTo }}</span>
      </div>
    </div>

    <InformationsImages :img="informationData.image" :alt="informationData.imageAlt" :text="informationData.imageDescr"
      :url="informationData.imageUrl" />
  </section>
</template>