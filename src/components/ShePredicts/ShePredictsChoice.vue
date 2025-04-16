<script setup>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import PageBody from "../../layouts/PageBody.vue";
import PinkButton from "../../layouts/PinkButton.vue";
import Images from "../../assets";
</script>

<template>
  <Header />

  <PageBody class="mt-40 text-dark-pink">
    <section>
      <p class="text-center text-3xl font-berlin mb-5">Two possible bets</p>
      <p class="text-center font-semibold italic">What would the teams score this week or who is the best female soccer player?</p>
    </section>
    <section class="button" @click="$router.push(`/shepredicts/predictions`)">
      <div class="relative rounded-2xl w-70 h-70 p-5 box-border flex justify-center items-center hover:" style="background-color: #FFF5E7;">
        <img class="relative" :src="Images.SHEPREDICTS_CLAP" alt="">
      </div>
      <p class="text-center text-pink2 text-2xl font-bold">Match pronostics</p>
    </section>
    <section class="button" @click="$router.push(`/shepredicts/mvp`)">
      <div class="relative rounded-2xl w-70 h-70 p-5 box-border flex justify-center items-center hover:" style="background-color: #FFF5E7;">
        <img class="relative" :src="Images.SHEPREDICTS_TABLE" alt="">
        <img class="absolute top-80 left-70 -translate-50" :src="Images.SHEPREDICTS_SHOE" alt="">
      </div>
      <p class="text-center text-gold text-2xl font-bold">Most Valuable Player</p>
    </section>
  </PageBody>

  <Footer />
</template>

<style scoped>
  .button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 25px;
  }
</style>
