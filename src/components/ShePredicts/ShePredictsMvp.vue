<script setup>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import PageBody from "../../layouts/PageBody.vue";
import PinkButton from "../../layouts/PinkButton.vue";
import Images from "../../assets";
import { ref } from "vue";

const data = ref([
  {
    name: "Clàudia Pina",
    image: Images.SHEPREDICTS_CLAUDIA,
    team: "Spain",
    voted: false
  },
  {
    name: "Clàudia Pina",
    image: Images.SHEPREDICTS_CLAUDIA,
    team: "Spain",
    voted: false
  },
  {
    name: "Clàudia Pina",
    image: Images.SHEPREDICTS_CLAUDIA,
    team: "Spain",
    voted: false
  },
  {
    name: "Clàudia Pina",
    image: Images.SHEPREDICTS_CLAUDIA,
    team: "Spain",
    voted: false
  }
]);

const voteForPlayer = (selectedPlayer) => {
  data.value.forEach(player => {
    player.voted = player === selectedPlayer;
  });
};
</script>

<template>
  <Header />

  <PageBody class="mt-40 mb-5 text-dark-pink">
    <div class="relative flex flex-col items-center justify-center gap-10">
      <img :src="Images.SHEPREDICTS_MVP" alt="MVP icon">
    </div>

    <div class=" mt-10">
      <p class="text-center text-3xl font-berlin mb-5">She's got the Spark !</p>
      <p class="text-center font-semibold italic">Who's the best player of the month?</p>
    </div>

    <div class=" mt-10">
      <p class="text-xl font-berlin mb-5">Most Valuable Player</p>
      <div class="flex items-center justify-center bg-[#FFECBD] rounded-2xl">
        <img :src="Images.SHEPREDICTS_CLAUDIA" alt="">
      </div>
    </div>

    <section class="flex flex-col gap-10 my-10">
      <div v-for="player in data" :key="player.name" class="flex items-center justify-between gap-5">
        <div class="flex items-center gap-5">
          <div
            :class="`flex items-center justify-center overflow-hidden rounded-full w-15 aspect-square bg-[#FFECBD] ${player.voted ? 'outline-2 outline-gold' : 'none'}`">
            <img :src="player.image" alt="">
          </div>
          <div>
            <p class="text-md font-semibold">{{ player.name }}</p>
            <p>{{ player.team }}</p>
          </div>
        </div>

        <button
          :class="`text-white rounded-lg px-2 py-1 text-center font-semibold cursor-pointer hover:bg-gold transition ${player.voted ? 'bg-gold px-10' : 'bg-dark-pink'}`"
          @click="voteForPlayer(player)">
          {{ player.voted ? '✓' : 'Vote for her' }}
        </button>
      </div>
    </section>

    <div class="flex flex-col gap-5 items-center m-10">
      <PinkButton class="w-full" bgColor="dark-pink" url="/shepredicts/predictions">Make a match prediction</PinkButton>
      <PinkButton class="w-full" bgColor="gold" hoverColor="gold2" url="/shepredicts/ranking">See ranking</PinkButton>
    </div>
  </PageBody>

  <Footer />
</template>
