<script setup lang="ts">
const title = 'Dechhi Digital Artist'

useHead({
  titleTemplate: template => template ? `${template} | ${title}` : title,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped></style>