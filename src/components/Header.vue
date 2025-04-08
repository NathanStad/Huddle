<script setup>
import HeaderLink from '../layouts/HeaderLink.vue';
import Images from '../assets';
import { ref } from 'vue';
import pageLinks from '../composable/pageLinks';

const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => mobileMenuOpen.value = !mobileMenuOpen.value;
</script>

<template>
  <header class="fixed top-0 w-full z-99">
    <!-- Desktop -->
    <nav class="hidden lg:flex items-center justify-between bg-pink text-green p-5">
      <router-link to="/">
        <img :src="Images.MAIN_LOGO" alt="">
      </router-link>

      <div class="flex items-center gap-10">
        <HeaderLink v-for="(link, index) in pageLinks" :key="index" :url="link.path" :text="link.name" />
      </div>

      <HeaderLink url="/profile" text="Profile" />
    </nav>

    <!-- Mobile -->
    <div class="flex lg:hidden justify-between items-center bg-white p-5">
      <!-- Left side -->
      <router-link to="/">
        <img :src="Images.MAIN_LOGO" alt="Logo Huddle">
      </router-link>

      <!-- Right side -->
      <div class="flex items-center gap-5">
        <router-link to="/profile">
          <img :src="Images.PROFILE" alt="Logo profil">
        </router-link>

        <button @click=toggleMobileMenu() class="text-dark-pink focus:outline-none cursor-pointer">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path v-if="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" :stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" :stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <nav v-if="mobileMenuOpen" class="bg-pink w-full text-center mt-5 lg:hidden">
        <div class="flex flex-col border-t border-green">
          <HeaderLink v-for="(link, index) in pageLinks" :key="index" :url="link.path" :text="link.name" />
        </div>
      </nav>
    </div>
  </header>
</template>