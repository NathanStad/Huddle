<script setup>
import HeaderLink from '../layouts/HeaderLink.vue';
import Images from '../assets';
import { ref, watch } from 'vue';
import pageLinks from '../composable/pageLinks';

const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => mobileMenuOpen.value = !mobileMenuOpen.value;

watch(mobileMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto';
});
</script>

<template>
  <!-- Hidden safe list for Tailwind -->
  <div
    class="bg-pink bg-pink2 bg-pink3 bg-gold bg-gold2 bg-yellow bg-green bg-gold-bg bg-green-bg text-dark-pink border-gold border-green hover:text-dark-pink hover:bg-gold hover:bg-gold2 hover:bg-green-hover hover:bg-pink hover:bg-pink2 hover:bg-pink3">
  </div>

  <header class="fixed top-0 w-full z-99">
    <!-- Desktop -->
    <nav class="hidden lg:flex items-center justify-between bg-pink text-green p-5">
      <router-link to="/">
        <img :src="Images.MAIN_LOGO" alt="Logo Huddle">
      </router-link>

      <div class="flex items-center gap-10">
        <HeaderLink v-for="(link, index) in pageLinks" :key="index" :url="link.path" :text="link.name" />
      </div>

      <HeaderLink url="/profile" text="Profile" />
    </nav>

    <!-- Mobile -->
    <div class="flex lg:hidden justify-between items-center bg-white p-5 shadow-md">
      <router-link to="/">
        <img :src="Images.MAIN_LOGO" alt="Logo Huddle">
      </router-link>

      <div class="flex items-center gap-5">
        <router-link to="/profile">
          <img :src="Images.PROFILE" alt="Profile Icon">
        </router-link>

        <button @click="toggleMobileMenu" class="text-dark-pink focus:outline-none cursor-pointer z-50">
          <svg class="w-8 h-8 transition-transform duration-300 ease-in-out" viewBox="0 0 24 24" fill="none"
            stroke="currentColor">
            <g :class="{ 'opacity-0': mobileMenuOpen, 'opacity-100': !mobileMenuOpen }"
              class="transition-opacity duration-200">
              <!-- Hamburger (3 lines) -->
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16" />
            </g>
            <g :class="{ 'opacity-100 rotate-0': mobileMenuOpen, 'opacity-0 rotate-45': !mobileMenuOpen }"
              class="transition-all duration-300 origin-center absolute top-0 left-0">
              <!-- Cross (X) -->
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6L18 18" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6" />
            </g>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile full screen menu -->
    <transition name="fade">
      <div v-if="mobileMenuOpen"
        class="fixed inset-0 bg-pink text-green flex flex-col items-center justify-center space-y-8">
        <HeaderLink v-for="(link, index) in pageLinks" :key="index" :url="link.path" :text="link.name"
          @click="toggleMobileMenu" />
        <HeaderLink url="/profile" text="Profile" @click="toggleMobileMenu" />
      </div>
    </transition>
  </header>
</template>