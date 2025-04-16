<script setup>
import Images from '../assets';

const props = defineProps({
  opportunityData: {
    type: Object,
    required: true
  },
});
</script>

<template>
  <section class="bg-white border-2 border-gold rounded-2xl p-5 text-dark-pink cursor-pointer w-full md:w-1/2 lg:w-1/3"
    @click="$router.push(`/opportunities/${opportunityData._id}`)">
    <div class="flex items-center justify-between gap-2 mb-3">
      <p class="font-bold text-gold text-sm">{{ opportunityData.club }}</p>
      <p class="font-semibold bg-[#FFFCED] border border-gold rounded-full px-2 text-gold text-xs text-center">{{
        opportunityData.license }}</p>
    </div>

    <h2 class="font-semibold text-lg mb-5">{{ opportunityData.title }}</h2>
    <p class="mb-4">{{ opportunityData.description }}</p>

    <div class="space-y-2 text-dark-pink/70">
      <p class="flex items-center gap-2"><img :src="Images.LOCATION" alt=""><span>{{ opportunityData.NPA }} {{
        opportunityData.location }}</span></p>
      <p class="flex items-center gap-2"><img :src="Images.DURATION" alt=""><span class="capitalize">{{
        opportunityData.contract }}</span></p>
    </div>
  </section>
</template>