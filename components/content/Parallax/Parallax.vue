<script setup lang="ts">
import {defineProps} from 'vue';

const { image, bgLight, colour } = defineProps({
  image: {
    type: String,
    default: '',
  },
  colour: {
    type: String,
  
  },
  bgLight:{
    type: Boolean,
    default: false,
  },
  bgDark:{
    type: Boolean,
    default:false,
  }
});

console.log("hello", image)
console.log("hello", colour)

</script>

<template>
  

  <div class="relative h-screen">
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0" :style="{ backgroundImage: `url(${image})` }">
      <div class="absolute inset-0 opacity-40" :style="{backgroundColor: colour}"></div>
    </div>
    <div class=" shadow-xl relative flex items-center justify-center h-full">
        <slot></slot>
    </div>
    
  </div>
</template>





<style scoped>
@media (max-width: 768px) {
  .bg-cover {
    transform: translate3d(0, 0, 0); /* Reset translation for mobile */
  }
}
</style>