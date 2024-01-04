<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let path = route.path
let validPath = true

if (!path.includes('/pages') ) {
  path = '/pages' + path
} else {
  validPath = false;
  
}





</script>

<template>
  <div v-if="validPath">  
    <ContentQuery :path="path" find="one" v-slot="{ data }">
      {{ console.log(path) }}
      <div v-if="!Array.isArray(data)" v-for="(item, index) in data?.Content" :key="index">
        <head>
          <title>{{ data.title }}</title>
      </head>
      
          
          <component :is="item._template" v-bind="item"/>
     
       
      </div>
    </ContentQuery>
  </div>
  <div v-else>
    <p>404</p>
  </div>
</template>