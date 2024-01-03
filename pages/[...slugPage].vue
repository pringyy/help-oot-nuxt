<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let path = route.path
let valid = true

if (!path.includes('/pages')) {
  path = '/pages' + path
} else {
  valid = false;
}



</script>

<template>
  <div v-if="valid">
    <ContentDoc :path="path"/>
  </div>
  <div v-else>
    <p>404</p>
  </div>
</template>