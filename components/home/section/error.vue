<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  errorMessage: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div>
    <HomeTitle :title="title" />
    <div class="flex min-h-96 flex-col items-center justify-center">
      <UIcon
        name="i-heroicons:information-circle-16-solid"
        class="mr-5 size-10"
      />
      <p class="text-4xl font-bold">Ooops...</p>
      <p v-if="props.errorMessage" class="line-clamp-2">
        {{ props.errorMessage }}
      </p>
      <p v-else>Unknown error occured while loading data!</p>
    </div>
  </div>
</template>
