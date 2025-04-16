<script setup>
import Country from "./Country.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const isDone = props.data.done === "true";
</script>

<template>
  <div :class="`rounded-lg flex flex-col p-5 gap-2 ${isDone ? 'bg-[#FDEDEF]' : 'bg-[#FFF5E7]'}`">
    <p class="self-center font-semibold">{{ data.date }}</p>

    <div class="flex justify-between items-center">
      <Country :country="data.team1" />

      <div class="flex items-center gap-2">
        <div class="w-10 h-10 border-2 border-[#37072A] rounded-[5px] flex justify-center items-center">
          <div v-if="!isDone">
            <input type="number" min="0" placeholder="+"
              class="w-full h-full text-center text-xl font-semibold rounded-[5px] outline-none" />
          </div>
          <div v-else>
            <p class="w-full h-full flex items-center justify-center text-xl font-semibold">
              {{ data.scores1 }}
            </p>
          </div>
        </div>

        <div class="w-10 h-10 border-2 border-[#37072A] rounded-[5px] flex justify-center items-center">
          <template v-if="!isDone">
            <input type="number" min="0" placeholder="+"
              class="w-full h-full text-center text-xl font-semibold rounded-[5px] outline-none" />
          </template>
          <template v-else>
            <p class="w-full h-full flex items-center justify-center text-xl font-semibold">
              {{ data.scores2 }}
            </p>
          </template>
        </div>
      </div>

      <Country :country="data.team2" />
    </div>

    <div class="flex justify-center items-center gap-15 mt-5">
      <div class="text-center">
        <div class="border-2 border-[#37072A] rounded-[5px] px-3 py-1 text-xl">1-2</div>
        <div>55%</div>
      </div>
      <div class="text-center">
        <div class="border-2 border-[#37072A] rounded-[5px] px-3 py-1 text-xl">2-2</div>
        <div>45%</div>
      </div>
    </div>
  </div>
</template>