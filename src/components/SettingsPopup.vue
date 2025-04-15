<script setup>
import { ref, watch } from 'vue';
import Button from '../layouts/Button.vue';
import Center from '../layouts/Center.vue';
import fetchAPI from '../composable/fetchAPI';

const emit = defineEmits(['close']);
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
});

const selectedGame = ref({
  id: props.data.id,
  platform: props.data.platform || "", // Default to current platform or empty
});
const platforms = ref([]);

(async () => {
  platforms.value = await fetchAPI('GET', 'platforms');
})();

// Update `selectedGame.platform` if `props.data` changes
watch(
  () => props.data,
  (newData) => {
    selectedGame.value = {
      id: newData.id,
      platform: newData.platform || "", // Reset to new platform or empty
    };
  }
);

const closeSettingsPopup = () => {
  if (!localStorage.getItem('gamePlatforms')) localStorage.setItem('gamePlatforms', '[]');

  // Add platform to localStorage
  const gamePlatforms = JSON.parse(localStorage.getItem('gamePlatforms'));
  const index = gamePlatforms.findIndex((game) => game[0] === selectedGame.value.id);
  if (index > -1) {
    gamePlatforms[index][1] = selectedGame.value.platform;
  } else gamePlatforms.push([selectedGame.value.id, selectedGame.value.platform]);

  localStorage.setItem('gamePlatforms', JSON.stringify(gamePlatforms));
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
        <Center>
          <h3 class="mb-[1rem]">Settings for {{ data.name }}</h3>
        </Center>

        <div class="flex flex-col gap-5">
          <!-- Platform select -->
          <div class="flex flex-col">
            <label for="platform">Platform</label>
            <select id="platform" v-model="selectedGame.platform" class="text-black px-2 py-1">
              <option disabled value="">Please select a platform</option>
              <option v-for="platform in platforms" :key="platform._id" :value="platform._id">
                {{ platform.name }}
              </option>
            </select>
          </div>

          <!-- Tag select
          <div class="flex flex-col">
            <label for="platform">Tag</label>
            <select id="platform" v-model="selectedGame.platform" class="text-black px-2 py-1">
              <option disabled value="">Please select a tag</option>
              <option v-for="platform in platforms" :key="platform._id" :value="platform._id">
                {{ platform.name }}
              </option>
            </select>
          </div> -->
        </div>

        <!-- Save button -->
        <Center>
          <Button content="Save" type="good-glass" @click="closeSettingsPopup" />
        </Center>
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
  background-color: var(--secondary-color-glass);
  backdrop-filter: blur(30px);
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