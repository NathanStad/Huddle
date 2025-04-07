<script setup>
import Images from '../assets';
import pageLinks from '../composable/pageLinks';

const categories = ["Home", "Resources", "Gaming", "Social"];
</script>

<template>
  <footer class="bg-dark-pink text-white py-10">
    <div class="container mx-auto px-5">
      <!-- Company Info -->
      <div class="flex flex-col gap-4 mb-10">
        <img :src="Images.MAIN_LOGO_WHITE" alt="Huddle Logo" class="w-48">
        <p class="text-md">Lead. Unite. Inspire.</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="category in categories">
          <h3 class="font-bold mb-4 text-pink3">{{ category }}</h3>
          <div v-if="category === 'Gaming'">
            <router-link to="/shepredicts" class="block mb-2 w-fit hover:text-pink3 transition">
              ShePredicts
            </router-link>
            <router-link to="/shepredicts" class="block mb-2 w-fit hover:text-pink3 transition">
              Create leagues
            </router-link>
            <router-link to="/shepredicts" class="block mb-2 w-fit hover:text-pink3 transition">
              Bet with friends
            </router-link>
            <router-link to="/shepredicts" class="block mb-2 w-fit hover:text-pink3 transition">
              Ranking
            </router-link>
          </div>
          <div v-else-if="category === 'Social'" class="flex items-center gap-4">
            <a href="https://www.instagram.com/huddle_women" target="_blank">
              <img :src="Images.INSTAGRAM" alt="Instagram icon">
            </a>
            <a href="https://www.youtube.com/@Huddle-Women" target="_blank">
              <img :src="Images.YOUTUBE" alt="YouTube icon">
            </a>
            <a href="https://www.tiktok.com/@huddle_women" target="_blank">
              <img :src="Images.TIKTOK" alt="TikTok icon">
            </a>
          </div>
          <div v-else>
            <router-link v-for="link in pageLinks.filter(l => l.category === category)" :key="link.id" :to="link.path"
              class="block mb-2 w-fit hover:text-pink3 transition">
              {{ link.name }}
            </router-link>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-pink mt-8 pt-8 text-sm text-center col-span-2 lg:col-span-4">
          <p>&copy; {{ new Date().getFullYear() }} Huddle. All rights reserved to Heidi's, HEIG-VD. </p>
        </div>
      </div>
    </div>
  </footer>
</template>
