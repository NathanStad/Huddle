<script setup>
import { ref, computed } from 'vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import PageBody from '../layouts/PageBody.vue';
import fetchAPI from '../composable/fetchAPI';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const article = ref(null);
const loading = ref(false);

const fetchOpportunity = async () => {
  loading.value = true;
  try {
    article.value = await fetchAPI('GET', `articles/id/${props.id}`);
  } catch (error) {
    console.error('Error fetching article data:', error);
  } finally {
    loading.value = false;
  }
};
fetchOpportunity();

const tagColors = [
  { bgColor: "#F9F5FF", borderColor: "#E9D7FE", textColor: "#6941C6" },
  { bgColor: "#EEF4FF", borderColor: "#C7D7FE", textColor: "#3538CD" },
  { bgColor: "#FDF2FA", borderColor: "#FCCEEE", textColor: "#C11574" },
  { bgColor: "#F8F9FC", borderColor: "#D5D9EB", textColor: "#363F72" },
  { bgColor: "#ECFDF3", borderColor: "#ABEFC6", textColor: "#067647" },
  { bgColor: "#F0F9FF", borderColor: "#B9E6FE", textColor: "#026AA2" },
  { bgColor: "#FEF6EE", borderColor: "#F9DBAF", textColor: "#B93815" },
];

// Compute tag styles after article is loaded
const tagStyles = computed(() => {
  if (!article.value || !article.value.tags) return [];

  const shuffled = [...tagColors];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return article.value.tags.map((_, index) => {
    const color = shuffled[index % shuffled.length];
    return {
      backgroundColor: color.bgColor,
      borderColor: color.borderColor,
      color: color.textColor,
      borderWidth: '1px',
      borderStyle: 'solid',
    };
  });
});
</script>

<!-- Hardcoded for now, will be dynamically generated from API later on -->
<template>
  <Header />

  <PageBody class="mt-30 mb-15">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="flex flex-col gap-3 mb-10">
        <p class="text-green text-sm font-semibold">Published {{ new
          Date(article.date).toLocaleDateString('en-GB', { month: 'long', day: '2-digit', year: 'numeric' }) }}</p>

        <h1 class="text-2xl font-berlin">Coach for a Day — Coach for Life?</h1>

        <h2 class="text-lg">What if coaching wasn't just a role… but a commitment?</h2>

        <ul class="flex gap-2 mb-5">
          <li v-for="(tag, index) in article.tags" :key="tag" :style="tagStyles[index]"
            class="text-xs px-2 py-1 rounded-full">
            {{ tag }}
          </li>
        </ul>

        <img :src="article.image" :alt="article.title" class="rounded-xl">
      </div>

      <div class="text-justify">
        <p class="mb-5">
          <span class="italic">“Do you want to coach once, or do you want to really invest yourself?”</span><br>
          We hear this sentence often. Behind it lies an idea: that coaching is reserved for an elite — for those who
          can “stick with it” over time.<br>
          But at Huddle, we believe the exact opposite.
        </p>

        <p>
          Coaching isn't a lifelong label. It's an experience. A desire to pass something on, at a given moment. And
          above all, it's a <strong>right</strong> — for all women who want to try, explore, or make it their field.
        </p>

        <h2 class="mt-15 mb-5 text-lg font-semibold">Coach for a day? Why not!</h2>

        <p class="mb-5">You don't need 15 years of football behind you, or a UEFA Pro license to try coaching.</p>

        <p>You can:</p>
        <ul class="list-disc pl-5 mb-5">
          <li class="pl-3">Coach a session in your club</li>
          <li class="pl-3">Run a workshop for younger players</li>
          <li class="pl-3">Lead a small group during a tournament</li>
        </ul>

        <p>
          <strong>Every experience counts.</strong><br>
          And most importantly: every female voice matters on the pitch.
        </p>

        <h2 class="mt-15 mb-5 text-lg font-semibold">They did it… at their own pace</h2>
        <ul class="list-disc pl-5 mb-5">
          <li class="pl-3">Lina, 18, coached a U11 team for 3 months alongside her studies.</li>
          <li class="pl-3">Noémie, 32, got back into coaching after her first pregnancy.</li>
          <li class="pl-3">Sophie, 45, became an assistant after a lifetime of playing.</li>
        </ul>

        <p>
          None of them considers herself a “coach for life”.<br>
          But all say it changed the way they see football — and themselves.
        </p>

        <h2 class="mt-15 mb-5 text-lg font-semibold">Want to try? We've got you.</h2>

        <p class="mb-2">
          Not sure where to start?<br>
          On the Huddle platform, you can:
        </p>

        <ul class="pl-5 mb-5">
          <li class="grid grid-cols-[auto_1fr] gap-2"><span>📅</span> Find training sessions suited to your level</li>
          <li class="grid grid-cols-[auto_1fr] gap-2"><span>🤝</span> Connect with a mentor to support you</li>
          <li class="grid grid-cols-[auto_1fr] gap-2"><span>🎮</span> Train through our Serious Game</li>
        </ul>

        <h2 class="mt-15 mb-5 text-lg font-semibold">Coaching isn't a straight line. It's an open door.</h2>
        <p class="mb-5">
          Coach for a day? Yes.<br>
          And if you want to keep going tomorrow, the next day — or not at all — the choice is yours.
        </p>

        <p class="mb-5">We're here to support you every step of the way.</p>

        <a class="cta" href="/informations">👉 Discover available trainings</a>
      </div>
    </div>
  </PageBody>

  <Footer />
</template>