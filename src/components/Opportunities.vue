<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import TitleSection from "../layouts/TitleSection.vue";
import PageBody from "../layouts/PageBody.vue";
import Images from '../assets';
import TypicalParagraphe from "../layouts/TypicalParagraphe.vue";
import { ref } from "vue";
import fetchAPI from "../composable/fetchAPI";
import PinkButton from "../layouts/PinkButton.vue";
import OpportunitiesCard from "../layouts/OpportunitiesCard.vue";

const opportunities = ref([]);
const loading = ref(false);

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

  console.log(formData);

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

    <div class="flex flex-col gap-10 my-10">
      <OpportunitiesCard v-for="opportunity in opportunities" :key="opportunity._id" :opportunityData="opportunity" />
    </div>

    <form @submit.prevent="addOpportunity" class="my-10">
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

  <Footer />
</template>