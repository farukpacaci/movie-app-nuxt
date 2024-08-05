<script setup lang="ts">
import type { DropdownItem } from "#ui/types";
const itemsOverview: DropdownItem[][] = [
  [
    {
      label: "Main",
    },
    {
      label: "Alternative Titles",
    },
    {
      label: "Cast & Crew",
    },
    {
      label: "Release Dates",
    },
    {
      label: "Translations",
    },
    {
      label: "Watch Now",
    },
  ],
  [
    {
      label: "Changes",
    },
    {
      label: "Report",
    },
    {
      label: "Edit",
    },
  ],
];
</script>

<template>
  <div class="flex w-full items-center justify-center">
    <UDropdown :items="itemsOverview">
      <VideoDetailComponentsNavBarButton label="Overview" />
    </UDropdown>
  </div>
</template>
