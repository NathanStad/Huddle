<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import TitleSection from "../layouts/TitleSection.vue";
import PageBody from "../layouts/PageBody.vue";
import Images from '../assets';
import TypicalParagraphe from "../layouts/TypicalParagraphe.vue";
import PinkButton from "../layouts/PinkButton.vue";
import FAQCard from "../layouts/FAQCard.vue";
import { ref } from "vue";
import faqData from "../composable/faqData";

const newContact = ref({
  fname: "",
  lname: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  terms: false,
});

const sendMessage = async () => {
  const formData = new FormData();
  formData.append("fname", newContact.value.fname);
  formData.append("lname", newContact.value.lname);
  formData.append("email", newContact.value.email);
  formData.append("phone", newContact.value.phone);
  formData.append("subject", newContact.value.subject);
  formData.append("message", newContact.value.message);
  formData.append("terms", newContact.value.terms);

  console.log(formData);
};
</script>

<template>
  <Header />

  <TitleSection :img="Images.CONTACT_COVER" type="Contact us" color="gold" title="Make contact, make plays"
    subtitle="Stop waiting, contact us!"
    text="Our contact hub connects you directly to teams, programs and regional partners." />

  <PageBody>
    <TypicalParagraphe theme="Contact form" textColor="gold" title="Get in touch"
      subtitle="Questions, partnerships, or just curious about Huddle? We're here for it. Reach out, we'd love to hear from you."
      content="" />

    <form @submit.prevent="sendMessage" class="my-10">
      <div class="flex flex-col gap-4 w-full max-w-md mb-5">
        <div class="flex flex-col gap-1">
          <label for="fname" class="font-medium">First name</label>
          <input v-model="newContact.fname" id="fname" type="text" placeholder="First name" class="p-2 border rounded"
            required>
        </div>

        <div class="flex flex-col gap-1">
          <label for="lname" class="font-medium">Last name</label>
          <input v-model="newContact.lname" id="lname" type="text" placeholder="Last name" class="p-2 border rounded"
            required>
        </div>

        <div class="flex flex-col gap-1">
          <label for="email" class="font-medium">Email</label>
          <input v-model="newContact.email" id="email" type="text" placeholder="you@gmail.com"
            class="p-2 border rounded" required>
        </div>

        <div class="flex flex-col gap-1">
          <label for="phone" class="font-medium">Phone number</label>
          <input v-model="newContact.phone" id="phone" type="tel" placeholder="+41 12 345 67 89"
            class="p-2 border rounded" required>
        </div>

        <div class="flex flex-col gap-1">
          <label for="subject" class="font-medium">Subject</label>
          <input v-model="newContact.subject" id="subject" type="text" placeholder="Subject" class="p-2 border rounded"
            required>
        </div>

        <div class="flex flex-col gap-1">
          <label for="subject" class="font-medium">Message</label>
          <textarea v-model="newContact.content" placeholder="Leave us a message..." class="p-2 border rounded h-32"
            required>
        </textarea>
        </div>
      </div>

      <div class="flex items-center gap-2 mb-5">
        <input v-model="newContact.terms" id="agree" type="checkbox" required />
        <label for="agree" class="text-sm">You agree to our friendly <a href="/" class="underline">privacy
            policy.</a>
        </label>
      </div>

      <PinkButton type="submit" classes="w-full" bgColor="gold" hoverColor="gold2">Send message</PinkButton>
    </form>

    <TypicalParagraphe theme="Social media" textColor="gold" title="Connect with Us"
      subtitle="Stay in the loop or get in touch directly !" content="" />

    <div class="flex flex-col gap-3">
      <a href="https://www.instagram.com/huddle_women" target="_blank" class="flex items-center gap-2 text-gold">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
            fill="currentColor" />
          <path
            d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
            fill="currentColor" />
          <path
            d="M19.8469 5.59238C19.8469 6.38926 19.2 7.03145 18.4078 7.03145C17.6109 7.03145 16.9688 6.38457 16.9688 5.59238C16.9688 4.79551 17.6156 4.15332 18.4078 4.15332C19.2 4.15332 19.8469 4.8002 19.8469 5.59238Z"
            fill="currentColor" />
        </svg>
        <span class="font-semibold underline">
          @huddle_women
        </span>
      </a>

      <a href="https://www.tiktok.com/@huddle_women" target="_blank" class="flex items-center gap-2 text-gold">
        <svg width="24" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.0725 0H11.0278V16.3478C11.0278 18.2957 9.47219 19.8957 7.53626 19.8957C5.60034 19.8957 4.04469 18.2957 4.04469 16.3478C4.04469 14.4348 5.56577 12.8695 7.43257 12.8V8.69567C3.31872 8.7652 0 12.1391 0 16.3478C0 20.5913 3.38786 24 7.57085 24C11.7538 24 15.1416 20.5565 15.1416 16.3478V7.9652C16.6627 9.07827 18.5295 9.73913 20.5 9.77393V5.66957C17.4579 5.56522 15.0725 3.06087 15.0725 0Z"
            fill="currentColor" />
        </svg>
        <span class="font-semibold underline">
          @huddle_women
        </span>
      </a>

      <a href="https://www.youtube.com/@Huddle-Women" target="_blank" class="flex items-center gap-2 text-gold">
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.7609 4.1998C23.7609 4.1998 23.5266 2.54512 22.8047 1.81855C21.8906 0.862305 20.8688 0.857617 20.4 0.801367C17.0438 0.557617 12.0047 0.557617 12.0047 0.557617H11.9953C11.9953 0.557617 6.95625 0.557617 3.6 0.801367C3.13125 0.857617 2.10938 0.862305 1.19531 1.81855C0.473438 2.54512 0.24375 4.1998 0.24375 4.1998C0.24375 4.1998 0 6.14512 0 8.08574V9.90449C0 11.8451 0.239062 13.7904 0.239062 13.7904C0.239062 13.7904 0.473437 15.4451 1.19062 16.1717C2.10469 17.1279 3.30469 17.0951 3.83906 17.1982C5.76094 17.3811 12 17.4373 12 17.4373C12 17.4373 17.0438 17.4279 20.4 17.1889C20.8688 17.1326 21.8906 17.1279 22.8047 16.1717C23.5266 15.4451 23.7609 13.7904 23.7609 13.7904C23.7609 13.7904 24 11.8498 24 9.90449V8.08574C24 6.14512 23.7609 4.1998 23.7609 4.1998ZM9.52031 12.1123V5.36699L16.0031 8.75137L9.52031 12.1123Z"
            fill="currentColor" />
        </svg>
        <span class="font-semibold underline">
          Huddle Channel
        </span>
      </a>
    </div>

    <img :src="Images.PLAYER_STORIES" alt="" class="ml-20 w-full md:w-1/2 lg:w-1/3">

    <TypicalParagraphe theme="FAQ" textColor="gold" title="Everything you're wondering about"
      subtitle="Got questions? We've got answers." content="" />

    <div class="flex flex-col gap-4 mb-15">
      <FAQCard v-for="faq in faqData" :faqData="faq" />
    </div>

    <TypicalParagraphe theme="Map" textColor="gold" title="Where to Find Us"
      subtitle="Our base camp is located in Basel, at the heart of women's football action in Switzerland."
      content="" />
  </PageBody>

  <div class="w-full h-96 my-8">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.123456789012!2d7.589123456789012!3d47.558123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMzJzI5LjIiTiA3wrAzNScyMC45IkU!5e0!3m2!1sen!2sch!4v1234567890123!5m2!1sen!2sch"
      width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

  <Footer />
</template>