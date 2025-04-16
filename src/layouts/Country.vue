<script setup>
import { computed } from 'vue';

const props = defineProps({
	country: {
		type: String,
		required: true,
	},
});

const flagUrl = computed(() => `https://flagsapi.com/${props.country}/flat/64.png`);
</script>

<template>
	<div class="flex flex-col items-center">
		<img :src="flagUrl" :alt="`Flag of ${country}`" />
		<p class="text-lg font-semibold">{{ country }}</p>
	</div>
</template>
