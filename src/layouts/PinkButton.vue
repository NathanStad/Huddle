<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button", // Fallback for non-form usage
  },
});
</script>

<template>
  <button :type="type"
    class="px-6 py-3 rounded bg-pink2 text-white w-fit cursor-pointer shadow-md hover:bg-pink3 transition">
    <slot />
  </button>
</template>