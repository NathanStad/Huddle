<script setup>
import PageBody from "../layouts/PageBody.vue";
import Header from "./Header.vue";
import Title from '../layouts/Title.vue';
import fetchAPI from "../composable/fetchAPI";
import Images from '../assets';
import { ref } from "vue";

const loginData = ref(null);
const userData = ref(null);
const loading = ref(false);

const addUser = async () => {
  try {
    const newUser = {
      fname: 'John',
      lname: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    };
    await fetchAPI('POST', 'users', newUser);
  } catch (error) {
    console.error('Error adding game:', error);
  }
};

const fetchUserData = async () => {
  loading.value = true;
  try {
    userData.value = await fetchAPI('GET', `users/${loginData.value.id}`);
  } catch (error) {
    console.error('Error fetching user data:', error);
  } finally {
    loading.value = false;
  }
}

const login = async () => {
  try {
    const creds = {
      email: 'john.doe@example.com',
      password: 'password123',
    };
    loginData.value = await fetchAPI('POST', 'users/login', creds);
    const token = await loginData.value.token;
    const id = await loginData.value.id;
    storeData("authToken", token.token);
    storeData("id", id);
    await fetchUserData();
  } catch (error) {
    console.error('Error logging in:', error);
  }
}
login();

const storeData = (key, value) => {
  localStorage.setItem(key, value);
}
</script>

<template>
  <Header />
  <PageBody>
    <Title title="Profile" />

    <div class="flex flex-col justify-center items-center">
      <div v-if="loading">Loading...</div>
      <ul v-else-if="userData" class="flex flex-col gap-3 my-5 rounded-lg border border-black p-5">
        <li class="text-black"><span class="font-bold">Prénom : </span>{{ userData.fname }}</li>
        <li class="text-black"><span class="font-bold">Nom : </span>{{ userData.lname }}</li>
        <li class="text-black"><span class="font-bold">Email : </span>{{ userData.email }}</li>
      </ul>

      <div v-else>
        <p>No user data available.</p>
      </div>

      <button @click="addUser"
        class="bg-green text-white hover:bg-yellow hover:text-black transition rounded-md px-5 py-3 cursor-pointer my-5">
        Add user
      </button>
    </div>
  </PageBody>
</template>