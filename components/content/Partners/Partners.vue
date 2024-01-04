<script setup lang="ts">
const { heading } = defineProps({
  heading: {
    type: String,
    required: true,
  },
});

</script>


<template>
    <Parallax id="partners" :image="'./partners.webp'" colour="rgb(0 ,0, 0)">
        <p class=" font-light rounded-xl  lg:text-5xl text-3xl font-medium text-white">{{ heading }}</p>
      </Parallax>
</template>

    
