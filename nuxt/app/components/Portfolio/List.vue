<script setup lang="ts">
import type { Portfolio } from './Card.vue';

defineProps<{
   items?: Portfolio[]
}>()
</script>

<template>
   <div class="grid xs:grid-cols-2 md:grid-cols-4 gap-4">
      <PortfolioCard v-if="items" v-for="item in items" :key="item.id" :item="item" />
      <PortfolioCardSkeleton v-else v-for="item in 12" :key="item" />
   </div>
</template>

<style scoped></style>