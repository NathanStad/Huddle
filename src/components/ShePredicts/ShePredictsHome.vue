<script setup>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import PageBody from "../../layouts/PageBody.vue";
import PinkButton from "../../layouts/PinkButton.vue";
import Images from "../../assets";
</script>

<template>
  <Header />

  <PageBody class="mt-40">
    <div class="relative -mx-5 text-dark-pink">
      <img :src="Images.SHEPREDICTS_CLOUD" alt="" />
      <div class="absolute top-15 px-10">
        <p class="text-3xl font-berlin mb-5 text-center">Hi Juliette !</p>
        <p class="font-semibold text-center text-sm">
          Ready to play ShePredicts ? First, choose whether you want to create a
          league with your friends, colleagues or family, or join our Huddle
          league.
        </p>
      </div>
      <img :src="Images.SHEPREDICTS_PLAYER" class="m-auto" alt="">
      <div class="flex flex-col gap-5 items-center m-10">
        <PinkButton class="w-full" url="/shepredicts/choice">Start playing</PinkButton>
      </div>
    </div>
  </PageBody>

  <Footer />
</template>
