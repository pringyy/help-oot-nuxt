<script setup lang="ts">

const drawerOpen = ref(false)

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
}

const router = useRouter()
const tabs = router.getRoutes().map(route => {
  let firstDirectory = route.path.split('/')[1]
  firstDirectory = firstDirectory ? firstDirectory.replace(/-/g, ' ').toUpperCase() : ''
  return {
    title: firstDirectory,
    link: route.path,
  }
}).filter(tab => tab.link !== '/' && tab.title !== '')
</script>

<template>
  <header>
    <nav class="bg-white shadow-xl fixed w-full z-10">
      <div class="flex justify-between items-center px-3">
        <NuxtLink to="/">
          <img src="/logo.webp" class="mr-3 h-24" alt="Help Oot Logo" />
        </NuxtLink>

        <button @click="toggleDrawer()" type="button" class="text-gray-500 py-5 md:hidden relative focus bg-white flex items-center px-10">
          <span class="sr-only">Open main menu</span>
          <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': drawerOpen, '-translate-y-1.5': !drawerOpen}"></span>
            <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'opacity-0': drawerOpen}"></span>
            <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'-rotate-45': drawerOpen, 'translate-y-1.5': !drawerOpen}"></span>
          </div>
        </button>

        <div class="hidden justify-between h-full md:flex px-10">
          <ul class="flex flex-row space-x-8">
            <li v-for="tab in tabs" :key="tab.title">
              <NuxtLink :to="tab.link">
                <button :class="{'text-gray-500': $route?.path !== tab.link, 'text-black': $route?.path === tab.link}" class="md:text-sm rounded hover:bg-gray-100">
                  {{ tab.title }}
                </button>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div v-for="tab in tabs" class="md:hidden flex flex-col" v-show="drawerOpen">
        <NuxtLink :to="tab.link">
          <button class="h-full w-full py-4 text-black rounded hover:bg-gray-100" :class="{'text-gray-500': $route?.path !== tab.link, 'text-black': $route?.path === tab.link}">
            {{ tab.title }}
          </button>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>