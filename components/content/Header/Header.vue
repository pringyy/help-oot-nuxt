<script setup lang="ts">
const drawerOpen = ref(false);

const { data } = await useAsyncData("home", () =>
  queryContent("/nav/nav").findOne()
);

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value;
  console.log(drawerOpen.value);
};

function formatPath(path: string) {
  let newPath = path.replace(/.*\/pages\//, ''); // Remove everything before and including /pages/
  newPath = newPath.replace(/\/index.mdx$/, ''); // Remove /index.mdx at the end
  return newPath;
}
</script>

<template>
  <header>
    <nav class="bg-white shadow-xl fixed w-full z-10">
      <div class="flex justify-between items-center px-3">
        <button>
          <NuxtLink to="/">
            <img :src="data.image" class="mr-3 h-24" alt="Help Oot Logo" />
          </NuxtLink>
        </button>

        <button
          @click="toggleDrawer()"
          type="button"
          class="text-gray-500 py-5 md:hidden relative focus bg-white flex items-center px-10"
        >
          <span class="sr-only">Open main menu</span>
          <div
            class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              :class="{
                'rotate-45': drawerOpen,
                ' -translate-y-1.5': !drawerOpen,
              }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              :class="{ 'opacity-0': drawerOpen }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              :class="{
                '-rotate-45': drawerOpen,
                ' translate-y-1.5': !drawerOpen,
              }"
            ></span>
          </div>
        </button>

        <div class="hidden justify-between h-full md:flex px-10">
          <ul class="flex flex-row space-x-8">
            <li v-for="tab in data?.links" :key="tab.title">
              <NuxtLink :to="formatPath(tab.link)">
                <button
                  :class="{
                    'text-gray-500': $route?.path !== formatPath(tab.link), // Change to your deselected color
                    'text-black': $route?.path === formatPath(tab.link), // Change to your selected color
                  }"
                  class="md:text-sm rounded hover:bg-gray-100"
                >
                  {{ tab.label.toUpperCase() }}
                </button>
              </NuxtLink>
            
            </li>
          </ul>
        </div>
      </div>

      <div
        v-for="tab in data.links"
        class="md:hidden flex flex-col"
        v-show="drawerOpen"
      >
        <NuxtLink :to="tab.link">
          <button
            class="h-full w-full py-4 text-black rounded hover:bg-gray-100"
            :class="{
              'text-gray-500': $route?.path !== tab.link, // Change to your deselected color
              'text-black': $route?.path === tab.link, // Change to your selected color
            }"
          >
            {{ tab.label.toUpperCase() }}
          </button>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
