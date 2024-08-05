<script setup lang="ts">
const props = defineProps({
  posterPath: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtImg
    provider="tmdb"
    :src="props.posterPath"
    :alt="props.posterPath"
    class="h-[450px] w-[300px] rounded-lg object-cover"
  />
</template>
