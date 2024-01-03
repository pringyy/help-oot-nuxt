<script setup lang="ts">
import {defineProps} from 'vue';

const { image, colour, heading, summary } = defineProps({
  image: {
    type: String,
    required: true,
    
  },
  colour: {
    type: String,
    required: true,
  
  },
  heading: {
      type: String,
      required: true,
    },
    summary: {
        type: String,
        required: true,
    },

});
console.log("test")
</script>
<template>
    <Parallax :image="image" :colour="colour">
        <Hero :heading="heading" :summary="summary" />
    </Parallax>
</template>
  