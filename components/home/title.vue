<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <p class="text-2xl">{{ title }}</p>
</template>
