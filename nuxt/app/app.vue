<script setup lang="ts">
const title = 'Dechhi Digital Artist'

useHead({
   titleTemplate: template => template ? `${template} | ${title}` : title,
})

useServerHead({
   link: [
      { rel: 'preload', as: 'font', href: '/fonts/OtomanopeeOne-Regular.ttf', type: 'font/ttf', crossorigin: 'anonymous' }
   ]
})
</script>

<template>
   <NuxtLink class="fixed right-6 bottom-4 z-10 text-xl bg-accent px-4 py-1.5 rounded-xl leading-none"
      :to="$route.path === '/' ? '/portfolio' : '/'">
      {{ $route.path === '/' ? 'Portfolio' : 'Home' }}
   </NuxtLink>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
   transition: all 400ms ease;
}

.page-leave-active {
   position: absolute;
   left: 0;
   width: 100vw;
   height: auto;
}

.page-enter-from,
.page-leave-to {
   filter: blur(10px);
   opacity: 0;
}
</style>