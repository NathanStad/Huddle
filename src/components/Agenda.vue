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

  <TitleSection :img="Images.AGENDA_COVER" type="Agenda" color="pink2" title="Don't miss our events!"
    subtitle="Reserve the dates" text="All the upcoming coaching events, workshops, and certifications in one place." />

  <PageBody>
    <TypicalParagraphe theme="Get involved" textColor="pink2" title="Meet passionate people like you"
      subtitle="Find the right events to level up your game. Connect with the best players in your area."
      content="Join our upcoming coaching certifications, amateur competitions or exclusive networking events." />
  </PageBody>

  <Footer />
</template>