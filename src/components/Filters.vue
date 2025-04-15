<script setup>
import { ref, watch } from 'vue';
import filterData from '../composable/filterData';

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
    <div v-if="visible" class="iframe-popup">
      <div class="iframe-content">
        <div class="flex justify-between items-start">
          <h1 class="text-3xl">Filters</h1>
          <button class="cursor-pointer" @click="closeSettingsPopup">X</button>
        </div>

        <div v-for="location in filterData.locations" class="flex items-center gap-2">
          <input type="checkbox" for="locations">
          <label id="locations">{{ location }}</label>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.iframe-popup {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1100;
}

.iframe-content {
  position: relative;
  background-color: white;
  width: clamp(200px, 90%, 400px);
  height: fit-content;
  overflow-y: auto;
  border: 3px solid var(--main-color);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.iframe-content button {
  margin-top: 1rem;
}
</style>