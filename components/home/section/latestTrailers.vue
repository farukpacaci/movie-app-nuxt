<script setup lang="ts">
import { HomeCategories } from "~/enums/home";
import type { IResultsResponse } from "~/interfaces/api/restults-response";

const { data, status, error } = useFetch<IResultsResponse>(
  "/api/movie/upcoming",
);

// const switchItems: ISwitchItem[] = [
//   {
//     label: "Popular",
//     value: "popular",
//   },
//   {
//     label: "Streaming",
//     value: "streaming",
//   },
//   {
//     label: "On TV",
//     value: "on-tv",
//   },
//   {
//     label: "For Rent",
//     value: "for-rent",
//   },
//   {
//     label: "In Theaters",
//     value: "in-theaters",
//   },
// ];
</script>

<template>
  <HomeSectionLoading v-if="status === 'pending'" />
  <HomeSectionError
    v-if="status === 'error'"
    :title="HomeCategories.LATEST_TRAILERS"
    :error="error?.message"
  />
  <HomeSection
    v-if="data && status === 'success'"
    :category="HomeCategories.LATEST_TRAILERS"
    :cards="data.results"
  />
</template>
f
