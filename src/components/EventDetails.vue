<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import PageBody from '../layouts/PageBody.vue';
import fetchAPI from '../composable/fetchAPI';
import PinkButton from '../layouts/PinkButton.vue';
import Images from '../assets';
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const event = ref(null);
const loading = ref(false);

const fetchEvent = async () => {
  loading.value = true;
  try {
    event.value = await fetchAPI('GET', `events/id/${props.id}`);
  } catch (error) {
    console.error('Error fetching event data:', error);
  } finally {
    loading.value = false;
  }
}
fetchEvent();
</script>

<template>
  <Header />

  <div v-if="loading">Loading...</div>

  <div v-else-if="event" class="mt-10">
    <img :src="event.image" alt="" class="w-full max-h-[25vh] object-cover">

    <PageBody>
      <img :src="event.icon" :alt="`${event.title} logo`"
        class="absolute left-13 -mt-15 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full object-cover aspect-square w-20 border p-3">

      <div class="mb-10">
        <h1 class="text-xl font-semibold">{{ event.title }}</h1>
        <p class="text-pink2">{{ event.organizer }}</p>
        <div class="flex items-center gap-2 mt-5 mb-10">
          <PinkButton bgColor="dark-pink" hoverColor="pink2" class="text-sm" url="/profile">Register now</PinkButton>
          <PinkButton class="text-sm">Add to calendar</PinkButton>
        </div>
        <p class="font-semibold mb-3">{{ event.subtitle }}</p>
        <p class="text-sm">{{ event.description }}</p>

        <div class="w-full bg-black h-[1px] my-5" />

        <div class="space-y-8">
          <div class="space-y-2">
            <h3 class="font-semibold">Requirements</h3>
            <p class="text-sm text-pink2 bg-pink/50 font-semibold border border-pink2 rounded-full px-4 py-1 w-fit">
              {{ event.requirements }}
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="flex items-center gap-3 font-semibold"><img :src="Images.DURATION" alt="">Date</h3>
            <p class="text-sm text-pink2 font-semibold">
              {{ new
                Date(event.date).toLocaleDateString('en-GB', {
                  weekday: 'long', month: 'long', day: '2-digit', year: 'numeric'
                }) }}
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="flex items-center gap-3 font-semibold"><img :src="Images.LOCATION" alt="">Location</h3>
            <div class="text-sm text-pink2 font-semibold space-y-1">
              <p>{{ event.building }}</p>
              <p>{{ event.address }}</p>
              <p>{{ event.npaCity }}</p>
            </div>
          </div>

          <div class="space-y-2">
            <h3 class="font-semibold">Website</h3>
            <div class="text-sm text-pink2 font-semibold space-y-1">
              <a :href="event.website" target="_blank" class="hover:underline">{{ event.website }}</a>
            </div>
          </div>
        </div>
      </div>
    </PageBody>
  </div>

  <div v-else>
    No event found.
  </div>

  <Footer />
</template>