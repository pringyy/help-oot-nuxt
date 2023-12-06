
<script setup lang="ts">
const {heading, summary} = defineProps({
  heading: String,
  summary: String,
});


const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const validations = ref({
  name: true,
  email: true,
  message: true,
});

const submitForm = () => {
  validations.value.name = !!formData.value.name.trim();
  validations.value.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email);
  validations.value.message = !!formData.value.message.trim();

  if (validations.value.name && validations.value.email && validations.value.message) {
    console.log('Form submitted:', formData.value);
  }
};
</script>



<template>
 <div id="contact" class="flex flex-col lg:flex-row items-center justify-center lg:h-screen h-max">
    <!-- "Let's Chat" and Phone Number -->
    <div class="lg:w-6/12 p-6 text-center lg:text-left">
      <h2 class="text-4xl md:text-6xl lg:text-6xl font-semibold mb-4">{{ heading }}</h2>
      <p class="text-lg mb-2 text-bold">Call Brian on +44 7557 336834</p>
      <p> {{ summary }}</p>
    </div>


    <form @submit.prevent="submitForm" class="lg:w-1/2 w-full max-w-md lg:ml-8 mt-8 lg:mt-0 p-6 bg-white border-gray-300 border shadow-2xl rounded-xl">
      <!-- Form fields -->
    <div class="mb-4">
      <label for="name" class="block text-sm font-semibold mb-2">Name:</label>
      <input type="text" id="name" v-model="formData.name" required
             class="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
             :class="{ 'border-red-500': !validations.name }" />
      <span v-if="!validations.name" class="text-red-500 text-xs">Name is required</span>
    </div>

    <div class="mb-4">
      <label for="email" class="block text-sm font-semibold mb-2">Email:</label>
      <input type="email" id="email" v-model="formData.email" required
             class="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
             :class="{ 'border-red-500': !validations.email }" />
      <span v-if="!validations.email" class="text-red-500 text-xs">Valid email is required</span>
    </div>

    <div class="mb-4">
      <label for="phone" class="block text-sm font-semibold mb-2">Phone:</label>
      <input type="tel" id="phone" v-model="formData.phone"
             class="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500" />
    </div>

    <div class="mb-4">
      <label for="message" class="block text-sm font-semibold mb-2">Message:</label>
      <textarea id="message" v-model="formData.message" required
                class="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500 max-h-40"
                :class="{ 'border-red-500': !validations.message }"></textarea>
      <span v-if="!validations.message" class="text-red-500 text-xs">Message is required</span>
    </div>

  

    <button class="py-4 px-6 w-full shadow-xl text-white  border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="submit">
      Submit
    </button>
  </form>
</div>
</template>


<style>
/* Optional additional styles go here */
</style>
