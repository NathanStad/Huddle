<script setup>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import PageBody from "../../layouts/PageBody.vue";
import PinkButton from "../../layouts/PinkButton.vue";
import Images from "../../assets";
</script>

<template>
  <Header />

  <PageBody class="mt-40 text-dark-pink space-y-20 mb-10">
    <section>
      <p class="text-center text-3xl font-berlin mb-5">Two possible bets</p>
      <p class="text-center font-semibold italic">What will the teams score this week?</p>
      <p class="text-center font-semibold italic">Who is the best female soccer player?</p>
      <p class="text-center font-semibold italic">Choose your bet!</p>
    </section>

    <section class="flex flex-col justify-center items-center gap-5 cursor-pointer"
      @click="$router.push(`/shepredicts/predictions`)">
      <div
        class="flex justify-center items-center rounded-2xl w-70 aspect-square hover:outline-5 hover:outline-pink2 group"
        style="background-color: #FFF5E7;">
        <img :src="Images.SHEPREDICTS_PREDICT" alt="Shoes icon" class="group-hover:scale-105 transition">
      </div>
      <p class="text-center text-pink2 text-2xl font-bold">Match pronostics</p>
    </section>

    <section class="flex flex-col justify-center items-center gap-5 cursor-pointer"
      @click="$router.push(`/shepredicts/mvp`)">
      <div
        class="flex justify-center items-center rounded-2xl w-70 aspect-square hover:outline-5 hover:outline-gold group"
        style="background-color: #FFF5E7;">
        <img :src="Images.SHEPREDICTS_MVP" alt="Shoes icon" class="group-hover:scale-105 transition">
      </div>
      <p class="text-center text-gold text-2xl font-bold">Most Valuable Player</p>
    </section>
  </PageBody>

  <!-- <Footer /> -->
</template>
