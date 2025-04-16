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
      <img class="relative" :src="Images.SHEPREDICTS_TABLE" alt="">
      <img class="absolute top-70 left-90 -translate-50" :src="Images.SHEPREDICTS_SHOE" alt="">
    </div>
    <div class=" mt-10">
      <p class="text-center text-3xl font-berlin mb-5">She’s Got the Spark !</p>
      <p class="text-center font-semibold italic">Who's the best player of the month?</p>
    </div>
    <div class=" mt-10">
      <p class="text-xl font-berlin mb-5">Most Valuable Player</p>
      <div class="flex items-center justify-center bg-[#FFECBD] rounded-2xl">
        <img :src="Images.SHEPREDICTS_CLAUDIA" alt="">
      </div>
    </div>
    <section class="flex flex-col items-center justify-center gap-10 m-10">
      <div v-for="player in data" :key="player.name" class="flex items-center justify-around gap-5">
        <div 
            :class="['rounded-full overflow-hidden w-20 h-20 flex justify-center items-center bg-[#FFECBD]', player.voted ? 'outline outline-2 outline-gold' : 'none']">
          <img :src="player.image" class="size-full" alt="">
        </div>
        <div class="w-45">
          <p>{{ player.name }}</p>
          <p>{{ player.team }}</p>
        </div>
        <button 
          :class="['w-20', player.voted ? 'bg-gold' : 'bg-dark-pink']" 
          @click="voteForPlayer(player)"
          class="text-white rounded-2xl p-2 text-center font-semibold "
        >
          {{ player.voted ? 'Your vote' : 'Vote for her' }}
        </button>
      </div>
    </section>
    <div class="flex flex-col gap-5 items-center m-10">
        <PinkButton class="w-full" bgColor="dark-pink"  url="/shepredicts/mvp">Make a match prediction</PinkButton>
        <PinkButton class="w-full" bgColor="gold"  url="/shepredicts/ranking">See ranking</PinkButton>
    </div>
  </PageBody>

  <Footer />
</template>
