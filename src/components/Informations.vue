<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import TitleSection from "../layouts/TitleSection.vue";
import PageBody from "../layouts/PageBody.vue";
import Images from '../assets';
import TypicalParagraphe from "../layouts/TypicalParagraphe.vue";
</script>

<template>
  <Header />

  <TitleSection :img="Images.INFORMATIONS_COVER" type="Informations" color="green" title="Coaching program"
    subtitle="Time to do a license?" text="Here you'll find all the information you need about UEFA licenses." />

  <PageBody>
    <TypicalParagraphe theme="Training" textColor="green" title="Become a Coach"
      subtitle="Learn about the different certifications, course durations, costs, training locations and how to apply for the one that's right for you."
      content="" />
  </PageBody>

  <Footer />
</template>