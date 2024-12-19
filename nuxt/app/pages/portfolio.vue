<script setup lang="ts">
type Portfolio = {
   id: number
   url: string
   price: number
   thumb: string
   title?: string
}

const { data, status, error } = await useLazyFetch<{ portfolio: Portfolio[] }>('/api/portfolio')
</script>

<template>
   <div class="p-4">
      <div class="grid xs:grid-cols-2 md:grid-cols-4 gap-4" v-if="data && status === 'success'">
         <div v-for="item in data.portfolio" :key="item.id">
            <a class="block aspect-[2/3]" :href="item.url" target="_blank">
               <img class="object-cover w-full h-full rounded-lg" :src="item.thumb" :alt="item.title" loading="lazy">
            </a>
            <div class="flex flex-wrap justify-between text-lg mt-2">
               <p class="text-green-500 font-bold">${{ item.price.toFixed(2) }}</p>
               <p>{{ item.title }}</p>
            </div>
         </div>
      </div>
      <div class="grid grid-cols-4 gap-4" v-else-if="status === 'pending'">
         <div v-for="item in 12" :key="item">
            <div class="block aspect-[2/3]">
               <div class="w-full bg-slate-400 rounded-lg animate-pulse h-full"></div>
            </div>
            <div class="flex flex-wrap justify-between text-lg mt-2">
               <p class="text-green-500 font-bold">$00.00</p>
            </div>
         </div>
      </div>
      <div class="text-red-500 text-3xl text-center p-10" v-else-if="status === 'error'">
         Error: {{ error?.message }}
      </div>
   </div>
</template>

<style scoped></style>