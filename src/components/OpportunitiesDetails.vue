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

const opportunity = ref(null);
const loading = ref(false);

const fetchOpportunity = async () => {
  loading.value = true;
  try {
    opportunity.value = await fetchAPI('GET', `opportunities/${props.id}`);
  } catch (error) {
    console.error('Error fetching opportunity data:', error);
  } finally {
    loading.value = false;
  }
}
fetchOpportunity();
</script>

<template>
  <Header />

  <div v-if="loading">Loading...</div>

  <div v-else-if="opportunity" class="mt-20">
    <img :src="Images.OPPORTUNITIES_DETAILS_BANNER" alt="" class="w-full max-h-[25vh] object-cover">

    <PageBody>
      <img :src="Images.OPPORTUNITIES_DETAILS_ICON" :alt="`${opportunity.title} logo`"
        class="absolute left-13 -mt-15 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full object-cover aspect-square w-20 border">

      <div class="mb-10">
        <h1 class="text-xl font-semibold">{{ opportunity.title }}</h1>
        <p class="text-gold">{{ opportunity.club }}</p>
        <div class="flex items-center gap-2 mt-5 mb-10">
          <PinkButton bgColor="dark-pink" hoverColor="gold" class="text-sm" url="https://fccdf.ch">See our website
          </PinkButton>
          <PinkButton bgColor="gold" hoverColor="gold2" class="text-sm">Follow us</PinkButton>
        </div>
        <p class="font-semibold mb-3">About the opportunity</p>
        <p class="text-sm">Are you passionate about women's football and eager to inspire the next generation of players
          ⚽ ?
          FC La Chaux-de-Fonds is looking for a dedicated and motivated female coach to lead our U15 girls' team !
          This is a fantastic opportunity to:- Develop young talents in a competitive environment- Focus on tactical
          growth, teamwork, and individual player progression- Work with a dynamic club in a supportive setting- Obtain
          or apply your UEFA B Youth license in a hands-on role
          This part-time position is perfect for someone who wants to grow in coaching while helping young athletes
          thrive. If you're ready to make a real impact on and off the pitch, we'd love to hear from you! </p>

        <div class="w-full bg-black h-[1px] my-5" />

        <div class="space-y-8">
          <div class="space-y-2">
            <h3 class="font-semibold">Requirements</h3>
            <p class="text-sm text-gold bg-gold/10 font-semibold border border-gold rounded-full px-4 py-1 w-fit">
              {{ opportunity.license }}
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="flex items-center gap-3 font-semibold"><img :src="Images.DURATION" alt="">Contract type</h3>
            <p class="text-sm text-gold font-semibold capitalize">
              {{ opportunity.contract }}
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="flex items-center gap-3 font-semibold"><img :src="Images.LOCATION" alt="">Location</h3>
            <div class="text-sm text-gold font-semibold space-y-1">
              <p>FC La Chaux-de-Fonds</p>
              <p>Case postale 5642301</p>
              <p>La Chaux-de-Fonds</p>
            </div>
          </div>

          <div class="space-y-2">
            <h3 class="font-semibold">Website</h3>
            <div class="flex items-center gap-3 text-sm text-gold font-semibold space-y-1">
              <a href="https://fccdf.ch" target="_blank" class="cursor-pointer hover:underline">https://fccdf.ch</a>
              <img :src="Images.ARROW_LINK" alt="">
            </div>
          </div>

          <div class="space-y-2">
            <h3 class="font-semibold">Email</h3>
            <div class="flex items-center gap-3 text-sm text-gold font-semibold space-y-1">
              <a href="mailto:info@fccdf.ch" class="cursor-pointer hover:underline">info@fccdf.ch</a>
              <img :src="Images.ARROW_LINK" alt="">
            </div>
          </div>
        </div>
      </div>
    </PageBody>
  </div>

  <div v-else>
    No opportunity found.
  </div>

  <Footer />
</template>