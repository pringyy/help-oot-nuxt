<template>
  <div class="layout">
    <div class="flex flex-col h-screen justify-between">
      <Header />

      <main>
        <slot></slot>
      </main>

      <Footer />
    </div>
  </div>
</template>
