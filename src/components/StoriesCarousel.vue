<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
  stories: Array,
  interval: { type: Number, default: 5000 }
})

const current = ref(0)
let timer = null

const next = () => {
  current.value = (current.value + 1) % props.stories.length
}

onMounted(() => {
  timer = setInterval(next, props.interval)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})

// shift the whole track based on current
const trackStyle = computed(() => ({
  transform: `translateX(-${current.value * 100}%)`,
}))
</script>

<template>
  <div class="relative w-full overflow-hidden pt-5 pb-10">
    <div class="flex transition-transform duration-500 ease-in-out" :style="trackStyle">
      <div v-for="(story, index) in stories" :key="index" class="w-full flex-shrink-0 px-4 flex justify-center">
        <div class="w-72 min-w-72 h-[420px] rounded-3xl bg-cover bg-center shadow-md transition-all duration-500"
          :style="{ backgroundImage: `url(${story.image})` }">
          <div
            class="flex flex-col justify-end h-full p-5 text-white bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-[24px]">
            <p class="text-sm font-light">{{ story.name }}</p>
            <p class="text-lg font-bold leading-tight">{{ story.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>