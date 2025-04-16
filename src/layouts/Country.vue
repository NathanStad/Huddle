<template>
    <div class="country ">
        <img :src="flagUrl" :alt="`Flag of ${country}`" class="country-flag" />
        <p class="country-name">{{ country }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    country: {
        type: String,
        required: true,
    },
});

const flagUrl = computed(() => `https://flagsapi.com/${props.country}/flat/64.png`);
console.log(flagUrl.value);

</script>

<style scoped>
.country {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.country-flag {
    width: 64px;
    height: 64px;
}

.country-name {
    font-size: 1.2rem;
    font-weight: bold;
}
</style>
