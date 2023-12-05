<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>

<template>
    <article>
      <NuxtContent :document="article" />
    </article>
  </template>
  