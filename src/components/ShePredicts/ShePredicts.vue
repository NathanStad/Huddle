<script setup>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import TitleSection from "../../layouts/TitleSection.vue";
import PageBody from "../../layouts/PageBody.vue";
import Images from '../../assets';
import HomeSection from "../../layouts/HomeSection.vue";
</script>

<template>
  <Header />

  <TitleSection :img="Images.SHEPREDICTS_COVER" type="Gaming" color="pink2" title="Predict. Compete."
    subtitle="Celebrate Women's Football."
    text="Join the ultimate Huddle game. Build leagues, make bold predictions and champion your favorite players." />

  <PageBody>
    <HomeSection title="Change the game" subtitle="Women are changing the game. But the game still needs more coaches."
      description="Turn matchdays into a team event ! Build a space where competition meets community. Choose a fun Clubhouse Theme . and unlock your special mini missions to spice up the game. Once your league is created, invite your crew and get ready to do smart prediction together." />

    <img :src="Images.SHEPREDICTS_GROUP" alt="Score" class="py-20 w-full md:w-1/2 lg:w-1/3">

    <HomeSection title="Predict matches" subtitle="Their goals. Your prediction."
      description="Vote on UEFA women's matches during live competitions and compete with your friends, all without betting money. A fun way to engage with the game, show your football instincts and join the community."
      :link="{ text: 'Create your profile to start your predictions', url: '/profile' }"
      :button="{ text: 'Start predicting ', url: '/shepredicts/home' }" />

    <img :src="Images.SHEPREDICTS_PREDICT" alt="Score" class="py-20 w-full md:w-1/2 lg:w-1/3">

    <HomeSection title="Choose your most valuable player" subtitle="Who do you think has a spark?"
      description="Vote on UEFA women's matches during live competitions and compete with your friends, all without betting money. A fun way to engage with the game, show your football instincts and join the community."
      :link="{ text: 'Create your profile to pick your MVP', url: '/profile' }"
      :button="{ text: 'Pick the MVP', url: '/shepredicts/home' }" />

    <img :src="Images.SHEPREDICTS_MVP" alt="Score" class="py-20 w-full md:w-1/2 lg:w-1/3">

    <HomeSection title="Rankings" subtitle="Top results made fun."
      description="View rankings across all players or just within your private league. Spot your “Top Rival” and unlock titles like “Top Coach's Disciple” play. It's all about playing smart, staying bold and owning your journey."
      :link="{ text: 'Create your profile to see top results', url: '/profile' }"
      :button="{ text: 'View rankings', url: '/shepredicts/home' }" />

    <img :src="Images.SHEPREDICTS_RANKING" alt="Score" class="py-20 w-full md:w-1/2 lg:w-1/3">
  </PageBody>

  <Footer />
</template>