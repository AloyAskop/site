<script setup lang="ts">
export type Portfolio = {
   id: number
   url: string
   price: number
   thumb: string
   title?: string
}

defineProps<{
   item: Portfolio
}>()
</script>

<template>
   <div>
      <a class="block aspect-[2/3]" :href="item.url" target="_blank">
         <img class="object-cover w-full h-full rounded-lg" :src="item.thumb" :alt="item.title" loading="lazy">
      </a>
      <div class="flex flex-wrap justify-between text-lg mt-2">
         <p class="text-green-500 font-bold">${{ item.price.toFixed(2) }}</p>
         <p>{{ item.title }}</p>
      </div>
   </div>
</template>

<style scoped></style>