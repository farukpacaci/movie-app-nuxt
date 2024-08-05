<script setup lang="ts">
const props = defineProps({
  label: String,
});
</script>

<template>
  <UButton :label="props.label" color="white" class="shadow-none ring-0" />
</template>
