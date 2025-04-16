<script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Images from '../assets';
import PageBody from "../layouts/PageBody.vue";
import HomeCard from "../layouts/HomeCard.vue";
import HomeSection from "../layouts/HomeSection.vue";
import NewsCard from "../layouts/NewsCard.vue";
import PinkButton from "../layouts/PinkButton.vue";
import StoriesCarousel from "./StoriesCarousel.vue";
import fetchAPI from "../composable/fetchAPI";

const blogData = ref([]);
const loading = ref(false);
const form = ref({
  email: ''
});

const fetchLatestArticle = async () => {
  loading.value = true;
  try {
    const allBlogs = await fetchAPI('GET', 'articles');
    const allArticles = allBlogs.filter(blog => blog.type === 'article');
    blogData.value = allArticles[0];
  } catch (error) {
    console.error('Error fetching user data:', error);
  } finally {
    loading.value = false;
  }
}
fetchLatestArticle();

const handleSubmit = () => {
  console.log(form.value.email);
}
</script>

<template>
  <Header />

  <div class="overflow-hidden">
    <section class="flex justify-center items-center relative h-screen titleImage px-5" :style="{
      '--bg-image': `url(${Images.HOME1})`
    }">
      <div class="flex flex-col items-center text-center gap-5 z-50">
        <p class="text-white font-berlin text-4xl">Become the Coach You Never Had</p>
        <p class="text-white">Inspiring women to lead, play, and make their mark in football.</p>
        <PinkButton url="profile">Join the Huddle Coach Arena</PinkButton>
      </div>
    </section>

    <PageBody>
      <div class="flex flex-col gap-10 mt-10 text-dark-pink">
        <HomeSection title="Change the game"
          subtitle="Women are changing the game. But the game still needs more coaches." description="In amateur clubs, in youth leagues, in professional training grounds female coaches are underrepresented
          everywhere. What if your voice, your energy, your perspective was exactly what's missing? Discover our
          trainings, mentorships and entry points into coaching!" buttonText="See Coaching Programs">

          <img :src="Images.HOME2" alt="" class="my-5 rounded-2xl w-full md:w-1/2 lg:w-1/3">
        </HomeSection>

        <HomeSection title="Who We Are" subtitle="A media & movement dedicated to women in football."
          description="Huddle connects, inspires and empowers women to step into leadership roles in the game. We build visibility, offer tools, and highlight the real journeys behind the whistle.">
          <div class="flex flex-col lg:flex-row justify-center gap-15 py-5">
            <HomeCard :logo="Images.SHOP" title="Our Mission" subtitle="Make coaching accessible for every woman"
              :cta="{ text: 'Discover our UEFA licences', url: 'informations' }" />

            <HomeCard :logo="Images.BALL" title="Our Vision" subtitle="A football world where female voices lead"
              :cta="{ text: 'Check our blog', url: 'news' }" />

            <HomeCard :logo="Images.CARING" title="Our Values" subtitle="Inclusion. Empowerment. Community."
              :cta="{ text: 'See our events', url: 'agenda' }" />
          </div>
        </HomeSection>

        <img :src="Images.PLAYER1" alt="" class="-ml-20 w-full md:w-1/2 lg:w-1/3">

        <HomeSection title="ShePredicts" subtitle="Make your guess. Own your play." description="Vote on UEFA women's matches during live competitions and compete with your friends, all without betting
          money. A fun way to engage with the game, show your football instincts and join the community."
          :link="{ text: 'Create your profile to start your predictions', url: 'profile' }"
          :button="{ text: 'Start predicting now', url: 'shepredicts' }" />

        <img :src="Images.SCORE" alt="Score" class="py-10 w-full md:w-1/2 lg:w-1/3">

        <HomeSection title="Create your own league" subtitle="Compete with your friends!"
          description="Design your dream football league, then bet on every women match! Invite friends and see who has the best football IQ or the luckiest gut. Whether you're playing for fun or bragging rights, the thrill of the game is in your hands!"
          :link="{ text: 'Watch how it works', url: 'shepredicts' }"
          :button="{ text: 'Start your league now', url: 'shepredicts' }" />

        <img :src="Images.PLAYER2" alt="" class="ml-25 w-full md:w-1/2 lg:w-1/3">

        <HomeSection title="True stories" subtitle="They did it. So can you!"
          description="Discover real stories of women who stepped up, coached, and changed their path — and others'. Watch inspiring interviews, quotes and snapshots of their journey."
          :link="{ text: 'See our blog', url: 'news' }" :button="{ text: 'Listen to other stories', url: 'stories' }" />

        <StoriesCarousel :stories="[
          {
            name: 'Marion Chevalley',
            text: 'Coaching is...',
            image: Images.BLOG_COVER
          },
          {
            name: 'Anna Gilliand',
            text: 'I love to give tactical advices to my players.',
            image: Images.OPPORTUNITIES_COVER
          },
          {
            name: 'Julia Rodrigo',
            text: 'Seeing a player...',
            image: Images.INFORMATIONS_COVER
          }
        ]" />

        <HomeSection title="Live News" subtitle="What's happening in women's football & coaching?"
          description="Stay up to date with our latest articles, UEFA insights, training opportunities, and expert takes. Everything you need to stay informed & inspired." />

        <NewsCard v-if="!loading" :blogData="blogData" />

        <HomeSection title="Newsletter" subtitle="Let's keep in touch. We'll send you a nice letter once per week"
          description="Be the first to receive new stories, upcoming training dates, and exclusive Huddle content.">
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

        <img :src="Images.PLAYER3" alt="" class="ml-20 w-full md:w-1/2 lg:w-1/3">
      </div>
    </PageBody>

    <Footer />
  </div>
</template>
