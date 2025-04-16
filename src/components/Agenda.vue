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
import EventCard from "../layouts/EventCard.vue";
import HomeSection from "../layouts/HomeSection.vue";
import isAdmin from "../composable/isAdmin";

const isAdminUser = ref(false)

onMounted(async () => {
  isAdminUser.value = await isAdmin()
})

const themes = ["all events", "events", "workshops", "certifications", "competitions", "camps"];
const activeTheme = ref("all events");

const filterEvents = (theme) => {
  activeTheme.value = theme;
  if (theme === "all events") {
    fetchEvents();
  } else {
    fetchEventsByTheme(theme);
  }
}

const agenda = ref([]);
const loading = ref(false);
const imageFile = ref(null);
const iconFile = ref(null);
const newEvent = ref({
  theme: "",
  title: "",
  subtitle: "",
  description: [],
  organizer: "",
  requirements: "",
  building: "",
  address: "",
  npaCity: "",
  website: "",
  image: "",
  icon: "",
});

const form = ref({
  email: ''
});

const handleSubmit = () => {
  console.log(form.value.email);
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const fetchEvents = async () => {
  loading.value = true;
  try {
    agenda.value = await fetchAPI('GET', 'events');
  } catch (error) {
    console.error('Error fetching agenda data:', error);
  } finally {
    loading.value = false;
  }
}
fetchEvents();

const fetchEventsByTheme = async (theme) => {
  loading.value = true;
  try {
    agenda.value = await fetchAPI('GET', `events/theme/${theme}`);
  } catch (error) {
    console.error('Error fetching agenda data:', error);
  } finally {
    loading.value = false;
  }
}

const handleImageUpload = (e) => {
  imageFile.value = e.target.files[0];
};

const handleIconUpload = (e) => {
  iconFile.value = e.target.files[0];
};

const addEvent = async () => {
  const formData = new FormData();
  formData.append("theme", newEvent.value.theme);
  formData.append("title", newEvent.value.title);
  formData.append("subtitle", newEvent.value.subtitle);
  formData.append("description", newEvent.value.description);
  formData.append("organizer", newEvent.value.organizer);
  formData.append("requirements", newEvent.value.requirements);
  formData.append("building", newEvent.value.building);
  formData.append("address", newEvent.value.address);
  formData.append("npaCity", newEvent.value.npaCity);
  formData.append("website", newEvent.value.website);
  formData.append("image", imageFile.value);
  formData.append("icon", iconFile.value);

  try {
    await fetchAPI("POST", "events", formData, true);
    await fetchEvents(); // Refresh the list after posting
  } catch (error) {
    console.error("Error adding event:", error);
  }
};
</script>

<template>
  <Header />

  <TitleSection :img="Images.AGENDA_COVER" type="Agenda" color="pink2" title="Don't miss our events!"
    subtitle="Reserve the dates" text="All the upcoming coaching events, workshops, and certifications in one place." />

  <PageBody>
    <TypicalParagraphe theme="Get involved" textColor="pink2" title="Meet passionate people like you"
      subtitle="Find the right events to level up your game. Connect with the best players in your area."
      content="Join our upcoming coaching certifications, amateur competitions or exclusive networking events." />

    <div class="flex items-center gap-3 mb-5 -mx-5 px-5 overflow-x-auto">
      <div v-for="theme in themes" :key="theme" :class="`
      rounded-full px-4 py-2 border w-fit capitalize cursor-pointer whitespace-nowrap
      ${activeTheme === theme ? 'bg-pink2 text-white border-pink2' : 'bg-pink/30 text-pink2 border-pink'}`"
        @click="filterEvents(theme)">
        {{ theme }}
      </div>
    </div>

    <div v-if="agenda.length > 0" class="space-y-5 mb-10">
      <EventCard v-for="event in agenda" :eventData="event" />
    </div>

    <div v-else class="mb-10">
      <p>No event found.</p>
    </div>

    <img :src="Images.PLAYER3" alt="" class="ml-20 w-full md:w-1/2 lg:w-1/3">

    <HomeSection title="Newsletter" subtitle="Sign up to make sure you don't miss any more events!"
      description="Be the first to hear about new workshops, open registrations, and key competitions." class="mb-10">
      <ul class="flex flex-col gap-4 py-3">
        <li class="flex items-center gap-3"><img :src="Images.CHECK" alt="Pink check icon">
          Latest releases and tips
        </li>
        <li class="flex items-center gap-3"><img :src="Images.CHECK" alt="Pink check icon">
          Our favourite articles each week
        </li>
        <li class="flex items-center gap-3"><img :src="Images.CHECK" alt="Pink check icon">
          Exclusive interviews with big names
        </li>
      </ul>

      <form @submit.prevent="handleSubmit" class="flex flex-col gap-2">
        <input type="text" placeholder="Enter your email to join our newsletter" v-model="form.email"
          class="border border-pink px-4 py-2 text-sm rounded" required>
        <p class="text-xs mb-5">We care about your data in our
          <span class="underline cursor-pointer hover:text-black">privacy policy</span>.
        </p>

        <PinkButton type="submit">
          Subscribe
        </PinkButton>
      </form>
    </HomeSection>

    <form v-if="isAdminUser" @submit.prevent="addEvent" class="mb-10">
      <div class="flex justify-center h-[1px] -mx-5 my-10 bg-black" />
      <h2 class="text-xl font-semibold mb-10">Add an event</h2>

      <div class="flex flex-col gap-4 w-full max-w-md mb-5">
        <select v-model="newEvent.theme" class="p-2 border rounded" required>
          <option v-for="theme in themes" :value="theme">{{ capitalize(theme) }}</option>
        </select>
        <input v-model="newEvent.title" type="text" placeholder="Title" class="p-2 border rounded" required>
        <input v-model="newEvent.subtitle" type="text" placeholder="Subtitle" class="p-2 border rounded" required>
        <textarea v-model="newEvent.description" placeholder="Description" class="p-2 border rounded h-32"
          required></textarea>
        <input v-model="newEvent.organizer" type="text" placeholder="Organizer" class="p-2 border rounded" required>
        <input v-model="newEvent.requirements" type="text" placeholder="Requirements" class="p-2 border rounded"
          required>
        <input v-model="newEvent.building" type="text" placeholder="Building (e.g. Lausanne Sports Center)"
          class="p-2 border rounded" required>
        <input v-model="newEvent.address" type="text" placeholder="Address (Av. de Rhodanie 10)"
          class="p-2 border rounded" required>
        <input v-model="newEvent.npaCity" type="text" placeholder="NPA and City (e.g. 1007 Lausanne)"
          class="p-2 border rounded" required>
        <input v-model="newEvent.website" type="text" placeholder="Website" class="p-2 border rounded" required>
        <label for="image">Image upload</label>
        <input id="image" type="file" @change="handleImageUpload" class="p-2 border rounded cursor-pointer">
        <label for="icon">Icon upload</label>
        <input id="icon" type="file" @change="handleIconUpload" class="p-2 border rounded cursor-pointer">
      </div>
      <PinkButton type="submit" class="w-full">Add event</PinkButton>
    </form>
  </PageBody>

  <Footer />
</template>