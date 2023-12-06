<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
};
</script>


<template>



    <div class="w-full md:w-9/12 p-8">
        <h1
          class="mb-6 text-4xl md:text-6xl lg:text-6xl font-semibold font-heading md:max-w-xl leading-none"
        >
         {{ heading}}
        </h1>
        <p class="mb-11 text-lg font-medium md:max-w-md">
          {{ summary }}
        </p>
        <!-- <div class="flex flex-wrap -m-2.5 mb-20">
          <div class="w-full md:w-auto p-2.5">
            <div class="block">
              <a href="#about">
              <button
                class="py-4 px-6 w-full shadow-xl text-white  border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                type="button"
              >
                Find out more
              </button>
            </a>
            </div>
          </div>
          <div class="w-full md:w-auto p-2.5">
            <div class="block">
              <a href="#contact">
              <button
                class="py-4 px-9 w-full shadow-xl border bg-white border-gray-300 rounded-xl focus:ring   hover:bg-gray-100 transition ease-in-out duration-200"
                type="button"
              >
                <div class="flex flex-wrap justify-center items-center -m-1">
                  <div class="w-auto p-1">
                    <span>Let's Chat</span>
                  </div>
                </div>
              </button>
            </a>
            </div>
          </div>
        </div> -->
        <slot/>
      </div>
    <a href="#about" class="absolute bottom-0 mb-12">

  
      
    <!-- <button  class="bg-transparent text-black font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105 flex items-center justify-center">
    <svg
      class="focus:animate-bounce hover:animate-bounce h-14 w-14"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </button> -->
</a>


</template>