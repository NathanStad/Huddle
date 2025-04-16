<script setup>
import Images from "../assets";
import Country from "./Country.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
console.log(props.data.done);
</script>

<template>
  <div
    :class="data.done =='true' ? 'bg-[#FDEDEF]' : 'bg-[#FFF5E7]'"
    class="rounded-lg flex flex-col justify-center items-center p-5 mt-5"
  >
    <p>{{ data.date }}</p>
    <div class="flex justify-center items-center gap-15">
      <div><Country :country="data.team1" /></div>
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 border-2 border-[#37072A] flex justify-center items-center rounded-[5px]">
          <input v-if="data.done == 'false'" type="number" name="" id="" placeholder="+" class="size-full text-center text-xl font-semibold" />
          <p v-if="data.done == 'true'" class="size-full font-semibold text-xl flex justify-center items-center">{{ data.scores1 }}</p>
        </div>
        <div class="w-10 h-10 border-2 border-[#37072A] flex justify-center items-center rounded-[5px]">
          <input v-if="data.done == 'false'" type="number" name="" id="" placeholder="+"  class="size-full text-center text-xl font-semibold" />
          <p v-if="data.done == 'true'" class="size-full font-semibold text-xl flex justify-center items-center">{{ data.scores2 }}</p>
        </div>
      </div>
      <div><Country :country="data.team2" /></div>
    </div>
    <div class="flex justify-center items-center gap-15 mt-5">
        <div>
            <div class="border-2 border-[#37072A] rounded-[5px] text-center pl-3 pr-3 pt-1 pb-1 text-xl">1-2</div>
            <div class="text-center">55%</div>
        </div> 
        <div>
            <div class="border-2 border-[#37072A] rounded-[5px] text-center pl-3 pr-3 pt-1 pb-1 text-xl">2-2</div>
            <div class="text-center">45%</div>
        </div> 
    </div>
  </div>
</template>
