<script setup lang="ts">
import type { ISwitchItem } from "~/interfaces/switch-item";
import { HomeCategories } from "~/enums/home";
import type { IResultsResponse } from "~/interfaces/api/restults-response";

const homeStore = useHomeStore();
const { selectedSwitchFreeToWatch } = storeToRefs(homeStore);

const { data, status, error } = useAsyncData<IResultsResponse>(
  "freeToWatch",
  () =>
    $fetch(`/api/discover/${selectedSwitchFreeToWatch.value}`, {
      query: {
        with_watch_monetization_types: "free",
      },
    }),
  { watch: [selectedSwitchFreeToWatch] },
);

const switchItems: ISwitchItem[] = [
  {
    label: "Movies",
    value: "movie",
  },
  {
    label: "TV",
    value: "tv",
  },
];

watch(data, () => {
  if (data) {
    console.log("Free to Watch: ", data);
  }
});
</script>

<template>
  <div>
    <HomeSectionLoading v-if="status === 'pending'" />
    <HomeSectionError
      v-if="status === 'error'"
      :title="HomeCategories.FREE_TO_WATCH"
      :error="error?.message"
    />
    <HomeSection
      v-if="data && status === 'success'"
      :category="HomeCategories.FREE_TO_WATCH"
      :switch-items="switchItems"
      :cards="data.results"
    />
  </div>
</template>
