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

  <TitleSection :img="Images.OPPORTUNITIES_COVER" type="Coach" color="gold" title="Opportunities"
    subtitle="Your journey as a football coach starts here." text="Find your team. Build their future." />

  <PageBody>
    <TypicalParagraphe theme="Clubs need you" textColor="text-gold" title="Lead the Game."
      subtitle="It's up to you ! Are you ready to shape the next generation of women's football ?"
      content="Ready to huddle up? Here is your opportunity to make a different. Explore coaching roles and connect directly with clubs and training academies open to women. Search roles by location, level or licence. " />
  </PageBody>

  <Footer />
</template>