<script setup lang="ts">
import type { IFooterCategory } from "~/interfaces/app/footer-category";

const props = defineProps<{
  category: IFooterCategory;
}>();
</script>

<template>
  <div class="text-white">
    <p class="text-xl font-bold">{{ category.title }}</p>
    <ul v-for="subtitle in category.items">
      <li :key="subtitle.label">
        <NuxtLink :to="subtitle.to" class="text-base">{{
          subtitle.label
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
