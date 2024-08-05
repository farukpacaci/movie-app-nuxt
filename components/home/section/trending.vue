<script setup lang="ts">
import { HomeCategories } from "~/enums/home";
import type { IResultsResponse } from "~/interfaces/api/restults-response";
import type { ISwitchItem } from "~/interfaces/switch-item";

const homeStore = useHomeStore();
const { selectedSwitchTrending } = storeToRefs(homeStore);

const { data, status, error } = useAsyncData<IResultsResponse>(
  "trendings",
  () => $fetch(`/api/trending/all/${selectedSwitchTrending.value}`),
  {
    watch: [selectedSwitchTrending],
  },
);

const switchItems: ISwitchItem[] = [
  {
    label: "Today",
    value: "day",
  },
  {
    label: "This Week",
    value: "week",
  },
];
</script>

<template>
  <HomeSectionLoading v-if="status === 'pending'" />
  <HomeSectionError
    v-if="status === 'error'"
    :title="HomeCategories.TRENDING"
    :error="error?.message"
  />
  <HomeSection
    v-if="data && status === 'success'"
    :category="HomeCategories.TRENDING"
    :switch-items="switchItems"
    :cards="data.results"
  />
</template>
