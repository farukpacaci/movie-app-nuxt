<script setup lang="ts">
import { HomeCategories } from "~/enums/home";
import type { IResultsResponse } from "~/interfaces/api/restults-response";
import type { ISwitchItem } from "~/interfaces/switch-item";

const homeStore = useHomeStore();
const { selectedSwitchWhatsPopular } = storeToRefs(homeStore);

const { data, status, error } = useAsyncData<IResultsResponse>(
  "whatsPopular",
  () => $fetch(`/api/${selectedSwitchWhatsPopular.value}/popular`),
  {
    watch: [selectedSwitchWhatsPopular],
  },
);

const switchItems: ISwitchItem[] = [
  {
    label: "Movie",
    value: "movie",
  },
  {
    label: "On TV",
    value: "tv",
  },
];
</script>

<template>
  <HomeSectionLoading v-if="status === 'pending'" />
  <HomeSectionError
    v-if="status === 'error'"
    :title="HomeCategories.WHATS_POPULAR"
    :error="error?.message"
  />
  <HomeSection
    v-if="status === 'success' && data"
    :category="HomeCategories.WHATS_POPULAR"
    :switch-items="switchItems"
    :cards="data.results"
  />
</template>
