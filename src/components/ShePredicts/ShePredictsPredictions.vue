<script setup>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import PageBody from "../../layouts/PageBody.vue";
import PinkButton from "../../layouts/PinkButton.vue";
import MatchCard from "../../layouts/MatchCard.vue";
import Images from "../../assets";
import { ref } from "vue";
import { computed } from "vue";

const eventData = ref({
  date: "July 2 at 9 p.m",
  team1: "FR",
  team2: "DE",
  scores1: null,
  scores2: null,
  done: "false"
});
const eventData2 = ref({
  date: "July 2 at 9 p.m",
  team1: "SE",
  team2: "CH",
  scores1: 1,
  scores2: 3,
  done: "true"
});
const eventData3 = ref({
  date: "July 2 at 9 p.m",
  team1: "GR",
  team2: "CZ",
  scores1: null,
  scores2: null,
  done: "false"
});

const formattedDate = computed(() => {
    const date = new Date();
    const options = { day: "numeric", month: "long" };
    const formattedMonth = date.toLocaleDateString("en-US", { month: "long" });
    const formattedDay = date.getDate();
    return `${formattedDay}-${formattedDay + 1} of ${formattedMonth}`;
});
</script>

<template>
  <Header />

  <PageBody class="mt-40 text-dark-pink">
    <img :src="Images.SHEPREDICTS_CLAP" alt="">
    <div class="m-10">
        <p class="text-center text-3xl font-berlin mb-5">Their goals. Your prediction.</p>
        <p class="text-center font-semibold italic">What will be the score of the match?</p>
    </div>
    <div>
        <p class="mb-5 font-semibold">{{ formattedDate }}</p> 
        <MatchCard :data="eventData" />
        <MatchCard :data="eventData2" />
        <MatchCard :data="eventData3" />
    </div>
    <div class="flex flex-col gap-5 items-center m-10">
        <PinkButton class="w-full" url="/shepredicts/mvp">Bets the MVP</PinkButton>
        <PinkButton class="w-full" bgColor="gold"  url="/shepredicts/ranking">See ranking</PinkButton>
    </div>
  </PageBody>

  <Footer />
</template>
