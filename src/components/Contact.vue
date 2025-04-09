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

  <TitleSection :img="Images.CONTACT_COVER" type="Contact us" color="gold" title="Make contact, make plays"
    subtitle="Stop waiting, contact us!"
    text="Our contact hub connects you directly to teams, programs and regional partners." />

  <PageBody>
    <TypicalParagraphe theme="Contact form" textColor="gold" title="Get in touch"
      subtitle="Questions, partnerships, or just curious about Huddle? We’re here for it. Reach out, we’d love to hear from you. "
      content="" />
  </PageBody>

  <Footer />
</template>