<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import TitleSection from "../layouts/TitleSection.vue";
import PageBody from "../layouts/PageBody.vue";
import Images from '../assets';
import TypicalParagraphe from "../layouts/TypicalParagraphe.vue";
import { ref, onMounted } from "vue";
import fetchAPI from "../composable/fetchAPI";
import PinkButton from "../layouts/PinkButton.vue";
import OpportunitiesCard from "../layouts/OpportunitiesCard.vue";
import Filters from "./Filters.vue";
import isAdmin from "../composable/isAdmin";

const isAdminUser = ref(false);

onMounted(async () => {
  isAdminUser.value = await isAdmin();
})

const opportunities = ref([]);
const loading = ref(false);
const isSettingsPopupOpen = ref(false);

const openSettingsPopup = () => {
  isSettingsPopupOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeSettingsPopup = () => {
  isSettingsPopupOpen.value = false;
  document.body.style.overflow = 'auto';
};

const fetchOpportunities = async () => {
  loading.value = true;
  try {
    opportunities.value = await fetchAPI('GET', 'opportunities');
  } catch (error) {
    console.error('Error fetching opportunities data:', error);
  } finally {
    loading.value = false;
  }
}
fetchOpportunities();

const newOpportunity = ref({
  title: "",
  description: "",
  club: "",
  license: "",
  NPA: "",
  location: "",
  contract: "",
});

const addOpportunity = async () => {
  const formData = new FormData();
  formData.append("title", newOpportunity.value.title);
  formData.append("description", newOpportunity.value.description);
  formData.append("club", newOpportunity.value.club);
  formData.append("license", newOpportunity.value.license);
  formData.append("NPA", newOpportunity.value.NPA);
  formData.append("location", newOpportunity.value.location);
  formData.append("contract", newOpportunity.value.contract);

  try {
    await fetchAPI("POST", "opportunities", newOpportunity.value);
    await fetchOpportunities(); // Refresh the list after posting
  } catch (error) {
    console.error("Error adding article:", error);
  }
};
</script>

<template>
  <Header />

  <TitleSection :img="Images.OPPORTUNITIES_COVER" type="Coach" color="gold" title="Opportunities"
    subtitle="Your journey as a football coach starts here." text="Find your team. Build their future." />

  <PageBody>
    <TypicalParagraphe theme="Clubs need you" textColor="gold" title="Lead the Game."
      subtitle="It's up to you ! Are you ready to shape the next generation of women's football ?"
      content="Ready to huddle up? Here is your opportunity to make a different. Explore coaching roles and connect directly with clubs and training academies open to women. Search roles by location, level or licence. " />

    <!-- Filter -->
    <section>
      <div class="flex justify-between gap-4">
        <input type="text" placeholder="Search keywords" class="p-2 border rounded-lg flex-1">
        <img :src="Images.FILTER" alt="Filters"
          class="aspect-square border border-dark-pink/70 hover:bg-dark-pink/20 rounded-lg p-3 cursor-pointer transition"
          @click="openSettingsPopup">
      </div>
    </section>

    <section class="flex flex-col gap-10 my-10">
      <OpportunitiesCard v-for="opportunity in opportunities" :key="opportunity._id" :opportunityData="opportunity" />
    </section>

    <img :src="Images.PLAYER1" alt="" class="-ml-20 w-full md:w-1/2 lg:w-1/3">

    <form v-if="isAdminUser" @submit.prevent="addOpportunity" class="my-10">
      <div class="flex justify-center h-[1px] -mx-5 my-10 bg-black" />
      <h2 class="text-xl font-semibold mb-10">Add an opportunity</h2>

      <div class="flex flex-col gap-4 w-full max-w-md mb-5">
        <input v-model="newOpportunity.title" type="text" placeholder="Title" class="p-2 border rounded">
        <textarea v-model="newOpportunity.description" placeholder="Description"
          class="p-2 border rounded h-32"></textarea>
        <input v-model="newOpportunity.club" type="text" placeholder="Club" class="p-2 border rounded">
        <input v-model="newOpportunity.license" type="text" placeholder="License" class="p-2 border rounded">
        <input v-model="newOpportunity.NPA" type="number" placeholder="NPA" class="p-2 border rounded">
        <input v-model="newOpportunity.location" type="text" placeholder="Location" class="p-2 border rounded">
        <label for="contract">Contract type:</label>
        <select id="contract" v-model="newOpportunity.contract" class="p-2 border rounded">
          <option value="part-time">Part-time</option>
          <option value="volunteer">Volunteer</option>
          <option value="full-time">Full-time</option>
        </select>
      </div>
      <PinkButton type="submit">Add opportunity</PinkButton>
    </form>
  </PageBody>

  <Filters :visible="isSettingsPopupOpen" @close="closeSettingsPopup" />

  <Footer />
</template>