<script setup lang="ts">
import type { Portfolio } from '~/components/Portfolio/Card.vue';

const { data, status, error } = await useLazyFetch<{ portfolio: Portfolio[] }>('/api/portfolio')
</script>

<template>
   <div class="p-4">
      <PortfolioList v-if="status === 'success' || status === 'pending'" :items="data?.portfolio" />
      <div class="text-red-500 text-3xl text-center p-10" v-else-if="status === 'error'">
         Error: {{ error?.message }}
      </div>
   </div>
</template>

<style scoped></style>