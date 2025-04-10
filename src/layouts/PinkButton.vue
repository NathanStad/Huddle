<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button", // Fallback for non-form usage
  },

  classes: {
    type: String,
    default: "",
  },

  bgColor: {
    type: String,
    default: "pink2",
  },

  hoverColor: {
    type: String,
    default: "pink3",
  }
});

const finalClass = computed(() =>
  `px-6 py-3 rounded bg-${props.bgColor} text-white w-fit cursor-pointer shadow-md hover:bg-${props.hoverColor} transition ${props.classes}`
);
</script>

<template>
  <button :type="type" :class="finalClass">
    <slot />
  </button>
</template>