<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import TitleSection from "../layouts/TitleSection.vue";
import PageBody from "../layouts/PageBody.vue";
import fetchAPI from "../composable/fetchAPI";
import NewsCard from "../layouts/NewsCard.vue";
import { ref } from "vue";
import Images from '../assets';
import TypicalParagraphe from "../layouts/TypicalParagraphe.vue";
import PinkButton from "../layouts/PinkButton.vue";

const blogDataArticles = ref([]);
const blogDataNews = ref([]);
const loading = ref(false);
// const imageFile = ref(null);
// const newArticle = ref({
//   title: "",
//   content: "",
//   author: "",
//   tags: [],
//   type: "",
// });

const fetchBlogs = async () => {
  loading.value = true;
  try {
    blogDataArticles.value = await fetchAPI('GET', 'articles/article');
    blogDataNews.value = await fetchAPI('GET', 'articles/news');
  } catch (error) {
    console.error('Error fetching news data:', error);
  } finally {
    loading.value = false;
  }
}
fetchBlogs();

// const handleFileUpload = (e) => {
//   imageFile.value = e.target.files[0];
// };

// const addArticle = async () => {
//   const formData = new FormData();
//   formData.append("title", newArticle.value.title);
//   formData.append("content", newArticle.value.content);
//   formData.append("author", newArticle.value.author);
//   formData.append("image", imageFile.value);
//   formData.append("type", newArticle.value.type);

//   // Parse comma-separated tags string into array
//   const tagsArray = newArticle.value.tags
//     .split(",")
//     .map(tag => tag.trim())
//     .filter(Boolean);
//   tagsArray.forEach(tag => formData.append("tags", tag));

//   try {
//     await fetchAPI("POST", "articles", formData, true);
//     await fetchBlogs(); // Refresh the list after posting
//   } catch (error) {
//     console.error("Error adding article:", error);
//   }
// };
</script>

<template>
  <Header />

  <TitleSection :img="Images.BLOG_COVER" type="Latest posts" color="pink2" title="News"
    subtitle="Stay informed, inspired & in the game."
    text="Explore the latest from the Huddle ecosystem — articles, interviews, trends, and stories that move the game forward" />

  <PageBody>
    <div class="my-15">
      <TypicalParagraphe theme="News" textColor="green" title="What's new in women's football?"
        subtitle="From UEFA matches to local coaching events, this is where it happens first."
        content="Follow the latest trends, match results, reports, and Huddle updates in real-time." />

      <div class="flex flex-col gap-15 mb-20">
        <NewsCard v-for="news in blogDataNews" :blogData="news" />
      </div>

      <TypicalParagraphe theme="Articles" textColor="pink2" title="Dive deeper into the game."
        subtitle="Explore in-depth articles written to encourage, educate, and equip women to become coaches."
        content="Here, we break down stereotypes, spotlight inspiring journeys and share valuable resources. Our topics include; The road to UEFA certifications, Inside a coach's mindset, Role model highlights, Tactical & leadership breakdowns." />

      <div class="flex flex-col gap-15">
        <NewsCard v-for="article in blogDataArticles" :blogData="article" />
      </div>
    </div>

    <!-- <form @submit.prevent="addPodcast" class="my-10">
      <div class="flex flex-col gap-4 w-full max-w-md mb-5">
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
      <PinkButton type="submit">Ajouter un article</PinkButton>
    </form> -->
  </PageBody>

  <Footer />
</template>