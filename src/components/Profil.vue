<script setup>
import Header from "./Header.vue";
import Title from '../layouts/Title.vue';
import fetchAPI from "../composable/fetchAPI";
import { ref, onMounted } from "vue";

const data = ref([]);
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
    data.value = await fetchAPI('GET', 'users');
  } catch (error) {
    console.error('Error fetching user data:', error);
  } finally {
    loading.value = false;
  }
}
fetchUserData();
</script>

<template>
  <Header />
  <Title title="Profil" />

  <div class="flex flex-col justify-center items-center">
    <div v-if="loading">Loading...</div>
    <ul class="flex flex-col gap-3 my-5 rounded-lg border border-black p-5" v-else>
      <li class="text-black"><span class="font-bold">Prénom : </span>{{ data[0].fname }}</li>
      <li class="text-black"><span class="font-bold">Nom : </span>{{ data[0].lname }}</li>
      <li class="text-black"><span class="font-bold">Email : </span>{{ data[0].email }}</li>
    </ul>

    <button @click="addUser"
      class="bg-green text-white hover:bg-yellow hover:text-black transition rounded-md px-5 py-3 cursor-pointer my-5">
      Add user
    </button>
  </div>
</template>