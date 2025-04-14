<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import TitleSection from "../layouts/TitleSection.vue";
import PageBody from "../layouts/PageBody.vue";
import Images from '../assets';
import TypicalParagraphe from "../layouts/TypicalParagraphe.vue";
import InformationsImages from "../layouts/InformationsImages.vue";
import InformationsCard from "../layouts/InformationsCard.vue";
import faqData from "../composable/faqData";
import FAQCard from "../layouts/FAQCard.vue";

const informationsData = [
  {
    image: Images.INFORMATIONS2,
    imageAlt: "Female players training",
    imageDescr: "Passing on her passion to younger players.",
    imageUrl: "/",
    title: "C Basic License (Entry-Level)",
    subtitle: "Women currently coaching or planning to coach youth teams.",
    perks: [
      "Team management basics",
      "Tactical principles",
      "Youth player development",
      "First-level evaluation",
    ],
    locations: [
      "Echallens", "Kriens", "Fribourg", "Ovronnaz"
    ],
    duration: "6 days",
    cost: "~800 CHF",
    leadsTo: "UEFA C License",
  },
  {
    image: Images.INFORMATIONS3,
    imageAlt: "Female players celebrating",
    imageDescr: "Equipping future stars",
    imageUrl: "/",
    title: "UEFA C License",
    subtitle: "Women aiming to coach at club level with prior experience",
    perks: [
      "Game philosophy & principles",
      "Tactical transitions",
      "Communication & leadership",
      "Evaluations & exams",
    ],
    locations: [
      "Lausanne", "Neuchâtel", "Geneva"
    ],
    duration: "6 days",
    cost: "1200 CHF",
    leadsTo: "UEFA B License",
  },
  {
    image: Images.INFORMATIONS4,
    imageAlt: "Female coach holding a football",
    imageDescr: "Progress by learning winning tactics and strategies",
    imageUrl: "/",
    title: "UEFA B / Youth B / A License",
    subtitle: "Progressive system for higher-level coaching.",
    perks: [
      "High-performance training",
      "Physical prep (explosiveness, fatigue management)",
      "Game systems & strategy",
      "Team psychology",
    ],
    extra: "*Includes: UEFA B, A Youth, A UEFA, and Pro Licenses.",
    locations: [
      "Lausanne", "Fribourg", "Geneva"
    ],
    requirements: "Prior licenses + club experience",
    duration: "From 6 to 37 days depending on level",
    cost: "1200 CHF",
    leadsTo: "Certification accredited by ASF (Swiss Football Association)",
  },
]
</script>

<template>
  <Header />

  <TitleSection :img="Images.INFORMATIONS_COVER" type="Informations" color="green" title="Coaching program"
    subtitle="Time to do a license?" text="Here you'll find all the information you need about UEFA licenses." />

  <PageBody>
    <TypicalParagraphe theme="Training" textColor="green" title="Become a Coach"
      subtitle="Learn about the different certifications, course durations, costs, training locations and how to apply for the one that's right for you."
      content="" />

    <InformationsImages :img="Images.INFORMATIONS1" alt="Female players training"
      text="Learn how to do soccer training." url="/" />

    <section class="space-y-15 py-10">
      <InformationsCard v-for="informations in informationsData" :key="informations._id"
        :informationData="informations" />
    </section>

    <section class="space-y-5 mt-5">
      <h2 class="font-berlin text-4xl">Specialized Licenses</h2>

      <div>
        <h3 class="text-2xl">Goalkeeper Coach</h3>
        <p>2-15 days (Levels 1 to A)</p>
      </div>

      <div>
        <h3 class="text-2xl">Physical Trainer</h3>
        <p>Levels 1 to 3 (2-6 days per level)</p>
      </div>

      <div>
        <h3 class="text-2xl">Futsal Coach</h3>
        <p>Entry course (2 days)</p>
      </div>
    </section>

    <img :src="Images.PLAYER2" alt="" class="ml-25 w-full md:w-1/2 lg:w-1/3">

    <TypicalParagraphe theme="FAQ" textColor="green" title="Everything you're wondering about"
      subtitle="Got questions? We've got answers." content="" />

    <div class="flex flex-col gap-4 mb-15">
      <FAQCard v-for="faq in faqData" :faqData="faq" bgColor="green-bg" secondaryColor="green" />
    </div>
  </PageBody>

  <Footer />
</template>