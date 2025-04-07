<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import { ref } from "vue";

const isClicked = ref(false);

const toggleEffect = () => {
  isClicked.value = !isClicked.value;
};
</script>

<template>
  <Header />
  <div class="flex justify-center py-10 pb-32 bg-[#e0e0e0]">
    <div @click="toggleEffect" class="flex justify-center items-center w-[80%] h-[12rem] bg-white rounded-2xl"
      :class="isClicked ? 'neumorphism2' : 'neumorphism'">
      Card
    </div>
  </div>
  <Footer />
</template>