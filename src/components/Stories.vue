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
import PodcastCard from "../layouts/PodcastCard.vue";

const podcasts = ref([]);
const loading = ref(false);
const audioFile = ref(null);
const imageFile = ref(null);

const fetchPodcasts = async () => {
  loading.value = true;
  try {
    podcasts.value = await fetchAPI('GET', 'podcasts');
  } catch (error) {
    console.error('Error fetching podcasts data:', error);
  } finally {
    loading.value = false;
  }
}
fetchPodcasts();

const newPodcast = ref({
  number: 0,
  theme: "",
  title: "",
  guest: "",
  author: "",
  description: "",
  audio: "",
});

const handleAudioUpload = (e) => {
  audioFile.value = e.target.files[0];
};

const handleImageUpload = (e) => {
  imageFile.value = e.target.files[0];
};

const addPodcast = async () => {
  const formData = new FormData();
  formData.append("number", newPodcast.value.number);
  formData.append("theme", newPodcast.value.theme);
  formData.append("title", newPodcast.value.title);
  formData.append("guest", newPodcast.value.guest);
  formData.append("author", newPodcast.value.author);
  formData.append("description", newPodcast.value.description);
  formData.append("audio", audioFile.value);
  formData.append("image", imageFile.value);

  try {
    await fetchAPI("POST", "podcasts", formData, true);
    await fetchPodcasts(); // Refresh the list after posting
  } catch (error) {
    console.error("Error adding article:", error);
  }
};
</script>

<template>
  <Header />

  <TitleSection :img="Images.STORIES_COVER" type="Latest stories" color="pink2" title="True stories"
    subtitle="They did it. So can you !"
    text="Discover real stories of women who stepped up, coached, and changed their path — and others'. Watch inspiring interviews, quotes and snapshots of their journey." />

  <PageBody>
    <p class="font-semibold text-pink2 text-lg mb-5">Success stories</p>
    <TypicalParagraphe title="They coached. They overcame. They inspired." subtitle="Meet the women who took the lead — on and off the pitch. In this section, we spotlight coaches who've turned
      passion into purpose, with moving testimonials and powerful interviews." content="Explore our diverse content types, including video interviews like ”A Day in the Life of a Coach”, inspirational
      clips from matches, training, and life moments, articles on resilience and success and experiences from our
      Huddle community." />

    <p class="font-semibold text-yellow2 text-lg mt-15 mb-5">Podcasts</p>
    <TypicalParagraphe title="Coaching analyzed, explained and shared."
      subtitle="Listen to our exclusive podcast series featuring female coaches, football experts and training specialists."
      content="Episodes cover; match analysis & breakdowns, real coaching experiences, interviews with professionals, tips, challenges & mindset tools" />

    <div class="flex flex-col gap-10 my-10">
      <PodcastCard v-for="podcast in podcasts" :key="podcast._id" :podcastData="podcast" />
    </div>

    <img :src="Images.PLAYER_STORIES" alt="" class="-ml-25 w-full md:w-1/2 lg:w-1/3">

    <form @submit.prevent="addPodcast" class="my-10">
      <div class="flex flex-col gap-4 w-full max-w-md mb-5">
        <input v-model="newPodcast.number" type="number" class="p-2 border rounded">
        <input v-model="newPodcast.theme" type="text" placeholder="Theme" class="p-2 border rounded">
        <input v-model="newPodcast.title" type="text" placeholder="Title" class="p-2 border rounded">
        <input v-model="newPodcast.guest" type="text" placeholder="Guest" class="p-2 border rounded">
        <input v-model="newPodcast.author" type="text" placeholder="Author" class="p-2 border rounded">
        <textarea v-model="newPodcast.description" placeholder="Description" class="p-2 border rounded h-32"></textarea>
        <label for="audio">Audio upload</label>
        <input type="file" id="audio" @change="handleAudioUpload" class="p-2 border rounded cursor-pointer">
        <label for="img">Image upload</label>
        <input type="file" id="img" @change="handleImageUpload" class="p-2 border rounded cursor-pointer">
      </div>
      <PinkButton type="submit">Ajouter un podcast</PinkButton>
    </form>
  </PageBody>

  <Footer />
</template>