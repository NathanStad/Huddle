<script setup>
import PageBody from "../layouts/PageBody.vue";
import Header from "./Header.vue";
import fetchAPI from "../composable/fetchAPI";
import Images from '../assets';
import { ref, onMounted } from "vue";
import isLogged from "../composable/isLogged";
import PinkButton from "../layouts/PinkButton.vue";
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isUserLogged = ref(false)

onMounted(async () => {
  isUserLogged.value = isLogged();

  if (isUserLogged.value) {
    await fetchUserData();
  }
})

const loginData = ref(null);
const userData = ref(null);
const loading = ref(false);
const newLogin = ref({
  email: '',
  password: ''
});

const addUser = async () => {
  try {
    const newUser = {
      pseudo: 'John Admin',
      email: 'john.admin@example.com',
      password: 'password123',
      role: 'admin'
    };
    await fetchAPI('POST', 'users', newUser);
  } catch (error) {
    console.error('Error adding game:', error);
  }
};

const fetchUserData = async () => {
  loading.value = true;
  try {
    userData.value = await fetchAPI('GET', `users/${localStorage.getItem("id")}`);
  } catch (error) {
    console.error('Error fetching user data:', error);
  } finally {
    loading.value = false;
  }
}

const login = async () => {
  const formData = new FormData();
  formData.append("email", newLogin.value.email);
  formData.append("password", newLogin.value.password);

  try {
    loginData.value = await fetchAPI('POST', 'users/login', Object.fromEntries(formData.entries()));
    const token = await loginData.value.token;
    const id = await loginData.value.id;
    storeData("authToken", token.token);
    storeData("id", id);
    isUserLogged.value = true;
    await fetchUserData();
    router.push(route.query.redirect || "/profile");
  } catch (error) {
    console.error('Error logging in:', error);
  }
}

const logout = async () => {
  try {
    await fetchAPI('POST', 'users/logout');
    deleteData("authToken");
    deleteData("id");
    isUserLogged.value = false;
    router.push("/profile");
  } catch (error) {
    console.error('Error logging out:', error);
  }
}

const storeData = (key, value) => {
  localStorage.setItem(key, value);
}

const deleteData = (key) => {
  localStorage.removeItem(key);
}
</script>

<template>
  <Header />
  <PageBody class="mt-30 text-dark-pink">
    <div class="flex flex-col items-center gap-3 text-center mb-5">
      <img :src="Images.PROFILE_LINES" alt="Profile icon" class="p-4 bg-pink/50 rounded-full aspect-square">
      <h1 class="text-2xl font-semibold">{{ isUserLogged ? "Profile" : "Log in to your account" }}</h1>
      <h2 class="text-pink2">{{ isUserLogged ? "Huddle member" : "Welcome back! Please enter your details to play at ShePredicts." }}</h2>
    </div>

    <!-- Connected -->
    <div v-if="isUserLogged">
      <div class="flex flex-col justify-center items-center">
        <div v-if="loading">Loading...</div>
        <div v-else-if="userData" class="flex flex-col w-full gap-3 my-5">
          <div class="space-y-3 mb-3">
            <p class="font-semibold text-sm">Avatar</p>
            <img :src="Images.SHEPREDICTS_COVER" alt=""
              class="rounded-full aspect-square object-cover border border-dashed border-dark-pink w-30 cursor-pointer">
          </div>
          <div class="space-y-1">
            <p class="font-semibold text-sm">Pseudo</p>
            <p class="rounded-lg border border-dark-pink px-4 py-2 text-dark-pink/70">{{ userData.pseudo }}</p>
          </div>
          <div class="space-y-1">
            <p class="font-semibold text-sm">Email</p>
            <p class="rounded-lg border border-dark-pink px-4 py-2 text-dark-pink/70">{{ userData.email }}</p>
          </div>
          <div class="space-y-1">
            <p class="font-semibold text-sm">Password</p>
            <p class="rounded-lg border border-dark-pink px-4 py-2 text-dark-pink/70">••••••••</p>
          </div>

          <button
            class="bg-[#FF0000]/70 text-white hover:bg-[#FF0000]/40 hover:text-black transition rounded-lg cursor-pointer px-5 py-3 mt-10"
            @click="logout">
            Logout
          </button>
        </div>

        <div v-else>
          <p>No user data available.</p>
        </div>
      </div>
    </div>

    <!-- Not connected -->
    <form v-else @submit.prevent="login" class="space-y-5 my-10">
      <div class="space-y-1">
        <label for="email" class="font-semibold text-sm">Email</label>
        <input id="email" v-model="newLogin.email" type="email" placeholder="john.doe@gmail.com"
          class="w-full rounded-lg border border-dark-pink px-4 py-2 text-dark-pink/70" required />
      </div>

      <!-- <div class="flex flex-col gap-1"> -->
      <label for="password" class="font-semibold text-sm">Password</label>
      <input id="password" v-model="newLogin.password" type="password" placeholder="••••••••"
        class="w-full rounded-lg border border-dark-pink px-4 py-2 text-dark-pink/70" required />
      <!-- </div> -->

      <div class="flex flex-col gap-3">
        <PinkButton type="submit" class="w-full mt-10">Login</PinkButton>
        <a href="/register" class="text-sm text-pink2 hover:underline self-end">Don't have an account yet ?</a>
      </div>
    </form>
  </PageBody>
</template>