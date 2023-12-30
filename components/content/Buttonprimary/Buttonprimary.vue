
<script setup lang="ts">

import {defineProps} from 'vue';

const { label }= defineProps({
  label: {
    type: String,
  },
  });

</script>




<template>
    <button class="py-4 px-6 w-full shadow-xl text-white  border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                type="button">
                {{ label }}
              </button>
</template>