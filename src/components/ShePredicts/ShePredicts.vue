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

  <TitleSection :img="Images.PROFILE_COVER" type="Gaming" color="pink2" title="Predict. Compete."
    subtitle="Celebrate Women's Football."
    text="Join the ultimate Huddle game. Build leagues, make bold predictions and champion your favorite players." />

  <PageBody>
    <HomeSection title="Change the game" subtitle="Women are changing the game. But the game still needs more coaches."
      description="Turn matchdays into a team event ! Build a space where competition meets community. Choose a fun Clubhouse Theme . and unlock your special mini missions to spice up the game. Once your league is created, invite your crew and get ready to do smart prediction together."
      :link="{ text: 'Create your profile to start your own league', url: '/profile' }"
      :button="{ text: 'Create my league', url: '/shepredicts' }" />
  </PageBody>

  <Footer />
</template>