<script setup>
import PageBody from "../layouts/PageBody.vue";
import Header from "./Header.vue";
import fetchAPI from "../composable/fetchAPI";
import Images from '../assets';
import PinkButton from "../layouts/PinkButton.vue";
import { ref } from "vue";

const userData = ref(null);
const newUser = ref({
  pseudo: '',
  email: '',
  password: ''
});

const addUser = async () => {
  const formData = new FormData();
  formData.append("pseudo", newUser.value.pseudo);
  formData.append("email", newUser.value.email);
  formData.append("password", newUser.value.password);

  try {
    // const newUser = {
    //   pseudo: 'John Admin',
    //   email: 'john.admin@example.com',
    //   password: 'password123',
    //   role: 'admin'
    // };
    await fetchAPI('POST', 'users', Object.fromEntries(formData.entries()));
    login();
  } catch (error) {
    console.error('Error adding game:', error);
  }
};

const login = async () => {
  const formData = new FormData();
  formData.append("email", newUser.value.email);
  formData.append("password", newUser.value.password);

  try {
    userData.value = await fetchAPI('POST', 'users/login', Object.fromEntries(formData.entries()));
    const token = await userData.value.token;
    const id = await userData.value.id;
    storeData("authToken", token.token);
    storeData("id", id);
    window.location.href = '/profile';
  } catch (error) {
    console.error('Error logging in:', error);
  }
}

const storeData = (key, value) => {
  localStorage.setItem(key, value);
}
</script>

<template>
  <Header />
  <PageBody class="mt-30 text-dark-pink">
    <div class="flex flex-col items-center gap-3 text-center mb-5">
      <img :src="Images.PROFILE_LINES" alt="Profile icon" class="p-4 bg-pink/50 rounded-full aspect-square">
      <h1 class="text-2xl font-semibold">Create an account</h1>
      <h2 class="text-pink2">Join Huddle and start making your mark in the game.</h2>
    </div>

    <form @submit.prevent="addUser" class="space-y-5 my-10">
      <div class="space-y-1">
        <label for="pseudo" class="font-semibold text-sm">Pseudo</label>
        <input id="pseudo" v-model="newUser.pseudo" type="text" placeholder="John Doe"
          class="w-full rounded-lg border border-dark-pink px-4 py-2 text-dark-pink/70" required />
      </div>

      <div class="space-y-1">
        <label for="email" class="font-semibold text-sm">Email</label>
        <input id="email" v-model="newUser.email" type="email" placeholder="john.doe@gmail.com"
          class="w-full rounded-lg border border-dark-pink px-4 py-2 text-dark-pink/70" required />
      </div>

      <div class="space-y-1">
        <label for="password" class="font-semibold text-sm">Password</label>
        <input id="password" v-model="newUser.password" type="password" placeholder="••••••••"
          class="w-full rounded-lg border border-dark-pink px-4 py-2 text-dark-pink/70" required />
      </div>

      <div class="flex flex-col gap-3">
        <PinkButton type="submit" class="w-full mt-10">Register</PinkButton>
        <a href="/profile" class="text-sm text-pink2 hover:underline self-end">Already have an account ?</a>
      </div>
    </form>
  </PageBody>
</template>

<style scoped>
.home {
  color: rgb(145, 255, 0);
}
</style>