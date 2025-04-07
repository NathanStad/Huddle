<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import PageBody from "../layouts/PageBody.vue";
import fetchAPI from "../composable/fetchAPI";
import NewsCard from "../layouts/NewsCard.vue";
import { ref } from "vue";

const blogData = ref([]);
const loading = ref(false);
const imageFile = ref(null);
const newArticle = ref({
  title: "",
  content: "",
  author: "",
  tags: [],
  type: "",
});

const fetchBlogs = async () => {
  loading.value = true;
  try {
    blogData.value = await fetchAPI('GET', 'articles');
  } catch (error) {
    console.error('Error fetching user data:', error);
  } finally {
    loading.value = false;
  }
}
fetchBlogs();

const handleFileUpload = (e) => {
  imageFile.value = e.target.files[0];
};

const addArticle = async () => {
  const formData = new FormData();
  formData.append("title", newArticle.value.title);
  formData.append("content", newArticle.value.content);
  formData.append("author", newArticle.value.author);
  formData.append("img", imageFile.value);

  // Parse comma-separated tags string into array
  const tagsArray = newArticle.value.tags
    .split(",")
    .map(tag => tag.trim())
    .filter(Boolean);
  tagsArray.forEach(tag => formData.append("tags", tag));

  formData.append("type", newArticle.value.type);

  try {
    await fetchAPI("POST", "articles", formData, true);
    await fetchBlogs(); // Refresh the list after posting
  } catch (error) {
    console.error("Error adding article:", error);
  }
};
</script>

<template>
  <Header />

  <PageBody>
    <NewsCard v-for="article in blogData" :blogData="article" />

    <form @submit.prevent="addArticle">
      <div class="flex flex-col gap-4 w-full max-w-md">
        <input v-model="newArticle.title" type="text" placeholder="Title" class="p-2 border rounded">
        <textarea v-model="newArticle.content" placeholder="Content" class="p-2 border rounded h-32"></textarea>
        <input v-model="newArticle.author" type="text" placeholder="Author" class="p-2 border rounded">
        <input v-model="newArticle.tags" type="text" placeholder="Tags (comma separated)" class="p-2 border rounded">
        <select v-model="newArticle.type" class="p-2 border rounded">
          <option value="news">News</option>
          <option value="article">Article</option>
          <option value="podcast">Podcast</option>
        </select>
        <input type="file" @change="handleFileUpload" class="p-2 border rounded">
      </div>
      <button type="submit">Ajouter un article</button>
    </form>
  </PageBody>

  <Footer />
</template>