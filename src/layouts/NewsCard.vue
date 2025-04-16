<script setup>
import { ref } from 'vue';

const textColor = ref('');

const props = defineProps({
  blogData: {
    type: Object,
    required: true
  },
});

switch (props.blogData.type) {
  case 'news':
    textColor.value = 'text-green';
    break;
  case 'article':
    textColor.value = 'text-pink2';
    break;
  case 'podcast':
    textColor.value = 'text-yellow';
    break;
}

const tagColors = [
  { bgColor: "#F9F5FF", borderColor: "#E9D7FE", textColor: "#6941C6" },
  { bgColor: "#EEF4FF", borderColor: "#C7D7FE", textColor: "#3538CD" },
  { bgColor: "#FDF2FA", borderColor: "#FCCEEE", textColor: "#C11574" },
  { bgColor: "#F8F9FC", borderColor: "#D5D9EB", textColor: "#363F72" },
  { bgColor: "#ECFDF3", borderColor: "#ABEFC6", textColor: "#067647" },
  { bgColor: "#F0F9FF", borderColor: "#B9E6FE", textColor: "#026AA2" },
  { bgColor: "#FEF6EE", borderColor: "#F9DBAF", textColor: "#B93815" },
];

// Shuffle the tagColors array (Fisher-Yates shuffle)
const shuffledColors = [...tagColors];
for (let i = shuffledColors.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffledColors[i], shuffledColors[j]] = [shuffledColors[j], shuffledColors[i]];
}

// Assign colors to tags
const tagStyles = props.blogData.tags.map((_, index) => {
  const color = shuffledColors[index % shuffledColors.length]; // if more tags than colors, loop
  return {
    backgroundColor: color.bgColor,
    borderColor: color.borderColor,
    color: color.textColor,
    borderWidth: '1px',
    borderStyle: 'solid',
  };
});
</script>

<template>
  <section class="flex flex-col gap-4 w-full" @click="$router.push(`/news/${blogData._id}`)">
    <img :src="blogData.image" :alt="blogData.title" class="rounded-2xl w-full md:w-1/2 lg:w-1/3">
    <p :class="`${textColor} text-sm font-semibold`">{{ blogData.author }} • {{ new
      Date(blogData.date).toLocaleDateString('en-GB', { month: 'long', day: '2-digit', year: 'numeric' }) }}</p>
    <h2 class="font-semibold text-xl text-dark-pink">{{ blogData.title }}</h2>
    <h3 class="font-medium line-clamp-2 text-dark-pink">{{ blogData.content }}</h3>
    <ul class="flex gap-2">
      <li v-for="(tag, index) in blogData.tags" :key="tag" :style="tagStyles[index]"
        class="text-xs px-2 py-1 rounded-full">
        {{ tag }}
      </li>
    </ul>
  </section>
</template>