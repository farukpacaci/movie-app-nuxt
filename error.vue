<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="flex min-h-screen flex-1 items-center justify-center">
    <div
      class="flex w-full max-w-[calc(640px-40px)] flex-col rounded-3xl border p-7 text-center"
    >
      <p class="text-6xl font-bold">{{ props.error?.statusCode }}</p>
      <div class="h-1" />
      <p class="text-4xl font-light">Ooops...</p>
      <div class="h-3" />
      <p>{{ props.error?.message }}</p>
    </div>
  </div>
</template>
