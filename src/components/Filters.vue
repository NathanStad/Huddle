<script setup>
import { ref, watch } from 'vue';
import filterData from '../composable/filterData';
import PinkButton from '../layouts/PinkButton.vue';

const emit = defineEmits(['close']);
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});

const closeSettingsPopup = () => {
  emit('close');
};

// Close popup when clicking outside of it
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('iframe-popup')) {
    emit('close');
  }
});
</script>

<template>
  <teleport to="body">
    <div v-if="visible" class="iframe-popup text-dark-pink">
      <div class="iframe-content">
        <div class="flex justify-between items-start mb-5">
          <h1 class="text-3xl">Filters</h1>
          <button class="cursor-pointer" @click="closeSettingsPopup">
            <svg class="w-8 h-8 transition-transform duration-300 ease-in-out" viewBox="0 0 24 24" fill="none"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6L18 18" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6" />
            </svg>
          </button>
        </div>

        <h2 class="font-bold mb-3">Location</h2>
        <div v-for="location in filterData.locations" class="flex items-center gap-2 mb-2">
          <input type="checkbox" :id="`locations-${location}`">
          <label :for="`locations-${location}`">{{ location }}</label>
        </div>

        <div class="w-full h-[1px] bg-dark-pink my-10" />

        <h2 class="font-bold mb-3">Category</h2>
        <div v-for="category in filterData.categories" class="flex items-center gap-2 mb-2">
          <input type="checkbox" :id="`categories-${category}`">
          <label :for="`categories-${category}`">{{ category }}</label>
        </div>

        <div class="w-full h-[1px] bg-dark-pink my-10" />

        <h2 class="font-bold mb-3">Levels of clubs</h2>
        <div v-for="level in filterData.levels" class="flex items-center gap-2 mb-2">
          <input type="checkbox" :id="`levels-${level}`">
          <label :for="`levels-${level}`">{{ level }}</label>
        </div>

        <div class="w-full h-[1px] bg-dark-pink my-10" />

        <h2 class="font-bold mb-3">License</h2>
        <div v-for="license in filterData.licenses" class="flex items-center gap-2 mb-2">
          <input type="checkbox" :id="`licenses-${license}`">
          <label :for="`licenses-${license}`">{{ license }}</label>
        </div>

        <div class="w-full h-[1px] bg-dark-pink my-10" />

        <div class="flex justify-center gap-5">
          <button
            class="border border-dark-pink/50 text-black px-5 py-3 hover:bg-dark-pink/50 rounded hover:text-white transition cursor-pointer"
            @click="closeSettingsPopup">
            Cancel
          </button>

          <PinkButton bgColor="gold" hoverColor="gold2">
            Apply filters
          </PinkButton>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.iframe-popup {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1100;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  /* Optional: for spacing on small screens */
}

.iframe-content {
  position: relative;
  background-color: white;
  width: clamp(300px, 90%, 400px);
  max-height: 90vh;
  overflow-y: auto;
  border: 3px solid var(--main-color);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>