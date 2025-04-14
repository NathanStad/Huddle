<script setup>
import { ref, nextTick } from 'vue';
import { animate } from 'animejs';

const extended = ref(false);
const textToggle = ref(true);

const props = defineProps({
  faqData: {
    type: Object,
    required: true
  },

  bgColor: {
    type: String,
    required: false,
    default: "gold-bg"
  },

  secondaryColor: {
    type: String,
    required: false,
    default: "gold"
  }
});

// Refs for DOM elements
const answerRef = ref(null);

const toggleAccordion = async () => {
  extended.value = !extended.value;
  textToggle.value = !textToggle.value;

  await nextTick(); // wait for DOM update

  if (extended.value) {
    animate(answerRef.value, {
      height: [0, answerRef.value.scrollHeight],
      opacity: [0, 1],
      duration: 400,
      easing: 'easeOutQuad'
    });
  } else {
    animate(answerRef.value, {
      height: [answerRef.value.scrollHeight, 0],
      opacity: [1, 0],
      duration: 400,
      easing: 'easeInQuad'
    });
  }
};
</script>

<template>
  <section
    :class="`bg-${bgColor} border-2 border-${secondaryColor} rounded-2xl p-5 text-dark-pink w-full md:w-1/2 lg:w-1/3 overflow-hidden mb-5`">
    <div class="flex justify-between gap-3 items-start mb-3" @click="toggleAccordion">
      <h2 class="font-semibold text-lg mb-2">{{ faqData.question }}</h2>
      <p
        :class="`text-${secondaryColor} border-2 border-${secondaryColor} rounded-full w-7 h-7 aspect-square text-xl font-semibold flex items-center justify-center cursor-pointer`">
        {{ textToggle ? '+' : '-' }}
      </p>
    </div>

    <div ref="answerRef" class="text-dark-pink/70" style="height: 0; overflow: hidden;">
      <ul v-if="faqData.answer.length > 1" class="list-disc pl-5 space-y-2">
        <li v-for="answer in faqData.answer" class="text-xs font-medium">
          {{ answer }}
        </li>
      </ul>
      <p v-else class="text-xs font-medium mb-5">{{ faqData.answer[0] }}</p>
    </div>
  </section>
</template>