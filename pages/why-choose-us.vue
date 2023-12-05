<script setup>



</script>



<template>
    <ContentList path="/why-choose-us/reviews" v-slot="{ list }">
      

        <div id="reviews" class="pt-20 flex items-center justify-center h-max">
    <div class="w-full md:w-9/12 p-8 text-center">
      <p class="flex items-center justify-center text-4xl">Here are a few testimonials from some of our clients that showcase their thoughts about our services.</p>

      <div v-for="article in list" :key="article._path" class="pt-20 lg:text-xl">
        <p>{{ article.description }}</p>
        <p class="pt-5 lg:text-lg text-bold flex items-center justify-center font-bold">{{ article.title }}</p>
      </div>
      
      <div class="mt-20 flex items-center justify-center">
        <a href="#contact">
          <button class="py-4 px-6 w-full shadow-xl text-white border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">
            <div class="flex flex-wrap justify-center items-center">
              <div class="w-auto p-1">
                <span>Let's Chat</span>
              </div>
            </div>
          </button>
        </a>
      </div>
    </div>
  </div>

    </ContentList>



</template>